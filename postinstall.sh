#!/bin/bash

function run {
  echo "Setting up development env git-hooks.."
  # chmod +x ./custom-hooks/* ; mv ./custom-hooks/* ./.git/hooks/ ; rm -rf ./custom-hooks
  chmod +x ./git-hooks/* ; mv ./git-hooks/* ./.git/hooks/
  echo "git-hooks have been set..."\n
}

run
