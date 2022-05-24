import bgImage from'./images/5.jpg';
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground
} from "react-native";
const image={uri:"./images/5.jpg"}

 
export default function Reset() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
 
  return (
    <View style={styles.container}>
        <ImageBackground  source={bgImage} resizeMode="cover" style={styles.image} >
     
       <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          
        />
      </View>
      
      
 
      <TouchableOpacity style={styles.SendBtn} >
        <Text style={styles.loginText}>Send</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: "#fff",
    
    
  },
 
  image: {
    flex: 1,
    width:'100%',
  
    alignItems: "center",
    justifyContent: "flex-start",
  },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    marginTop:30,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  
 
  SendBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});
