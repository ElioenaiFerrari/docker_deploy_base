import { request, response } from 'express';
import User from '@/models/user';
import Response from '@/utils/response';
import Guardian from '@/utils/guardian';

const AuthController = {
  signin: (req = request, res = response) => {
    const { email, password } = req.body;

    const onFindUser = (user) => {
      if (user) return user;

      throw new Error('user not found');
    };

    const comparePassword = (user) => {
      if (Guardian.comparePassword(password)(user.password)) {
        return user;
      }

      throw new Error('invalid credentials');
    };

    const genToken = (user) => {
      return { token: Guardian.genToken({ user }) };
    };

    return User.findOne({ email })
      .then(onFindUser, Response.sendJson(res, 404, ['message']))
      .then(comparePassword, Response.sendJson(res, 403, ['message']))
      .then(genToken, Response.sendJson(res, 400, ['message']))
      .then(
        Response.sendJson(res, 200, ['token']),
        Response.sendJson(res, 400, ['message'])
      )
      .catch(Response.sendJson(res, 400, ['message']));
  },
  signup: (req = request, res = response) => {
    return User.create(req.body)
      .then(
        Response.sendJson(res, 200),
        Response.sendJson(res, 400, ['message'])
      )
      .catch(Response.sendJson(res, 400, ['message']));
  },
};

export default AuthController;
