import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import axios from 'axios';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';
axios.defaults.headers.common['x-api-key'] =
  'f2899b7f-b575-4378-8ba4-7a4a9b1cabe0';
 

    const loadRandomImage = async (setImage) => {
    const breedId = 'abys';
    const url = `/images/search?breed_id=${breedId}&include_breeds=false`;
 
    try {
    const response = await axios.get(url);
    const image = response.data[0];
    console.log(image);
      setImage(image);
    } catch (error) {
      console.log(error);
    }
  };

  const saveImageInFavourites = async (imageId) => {
    const url = 'favourites';

    try {
      const response = await axios.post(url, { image_id: imageId });
      //console.log('response', response);
    } catch (error) {
     // console.log(error);
    }
  }; 

export default function Profile({route}) {
  console.log(route?.params?.image1);
  var item  = route?.params?.image1;
  const [image, setImage] = useState();
 
  const loadImage = async () => {
    const url = item?.url;
      try {
     const response = await axios.get(url);
       setImage(item);
      } catch (error) {
        console.log(error);
      }
    };
    
    useEffect(() => {
    loadImage();
    loadRandomImage();
  }, []);

  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: image?.url }} />
      </View>

      <Text style={styles.pomeranian}>Abyssinian</Text>
      <Text style={styles.text}>
        {' '}
        Положите кота в избранное, это поможет мне обрести счастье
        {' '}
      </Text>

      <View style={styles.containerbutton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => loadRandomImage(setImage)}>
          <Text style={styles.buttonText}>Листать</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => saveImageInFavourites(image?.id,setImage)}>
          <Text style={styles.buttonText}>Добавить в избранное</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#EDF0F3',
    padding: 5,
    resizeMode: 'contain',
    marginTop: Platform.OS === 'android' ? 60 : 0,
  },

  pomeranian: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 100,
    font: 'Lato',
    color: '#333333',
    //marginTop: 0,
    marginLeft: 51,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    //font: 'Avenir',
    //lineHeight: 300,
    fonbackgroundColor: '#4F4F4F',
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 30,
  },

  containerbutton: {
    justifyContent: 'center',
    flexDirection: 'row',
    //backgroundColor: '#ecf0f1',
    padding: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '800',
    //font: 'Avenir',
    lineHeight: 19,
    //flexDirection: 'row',
    color: '#5533EA',
    //justifyContent: "center",
    alignSelf:'center'

  },
  button: {
    margin: 3,
    borderRadius: 12,
    padding: 10,
    width: 170,
    textAlign: 'auto',
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    height: 100,
    flex: 1,
    padding: 8,
     borderRadius: 16,
    margin: 5,
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
  image: {
    height: 100,
    borderRadius: 16,
    flex: 1,
    backgroundColor: '#F7F7F7',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  }
});
