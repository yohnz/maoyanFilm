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
    ScrollView,
    Platform
} from 'react-native';

// toolbar
export default class Toolbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={Platform.OS === 'ios' ? styles.toolbarIos : styles.toolbar}>
                <TouchableOpacity style={styles.backView} onPress={this.back.bind(this) } >
                    <View style={styles.backIcon} ></View>
                    <Text style={styles.backText}>返回</Text>
                </TouchableOpacity>
                <Text style={styles.title}>{this.props.name}</Text>
            </View>
        )
    }
    back() {
        this.props.navigator.pop();
    }
}

class ToolbarHome extends Component {
    render() {
        return (
            <View style={Platform.OS === 'ios' ? styles.toolbarIos : styles.toolbar}>                
                <Image source={require("../images/logo.png") } style={styles.logo}></Image>
            </View>
        )
    }
}

export {ToolbarHome};

var styles = StyleSheet.create({

    toolbar: {
        height: 40,
        backgroundColor: "#e54847",
        alignItems: 'center',
        flexDirection: 'row',
    },
    toolbarIos: {
        height: 40,
        backgroundColor: "#e54847",
        alignItems: 'center',
        flexDirection: 'row',
        marginTop:30
    },
    logo:{
        width:30,
        height:30,
        marginLeft:10
    },
    backIcon: {
        borderLeftWidth: 1,
        borderTopWidth: 1,
        height: 12,
        width: 12,
        borderColor: "#fff",
        marginLeft: 20,
        transform: [{ rotate: "-45deg" }]
    },
    title: {
        flex: 1,
        color: "#fff",
        textAlign: "center",
    },
    backText: {
        color: "#fff"
    },
    backView: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})