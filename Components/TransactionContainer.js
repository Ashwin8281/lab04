import React, { createContext, useContext, useEffect, useState } from 'react';
import { getTransactions } from './FirebaseService'; // Adjust the path as necessary

export const TransactionsContext = createContext();

export const TransactionContainer = ({ children }) => {
  const [transactionsData, setTransactionsData] = useState([]);

  useEffect(() => {
    const unsubscribe = getTransactions(setTransactionsData);

    return () => unsubscribe(); // Detach the listener when the component unmounts
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactionsData, setTransactionsData }}>
      {children}
    </TransactionsContext.Provider>
  );
};
