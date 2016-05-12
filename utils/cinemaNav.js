'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import CinemaList from "./cinemaList";
// import CinemaList from "./utils/cinemaList.js";

export default class main extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'cinema', component: CinemaList }}
        // configureScene={(route) => {
        //   return Navigator.SceneConfigs.VerticalUpSwipeJump;
        // } }
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator}  />
        } }

        />
    );
  }
}

