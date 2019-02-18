import React, { useState, useEffect } from 'react';


function Population() {
  const [population, setPopulation] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/population')
      .then(response => response.json())
      .then((data) => {
        setPopulation(data);
      });
  }, []);

  return (
    <div style={{ width: '50%' }}>
      {population.length
                === 0
        ? 'loading'
        : population.Root.data.record.map(
          (item, key) => (
            item.field.map((fieldItem, fieldKey) => (
              <div key={key + fieldKey}>{fieldItem._text}</div>
            ))
          ),
        )}
    </div>
  );
}

export default Population;
