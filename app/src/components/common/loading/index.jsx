import React, { useState, useEffect } from 'react';

export default function () {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStage(stage >= 3 ? 0 : stage + 1);
    }, 200);

    return () => clearInterval(interval);
  });

  return (
    <>
      Loading
      {new Array(stage).fill().map(() => '.').join('')}
    </>
  );
}
