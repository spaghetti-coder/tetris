#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"

SRC_DIR="${ROOT_DIR}/src"
OUT_FILE="${ROOT_DIR}/index.html"

CSS_MARKER=__app.css__
JS_MARKER=__app.js__

sed -e '/\/\*\s*'"${CSS_MARKER//./\.}"'\s*\*\//{' \
    -e "r ${SRC_DIR}/app.css" \
    -e 'd' \
    -e '}' "${SRC_DIR}/index.html" \
| sed -e '/\/\*\s*'"${JS_MARKER//./\.}"'\s*\*\//{' \
      -e "r ${SRC_DIR}/app.js" \
      -e 'd' \
      -e '}' \
> "${OUT_FILE}"

echo "Built ${OUT_FILE}"
