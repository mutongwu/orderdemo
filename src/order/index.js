import React, { Component } from 'react';
import { Text, View, ListView} from 'react-native';
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux';
import { AppStyles } from '@theme/';
import {Spacer, Button, List, ListItem} from '@components/ui/';
import AuthUtil from '../utils/authUtil';

class Order extends Component {
	constructor(props) {
    super(props);
    
    this.state = {
      
    };
  }
  goDetail(data) {
  	Actions.orderdetail({initData: data});
  }
  render() {
    const {orderData} =  this.props;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
    const dataSource =  ds.cloneWithRows(orderData)
    return (
      <List >
        <ListView
          dataSource={dataSource}
          renderRow={(item) => {
            return (
              <View style={[AppStyles.paddingTop, AppStyles.paddingLeft]}>
                <Text style={[AppStyles.strong]}>订单号：{item.num}</Text>
                <ListItem key={item.id} 
                  title={item.goodsName} 
                  subtitle={item.size} 
                  avatar={typeof item.img === 'string' ? {uri: item.img} : item.img}
                  onPress={() => this.goDetail(item)}
                  />
              </View>
            )
          }}
        />
      </List>
    );
  }
}

function mapStateToProps(state){
  return {
    isLoggedIn: state.auth.isLoggedIn,
    redirectUrl:  state.auth.currentURL,
    orderData: state.order.orderData
  }
}
export default connect(mapStateToProps)(Order);
