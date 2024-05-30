import React, { createContext, useContext, useEffect, useState } from 'react';

const WindowWidthContext = createContext();

export const useWindowWidth = () => {
  return useContext(WindowWidthContext);
};

export const WindowWidthProvider = ({ children }) => {
  const [isSmallerDevice, setIsSmallerDevice] = useState(
    window.innerWidth < 768,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallerDevice(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <WindowWidthContext.Provider value={{ isSmallerDevice }}>
      {children}
    </WindowWidthContext.Provider>
  );
};