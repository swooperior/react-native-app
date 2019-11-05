// Nav stuff
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './screens/LoginScreen';
import MenuScreen from './screens/MenuScreen';
import ProfileScreen from './screens/ProfileScreen';
import ApartmentsScreen from './screens/ApartmentsScreen';
import VehiclesScreen from './screens/VehiclesScreen';



const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Menu: {screen: MenuScreen},
  Profile: {screen: ProfileScreen},
  Apartments: {screen: ApartmentsScreen},
  Vehicles: {screen: VehiclesScreen}
},
{
  initialRouteName: 'Login',
  /* The header config from HomeScreen is now here */
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#000',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

const App = createAppContainer(MainNavigator);

export default App;





