+++
author = "Rupali Pardeshi"
categories = ["Security"]
date = 2020-09-01T00:00:00Z
description = ""
draft = false
image = "/images/2020/09/computer_security_blog_v01.jpg"
slug = "data-security"
tags = ["Security"]
title = "Security Practices for Postgres Web Application"

+++


Data security is when protective measures are put in place to keep unauthorized access out of computers, websites, and databases. This process also provides a mechanism for protecting data from loss or corruption.

There can be many ways in which a database's security can be breached. However, today I am going to be writing about one in particular - **SQL injection**.

### What is SQL Injection

SQL is how your application communicates with you database, SQL injection is a web security vulnerability that allows an attacker to interfere with the queries that an application makes to its database. It generally allows an attacker to view data that they are not normally able to retrieve. This might include data belonging to other users, or any data that the application is able to access. In many cases, an attacker can modify or delete this data, causing persistent changes to the application's content or behavior.

In some situations, an attacker can escalate an SQL injection attack to compromise the underlying server or other back-end infrastructure, or perform a denial-of-service attack.

SQL Injections are the most common method of data attacks. The main cause which leads to such attacks is having SQL queries directly concatenated with data provided by users in the database.

Let's see some examples of SQL injections with concatenation

> executeQuery(“SELECT ∗ FROM users WHERE email = ‘" + emailAddress + "‘“);

Ideally, when we write the above query, we want the user to enter the email address say “abe@xyz.gov”. This is a threat and thus the wrong way of implementation as the user can enter another user's email and get all the data. What will happen if a malicious user did not enter an email address, but instead typed:

> ‘ OR email != ‘

As we are using string concatenation our SQL query will become:

> SELECT ∗ FROM users WHERE email = ’‘ OR Email != ‘’

The WHERE clause in this statement is a tautology (a statement that is true by definition). This means the email address is either equal to the empty string or not equal to the empty string.  We do not have to know which email addresses that are present in the table and the query will return every row in the table.

Similarly, the malicious user can join data together from multiple tables, insert data, modify data, and delete data.

If the user enters "FALSE; DROP TABLE" users. Our query after concatenation will result in a table deletion query. The entire _users_ table will be deleted!

> SELECT ∗ FROM users WHERE email = FALSE; DROP TABLE users

### How to prevent SQL Injections?

#### 1. Prepared Statements

Most instances of SQL injection can be prevented by using parameterized queries (also known as prepared statements) instead of string concatenation within the query. Prepared statements create a template for a query that establishes an immutable grammar.

> PreparedStatement stmt = con.prepareStatement (“SELECT * FROM table WHERE id = ?”;); stmt.setInt(1, data);

The **?** is used as the placeholder and value is added by various set<type> functions. Java provides type-specific binding functions for data such as setString() or setInt(). These functions help sanity check the data received from the user

The power of this approach is that the SQL and the data are always kept separate. If an attacker inserts a long string, that will result in the database rejecting it because it was expecting an integer.

The grammar of the above expression will always be _email=something_  and the SELECT statement will return records only where the email column **exactly matches** the value of the parameter provided to the statements.  The query below will try to search email with value * and will not return all the rows.

> statement.setInt(1, "*")

This holds true even when the data contain SQL commands such as the following examples:

> statement.setInt(1, "1 OR TRUE UNION SELECT name,password FROM employee");statement.setInt(1, "FALSE; DROP TABLE users");

Prepared Statements can save us from the attacks specified above, But it doesn't mean the prepared statements will change the result set. Consider the code that changes the email comparison from an equality test (=) as in the previous examples to a LIKE statement that would support wildcard matches.

> statement = con.prepareStatement("SELECT email FROM  employee WHERE email LIKE ?") statement.setString(1, "%@%")

This will return all the email addresses as all the emails contain @.

This attack is possible as the '**like'** statement supports wildcards and hence special characters like the asterisk (*), percent symbol (%), underscore (_), and question mark (?) can be inserted into a bound parameter resulting in undesirable effects.

There are some characters that need to be escaped even if we are using PreparedStatements. SQL wildcards such as ([ and ]), (%), (_), (*) have an effect when part of parameters. We must escape these wildcards Unless a query explicitly matches multiple values based on wildcards.‍

#### 2. JAP/ Hibernate / ORM

JPA or ORM do not **prevent us from writing vulnerable code.** Let’s consider the example below

> TypedQuery<User> query = em.createQuery( "SELECT * FROM User  WHERE userid= '" + userId+ "'", User.class); User user= query.getSingleResult();

All the vulnerabilities specified above are persistent in this Query. To avoid them we may write parameterized queries Similar to JDBC PreparedStatement, either by using Positional parameters or named Parameters

‍**Positional parameters**

> @Query("SELECT u FROM User u WHERE u.id = ?1 and u.name = ?2") User findUserByIdAndName(Integer id, String name);

Named parameters> @Query("SELECT u FROM User u WHERE u.id = :id and u.name = :name") User findUserByIdAndName(@Param("status") Integer id, @Param("name") String name);

#### 3. Stored Procedures

Stored Procedures are SQL statements stored in the database rather than in the application code. Like prepared statements, Stored Procedures can also populate the queries with user-supplied data.

They have to be securely written to avoid SQL Injections.

> CREATE PROCEDURE bad_proc @name varchar(256) BEGIN EXEC ('SELECT COUNT(*) FROM users WHERE name LIKE "' + @name + '"') END

We can write the above Stored Procedures securely as below

> CREATE PROCEDURE bad_proc @name varchar(256) BEGIN EXEC ('SELECT COUNT(*) FROM users WHERE name LIKE @name') END

#### Some more database safeguards:

The user in context.xml or in properties file must have only the DML privilege. The user can execute only select, insert, update and delete statements on the tables in that particular schema, and hence restricting the malicious user to drop or create tables or delete databases in case of such attacks

The following command will grant DML privilege to a PostgreSQL user:

> GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA schema_name TO username;

In the case where you need to execute DDL(Data Definition Language) query, like create or drop the table, then do the following:

1. Your most used DB user(the one stored in properties or context.xml file) must have only rights to execute DML queries. Let's call this user 'dmlOnlyUser' 2. Create a new elevated user with DDL privilege. Let's call this user 'ddlUser'. Store the ddlUsers credentials in the database. 3. In order to run DDL statements, access the Database, retrieve the 'ddlUser' user's credentials, and then create a new connection using those credentials. Then run the DDL and release the connection right away.

These are some of the security measures we can take to prevent SQL Injections. The main idea is that even if it is difficult to find all possible vulnerabilities in our code especially when we are working with legacy code, we should at least try to limit the damage and the possibility of attacks through SQL Injections.

