#!/usr/bin/env bash

CUR_DIR="$(dirname -- "${BASH_SOURCE[0]}")" || exit
SRC_DIR="${CUR_DIR}/.."

OPEN='^\s*<script>\s*$'
CLOSE='^\s*<\/script>\s*$'
(
  cd "${SRC_DIR}" \
  && sed \
    -e "/${OPEN}/,/${CLOSE}/!s/.*//" \
    -e "/${OPEN}/s/.*//" -e "/${CLOSE}/s/.*//" \
    index.html
)
