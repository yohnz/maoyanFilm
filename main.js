import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

import Main from "./utils/pageNav";
import CinemaNav from "./utils/cinemaNav";
import User from "./utils/user";
import TabBarItem from "./utils/TabBarItem";

var _getRandomRoute = function (str) {
    return {
        randNumber: str,
    };
} 

var ROUTE_STACK = [
    _getRandomRoute('Main'),
    _getRandomRoute('CinemaNav'),
    _getRandomRoute('User'),
];

var routeIndex = 0;

export default class film extends Component {
    constructor(props, params) {
        super(props);
        this.state = {
            tabIndex: 0
        }
    }

    render() {        
        return (
            <Navigator
                initialRoute={ROUTE_STACK[routeIndex]}
                // configureScene={(route) => {
                //     return Navigator.SceneConfigs.FadeAndroid;
                // } }
                renderScene={this.renderScene}
                navigationBar={
                    this.TabBar()
                }
                 initialRouteStack={ROUTE_STACK}
                 ref={(navigator) => {
                  this._navigator = navigator;
                }}
                />
        );
    }
    renderScene(route, navigator){       
        var pages =[
            <Main {...route.params} />,
            <CinemaNav {...route.params}  />,
            <User {...route.params}  />,
        ]
       return (
           pages[routeIndex]
       )
       
    }
    TabBar() {
        return (
            <View style={styles.tabs }>
                <TabBarItem
                    underlayColor="#B5B5B5"
                    image={require("./images/film.png") }
                    title="影片"
                    onPress={() => {
                        this.onTabIndex(0);
                         this.setState({tabIndex:0})
                    } }>
                    ></TabBarItem>
                <TabBarItem
                    underlayColor="#B5B5B5"
                    image={require("./images/cinema.png") }
                    title="影院"
                    onPress={() => {
                        this.onTabIndex(1);
                         this.setState({tabIndex:1})
                    } }>
                    ></TabBarItem>
                 <TabBarItem
                    underlayColor="#B5B5B5"
                    image={require("./images/me.png") }
                    title="我"
                    onPress={() => {
                        this.onTabIndex(2);
                        this.setState({tabIndex:2})
                    } }>
                    ></TabBarItem>
            </View>
        )
    }
    onTabIndex(_index){        
        routeIndex = _index;
        // this._navigator.jumpTo(ROUTE_STACK[routeIndex]);
    }
}

const styles = StyleSheet.create({
    tabs:{
        flexDirection:"row"
    }
});