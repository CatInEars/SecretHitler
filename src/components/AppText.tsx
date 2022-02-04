import React from 'react';
import {Text, StyleSheet, TextStyle} from 'react-native';

interface IAppTextProps {
  size?: number;
  weight?: TextStyle['fontWeight'];
  color?: TextStyle['color'];
  children?: string;
  style?: TextStyle;
}

export function AppText({
  color,
  size = 16,
  weight = 'normal',
  children,
  style = {},
}: IAppTextProps) {
  return (
    <Text
      style={StyleSheet.flatten([
        styles.text,
        {color, fontWeight: weight, fontSize: size},
        style,
      ])}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    // fontFamily: 'Arial',
  },
});
