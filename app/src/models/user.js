import Guardian from '@/utils/guardian';
import Mongoose from 'mongoose';

const schema = new Mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      set: Guardian.hashPassword,
    },
  },
  { timestamps: true }
);

export default Mongoose.model('User', schema);
