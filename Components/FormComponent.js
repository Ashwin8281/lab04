import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { addTransaction } from './FirebaseService'; // Assuming you have this service set up

const TransactionForm = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async () => {
    const transactionData = {
      name,
      amount: `$${amount}`,
      date,
      place: 'Specify if needed' // You can add a place input if required
    };
    await addTransaction(transactionData); // Function to add data to Firestore
    setName('');
    setAmount('');
    setDate('');
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Amount" value={amount} onChangeText={setAmount} keyboardType="numeric" style={styles.input} />
      <TextInput placeholder="Date" value={date} onChangeText={setDate} style={styles.input} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TransactionForm;
