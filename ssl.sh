#!/bin/bash


certificate=$(ls ./ | grep *.crt)

if [ -z $certificate ] 
then
  echo "building ssl..."
  make ssl
  echo "building complete."
fi

APP_HOST=$(cat .env | grep APP_HOST | cut -d= -f2)
search_host=$(cat /etc/hosts | grep $APP_HOST)

if [ -z $search_host ]
then
  echo "registering host..."
  sed -i "/127.0.0.1/a127.0.0.1\t$APP_HOST" /etc/hosts
fi
  

