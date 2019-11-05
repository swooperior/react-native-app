import * as React from 'react';
import {WebView} from 'react-native';

export default class ApartmentsScreen extends React.Component {
  
    static navigationOptions = {
      title: 'Apartments',
    }; 
    render() {
      const {navigate} = this.props.navigation;
      return (
        <WebView
        source={{uri: 'https://servicedapartmentlondon.uk'}}
        //style={{marginTop: 20}} 
        />

      );
    }
}