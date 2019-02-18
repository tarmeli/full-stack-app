const EmissionsController = require('../../controllers/emissions/');

const EmissionsRoutes = (app) => {
  const { Send } = EmissionsController;
  app.get('/emissions', (req, res) => {
    Send(req, res);
  });
};

module.exports = EmissionsRoutes;
