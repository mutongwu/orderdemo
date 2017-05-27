import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux';
import { Text, View} from 'react-native';
import { AppStyles } from '@theme/';
import {Spacer, Button} from '@components/ui/';

export default class OrderDetail extends Component {
  detail() {
  	// Actions.orderdetail();
  }
  render() {
    return (
      <View style={AppStyles.padding}>
      		<Text style={AppStyles.h1}>订单详情页面</Text>
      </View>
    );
  }
}
