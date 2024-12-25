gh auth login
? Paste your authentication token: ****************************************
- gh config set -h github.com git_protocol https
✓ Configured git protocol
✓ Logged in as eblind39
gh repo clone https://github.com/eblind39/repo-exercise.git
Cloning into 'repo-exercise'...
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
Unpacking objects: 100% (3/3), 870 bytes | 10.00 KiB/s, done.
coder@378c841ec63d:~/project$ ls -la
total 22
drwxrwxrwx  4 nobody nogroup 6144 Dec 25 03:27 .
drwxr-xr-x 13 coder  coder     20 Dec 25 03:21 ..
drwxr-xr-x  2 root   root    6144 Dec 25 03:21 .dotfiles-coursera
-rwxrwxrwx  1 nobody nogroup 1460 Jul  7  2022 README.md
drwxr-xr-x  3 coder  coder   6144 Dec 25 03:27 repo-exercise
-rwxrwxrwx  1 nobody nogroup    7 Jul  7  2022 result.txt
coder@378c841ec63d:~/project$ cd repo-exercise/
coder@378c841ec63d:~/project/repo-exercise$ 
coder@378c841ec63d:~/project/repo-exercise$ mv ../result.txt .
coder@378c841ec63d:~/project/repo-exercise$ git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        result.txt

nothing added to commit but untracked files present (use "git add" to track)
coder@378c841ec63d:~/project/repo-exercise$ git add result.txt 
coder@378c841ec63d:~/project/repo-exercise$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   result.txt

coder@378c841ec63d:~/project/repo-exercise$ git commit -m "Successful exercise"

*** Please tell me who you are.

Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.

fatal: unable to auto-detect email address (got 'coder@378c841ec63d.(none)')
coder@378c841ec63d:~/project/repo-exercise$ git config --global user.email "ergutierrez39@gmail.com"
coder@378c841ec63d:~/project/repo-exercise$ git config --global user.name "Ernesto Gutierrez"
coder@378c841ec63d:~/project/repo-exercise$ git commit -m "Successful exercise"
[main 2b5497f] Successful exercise
 1 file changed, 1 insertion(+)
 create mode 100755 result.txt
coder@378c841ec63d:~/project/repo-exercise$ git push
^C
coder@378c841ec63d:~/project/repo-exercise$ git push origin HEAD