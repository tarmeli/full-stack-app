import React, { useState, useEffect } from 'react';

export default function Emissions() {
  const [emissions, setEmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/emissions')
      .then(response => response.json())
      .then((data) => {
        setEmissions(data);
        setLoading(!loading);
      });
  }, []);

  function renderEmissions() {
    return (
      loading
        ? 'loading'
        : emissions.Root.data.record.map(
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
      {renderEmissions()}
    </div>
  );
}
