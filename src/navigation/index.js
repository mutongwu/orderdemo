/**
 * App Navigation
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import { Actions, Scene, ActionConst } from 'react-native-router-flux';

// Consts and Libs
// import { AppConfig } from '@constants/';

// // Components
// import Drawer from '@containers/ui/DrawerContainer';

// // Scenes
// import AppLaunch from '@containers/Launch/LaunchContainer';
// import Placeholder from '@components/general/Placeholder';
// import AuthScenes from './auth';
// import TabsScenes from './tabs';

// /* Routes ==================================================================== */
// export default Actions.create(
//   <Scene key={'root'} {...AppConfig.navbarProps}>
//     <Scene
//       hideNavBar
//       key={'splash'}
//       component={AppLaunch}
//       analyticsDesc={'AppLaunch: Launching App'}
//     />

//     {/* Auth */}
//     {AuthScenes}

//     {/* Main App */}
//     <Scene key={'app'} {...AppConfig.navbarProps} title={AppConfig.appName} hideNavBar={false} type={ActionConst.RESET}>
//       {/* Drawer Side Menu */}
//       <Scene key={'home'} component={Drawer} initial={'tabBar'}>
//         {/* Tabbar */}
//         {TabsScenes}
//       </Scene>

//       {/* General */}
//       <Scene
//         clone
//         key={'comingSoon'}
//         title={'Coming Soon'}
//         component={Placeholder}
//         analyticsDesc={'Placeholder: Coming Soon'}
//       />
//     </Scene>
//   </Scene>,
// );
// import { connect } from 'react-redux';
// import { View } from 'react-native';
import Login from '../login'
import Home from '../home'
import Order from '../order'
import OrderDetail from '../orderdetail'
import Placeholder from '../placeholder'
// import AuthContainer from '../auth'

// class App extends Component {
//   // static propTypes = {
//   //   children: PropTypes.object,
//   // }

//   componentDidUpdate(prevProps) {
//     const { dispatch, redirectUrl } = this.props;
//     // const {preLoggedIn = isLoggedIn} = prevState;
//     const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn;
//     const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn;
//     // console.log(isLoggingIn, redirectUrl, preLoggedIn)
//     if (isLoggingIn) {
//       dispatch(navigateTo(redirectUrl));
//     } else if (isLoggingOut) {
//       // do any kind of cleanup or post-logout redirection here
//     }
//   }
//   render() {
//     return (<Scene key="container">{this.props.children}</Scene>);
//   }
// }
// function mapStateToProps(state){
//   return {
//     isLoggedIn: state.auth.isLoggedIn,
//     redirectUrl:  state.auth.currentURL,
//   }
// }
// const MappedApp = connect(mapStateToProps)(App);

export default Actions.create(
  <Scene key="root" >
  	 
  	<Scene key="placeholder" component={Placeholder} hideNavBar initial />

    <Scene key="login" component={Login} title="Login" hideNavBar={false} />
    <Scene key="home" component={Home}  hideNavBar/>

    <Scene key="order" component={Order} title="我的订单" hideNavBar={false} />
    <Scene key="orderdetail" component={OrderDetail} title="订单详情" hideNavBar={false} hideTabBar  />
  </Scene>
);

