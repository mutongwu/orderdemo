import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Styles } from '@theme/';
import { Button } from '@components/ui/';

export default class Login extends Component {
  login() {
  	
  }
  render() {
    return (
      <View>
      	<Text style={[Styles.h2, Styles.padding]}>假装一键登录</Text>
      	<Button large icon={{name: 'edit'}} title={'登录'} onPress={this.login}/>
      </View>
    );
  }
}
