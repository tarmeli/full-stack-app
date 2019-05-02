import React, { useState, useEffect } from 'react';

const Loading = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStage(stage >= 3 ? 0 : stage + 1);
    }, 300);

    return () => clearInterval(interval);
  });

  return (
    <>
      {`Loading${new Array(stage).fill().map(() => '.').join('')}`}
    </>
  );
};

export default Loading;
