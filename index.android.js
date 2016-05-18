/**
 * https://github.com/yohnz/maoyanFilm
 */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Index from "./main";

class film extends Component {
    render() {
        return (
            <Index />
        );
    }
}

AppRegistry.registerComponent('film', () => film);
