import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { Styles } from '@theme/';
import { Button } from '@components/ui/';
import { doLogin } from '../auth/auth.action';

class Login extends Component {
  
  componentDidUpdate(prevProps) {
    // Alert.alert(String(this.props))
    const { dispatch, redirectUrl } = this.props;
    const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn;
    if (isLoggingIn) {
      Actions.pop();
    }
  }

  login() {
  	const {dispatch} = this.props;
    dispatch(doLogin('helloworld.'));
    // Alert.alert(String('this.props'))
  }

  render() {
    return (
      <View>
      	<Text style={[Styles.h2, Styles.padding]}>你需要先登录</Text>
      	<Button large icon={{name: 'edit'}} title={'假装一键登录'} onPress={this.login.bind(this)}/>
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    isLoggedIn: state.auth.isLoggedIn,
    redirectUrl: state.auth.currentURL,
  }
}
export default connect(mapStateToProps)(Login)
