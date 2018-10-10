import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from "react-native";

const DissmissKeyBoard = ({ children }) => (
  <TouchableWithoutFeedback onPress = { () => Keyboard.dismiss() }>
    { children }
  </TouchableWithoutFeedback>
)

export {
  DissmissKeyBoard
}