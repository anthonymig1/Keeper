import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Spinner, Container} from 'native-base';
import Theme from '../../../../theme';
export default class AuthLoading extends Component {
  componentDidMount(){
    setTimeout(()=>{
      this.props.navigation.navigate('Login');
    },1000);
  }
  render() {
    return (
      <Container style = { styles.Container }>
        <Spinner color = {Theme.primary}/>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  Container:{
    justifyContent: 'center',
    alignItems: 'center',
  }
});