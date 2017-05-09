#!/usr/bin/env bash
GIT_DEPLOY_PROD=${GIT_DEPLOY_PROD:-$(node -e 'process.stdout.write(require("./package.json").prod)')}

cd dist && \
$(npm bin)/rimraf .git
git init && \
git add . && \
git commit -m "Deploy to GitHub Pages" && \
git push --force "${GIT_DEPLOY_PROD}" master

# ! #
# IF YOU USE A USERNAME.GITHUB.IO ROOT DOMAIN, PLEASE READ THE WARNING BELOW
# ! #
