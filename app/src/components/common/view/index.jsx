import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import List from '../list';

import Loading from '../loading';

const View = ({ dataToView }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/${dataToView}`)
      .then(response => response.json())
      .then(setData)
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        console.error('Fetch failed', error);
      });
  }, []);

  return (
    <div style={{ width: '50%' }}>
      {!loading && <List data={data.Root.data.record} />}
      {loading && <Loading />}
    </div>
  );
};

View.propTypes = {
  dataToView: PropTypes.string.isRequired,
};

export default View;
