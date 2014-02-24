#!/bin/bash

# bash compile_jade.sh 
# -> compiles all jade template directories

# bash compile_jade.sh <JADE_TEMPLATE_DIRECTORY>
# i.e. bash compile_jade.sh about
# -> compiles that particular jade template directory 
# -> to /static/views/compiled-templates

echo "JADE COMPILATION" $1
echo "----------------"
echo "Note: ignore errors that read:"
echo "=> The client option is deprecated, use jade.compileClient"
echo "----------------"

if [[ -z "$1" ]]; then
	for jtd in $(ls jade); do
		bash compile_jade.sh $jtd
	done
else
	node compile_jade.js ../static/views/compiled-templates/$1.js jade/$1
fi

echo "----------------"