#!/bin/bash

if [ "$#" -lt 1 ]; then
    echo "Usage: $0 <source_file1.c> [source_file2.c ...]"
    exit 1
fi

gcc "$@" -o a.out -lraylib -lm && ./a.out
