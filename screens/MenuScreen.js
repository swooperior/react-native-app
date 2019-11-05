import * as React from 'react';
import {View, Button, Dimensions, ImageBackground, Image} from 'react-native';

export default class MenuScreen extends React.Component {

    static navigationOptions = {
      title: 'K2 Prestige Hire',
    }; 
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={{ flex: 1 }}>
          <ImageBackground source={require('../assets/lambo.jpg')} 
          style={{ alignItems: 'center',
          justifyContent: 'center',
          flex: 1 }}>
          <Button title="Vehicles" onPress={() => this.props.navigation.navigate('Vehicles')}></Button>
          </ImageBackground>
          <View style={{ flex: 1 }}>
      <ImageBackground source={require('../assets/kb.jpg')}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: Dimensions.get('window').height / 2
        }}>
        <Button title="Apartments" onPress={() => this.props.navigation.navigate('Apartments')}></Button>
      </ImageBackground>
  </View>
</View>
      );
    }
}