import React,{Component } from 'react';
import {ImageBackground,StyleSheet,View,TouchableOpacity,Text,Image } from 'react-native';
import bgImage from './images/5.jpg';


const image={uri:"./images/5.jpg"}


function Home (props) {
    
    function onLoginPressed(){
        props.navigation.navigate('Login');
    }
    
        return (
            < View  style={styles.container}>
                
                <ImageBackground  source={bgImage} resizeMode="cover" style={styles.image} >
                    <Image source={require("./images/3.png")} style={styles.class}/>
                   
                <TouchableOpacity style={styles.loginBtn}onPress={onLoginPressed} >
                <Text style={styles.loginText}>Login</Text>
               </TouchableOpacity>
               </ImageBackground>
               
            </View>
        );
    
  }
  const styles=StyleSheet.create({
      class :{
          marginTop:30
      },
    container: {

        flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
        },
      
      image:{
        flex: 1,
        width:'100%',
      
        alignItems: "center",
        justifyContent: "flex-start",
        
        
      },
      
      text:{
          fontSize:15,
          fontWeight:'bold'
        },
        loginBtn: {
            width: "80%",
            borderRadius: 25,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 40,
            backgroundColor: "#FF1493",
          },
      

  });
  export default Home;