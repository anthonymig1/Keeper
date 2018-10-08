import React from 'react';
import { 
  StyleSheet
} from 'react-native';
import { View } from 'native-base';
import Login from './src/components/Login';

export default class App extends React.Component {
  
  render() {
    return (
      <View style = { styles.App }>
        <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  App:{
   flex: 1 
  }
});



// state = {
  //   fontLoaded: false
  // }
  // updateFont(){
  //   this.setState({
  //     fontLoaded: true
  //   });
  // }
  // async componentDidMount(){
  //   await Font.loadAsync({
  //     'Roboto': require('native-base/Fonts/Roboto.ttf'),
  //     'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  //     'Montserrat': require('./assets/Montserrat/Montserrat-Thin.ttf')
  //   });
  //   this.updateFont();
  // }