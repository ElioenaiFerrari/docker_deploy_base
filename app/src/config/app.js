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

mainRouter(App);

export default App;
