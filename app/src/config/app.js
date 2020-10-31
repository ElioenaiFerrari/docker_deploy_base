import Dotenv from 'dotenv';

Dotenv.config({ path: `${__dirname}/../../../.env` });

import '@/config/db';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mainRouter from '@/router';
import Guardian from '@/utils/guardian';

const App = express();

App.use(cors({ origin: true }));
App.use(express.json());
App.use(express.urlencoded({ extended: false }));
App.use(morgan('dev'));
App.use(['/app'], Guardian.safe);

App.get('/', (req, res) => {
  res.status(200).json({
    hello: 'world',
    port: process.env.APP_PORT,
  });
});

mainRouter(App);

App.get('/', (req, res) => {
  return res.json({
    hello: 'world',
  });
});

export default App;
