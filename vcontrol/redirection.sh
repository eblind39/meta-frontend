# 0 - stdin
# 1 - stdout
# 2 - stderr
# std stands for standard
# stdio stands for standard input/output
# stderror stands for standard error output
# 2>&1 means redirect stderr to stdout

cat > input.txt
# enter tesxt and fimish with ctrl+d
cat < input.txt

ls -l > output.txt
ls output.txt
less output.txt
ls -l /bin/usr > error.txt
ls -l /bin/usr 2> error.txt
less error.txt
ls -l /bin/usr > error_output.txt 2>&1
less error_output.txt