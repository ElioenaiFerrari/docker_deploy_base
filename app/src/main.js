import App from '@/config/app';

const { APP_PORT, APP_HOST } = process.env;

App.listen(APP_PORT, APP_HOST);
