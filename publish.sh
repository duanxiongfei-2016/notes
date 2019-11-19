#!/usr/bin/env bash

nginx_path = /etc/nginx/conf.d

git pull
rm -rf node_modules
rm -rf biji
npm --registry https://registry.npm.taobao.org i
npm run build
rm -rf /etc/nginx/conf.d/*.conf
cp ./*.nginx.conf $nginx_path
systemctl restart nginx
