import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import { isDev } from '../config';
import { Controller } from './controller';
import proxy from 'express-http-proxy';
import express from 'express'

const app = createExpressServer({ controllers: [Controller] })

if (isDev) {
  app.use (proxy ('http://localhost:8080/'));
}
else {
  app.use (express.static ('./web'));
}

app.listen(4711)