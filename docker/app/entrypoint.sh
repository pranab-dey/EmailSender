#!/bin/sh

set -e

# Run our defined command if args are empty
if [ -z "$1" ]; then
    env=${NODE_ENV:-production}
    echo "App Env ::> $env" >> /proc/1/fd/1

    if [ "$env" = "development" ]; then
        npm run start:development
    else
        npm run start:production
    fi

# Run the given command
else
    exec "$@"
fi