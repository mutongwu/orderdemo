import React, { Component } from 'react';
import { Text, View} from 'react-native';
import { AppStyles } from '@theme/';
import {Spacer, Button} from '@components/ui/';

export default class Order extends Component {
  myOrder() {

  }
  render() {
    return (
      <View style={AppStyles.padding}>
      		<Text style={AppStyles.h1}>我的订单页面</Text>
      </View>
    );
  }
}
