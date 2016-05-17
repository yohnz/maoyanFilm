import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
} from 'react-native';
 
export default class TabBar extends Component {
    constructor(props){
        super(props);
    }
    render() {
        var title = this.props.title;
        var image = this.props.image;
        if (title != null) {
            var itemTitle = (
                <Text style={styles.title}>{title}</Text>
            )
        }
        if (image != null) {
            var itemImage = (
                <Image style={styles.image} source={image}/>
            )
        }
        return (
            <TouchableHighlight style={styles.tabNav}              
                underlayColor="#B5B5B5"
                onPress={this.props.onPress}>
                <View style={styles.item}>
                    {itemImage}
                    {itemTitle}
                </View>
            </TouchableHighlight>
        );
    }
}
 
var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1
      
    },
    tabNav:{
        flex:1,
        backgroundColor:"#fff"
    },
   
    item: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },  
   
    image: {
        width: 20,
        height: 20,
        marginTop: 5,
        resizeMode: Image.resizeMode.stretch,
    },
    title: {
        fontSize: 12
    }
});