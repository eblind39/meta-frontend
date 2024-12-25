 mkdir lab
 cd lab/
 touch file1.txt
 mkdir dir1
 mv file1.txt dir1/
 touch file2.txt

 #We're using the -p flag to create the parent directories 
 #if they do not exist. In this case it will create the dir2 
 #directory and then create the dir3 directory inside of dir2
 mkdir -p dir2/dir3
 
 mv file2.txt dir2/dir3/
 cd dir2/
 touch file3.txt
 mv file3.txt ../
 cd ..
 cd dir1/
 ls -la
 cd ../dir2/
 ls -la
 cd dir3/
 ls -l