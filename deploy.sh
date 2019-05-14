#!/usr/bin/env sh

set -e

npm run docs:build
cp {CNAME,favicon.ico,hero.jpg} docs/
git add -A
git commit -m '添加 回流与重绘'
git push 