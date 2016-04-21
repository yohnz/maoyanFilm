import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    ToolbarAndroid,
    ListView,
    Image,
    TouchableOpacity,
    WebView,
} from 'react-native';


export default class sale extends Component{
    
    render(){        
        return(
            <View style={styles.container}>
               <WebView 
               url={'http://m.maoyan.com/#tmp=showcinemas&movieid=247458'}
                startInLoadingState={true}
                domStorageEnabled={true}
                javaScriptEnabled={true}
               >
               
               </WebView>
                              
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container:{
        flex:1
    }
})