if [ -z "$*" ]; then echo "Require name"; exit 1; fi

SCRIPTPATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
cd $SCRIPTPATH
lCase=$1
uCase="${lCase^}"

cp -r ./src/template "./src/${lCase}"
cd "./src/${lCase}"
find . -type f -exec rename "s/template/${lCase}/g" {} +
find . -type f -exec sed -i '' -e "s/template/${lCase}/g" {} +
find . -type f -exec sed -i '' -e "s/Template/${uCase}/g" {} +
