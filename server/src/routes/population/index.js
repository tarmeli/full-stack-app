const PopulationController = require('../../controllers/population/');

const PopulationRoutes = (app) => {
  const { Send } = PopulationController;
  app.get('/population', (req, res) => {
    Send(req, res);
  });
};

module.exports = PopulationRoutes;
