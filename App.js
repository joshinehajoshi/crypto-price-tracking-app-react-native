import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://api.coingecko.com/api/v3/companies/public_treasury/bitcoin',
    }).then((response) => {
      // console.log(response.data.companies);
      setData(response.data.companies);
      console.log(data)
      // console.log(response.data.companies.map((a) => a.name))
    });
  },[])


  return (
    <TouchableOpacity>
    <View style={styles.container}>
      <Text style={styles.header}>Crypto Price Tracking</Text>
      <StatusBar style="auto" />
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header : {
    position: 'relative',
    top: 50,
    fontSize: 20,
    fontWeight: "bold",
    
  }
});
