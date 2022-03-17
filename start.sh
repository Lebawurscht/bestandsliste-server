#!/bin/bash

mkdir database
yarn run prisma migrate deploy
node dist/index.js
