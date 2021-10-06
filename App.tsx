import { StatusBar } from 'expo-status-bar';
import React , { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import  AppLoading from 'expo-app-loading';
import Header from './src/components/Header';
import Title from './src/components/Title';
import DispayAmount from './src/components/DisplayAmount';


const fetchFonts = ()=>{
  return Font.loadAsync({
    'PoppinsThin': require('./assets/fonts/Poppins-Thin.ttf'),
    'PoppinsBold': require('./assets/fonts/Poppins-Black.ttf'),
    'PoppinsMedium': require('./assets/fonts/Poppins-Medium.ttf'),
    'PoppinsSemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'PoppinsRegular': require('./assets/fonts/Poppins-Regular.ttf')
  });

}


export default function App() {
  const [ fontsLoaded, setFontsLoaded ] = useState(false);
  
  if(!fontsLoaded){
    return (<AppLoading
       startAsync={fetchFonts}
       onFinish={()=>{setFontsLoaded(true)}}
       onError={err => {console.log(err)}}
       />
    )}
  


  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Title username="Gilmara"/>
      <DispayAmount />
     
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems:'center',
    paddingTop:20
    
  },
});
