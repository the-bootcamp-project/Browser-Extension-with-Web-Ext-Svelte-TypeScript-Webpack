#!/bin/bash

EXTENSION="$1"

function prepare_dist() {
    mkdir -p ./dist/${EXTENSION}
    rm -rfv ./dist/${EXTENSION}/* 2&> /dev/null
}

function copy_manifest() {
    cp -r node_modules/@bootcamp-project/webext-config/${EXTENSION}/* ./dist/${EXTENSION}
}

function copy_sourcecode() {
    cp -r ./bundle/* ./dist/${EXTENSION}
}

# web-ext lint -s ./dist/brave
# web-ext build -s ./dist/brave -n brave_v$(~/.local/bin/.companion/companion.sh node_version).zip

prepare_dist
copy_manifest
copy_sourcecode
