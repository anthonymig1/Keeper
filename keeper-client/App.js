import React from 'react';
import { StyleSheet, View , Text, TouchableHighlight} from 'react-native';
import { Container, Form, Item, Label, Input } from 'native-base';

export default class App extends React.Component {
  
  render() {
    return (
      <Container style={ styles.Container }>
        <Form style = { styles.Form }>
          <Item floatingLabel last style = { styles.Item }>
            <Label style = {styles.ItemText } >Usuario</Label>
            <Input />
          </Item>
          <Item floatingLabel last style = { styles.Item }>
            <Label style = {styles.ItemText }>Contraseña</Label>
            <Input />
          </Item>
          <TouchableHighlight
            underlayColor = '#bf360c'
            onPress = { ()=> console.log('Login Presionado')}
            style = { styles.ButtonLogin }>
            <Text style = {styles.ButtonLoginText } >Iniciar Sesion</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress = { ()=> console.log('Registro Presionado')}>
            <Text style = { styles.RegisterText}> Registrate </Text>
          </TouchableHighlight>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  Container:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  Form: {
    marginTop: 180,
    width: '55%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Item:{
    backgroundColor: 'white',
    borderBottomColor: 'orange',
    opacity: 0.6,
    marginVertical: 20
  },
  ItemText:{
    fontSize: 15,
  },
  ButtonLogin:{
    marginTop: 10,
    width: 120,
    height: 32,
    backgroundColor: 'orange',
    justifyContent: 'center',
    borderRadius: 5
  },
  ButtonLoginText:{
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  RegisterText:{
    marginTop: 10,
    color: 'lightskyblue',
    textDecorationLine: 'underline'
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