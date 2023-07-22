import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { StyleSheet } from "react-native";
import hexToHSL from "../helpers/hexToHSL";

export default function Background(props: any) {
  // const [backgroundGradient, setBackgroundGradient] = useState('#535669');
  // const [backgroundGradient, setBackgroundGradient] = useState('#ebb53f');
  const changedColor = hexToHSL('#FFFFFF');

  return (
    <LinearGradient
    // Background Linear Gradient
    colors={[`hsl(40, 50%, ${100-props.brightness/2}%)`, '#11131f']}
    style={styles.background}
    // start={{ x: 0, y: 0 }}
    // end={{ x: 1, y: 1 }}
    // locations={[0.1,1.1]}
    >{props.children}
    </LinearGradient>)
}

const styles = StyleSheet.create({
  background:{
      flex:1,
  }
})