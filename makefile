#!/bin/bash
SHELL := /bin/bash

update:
	@git submodule update --init

clean:
	@find . -name "dist" -type d -print0 | xargs -0 /bin/rm -rf
	@find . -name "artifacts" -type d -print0 | xargs -0 /bin/rm -rf
	@find . -name "node_modules" -type d -print0 | xargs -0 /bin/rm -rf
	@find . -name "yarn.lock" -type f -print0 | xargs -0 /bin/rm -rf

install: | clean
	@yarn install

lint:
	@concurrently "yarn:lint-*"

build:
	@concurrently "yarn:build-*"

package:
	@concurrently "yarn:package-*"
