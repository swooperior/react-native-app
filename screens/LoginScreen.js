import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';

// Import the branding Logo / Title
import Branding from '../components/Branding';

// Import npm paper module
import { Card } from 'react-native-paper';

export default class LoginScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }
    static navigationOptions = {
      title: 'Log In',
    }; 
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
          
            <Branding />
          
          <Card style={styles.Card}>
            <TextInput style={styles.TextInput} placeholder="Username" onChangeText={(username) => this.setState({username})}/>
            <TextInput style={styles.TextInput} placeholder="Password" onChangeText={(password) => this.setState({password})}/>
          </Card>
          <View style={styles.buttons}>
            <View style={styles.buttonContainer}>
              <Button style={styles.Button} title="Log In" onPress={() => log_in(this)} />
            </View>
            <View style={styles.buttonContainer}>
              <Button style={styles.button} title="Register" onPress={() => register(this)} />
            </View>
          </View>
  
          <View style={styles.bottom}>
            <Button style={styles.Button} title="Forgot Password" />
          </View>
        </View>
      );
    }

  }

  // Log in function
  function log_in(ctx){
    var username = ctx.state.username;
    var password = ctx.state.password;

    console.log(ctx.state.username+' is logging in...');
    ctx.props.navigation.navigate('Menu');
  }

  function register(ctx){
      var username = ctx.state.username;
      var password = ctx.state.password;

  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    Card: {
      margin: 5,
    },
    TextInput: {
      margin: 5,
    },
    buttons: {
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    buttonContainer: {
      flex: 1,
    },
    bottom: {
      flex: 1,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginBottom: 36,
    },
  });
  
