import Jwt from 'jsonwebtoken';
import Bcrypt from 'bcryptjs';
import { request, response } from 'express';
import Response from './response';

const { APP_SECRET, BCRYPT_SALTS } = process.env;

const genSalt = () => Bcrypt.genSaltSync(BCRYPT_SALTS);

const hashPassword = (password) => Bcrypt.hashSync(password, genSalt());

const comparePassword = (password) => (hash) => {
  return Bcrypt.compareSync(password, hash);
};

const genToken = (params) => Jwt.sign(params, APP_SECRET);

const decodeToken = (token) => Jwt.verify(token, APP_SECRET);

const safe = (req = request, res = response) => {
  try {
    const { authorization } = req.headers;

    if (!authorization || authorization.length !== 2) {
      return Response.sendJson(res, 401)({ error: 'unauthorized' });
    }

    const token = authorization.split(' ')[1];

    req.auth.user = decodeToken(token);
  } catch (error) {
    return Response.sendJson(res, 400, { error: error.message });
  }
};

const Guardian = {
  hashPassword,
  comparePassword,
  genToken,
  decodeToken,
  safe,
};

export default Guardian;
