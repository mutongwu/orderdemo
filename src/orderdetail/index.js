import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux';
import { Text, View, Image, ScrollView} from 'react-native';
import { AppStyles, AppSizes } from '@theme/';
import {Spacer, Button} from '@components/ui/';

export default class OrderDetail extends Component {
  detail() {
  	// Actions.orderdetail();
  }
  render() {
    const {initData} = this.props;
    return (
      <ScrollView>
      <View style={[AppStyles.padding, {marginBottom:10}]}>
      		<View style={[AppStyles.border, AppStyles.paddingSml]}>
            <Text style={[AppStyles.h5, AppStyles.borderBottom]}>订单信息</Text>
            <Text style={AppStyles.p}>订单编号：{initData.num}</Text>
            <Text style={AppStyles.p}>下单时间：2016-11-09</Text>
            <Text style={AppStyles.p}>支付方式：支付宝</Text>
            <Text style={AppStyles.p}>订单状态：{initData.status}</Text>
          </View>
          
          <View style={[AppStyles.border, AppStyles.paddingSml, {marginBottom:10}]}>
            <Text style={[AppStyles.h5, AppStyles.borderBottom]}>商品信息</Text>
            
              <View style={{flexDirection: 'row'}}>
                <View style={{width:90}}>
                  <Image source={{uri: initData.img}} style={{width:80, height:80}}/>
                </View>
                <View style={{width:AppSizes.screen.width - 140}}>
                  <Text style={[AppStyles.p]}>{initData.goodsName}</Text>
                  <Text>{initData.size}</Text>
                  <Text style={AppStyles.p}>金额：<Text style={[AppStyles.strong,{color:'#ff0000'}]}>{initData.price}</Text></Text>
                </View>
              </View>
          </View>

          <View style={[AppStyles.border, AppStyles.paddingSml, {marginBottom:10}]}>
            <Text style={[AppStyles.h5, AppStyles.borderBottom]}>收货信息</Text>
            <Text style={AppStyles.p}>收 货 人：张三李四</Text>
            <Text style={AppStyles.p}>手机号码：13800138000</Text>
            <Text style={AppStyles.p}>收货地址：广东省.广州市.荔湾区.花海街20号</Text>
            <Text style={AppStyles.p}>收货时间：不限</Text>
          </View>

          <View style={[AppStyles.border, AppStyles.paddingSml, {marginBottom:10}]}>
            <Text style={[AppStyles.h5, AppStyles.borderBottom]}>价格信息</Text>
            <Text style={AppStyles.p}>总金额：{initData.price}</Text>
            <Text style={AppStyles.p}>运费：0.00</Text>
            <Text style={AppStyles.p}>活动优惠：0.00</Text>
            <Text style={AppStyles.p}>应付金额：{initData.price}</Text>
          </View>
          <Spacer size={10}></Spacer>
      </View>
      </ScrollView>
    );
  }
}
