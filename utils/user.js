import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';


export default class film extends Component {


    render() {
        return (
            <View style={styles.test}>
               <View><Text>user</Text></View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
  test: {
    flexDirection: 'column',
    overflow:'visible'
  },
 
});