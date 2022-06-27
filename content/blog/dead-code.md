+++
authors = ["Sapan Parikh"]
date = 0001-01-01T00:00:00Z
description = ""
draft = true
image = "https://images.unsplash.com/photo-1536094919620-d948a02d5085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDZ8fGRlYWR8ZW58MHx8fHwxNjE4NjQ1NzMy&ixlib=rb-1.2.1&q=80&w=2000"
slug = "dead-code"
title = "Dead code"

+++


While developers look at their code as a prized possession, I have learned to look at code as a liability, and I think developers should discuss why.

`more code = more liability`

And why we should delete dead code from any system.

### Security issues

Security issues in dead code are still security issues. This means the attacker may still exploit a SQL injection in dead code to retrieve unauthorsized data, or worst, to delete data! There are only two ways to prevent such security threats: either delete the dead code or fix your dead code's security vulnerabilities.

### Impact on coupling

Even though not referred from anywhere, dead methods may still be coupled with other classes that increase the entire class's coupling.

### Impact on refactoring

As lined out above, the dead code doesn't care about it being dead. It has a full impact on the coupling and cohesiveness of the system. This means if we have a plan to refactor the code or transition them to more modern architecture, say Microservices, then this dead code can become a hindrance in achieving your goals.

### Impact on Unit/Integration testing

Having a dead code can inversely impact testing in two ways.

1. If a system already has many test cases, then automated test cases are testing dead code. This means developers maintain not only the dead code but also maintain these useless test cases. Plus, everyone gets a false sense of confidence when all the test cases pass!
2. If the system does not have test cases and developers have just started writing unit/integration tests, they may test dead code. If nothing else, deleting dead code will automatically increase the test code coverage, assuming dead code was not covered earlier.

### Static Code Analysis

A pattern seems to be emerging by now! If your CI/CD pipeline has static code analysis tools integrated, then the scan time will increase, but once again, a team may start fixing issues in dead code!

### Code Understandability

There is no arguing that dead code can make your code less readable and less maintainable by just being there. Code under unused feature flags or code for modules not being used increases the code's cognitive complexity. This may mean you will be slower when you have to edit this code next time or add more features to the same code.

### Size

Finally, dead code increases the size of your code. This means, bit by bit, dead code makes your tests slower, your builds slower, security and static analysis scans slower, download of artifacts slower.

If you are still not convinced about deleting dead code, then, once again, let me remind you that it impacts security :-).

