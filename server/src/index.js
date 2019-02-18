const express = require('express');
const cors = require('cors');
const PopulationRoutes = require('./routes/population/');
const EmissionsRoutes = require('./routes/emissions/');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Index route');
});

PopulationRoutes(app);
EmissionsRoutes(app);
