#!/bin/bash

set -o errexit -o nounset

if [ "$TRAVIS_BRANCH" != "master" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH and not the master! No deploy!"
  exit 0
fi

rm -rf .git
cd target
rm -rf app.cljs.edn

git init
git config user.name "Travis CI"
git config user.email "andrewdolby@gmail.com"
git config --global push.default simple
git remote add upstream "https://${GH_TOKEN}@${GH_REF}"

touch .

git add -A .
git commit -m "Deploy to GitHub Pages - ${TRAVIS_COMMIT}"
git push --force upstream master:gh-pages >/dev/null 2>&1
