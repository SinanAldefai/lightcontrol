import { useEffect, useState } from "react";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";

export type IconProps = {
  color?: string,
  glyph?: string,
  size?: number,
  border?: boolean,
}
//custom-devices/light-led-strip


export const Icon: React.FC<IconProps> = ({ color, glyph, size, border }) => {
  let dynamicGlyphPath;
  if (glyph) {
    switch (glyph) {
      case 'light-led-strip':
        dynamicGlyphPath = require('../../assets/glyphs/custom-devices/light-led-strip.png');
        break;
      case 'light-standing5':
        dynamicGlyphPath = require('../../assets/glyphs/custom-devices/light-standing5.png');
        break;
      default:
        console.error(`Unknown glyph: ${glyph}`);
        break;
    }
  }

  return(
    <Image
    style={[{
      width: size || 30,
      height: size || 30,
      borderRadius: border ? 10 : 0,
      tintColor: color || 'white'
    },
      styles.devicesIcon]}
    // tintColor={tintColor}
    source={dynamicGlyphPath}
    />
  )
}

const styles = StyleSheet.create({
  devicesIcon:{
    marginTop: -7,
  },
})
