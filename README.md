**Complete Git master class**
Check Git version: git --version
Check Git configuration (including email): git config --list
Configure Git username and email:
 
  git config --global user.name "emma"
  git config --global user.email "eparis@atlassian.com"
Once the setup is done

Initialize a Git repository (creates .git folder): git init
Remove the .git folder (uninitialize the repository): rm -rf .git
Create a new directory (folder): mkdir <directory-name>
---
**Basic Git Commands**
List files in the current directory: ls
List all files, including hidden ones (e.g., .git folder): ls -a
List files in detailed format: ls -l
 List all files in detailed format (including hidden): ls -la
Change directory: cd <directory-name>
Move one directory up (parent directory): cd ..
Create a new file: touch <file-name>
Display the content of a file: cat README.txt
Open the current directory in VS Code:  code .
Add file(s) to the staging area: git add <file-name>
Add all files in the current directory: git add .
Check the status of your repository (see staged, untracked, modified files): git status
Remove a file from the staging area but keep it in the working directory: git rm --cached <file-name>
---
**Understanding Git Areas**
Working Area (Working Directory): This is where your project files are located. You can edit, add, or delete files here. However, not all files are tracked or managed by Git at this point.​     
Untracked Files: Files in the working directory that haven't been added to Git yet. These files are untracked and will show up when you run git status as untracked.

Modified but Unstaged: Even if a file is tracked by Git, if changes are made but not staged (using git add), they still remain in the working area.

Staging Area (Index): The staging area is a place where Git collects and organizes the changes you want to include in the next commit.

This area holds information about what changes will be included from the last version to the next version. It lets Git know which changes are going to be part of the next commit.
---
**Git Status**
Running git status helps you understand where your files are:

Untracked files: Files in the working directory that Git is not yet managing.
Changes not staged for commit: Files that have been modified in the working area but haven't been added to the staging area yet.
Changes to be committed: Files that have been moved to the staging area and are ready to be included in the next commit.
 Repository Area: 

What is it? This is the area where Git permanently stores all the committed changes. It maintains a detailed history of every version (commit) of the project.
Purpose: Git manages files in this area, tracks their version history, and allows you to access or revert to previous versions as needed. Once a file is committed to the repository, it becomes part of the version history.
**Summary of Git Areas:**

Files in the repository are managed by Git—meaning any changes committed here are permanent unless overwritten by new commits.

You can view the history of the changes by using commands like git log.

Working Area: Where you edit files. Changes here are not yet tracked by Git.
Staging Area: Prepares changes for the next commit. Files here are marked to be included in the next version.
Repository Area: Holds the permanent, tracked versions of your project, with full version history available.
Git Commit: git commit -m "your commit message"(register staging changes to a commit)
View commit history: git log (list down all the commits of the repository. In case you want exit out of the git log prompt, press q)
---
**Important commands**
git add: Move files to the staging area before committing.      
git commit: Record changes into the repository (create a new version).
git log: Check the history of commits in the project.
git restore: Undo changes and restore files to a previous version.
git restore(staged file): Remove a file from the staging area:
---
Add to the staging area: git add <file-name>
To stage all changes at once: git add .
Commit staged changes to the repository (create a new version): git commit -m "your commit message"
View commit history (see past versions and their details): git log
For a more compact version of the history: git log --oneline
Restore files to a previous state: git restore <file-name>
Remove a File from the Staging Area: git restore --staged <file-name>
To see untracked files: git status
 To see tracked files: git ls-files
if you see the green bar that means changes are in working area otherwise it is staging area
---
Delete a file from Git tracking and working directory: git rm file.txt

Restore/undo changes to a file
git restore file.txt

Compare changes between two commits
git diff <commit-id-1> <commit-id-2>

List all remote repositories: git remote -v

 Add a remote repository: git remote add <name> <url> 

Example: git remote add origin https://github.com/user/repo.git
---
git push 

# Basic push to remote
git push <remote> <branch>
# Example: git push origin main

# Push tags
git push --tags

# Delete remote branch
git push origin --delete <branch-name>
---
**List all remote repositories**
git remote -v

# Add a remote repository
git remote add <name> <url>
# Example: git remote add origin https://github.com/user/repo.git

# Remove a remote
git remote remove <name>
# Example: git remote remove origin

# Rename a remote
git remote rename <old-name> <new-name>
# Example: git remote rename origin upstream

# Show information about a remote
git remote show <name>
# Example: git remote show origin

# Change remote URL
git remote set-url <name> <new-url>
# Example: git remote set-url origin https://github.com/user/new-repo.git