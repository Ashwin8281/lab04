import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { TransactionsContext } from './TransactionContainer'; 

const TransactionsSummary = () => {
  const { transactionsData } = useContext(TransactionsContext); 

  if (!transactionsData || !Array.isArray(transactionsData)) {
    return <Text>No transactions data available.</Text>;
  }

  // Calculate summary data
  const totalTransactions = transactionsData.length;
  const highestTransaction = Math.max(...transactionsData.map((t) => parseFloat(t.amount.replace('$', ''))));
  const lowestTransaction = Math.min(...transactionsData.map((t) => parseFloat(t.amount.replace('$', ''))));
  const totalAmount = transactionsData.reduce((acc, curr) => acc + parseFloat(curr.amount.replace('$', '')), 0);

  return (
    <View style={{ padding: 16 }}>
      <Text>Total number of transactions: {totalTransactions}</Text>
      <Text>Highest transaction: ${highestTransaction}</Text>
      <Text>Lowest transaction: ${lowestTransaction}</Text>
      <Text>Total amount: ${totalAmount.toFixed(2)}</Text>
    </View>
  );
};

export default TransactionsSummary;
