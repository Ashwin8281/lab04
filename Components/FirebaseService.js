// Adjust these imports to match the modular SDK
import { firebase } from './firebaseConfig'; // Ensure this is correctly importing Firebase app instance
import { getFirestore, addDoc, collection, query, onSnapshot } from 'firebase/firestore';

const firestore = getFirestore(firebase); // Initialize Firestore with Firebase app

export const addTransaction = async (transactionData) => {
  try {
    await addDoc(collection(firestore, 'transactions'), transactionData);
  } catch (error) {
    console.error("Error adding transaction: ", error);
    throw new Error('Error adding transaction');
  }
};

export const getTransactions = (setTransactionsData) => {
  const q = query(collection(firestore, 'transactions'));
  return onSnapshot(q, (querySnapshot) => {
    const transactions = [];
    querySnapshot.forEach((doc) => {
      transactions.push({ id: doc.id, ...doc.data() });
    });
    setTransactionsData(transactions);
  }, (error) => {
    console.error("Error fetching transactions: ", error);
  });
};
