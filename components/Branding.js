import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Branding extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    height: 64,
    width: 140,
  }
});
