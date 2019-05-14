#!/usr/bin/env sh

set -e

npm run docs:build
cp {CNAME,favicon.ico,hero.jpg} docs/
git add -A
git commit -m '删除 .vuepress/assets'
git push 