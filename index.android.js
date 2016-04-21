import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import homepage from "./utils/filmList";
// import homepage from "./utils/loadPage";


class film extends Component {
  render() {

    return (
      <Navigator
        initialRoute={{ name: 'index', component: homepage }}
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

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('film', () => film);
