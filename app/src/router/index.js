import requireDir from 'require-dir';
const allRouters = requireDir('.');

const insertRouter = (app, routers) => (key) => routers[key].default(app);

const mainRouter = (routers) => (app) => {
  return Object.keys(routers).map(insertRouter(app, routers));
};

export default mainRouter(allRouters);
