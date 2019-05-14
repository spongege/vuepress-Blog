#!/usr/bin/env sh

set -e

npm run docs:build
cp {favicon.ico,CNAME,hero.jpg} docs/
git add -A
git commit -m '解决favicon和头像不显示 增加谷歌分析id'
git push 