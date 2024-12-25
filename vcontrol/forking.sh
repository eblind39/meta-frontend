# pipelines-java is a forked repository from microsoft
git clone git@github.com:eblind39/pipelines-java.git
cd pipelines-java/
ls -la
code .
git branch
git checkout -b test/forking-example
touch text.txt
git status
git add text.txt
git status
git commit -m "chore: testing"
git push -u origin test/forking-example
# then proceed to hit click on the "Compare & pull request" button on the github page
# Create the PR and merge it after review