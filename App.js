import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionComponent from './Components/TransactionComponent';
import TransactionsSummary from './Components/TransactionsSummary';
import TransactionForm from './Components/FormComponent'; // Assuming you have this form
import { TransactionContainer } from './Components/TransactionContainer'; 

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <TransactionContainer>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Transactions" component={TransactionComponent} />
          <Tab.Screen name="Add Transaction" component={TransactionForm} />
          <Tab.Screen name="Summary" component={TransactionsSummary} />
        </Tab.Navigator>
      </NavigationContainer>
    </TransactionContainer>
  );
}
