import React from 'react';
import Routes from './src/routes';

export default class App extends React.Component {
  
  render() {
    return (
      <Routes/>      
    );
  }
}

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