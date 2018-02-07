#!/usr/bin/bash

cd /c/Users/ppironi/Documents/_personal/myapp/client
/c/Users/ppironi/Documents/_personal/node/npm run build &
sleep 5
cd /c/Users/ppironi/Documents/_personal/myapp/server
/c/Users/ppironi/Documents/_personal/node/npm run serve &
sleep 5
cd /c/Users/ppironi/Documents/_personal/myapp/server-api
/c/Users/ppironi/Documents/_personal/node/npm run api &
sleep 5
cd /c/Users/ppironi/Documents/_personal/postgresql/10/bin
./pg_ctl stop -D /c/Users/ppironi/Documents/_personal/postgresql/10/data
./pg_ctl start -D /c/Users/ppironi/Documents/_personal/postgresql/10/data &
