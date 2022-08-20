import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ElementCat({breed, navigation}) {
    //console.log(breed?.image);
    var image1 = breed?.image;
   // console.log(image1);
    return (
      <TouchableOpacity style={styles.button} 
      onPress={()=> navigation.navigate('Profile',{image1})}>
        <Image
          style={{
            width: 100,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
          }}
          source={{uri:breed?.image?.url}}
        />
  
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{breed.name}</Text>
          <Text style={styles.temperament}>{breed.temperament}</Text>
        </View>
        
      </TouchableOpacity>
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
  