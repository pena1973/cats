import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  View,
  StyleSheet,
  FlatList,
  Platform,
} from 'react-native';

import ElementCat from '../../components/ElementCat';

export default function Cats({navigation}) {
  const [breeds, setBreeds] = useState();
  const loadBreeds = () => {
    const url = 'https://api.thecatapi.com/v1/breeds';
    axios
      .get(url)
      .then((response) => {
     //   console.log(response);
        if (response?.data) {
          setBreeds(response?.data);
        }
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    loadBreeds();
  }, []);


  const renderItem = ({ item, index }) => {
    return <ElementCat breed={item} navigation = {navigation} />;
  };
  
  return ( 
    <View
      style={{
        resizeMode: 'contain',
        flex: 1,
        backgroundColor: '#ecf0f1',
        marginTop: Platform.OS === 'android' ? 60 : 0,
      }}>
      <View style={styles.container}>
        <FlatList data={breeds} renderItem={renderItem} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
    flexDirection: 'row',
    borderRadius: 16,
    resizeMode: 'contain',
  
  },
  button: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    borderRadius: 16,
    margin: 5,
    backgroundColor: '#F7F7F7',
    //  backgroundColor: 'grey',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },

  name: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#212322',
  }, 
   temperament: {
    marginLeft: 10  
  } 
});
