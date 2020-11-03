#!/bin/bash

certificate=$(ls ./ | grep *.crt)

if [ -z $certificate ] 
then
  echo "building ssl..."
  make ssl
  echo "building complete."
fi

