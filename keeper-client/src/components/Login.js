import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  ImageBackground
} from 'react-native';
import { Label, Input, Container , Form, Item } from 'native-base';
import { DissmissKeyBoard } from '../helpers/helpers';


class Login extends Component {

  render() {
    return (
      <DissmissKeyBoard>  
          <Container>
            <ImageBackground source={require('../../assets/img/fondo.png')} style = { styles.Container }>
              <View>
                <Text style = { styles.Title }>KEEPER</Text>
                <Text style = { styles.Subtitle }>PROXIMAMENTE</Text>
                <Form style = { styles.Form }>
                  <Item floatingLabel last style = { styles.Item }>
                    <Label style = {styles.ItemText } >Usuario</Label>
                    <Input/>
                  </Item>
                  <Item floatingLabel last style = { styles.Item }>
                    <Label style = {styles.ItemText }>Contraseña</Label>
                    <Input/>
                  </Item>
                  <TouchableHighlight
                    underlayColor = '#bf360c'
                    onPress = { ()=> console.log('Login Presionado')}
                    style = { styles.ButtonLogin }>
                    <Text style = {styles.ButtonLoginText } >Iniciar Sesion</Text>
                  </TouchableHighlight>
                  <TouchableNativeFeedback
                    onPress = { ()=> console.log('Registro Presionado')}>
                    <Text style = { styles.RegisterText}> Registrate </Text>
                  </TouchableNativeFeedback>
                </Form>
              </View>
            </ImageBackground>
          </Container>
        </DissmissKeyBoard >
    );
  }
}
const styles = StyleSheet.create({
  Container:{
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1
  },
  Form: {
    marginTop: 180,
    width: '55%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title:{
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    letterSpacing: 8,
    opacity: 0.8
  },
  Subtitle:{
    textAlign: 'center',
    fontSize: 11,
    opacity: 0.5
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
export default Login;
