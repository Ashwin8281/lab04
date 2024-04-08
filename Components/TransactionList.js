import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { TransactionsContext } from './TransactionContainer'; 

const TransactionList = ({ navigation }) => {
  const { transactionsData } = useContext(TransactionsContext);

  return (
    <View>
      <FlatList
        data={transactionsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}>
            <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#00D3A6', backgroundColor:'0C7E66' }}>
              <Text>{item.name}</Text>
              <Text>{item.amount}</Text>
              <Text>{item.date}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TransactionList;
