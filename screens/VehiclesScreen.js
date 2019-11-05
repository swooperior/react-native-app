import * as React from 'react';
import {WebView} from 'react-native';

export default class VehiclesScreen extends React.Component {
   
    static navigationOptions = {
      title: 'Vehicles',
    }; 
    render() {
      const {navigate} = this.props.navigation;
      return (
        <WebView
        source={{uri: 'https://k2prestigecarhire.co.uk'}}
        //style={{marginTop: 20}} 
        />

      );
    }
}