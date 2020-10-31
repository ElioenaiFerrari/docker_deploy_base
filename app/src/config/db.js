import Mongoose from 'mongoose';

const { DB_HOST, DB_PORT, DB_NAME } = process.env;

Mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(console.log)
  .catch(console.error);

export default Mongoose;
