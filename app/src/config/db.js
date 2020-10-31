import Mongoose from 'mongoose';

const { DB_HOST, DB_PORT, DB_NAME } = process.env;

Mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

Mongoose.connection.on('error', () => console.error('[ERROR]'));
Mongoose.connection.once('open', () => console.log(`[SUCCESS]`));

export default Mongoose;
