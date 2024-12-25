mkdir projects
cd projects
git clone https://github.com/MetaTC/my-first-repo.git
ls -la
cd my-first-repo
ls -la
vi README.md
git add README.md
git commit -m "feat: new resources"
git push origin HEAD
touch test.txt
git status
git add test.txt
git restore --stage test.txt    #unstage file test.txt
git status
git add test.txt
git status
clear
git commit -m "feat: add test.txt for testing"
git status
git push origin HEAD
git checkout -b feature/lesson  # create a branch
git branch
touch test2.txt
git add test2.txt
git commit -m "feat: add test2.txt"
git push -u origin feature/lesson
git status