'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import FilmList from "./filmList";
// import CinemaList from "./utils/cinemaList.js";

export default class main extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'index', component: FilmList }}
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


