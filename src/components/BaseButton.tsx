import React from 'react';
import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {Colors} from '../consts/Colors';
import {AppText} from './AppText';

interface IBaseButtonProps {
  onPress: () => void;
  style?: ViewStyle;
  children?: string;
}

export function BaseButton({onPress, style = {}, children}: IBaseButtonProps) {
  return (
    <TouchableOpacity
      style={StyleSheet.flatten([styles.button, style])}
      onPress={onPress}>
      <AppText style={styles.buttonText}>{children}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.white,
    width: 200,
    height: 40,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  buttonText: {
    textTransform: 'uppercase',
  },
});
