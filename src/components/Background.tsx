import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { StyleSheet } from "react-native";

export default function Background(props: any) {
  // const [backgroundGradient, setBackgroundGradient] = useState('#535669');
  // const [backgroundGradient, setBackgroundGradient] = useState('#ebb53f');

  const color = `hsl(40, 50%, ${100-props.brightness/2}%)`;

  return (
    <LinearGradient
    // Background Linear Gradient
    colors={[color, '#11131f']}
    style={styles.background}
    locations={[0,0.3]}
    start={{x: 0, y: 0}}
    end={{x: 0, y:0}}
    >{props.children}
    </LinearGradient>)
}

const styles = StyleSheet.create({
  background:{
      flex:1,
  }
})