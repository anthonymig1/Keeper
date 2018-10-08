import React, { Component } from 'react';
import { StyleSheet, View, Text , TouchableHighlight } from 'react-native';


class Login extends Component {

  state = {
    actived: false
  }
  onLogin = ()=>{
    console.log(':v');
  }
  

  render() {
    return (
      <View>
        <TouchableHighlight 
          underlayColor = '#ff00ff'
          onPress = { this.onLogin }
          style = { [ styles.noactived , this.state.actived? styles.actived:{}] }
          onHideUnderlay = {()=> this.setState({ actived : false })}
          onShowUnderlay = {()=> this.setState({ actived : true })}
          >
          <Text style = { {
            fontFamily: 'Montserrat'
          }}>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  actived:{
    borderColor: "#000066",
    backgroundColor: "#000066",
    borderWidth: 1,
    borderRadius: 10
  },
  noactived: {
    borderColor: "#000066",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10
  }
});
export default Login;
