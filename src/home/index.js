import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Text, View, Alert} from 'react-native';
import { Styles } from '@theme/';
import {Spacer, Button} from '@components/ui/';
import { doLogout } from '../auth/auth.action';

class Home extends Component {
  myOrder() {
    // Alert.alert(String(this.props.isLoggedIn));
    if (this.props.isLoggedIn) {
      Actions.order();  
    } else {
      Actions.login();
    }
  }
  logout() {
    const {dispatch} = this.props;
    dispatch(doLogout());
  }
  login() {
    Actions.login();
  }
  render() {
    const {isLoggedIn} = this.props;
    return (
      <View style={Styles.padding}>
      		<Text style={Styles.h1}>react-native demo</Text>
      		<Text style={Styles.h2, Styles.paddingLeft}>技术应用：</Text>
      		<Text style={Styles.p, Styles.paddingLeft}>react-native-router-flux</Text>
      		<Text style={Styles.p, Styles.paddingLeft}>redux/thunk</Text>
      		<Text style={Styles.p, Styles.paddingLeft}>react-native-elements/react-native-vector-icons</Text>
  		    <Spacer size={10} />

		      <Button icon={{name: 'list', size: 28}} title={'我的订单'} onPress={ this.myOrder.bind(this)}/>
          <Spacer size={10} />
          {isLoggedIn && <Button icon={{name: 'close', size: 28}} title={'退出登录'} onPress={ this.logout.bind(this)}/>}
          <Spacer size={10} />
          {!isLoggedIn && <Button icon={{name: 'redo', size: 28}} title={'登录'} onPress={ this.login.bind(this)}/>}
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
export default connect(mapStateToProps)(Home);
