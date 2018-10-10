import {
  createSwitchNavigator
} from 'react-navigation';
import AuthSwitch from './AuthSwitch';
import AppDrawer from './AppDrawer';
import AuthLoading from '../components/screens/Auth/AuthLoading/AuthLoading';

const Routes = createSwitchNavigator({
  AuthLoadingScreen: AuthLoading,
  AuthSwitch: AuthSwitch,
  AppDrawer: AppDrawer
},{
  initialRouteName: 'AuthSwitch'
});

export default Routes;