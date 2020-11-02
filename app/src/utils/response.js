const { response } = require('express');

const mountResponse = (json) => (acc, key) => {
  acc[key] = json[key];

  return acc;
};

const sendJson = (res = response, status = 200, keys = ['']) => (json) => {
  const data = keys.reduce(mountResponse(json), {});

  return res.status(status).json(data);
};

const sendFile = (res = response, contentType = '') => (file) => {
  res.setHeader('Content-Type', contentType);

  return res.status(200).send(file);
};

const Response = {
  sendJson,
  sendFile,
};

export default Response;
