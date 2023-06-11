import React, { createContext, useState, useEffect } from 'react';
import { getAllThings } from '../api';

const ThingContext = createContext();

const ThingProvider = ({ children }) => {
  const [uglyThings, setUglyThings] = useState([]);

  useEffect(() => {
    const fetchUglyThings = async () => {
      try {
        const things = await getAllThings();
        setUglyThings(things);
      } catch (error) {
        console.error('Error fetching ugly things:', error);
      }
    };

    fetchUglyThings();
  }, []);

  return (
    <ThingContext.Provider value={{ uglyThings, setUglyThings }}>
      {children}
    </ThingContext.Provider>
  );
};

export { ThingContext, ThingProvider };
