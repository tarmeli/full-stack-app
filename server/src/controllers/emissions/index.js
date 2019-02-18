const fs = require('fs');
const path = require('path');
const convert = require('xml-js');

const Send = (req, res) => {
  const { xml2json } = convert;
  const options = {
    compact: true,
    ignoreComment: true,
    spaces: 4,
  };

  const xml = fs.readFileSync(
    path.join(__dirname, './data/API_EN.ATM.CO2E.KT_DS2_en_xml_v2_10474794.xml'),
  );
  const json = JSON.parse(xml2json(xml, options));
  res.setHeader('Content-Type', 'application/json');
  res.send(json);
};

module.exports = { Send };
