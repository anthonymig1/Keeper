import React, { Component } from 'react'
import { 
  Text,
  View,
  ImageBackground,
  TouchableHighlight,
  TouchableNativeFeedback,
  StyleSheet
} from 'react-native'
import { 
  Container,
  Form,
  Item,
  Label,
  Input
} from 'native-base';
import { DissmissKeyBoard } from '../../../../helpers/helpers';

import Theme from '../../../../theme';

export default class Register extends Component {
  render() {
    return (
      <DissmissKeyBoard>  
          <Container style = {styles.Container}>
            <Text style= {styles.Title}>Crear una cuenta</Text>
            <Form style = { styles.Form }>
              <Item floatingLabel last style = {styles.Item }>
                <Label style = {styles.ItemText}>Nombre de Usuario</Label>
                <Input />
              </Item>
              <Item floatingLabel last style = {styles.Item }>
                <Label style = {styles.ItemText}>Correo Electronico</Label>
                <Input />
              </Item>
              <Item floatingLabel last style = {styles.Item }>
                <Label style = {styles.ItemText}>Contraseña ( 6 Caracteres a mas )</Label>
                <Input />
              </Item>
              <View style = {styles.firstAuth}>
                <View style = { styles.firstAuthLeft }>
                  <Text style = { styles.firstAuthLeftAsk }>¿Tienes una cuenta?</Text>
                  <Text style = { styles.firstAuthLeftLogin }>Iniciar Session</Text>
                </View>
                <View style = { styles.firstAuthRight }>
                  <TouchableHighlight style = { styles.ButtonRegister }>
                    <Text style = {styles.ButtonRegisterText}>REGISTRAR</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Form>
          </Container>
        </DissmissKeyBoard >
    )
  }
}
const styles = StyleSheet.create({
  Container:{
    alignItems: 'center',
    backgroundColor: Theme.primary,
  },
  Title:{
    paddingTop: 35,
    color: Theme.fontPrimary,
    fontSize: 25,
    fontWeight: 'bold'
  },
  Form: {
    marginTop: 10,
    width: '88%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Item:{
    marginVertical: 10,
    borderBottomColor: Theme.primaryDark,
    backgroundColor: Theme.primaryLight,
    opacity: 0.8
  },
  ItemText:{
    fontSize: 12,
    color: Theme.fontPrimary
  },
  firstAuth:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70
  },
  firstAuthLeft:{
    
  },
  firstAuthLeftAsk:{
    color: 'white',
    fontWeight: 'bold'
  },
  firstAuthLeftLogin:{
    marginTop: 10,
    color: Theme.info,
    textDecorationLine: 'underline'
  },
  firstAuthRight:{
    
  },
  ButtonRegister:{
    padding: 15,
    backgroundColor: Theme.secundary,
  },
  ButtonRegisterText:{  
    color: 'white',
    fontWeight: 'bold'
  }
});
