+++
title = "Build Your Own Git Hosting Service"
slug = "build-your-own-git-hosting-service"
date = 2025-02-25T11:55:10+05:30
image = "/images/2025/build-your-own-git-hosting-service/header.png"
draft = true
authors = ["Sahil Nayak"]
description = "We can create our own remote repository service by setting up and hosting to our own server. It works just like popular services such as GitHub or Bitbucket."
tags = ["Git", "GitHub"]
categories = ["Git", "GitHub"]
type = ""
+++

Yes, you read that right! We can create our remote repository service by setting up and hosting it on our own server. It works just like popular services such as GitHub or Bitbucket but with the **added benefit of complete control over access and hosting**.

The remote repository is often referred to as a **bare repository**.

So, what exactly is a bare repository? How does it differ from a local one? Can we use the same Git commands to interact with it?

Let’s first explore the **key differences between local and bare repositories**.

#### Local Vs Bare Repositories

| **Aspect**            | **Local Repository**                                                                 | **Bare Repository**                                               |
| --------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| **Setup**             | `git init`                                                                           | `git init --bare`                                                 |
| **Working Directory** | Has a working directory (your project files).                                        | No working directory, only git metadata.                          |
| **Actions**           | You can edit files, stage changes, commit, checkout, and perform many other actions. | Limited to pushing, pulling, and other remote operations.         |
| **Purpose**           | Used for local development; allows you to work on files and commit changes.          | Serves as a centralized repository for sharing and collaboration. |

We’ve cleared up the basic concepts, Now you might feel **"Talk is cheap. Show me the code."**

So, let's dive into the practicals.

#### Experiment 1️⃣: Local bare repository & workspace connection

In your project directory,

**1. Create two folders with the following names**

| 📂 `local`      | Your project working directory (Just like when you clone from a remote). |
| --------------- | ------------------------------------------------------------------------ |
| 📂 `remote.git` | A bare repository (The one where all changes are pushed).                |

> **Recommended**: It's a good practice to name your bare repository with a `.git` suffix, (like `remote.git`).

> When you see any GitHub repository clonable link (whether in HTTP or SSH URL) that always ends with `.git`, it indicates that **on the server, the bare repository is created in a folder named exactly as `repository_name.git`**.

**2. Set up the bare repository**

Now, go into the remote folder and create the bare repository.

```bash
# Navigate to remote.git directory
cd remote.git

# Create a bare repository here
git init --bare
```

**3. Clone the bare repository**

Go back to your project directory and navigate to the `local` folder. Clone the bare repository here.

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

**4. Make some changes in the local (cloned) Repository**

Now, inside your local repository, navigate to the `remote` folder and do the following:

```bash
# Navigate to remote
cd remote

# Create README.md file
echo "README" > README.md

# Add to the staging area
git add .

# Commit the changes
git commit -m "Add: README.md"
```

**5. Check the remote origin**

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

**6. Push changes to the bare repository**

Now that the remote repository URL is set up, push your changes to the bare repository:

```bash
git push
```

**7. Verify the bare repository by cloning it elsewhere**

Finally, to make sure everything works, let’s try cloning the bare repository in a different folder (e.g., bare_local). You should able to see changes.

**This is how you can create a local Git repository, connect it to a bare repository, and push changes.**

---

#### Experiment 2️⃣: Hosting a bare git repository on a remote server

**1. Set up a remote server**

Ensure you have a server with Ubuntu (or any OS) and SSH access, using any cloud provider or self-hosted server.

**2. Connect to your server via SSH**

To access your server, open a terminal (PowerShell or CMD) and access the server using ssh commands:

```bash
ssh -i "<path_to_private_key>" ubuntu@<server_ip_or_domain>
```

Once executed, you’ll be logged into your server and will see the terminal.

**3. Set up a bare git repository**

```bash
# Create a new directory for the bare repo and name it with .git suffix
mkdir remotesync.git

# Navigate to the Bare Repository Directory:
cd remotesync.git

# Create a bare repository
git init --bare
```

Now, your bare repository is ready for use. To allow cloning and pushing changes, you'll need to set up SSH key access.

**4. Set up SSH key for git access**

```bash
# Navigate to the .ssh directory:
cd .ssh

# List the files:
ls
```

You should see a file named `authorized_keys`. If you’ve just set up your server, it will contain the default public key used for server access from anywhere.

To enable Git access, add your public SSH key (from GitHub, GitLab, or another Git service) to the `authorized_keys` file:

```bash
# Edit the authorized_keys file:
nano authorized_keys
```

This will open the file in an editor. **Paste your GitHub SSH Public Key** into the file and Save it.

> **Note**: If you want to allow multiple users to access this repository, add each user’s public key to this file.

**5. Clone the remote (bare) repository**

```bash
git clone ubuntu@<server_ip_or_domain>:<path_to_bare_repo>

# For an Example:
git clone ubuntu@ec2-04-043-0-003.compute-1.amazonaws.com:/home/ubuntu/remotesync.git
```

Now you're all set to collaborate with your team! 🚀 Happy coding! 👨‍💻👩‍💻
