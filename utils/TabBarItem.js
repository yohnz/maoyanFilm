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
            <TouchableHighlight
                style={{flex:1}}
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
    appContainer: {
        //flex: 1,
        overflow: 'hidden',
        backgroundColor: '#dddddd',
    },
    item: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabs: {
        height: 50,
        backgroundColor: '#F888FF'
    },
    messageText: {
        fontSize: 12,
        fontWeight: '500',
        padding: 15,
        marginTop: 50,
        marginLeft: 15,
    },
    scene: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#EAEAEA',
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