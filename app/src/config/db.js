import Mongoose from 'mongoose';

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } = process.env;

const conURL = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const feedback = (status) => (data) => {
  console.log(`[${status}] in ${conURL}`);
};

Mongoose.connect(conURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(feedback('SUCCESS'))
  .catch(feedback('ERROR'));

export default Mongoose;
