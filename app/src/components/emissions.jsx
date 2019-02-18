import React, { useState, useEffect } from 'react';


function Emissions() {
  const [emissions, setEmissions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/emissions')
      .then(response => response.json())
      .then((data) => {
        setEmissions(data);
      });
  }, []);

  return (
    <div style={{ width: '50%' }}>
      {emissions.length
                === 0
        ? 'loading'
        : emissions.Root.data.record.map(
          (item, key) => (
            item.field.map((fieldItem, fieldKey) => (
              <div key={key + fieldKey}>{fieldItem._text}</div>
            ))
          ),
        )}
    </div>
  );
}

export default Emissions;
