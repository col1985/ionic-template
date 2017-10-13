#!/bin/bash

NODE_VERSION="v6.9.5"
function versionCheck {
  printf "\n"
  printf "Checking NodeJS version is compatiblie with project configuration..."

  node --version | grep ${NODE_VERSION}

  if [ "$?" != "0" ]; then
    printf "\n"
    printf "Unable to " >&2
    printf "\n"
    exit 1
  else
    printf "\n"
    printf "Correct NodeJS version: ${NODE_VERSION} found, continuing install process..." >&2
    printf "\n"
    printf "\n"
  fi
}

versionCheck
