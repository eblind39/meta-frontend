#!/bin/sh
pwd
ls -la
echo "Hello World"
cat README.md
cd .dotfiles-coursera
mkdir submissions
ls -la
cd submissions
touch text1.txt
touch text2.txt
ls -la
echo "Content of text1.txt" > text1.txt
echo "Content of text2.txt" > text2.txt
cd ..
mkdir archive
ls -l
clear
mv submissions archive
cd archive
ls -latrh
cd submissions
ls -la
