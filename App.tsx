
import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';




function App(): React.JSX.Element {
  const [randomBackGround, setRandomBackground] = useState("#ffffff")

  const generateColor = () => {
    const hexRang = "0123456789ABCDEF"
    let color = "#"

    for(let i=0;i<6;i++) {
      color += hexRang[Math.floor(Math.random() * 16)]
    }
    setRandomBackground(color)
  }


  return (
   <>
   <StatusBar backgroundColor={randomBackGround}/>
   <View style={[styles.container,{backgroundColor: randomBackGround}]}>
      <TouchableOpacity onPress={generateColor}>
        <View style={styles.actionBtn}>
          <Text style={styles.actionBtnTxt}>Perss me</Text>
        </View>
      </TouchableOpacity>
    </View>
   </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
  actionBtn:{
    borderRadius: 12,
    backgroundColor:"#6A1840",
    paddingHorizontal :40,
    paddingVertical: 10,
  },
  actionBtnTxt: {
    fontSize:24,
    color:"#FFFFFF",
    textTransform:"uppercase"
  },
});

export default App;
