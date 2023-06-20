#!/bin/bash

 if [ -z "$*" ]; then echo "Require name"; exit 1; fi

lCase=$1
uCase="${lCase^}"

cp -r ./src/template "./src/${lCase}"
cd "./src/${lCase}"
find . -type f -exec rename "s/template/${lCase}/g" {} +
find . -type d -exec rename "s/template/${lCase}/g" {} +
find . -type f -exec sed -i '' -e "s/template/${lCase}/g" {} +
find . -type f -exec sed -i '' -e "s/Template/${uCase}/g" {} +
