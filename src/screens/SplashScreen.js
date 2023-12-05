import React, { useEffect } from "react";
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
} from "react-native";
// Custom ======================================================================================


const SplashScreen = ({ navigation }) => {
  // UseEffect ======================================================================================
  useEffect(async () => {
    setTimeout(async () => {
         navigation.navigate("LoginScreen");
    }, 3000);
  });

  // Render ======================================================================================
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
       <Text style={styles.welcometxt}>Welcome To
       <Text style={[styles.welcometxt,{color:"purple"}]}> Demo App</Text></Text>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
 welcometxt:{
    fontSize:22,
    fontWeight:"bold",
    color:"black",
    textAlign:"center"
 }
});

export default SplashScreen;
