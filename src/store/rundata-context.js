import React, { useState, useEffect } from 'react';

export const RunDataContext = React.createContext({
  runData: [],
  appendRunIten: () => {},
});

export const RunDataContextProvider = ({ ...props }) => {
  const [runData, setRunData] = useState(
    JSON.parse(localStorage.getItem('runiary')),
  );

  useEffect(() => {
    localStorage.setItem('runiary', JSON.stringify(runData));
  }, [runData]);

  const appendRunItem = (newRunData) => {
    setRunData([newRunData, ...runData]);
  };

  return (
    <RunDataContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ appendRunItem, runData }}
    >
      {props.children}
    </RunDataContext.Provider>
  );
};
