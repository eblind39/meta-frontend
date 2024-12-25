mkdir my-second-repo
cd my-second-repo
git init
git remote -v
git remote add origin git@github.com:GitTutorials101/my-first-repo.git
git remote -v
git pull
git checkout main
git status
git push origin main
cat test.txt
git pull
cat test.txt

#conflicts
# see what branch is causing the merge issue
git log --merge
#  see the change that is causing the conflict
git diff
git add Feature.js
git commit -m "fix merge conflicts"
git push -u origin feature2

# feature branching
# -> create a new branch from an existing branch for a new feature


cd .git/
cat refs/heads/main
cat HEAD
git diff HEAD README.md
git log --pretty=oneline
git blame README.md
git blame -L 5,15 README.md
git blame -l README.md
git log -p hash-commit