#!/bin/bash
set -euo pipefail

# Only run in Claude Code on the web
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# Enable corepack to ensure correct pnpm version is used
corepack enable

# Install dependencies
pnpm install
