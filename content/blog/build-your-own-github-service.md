+++
title = "Build Your Own Github Service"
slug = "build-your-own-github-service"
date = 2025-02-25T11:55:10+05:30
image = "/images/2025/build-your-own-github-service/header.jpg"
draft = true
authors = ["Sahil Nayak"]
description = "We can create our own remote repository service by setting up and hosting to our own server. It works just like popular services such as GitHub or Bitbucket."
tags = ["Git", "GitHub", "EC2", "AWS"]
categories = ["Git", "GitHub", "EC2", "AWS"]
type = ""
+++

Yes, you read that right!

We can create our own remote repository service by setting up and hosting to our own server. It works just like popular services such as GitHub or Bitbucket, but with the **added benefit of complete control over access and hosting**.

Imagine hosting our own remote repository on our server and giving access only to specific members of team.

Isn’t that interesting? Well, it’s absolutely possible, and I’m going to walk you through it.

We all know how easy it is to create a local git repository with a simple command. Similarly, creating a remote repository is just as easy—though it uses a different command.

let’s first tweak our terminology a bit. The remote repository is often referred to as a **bare repository**.

Now You might be thinking🤔, What exactly is a bare git repository? How is it different from a local repository? And can we use the same git commands (like pushing and pulling changes) to interact with it?

Let’s clear that up by looking at the **key differences between Local and Bare Repository**.

<br>

#### Local Vs Bare Repositories

| **Aspect**            | **Local Repository**                                                   | **Bare Repository**                                               |
| --------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Setup**             | `git init`                                                             | `git init --bare`                                                 |
| **Working Directory** | Has a working directory (your files)                                   | No working directory, only Git metadata                           |
| **Actions**           | You can edit, stage, commit, checkout, and perform many other actions. | Limited to pushing, pulling changes, and other remote operations. |
| **Purpose**           | For local development; work on files and commit changes                | Centralized repository for sharing and collaboration              |

<br>

# <p align="center">...</p>

<br>

We’ve cleared up most of the concepts, Now you might feel **"Talk is cheap. Show me the code."**
So, Let's dive into the practically.

<br>

<h4>1️⃣ Experiment: Local Bare Repo & Workspace Connection</h4>

In your project directory,

**1. Create two folders with the following names**

| 📂 `local`      | Your project working directory (Just like when you clone from a remote). |
| --------------- | ------------------------------------------------------------------------ |
| 📂 `remote.git` | A bare repository (The one where all changes are pushed).                |

> **Recommended**: It's a good practice to name your bare repository with a `.git` suffix, (like `remote.git`).

> When you see any github repository clonable link (whether in HTTP or SSH URL) that always ends with `.git`, it indicates that **on the server, the bare repository is created in a folder named exactly as `repository_name.git`**.

**2. Set Up the Bare Repository**

Now, go into the remote folder and create the bare repository

```bash
# Navigate to remote.git directory
cd remote.git

# Create bare repository here
git init --bare
```

**3. Clone the Bare Repository**

Go back to your project directory and navigate to the `local` folder. Clone the bare repository here

```bash
# Navigate to your working directory where you want to clone
cd local

# clone the bare repository
git clone <path-to-bare-repo>
# Replace <path-to-bare-repo> with the actual file path or URL of your bare repository.
# For an example: C:\User\DELL\Experiment\remote.git\
```

You should now see a folder named `remote` inside your `local` folder, as our bare repository was named `remote.git`.

> **Note**: This is not the bare repository's directory. It’s now your local repository, created by cloning the bare repository.

**4. Make Some Changes in the Local (Clonned) Repository**

Now, inside your local repository, navigate to the `remote` folder and do the following:

```bash
# Navigate to remote
cd remote

# Create README.md file
echo "README" > README.md

# Add to staging area
git add .

# Commit the changes
git commit -m "Add: README.md"
```

**5. Check the Remote Origin**

To see where your remote repository is set up, run:

```bash
git remote -vv
```

You should see the remote URL listed under "`origin`" :

For an example:

```bash
origin C:\User\DELL\Experiment\remote.git\ (fetch)
origin C:\User\DELL\Experiment\remote.git\ (push)
```

If **the remote isn't set up yet, you can add** it by running this command:

```bash
git remote add origin "<path-to-bare-repo>"
# Replace <path-to-bare-repo> with the actual file path or URL of your bare repository.
# For an example: C:\User\DELL\Experiment\remote.git\
```

**6. Push changes to the Bare Repository**

Now that the remote repository url is set up, push your changes to the bare repository:

```bash
git push
```

**7. Verify the Bare Repository by Cloning It Elsewhere**

Finally, to make sure everything works, let’s try cloning the bare repository in a different folder (e.g., bare_local). you should able to see changes.

**This is how you can create a local Git repository, connect it to a bare repository, and push changes.**

<br>

# <p align="center">...</p>

<br>

<h4>2️⃣ Experiment: Hosting a Bare Git Repository on a Remote Server</h4>

<br>

**1. Create EC2 Instance**

Launch an EC2 instance with **Ubuntu OS** using default settings and configurations.

> **Important:** Ensure you generate a key-pair & download it your machine when setting up the instance.

> **Note:** Don’t worry about Git Installation because it comes pre-installed on most Linux machines!

Once the EC2 instance is set up, you can log in either using your local machine or the AWS terminal on the AWS website to create the bare repository.

**2. Connect to Your AWS EC2 Instance Using Local Machine (via SSH)**

Open PowerShell (or CMD Terminal) and refers the following steps:

Get first the SSH connection command from the AWS console:

- Go to your EC2 instance page.
- Click **Connect**, then choose **SSH client**.
- Copy the SSH command, which will look like:

```bash
ssh -i "<path_of_downloaded_pem(key)>" ubuntu@<public_ipv4_DNS>
```

- Run this command on PowerShell (or CMD Terminal).

**Log into the Instance**

- Run the SSH command. Once executed, you will be logged into your AWS instance and see the Ubuntu terminal.

- By default, you will be in the `/home/ubuntu/` directory.

**3. Set Up a Bare Git Repository**

```bash
# create new directory for bare repo and name it as with .git suffix
mkdir remotesync.git

# Navigate to the Bare Repository Directory:
cd remotesync.git

# Create bare repository
git init --bare
```

Now, you have a bare repository set up and ready to be accessed. but to access (clone) the this bare repo we need to setup your SSH public key on this EC2 instance.

**4. Set Up SSH Key for Git Access**

```bash
# Navigate to the .ssh directory:
cd .ssh

# List the files:
ls
```

> **Note:** You should see a file `authorized_keys`. The `authorized_keys` file already contains the default key, which allows access to the EC2 instance from anywhere using the `.pem file` that you downloaded when the instance was launched.

To enable Git access, we need to add GitHub's public SSH key to this file.

```bash
# Edit the authorized_keys file:
nano authorized_keys
```

This will open the file in an editor. **Paste your github SSH Public Key** into the file.

> **Note**: If you want to allow multiple users to access this repository, make sure to add each user's public key to this file.

**Save and Exit**: Press CTRL + X, then Y, and hit Enter.

<br>

# <p align="center">...</p>

<br>

You can also set up the bare repo directly using the AWS Console's terminal, instead of accessing it from local machines.

**1. Connect via the AWS Console (Alternative Method)**

You can also connect to your EC2 instance using the AWS Web Console:

- Go to your EC2 instance page.
- Click on your instance ID.
- Click Connect, then click Connect again.
- This will open a terminal page where **you can follow the same steps from Step 3**.

<br>

# <p align="center">...</p>

<br>

Once the bare repository is set up on the EC2 instance,

**5. Clone the Bare Repository Anywhere**

To clone the bare repository to your local machine, use the following command:

```bash
git clone ubuntu@<public_idpv4_DNS>:<path_to_bare_repo>
```

```bash
# For an Example:
git clone ubuntu@ec2-54-243-7-123.compute-1.amazonaws.com:/home/ubuntu/remotesync.git

# <public_ipv4_DNS>: ec2-54-243-7-123.compute-1.amazonaws.com:/home/ubuntu/remotesync.git
# <path_to_bare_repo>: /home/ubuntu/remotesync.git
```

Now you're all set to collaborate with your team! 🚀 Happy coding! 👨‍💻👩‍💻
