#! /bin/sh

echo "starting run script"

cd backend

bundle install

echo "creating inital database"

rails db:create

echo "migrating database"

rails db:migrate

echo "seeding database"

rails db:seed

echo "starting the backend service"

rails server

cd ../frontend

npm install
npm run dev

echo "started the frontend app"