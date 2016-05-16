'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Alert,
    TouchableOpacity
} from 'react-native';
import Toolbar, {ToolbarHome} from "./Toolbar";
export default class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <View style={styles.container}>
                <ToolbarHome />
                <View style={styles.wrap}>
                    <TextInput
                        style={styles.input}
                        multiline={true}
                        placeholder="用户名"
                        />
                    <TextInput
                        style={styles.input1}
                        placeholder="密码"
                        secureTextEntry={true}
                        />

                    <TouchableOpacity style={styles.btn} onPress={() => this.sale()}>
                        <Text style={styles.btnText}>登录</Text>
                    </TouchableOpacity>

                    <View style={styles.options}>
                        <Text style={styles.unlogin}>无法登录?</Text>
                        <Text style={styles.newUser}>新用户</Text>
                    </View>
                </View>
            </View>
        )
    }
    sale(){
        Alert.alert("提示","没有API,暂无登录功能！")
    }
}


let styles = StyleSheet.create({
    wrap: {
        backgroundColor: "#eee",
        flex: 1,
        marginTop:30,        
    },
    qq: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 40,
        borderRadius: 40,
        marginBottom: 20
    },
    input: {
        height: 40,
        borderWidth: 0,
        backgroundColor: '#fff',
        marginTop: 2,
        textAlign: 'center'
    },
    input1: {
        height: 40,
        borderWidth: 0,
        backgroundColor: '#fff',
        marginTop: 1,
        textAlign: 'center'
    },
    btn: {
        backgroundColor: "#df2d2d",
        height: 40,
        borderRadius: 4,
        marginLeft:10,
        marginRight:10,
        marginTop:30,      
        justifyContent: 'center',
    },
    btnText: {
        textAlign: 'center',
        color: '#fff'
    },
    options: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop:30
        
    },
    unlogin: {
        color: '#63B8FF',
        marginLeft: 10
    },
    newUser: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
        textAlign: 'right',
        marginRight: 10,
        color: '#63B8FF'
    }

})