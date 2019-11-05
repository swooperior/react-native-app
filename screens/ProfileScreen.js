import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
export default class ProfileScreen extends React.Component {
    static navigationOptions = {
      title: 'Profile',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Go to Reece's profile"
          onPress={() => navigate('Profile', {name: 'Reece'})}
        />
      );
    }
  }