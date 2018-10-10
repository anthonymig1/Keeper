import { createSwitchNavigator } from 'react-navigation';
import Login from '../../components/screens/Auth/Login/Login';
import Register from '../../components/screens/Auth/Register/Register';
export default createSwitchNavigator({
  Login: Login,
  Register: Register
},{
  initialRouteName: 'Login'
});