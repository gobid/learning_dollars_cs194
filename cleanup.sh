#!/bin/bash

# JADE
echo "=> Checking that jade templates have wrapped lines"
for file in $(find templates -name "*.jade"); do
	echo "Unwrapped lines in" $file ":"
	awk "length($0) > 79" $file
	printf "\n"
done
printf "\n"

echo "=> Converting jade to compiled js runtime functions"
cd templates
bash compile_jade.sh
cd ..

# CSS
echo "=> Checking that css files have wrapped lines"
for file in $(find static/views/css -name "*.css"); do
	echo "Unwrapped lines in" $file ":"
	awk "length($0) > 79" $file
	printf "\n"
done
printf "\n"

read -n1 -p "=> Does CSSLint have any complaints? [y,n] " doit 
printf "\n"
case $doit in 
	n|N) ;; 
	*)
		echo "ERROR: (Control/Command-C to exit and fix it)"
		printf "\n"
		exit ;; 
	esac

read -n1 -p "=> Are you sure? [y,n] " doit 
printf "\n"
case $doit in 
	y|Y) ;; 
	*) 
		echo "ERROR: (Control/Command-C to exit and fix it)"
		printf "\n"
		exit ;; 
	esac
printf "\n"

# JS
echo "=> Remove any unnecessary instances of console.log in js files:"
grep "console.log" static/views/js/*.js
printf "\n"

read -n1 -p "=> Does JSHint have any complaints? [y,n] " doit 
printf "\n"
case $doit in 
	n|N) ;; 
	*)
		echo "ERROR: (Control/Command-C to exit and fix it)"
		printf "\n"
		exit ;; 
	esac

read -n1 -p "=> Are you sure? [y,n] " doit 
printf "\n"
case $doit in 
	y|Y) ;; 
	*) 
		echo "ERROR: (Control/Command-C to exit and fix it)"
		printf "\n"
		exit ;; 
	esac
printf "\n"

# PYTHON
echo "=> Remove any unnecessary instances of print in py files:"
grep "print" *.py
grep "print" freelancer/*.py
grep "print" ocw/*.py
printf "\n"

read -n1 -p "=> Continue to autopep8 python files? [y,n] " doit 
printf "\n"
case $doit in 
	y|Y) ;; 
	*) 
		echo "Make sure to rerun cleanup before pushing"
		printf "\n"
		exit ;; 
	esac
printf "\n"

echo "=> Formatting python code to pep8 standards" 
for file in $(find . -name "*.py"); do 
	echo "Formatting" $file
	python autopep8/autopep8.py --in-place $file
done
printf "\n"

echo "Code is clean. Ready for pushing."
printf "\n"
