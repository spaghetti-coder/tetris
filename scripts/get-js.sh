#!/usr/bin/env bash

CUR_DIR="$(dirname -- "${BASH_SOURCE[0]}")" || exit
SRC_DIR="${CUR_DIR}/.."
(
  cd "${SRC_DIR}" &&
  content=$(sed -n '/<script>/,/<\/script>/p' index.html | sed '1d;$d') &&
  first=$(printf '%s\n' "$content" | head -1) &&
  indent="${first%%[! ]*}" &&
  shift_n=${#indent} &&
  if [ "$shift_n" -gt 0 ]; then
    printf '%s\n' "$content" | sed "s/^[ ]\{${shift_n}\}//"
  else
    printf '%s\n' "$content"
  fi
)
