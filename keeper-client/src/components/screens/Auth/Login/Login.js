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
import { DissmissKeyBoard } from '../../../../helpers/helpers';
import fondo from '../../../../../assets/img/fondo.png';
import Theme from '../../../../theme';

export default class Login extends Component {
  state = {
    usuario: '',
    constraseña: ''
  }
  onLoginButtonPress = () => {
    const { navigation } = this.props;
    console.log(this.state);
    navigation.navigate('AppDrawer');
  }
  onRegisterButtonPress = () => {
    console.log('register');
    const { navigation } = this.props;
    navigation.navigate('Register'); 
  }
  onChangeTextUsuario = (value) => {
    this.setState({
      usuario: value
    });
  }
  onChangeTextContraseña = (value) =>{
    this.setState({
      constraseña: value
    });
  }
  render() {
    const { usuario , constraseña } = this.state;
    return (
      <DissmissKeyBoard>  
          <Container>
            <ImageBackground source={fondo} style = { styles.Container }>
              <View>
                <View style = { styles.Text }>
                  <Text style = { styles.Title }>KEEPER</Text>
                  <Text style = { styles.Subtitle }>PROXIMAMENTE</Text>
                </View>
                <Form style = { styles.Form }>
                  <Item floatingLabel last style = { styles.Item }>
                    <Label style = {styles.ItemText } >Usuario</Label>
                    <Input value = {usuario} onChangeText = { this.onChangeTextUsuario }/>
                  </Item>
                  <Item floatingLabel last style = { styles.Item }>
                    <Label style = {styles.ItemText }>Contraseña</Label>
                    <Input value = {constraseña} onChangeText = {this.onChangeTextContraseña}/>
                  </Item>
                  <View style = { styles.Buttons }>
                    <TouchableHighlight
                      underlayColor = { Theme.primaryDark }
                      onPress = { this.onLoginButtonPress }
                      style = { styles.ButtonLogin }>
                      <Text style = {styles.ButtonLoginText } >Iniciar Sesion</Text>
                    </TouchableHighlight>
                    <TouchableNativeFeedback
                      onPress = { this.onRegisterButtonPress }>
                      <Text style = { styles.RegisterText}> Registrate </Text>
                    </TouchableNativeFeedback>
                  </View>
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
    marginTop: -85,
    width: '55%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text:{
    marginBottom: 100
  },
  Title:{
    color: Theme.fontPrimary,
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
    backgroundColor: Theme.fontPrimary,
    borderBottomColor: Theme.primary,
    opacity: 0.6,
    marginVertical: 20
  },
  ItemText:{
    fontSize: 15,
  },
  Buttons:{
    marginTop: 30

  },
  ButtonLogin:{
    marginTop: 10,
    width: 120,
    height: 32,
    backgroundColor: Theme.primary,
    justifyContent: 'center',
    borderRadius: 5
  },
  ButtonLoginText:{
    color: Theme.fontPrimary,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  RegisterText:{
    marginTop: 10,
    color: Theme.info,
    textDecorationLine: 'underline'
  }
});
