import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionListComponent from './TransactionList';
import TransactionDetailsComponent from './TransactionDetails';

const Stack = createStackNavigator();

const TransactionComponent = () => {
  return (
    <Stack.Navigator initialRouteName="TransactionsList">
      <Stack.Screen name="TransactionsList" component={TransactionListComponent} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetailsComponent} />
    </Stack.Navigator>
  );
};

export default TransactionComponent;
