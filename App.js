import { StatusBar } from 'expo-status-bar';
import {useCallback} from "react";
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import AppButton from "./Components/AppButton";
import Logo from './assets/nctb.png';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();


export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat': require('./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
      return null;
    }


  return (
    <ScrollView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>All NCTB Books Class(1-10)</Text>
        </View>
        <View style={styles.imageCont}>
            <Image style={styles.logo} source={Logo}/>
        </View>
        <View style={styles.buttons}>
            <AppButton text="Class 1"/>
            <AppButton text="Class 2"/>
            <AppButton text="Class 3"/>
            <AppButton text="Class 4"/>
            <AppButton text="Class 5"/>
            <AppButton text="Class 6"/>
            <AppButton text="Class 7"/>
            <AppButton text="Class 8"/>
            <AppButton text="Class (9-10)"/>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    header:{
        paddingVertical:32,
        paddingHorizontal:30,
        width:"100%",
        backgroundColor:"black",
    },
    headerText:{
       color:"white",
       fontSize:19,
       fontWeight:"bold",
       fontFamily:"Montserrat"
    },
    logo:{
        height:200,
        width:200
    },
    imageCont:{
        height:300,
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    buttons:{
        width:"100%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        flexGap:"8px"
    },
});
