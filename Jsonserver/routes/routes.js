const kalenderRoutes = require("./Kalenderrautes");
const appRouter = (app, fs) => {
  kalenderRoutes(app, fs);
};

module.exports = appRouter;
