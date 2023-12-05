import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  FlatList,
} from 'react-native';
// Custom ======================================================================================

const ListScreen = ({navigation}) => {

  const [listData, setListData] = useState([]);
  // UseEffect ======================================================================================
  useEffect(async () => {
    callApi();
  },[]);

  const callApi = async() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setListData(data);
      })
      .catch(error => console.error(error));
  };

  const renderItem=({item})=>{
    return(
        <View style={{width:'80%',borderBottomColor:"black",borderBottomWidth:1,padding:10}}>
            <Text ellipsizeMode='tail' numberOfLines={2} style={styles.titleTxt}>{item.title}</Text>
            <Text ellipsizeMode='tail' numberOfLines={4} style={styles.descTxt}>{item.body}</Text>
        </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.tTxt}>List of User</Text>
        {listData==null ? (
          <Text>No Data Found</Text>
        ) : (
          <FlatList
            data={listData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTxt:{
    fontSize:18,
    color:"purple",
    fontWeight:"bold",
    width:"80%"
},
tTxt:{
    fontSize:22,
    color:"purple",
    fontWeight:"bold",
    
},
descTxt:{
    fontSize:14,
    color:"black",
    fontWeight:"400",
    width:"80%"
    
  }
});

export default ListScreen;
