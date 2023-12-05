import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// Custom ======================================================================================

const LoginScreen = ({navigation}) => {
  // UseEffect ======================================================================================

  // Render ======================================================================================
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.welcometxt}>Login</Text>
        <TextInput placeholder="Email" style={styles.textBox} />
        <TextInput placeholder="Password" style={styles.textBox} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ListScreen');
          }}
          style={styles.btnstyle}>
          <Text style={styles.btnTxt}>Login Here</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  welcometxt: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    margin: 50,
  },
  btnTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'purple',
    textAlign: 'center',
    margin: 10,
  },
  textBox: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    color: 'black',
    alignSelf: 'center',
    width: '80%',
    margin: 10,
  },
  btnstyle: {
    alignSelf: 'center',
    width: '80%',
    margin: 10,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default LoginScreen;
