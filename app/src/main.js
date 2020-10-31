import App from '@/config/app';

const { APP_PORT, APP_NAME } = process.env;

App.listen(APP_PORT, () => {
  return console.log(`${APP_NAME} online in http://localhost:${APP_PORT}`);
});
