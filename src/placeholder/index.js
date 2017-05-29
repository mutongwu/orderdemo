import React, { Component } from 'react';
import { Text, View} from 'react-native';
import { connect } from 'react-redux';
import {Actions, ActionConst} from 'react-native-router-flux';
import AuthUtil from '../utils/authUtil';
import { doAuthCheck } from '../auth/auth.action';
class Placeholder extends Component {
	
  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(doAuthCheck());
  }
  componentDidMount() {
    Actions.home({ type: ActionConst.REPLACE });
  }
  render() {
    return (
      <View></View>
    );
  }
}

export default connect()(Placeholder);
