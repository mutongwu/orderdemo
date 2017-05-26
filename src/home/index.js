import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux';
import { Text, View} from 'react-native';
import { Styles } from '@theme/';
import {Spacer, Button} from '@components/ui/';

export default class Home extends Component {
  myOrder() {
    Actions.login();
  }
  render() {
    return (
      <View style={Styles.padding}>
      		<Text style={Styles.h1}>react-native demo</Text>
      		<Text style={Styles.h2, Styles.paddingLeft}>技术应用：</Text>
      		<Text style={Styles.p, Styles.paddingLeft}>react-native-router-flux</Text>
      		<Text style={Styles.p, Styles.paddingLeft}>redux/thunk</Text>
      		<Text style={Styles.p, Styles.paddingLeft}>react-native-elements</Text>
  		    <Spacer size={10} />
		    <Button icon={{name: 'list', size: 28}} title={'我的订单'} onPress={this.myOrder}/>
      </View>
    );
  }
}
