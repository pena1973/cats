import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';

import axios from 'axios';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';
axios.defaults.headers.common['x-api-key'] =
    'f2899b7f-b575-4378-8ba4-7a4a9b1cabe0';

const SCREEN_WIDTH = Dimensions.get('window').width;

const deleteImageFromFavourites = async (favouritesId, loadFavorites) => {
    //  console.log(favouritesId);
    const url = `favourites/${favouritesId}`;
    try {
        const response = await axios.delete(url);
        //  console.log('response', response);
    } catch (error) {
        console.log(error);
    } finally { loadFavorites(); }

};

function ClientItem({ favorite,loadFavorites}) {
  // console.log(favorite);
  return (
    <View style={styles.button}>
      <Image style={styles.image1} source={{ uri: favorite?.image?.url }} />
      <TouchableOpacity
        style={{
          position: 'absolute',
          backgroundColor: '#ecf0f1',
          width: 25,
          padding: 5,
          paddingLeft: 8,
          borderRadius: 16,
        }}
        onPress={() => deleteImageFromFavourites(favorite?.id,loadFavorites)}>
        <Text style={styles.buttonText}>X</Text>
      </TouchableOpacity>
    </View>
  ); 
}

export default function Favorines() {
  const [favorites, setFavorites] = useState();

  const loadFavorites = () => {
    const url = '/favourites?limit=10';
    

    axios
      .get(url)
      .then((response) => {
        //console.log(response);
        if (response?.data) {
          setFavorites(response?.data);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadFavorites();
    deleteImageFromFavourites();
  }, []);

  const renderItem = ({ item, index }) => {
    return <ClientItem favorite={item} loadFavorites={loadFavorites()}  />;
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
        <FlatList data={favorites} renderItem={renderItem} />
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
  image1: {
    height: 290,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    flex: 1,

    flexDirection: 'row',
    backgroundColor: '#F7F7F7',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
});