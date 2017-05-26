/**
 * App Navigation
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
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
import Login from '../login'
import Home from '../home'
import Order from '../order'
import AuthContainer from '../auth'
export default Actions.create(
  <Scene key="root">
    <Scene key="login" component={Login} title="Login" hideNavBar={false} />
    <Scene key="home" component={Home} initial hideNavBar/>

    <Scene key="auth" component={AuthContainer}>
    	<Scene key="order" component={Order} title="我的订单" hideNavBar={false} />
    </Scene>
  </Scene>
);

