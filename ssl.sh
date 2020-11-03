#!/bin/bash

read -p "make ssl?[y/n]: " response


case "$response" in
  y|Y)
    echo "building ssl..."
    make ssl
    echo "building complete."
  ;;
  *)
    echo "ok."
  ;;
esac  