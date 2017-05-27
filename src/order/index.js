import React, { Component } from 'react';
import { Text, View} from 'react-native';
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux';
import { AppStyles } from '@theme/';
import {Spacer, Button} from '@components/ui/';
import AuthUtil from '../utils/authUtil';

class Order extends Component {
	
  detail() {
  	Actions.orderdetail();
  }
  render() {
    return (
      <View style={AppStyles.padding}>
      		<Text style={AppStyles.h1}>我的订单页面</Text>
      		<Button large icon={{name: 'edit'}} title={'详情'} onPress={this.detail}/>
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    isLoggedIn: state.auth.isLoggedIn,
    redirectUrl:  state.auth.currentURL,
  }
}
export default connect(mapStateToProps)(Order);
