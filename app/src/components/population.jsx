import React, { useState, useEffect } from 'react';

export default function Population() {
  const [population, setPopulation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/population')
      .then(response => response.json())
      .then((data) => {
        setPopulation(data);
        setLoading(false);
      });
  }, []);

  function renderPopulation() {
    return (
      loading
        ? 'loading'
        : population.Root.data.record.map(
          (item, key) => (
            item.field.map((fieldItem, fieldKey) => (
              <div key={key + fieldKey}>
                {fieldItem._text}
              </div>
            ))
          ),
        ));
  }

  return (
    <div style={{ width: '50%' }}>
      {renderPopulation()}
    </div>
  );
}
