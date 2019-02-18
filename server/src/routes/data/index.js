const DataController = require('../../controllers/data/');

const DataRoutes = (app) => {
  const { Send } = DataController;
  app.get('/data', (res) => {
    Send(res);
  });
};

module.exports = DataRoutes;
