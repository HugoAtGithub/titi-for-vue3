rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:done3t/titi-website.git &&
git push -f -u origin master &&
cd -
echo https://done3t.github.io/titi-website/#/
