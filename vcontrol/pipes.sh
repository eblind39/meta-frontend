cd ~
mkdir archive
mkdir projects
cd archive
ls -la
mkdir submissions
cd submissions
echo "Lorem Ipsum is simply dummy" > text1.txt
echo "Contrary to popular, Lorem Ipsum" > text2.txt
ls -la
cat file1.txt
wc file1.txt -w
ls | wc -w
cat file1.txt | wc -w
cat file1.txt file2.txt | wc -w