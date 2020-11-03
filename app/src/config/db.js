import Mongoose from 'mongoose';

const { DB_HOST, DB_NAME, DB_USER, DB_PASS } = process.env;

const conURL = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:27017/${DB_NAME}?authSource=admin`;

const feedback = (status) => (data) => {
  console.log(`[${status}] in ${conURL} -> ${data}`);
};

Mongoose.connect(conURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(feedback('SUCCESS'))
  .catch(feedback('ERROR'));

export default Mongoose;
