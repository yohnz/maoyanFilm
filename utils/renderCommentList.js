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
    ScrollView
} from 'react-native';


export default class RenderComments extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var data = this.props.data;
        var star = ~~data.score;
        var grayStar = 5 - star;
        var arr = [];
        var starView = [], grayStarView = [];
        for (var i = 0; i < star; i++) {
            starView.push(<Image source={require('../images/star.png') } style={styles.starIcon}></Image>);
        }
        for (var i = 0; i < grayStar; i++) {
            grayStarView.push(<Image source={require('../images/star2.png') } style={styles.starIcon}></Image>);
        }
        return (
            <View style={styles.comments}>
                <View style={styles.starView}>
                    <View style={styles.stars}>
                        {starView}{grayStarView}
                    </View>
                    <Text>{data.time}</Text>
                </View>
                <Text style={styles.commentsText}>{data.content}</Text>
                <View style={styles.userView}>
                    <Image source={{ uri: data.avatarurl }} style={styles.avatar}></Image>
                    <Text style={styles.nickName}>{data.nickName}</Text>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eee",
    },
    ScrollView: {
        flex: 1,
    },
    toolbar: {
        height: 40,
        backgroundColor: "#e54847",
        alignItems: 'center',
        flexDirection: 'row'
    },

    backIcon: {
        borderLeftWidth: 1,
        borderTopWidth: 1,
        height: 16,
        width: 16,
        borderColor: "#fff",
        marginLeft: 20,
        transform: [{ rotate: "-45deg" }]
    },
    content: {
        // flex: 1,
    },
    filmCover: {
        width: 108,
        height: 148,
        borderWidth: 1,
        borderColor: "#fff"
    },
    title: {
        flex: 1,
        color: "#fff",
        textAlign: "center",
    },
    scoreView: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    score: {
        fontSize: 18,
        color: "#ff9a00",
    },
    snum: {
        color: "#ff9a00",
    },
    detailWrap: {
        flexDirection: "column",
    },
    detailView: {
        flexDirection: 'row',
        height: 170,
        padding: 10,
        backgroundColor: "#55514c"
    },
    name: {
        fontSize: 18,
        color: "#fff"
    },
    infoView: {
        flex: 1,
        paddingLeft: 10,
        flexDirection: 'column',
    },
    verView: {
        backgroundColor: "#2895db",
        borderRadius: 2,
        paddingLeft: 5,
        paddingRight: 5,
    },
    verText: {
        color: "#fff",
        fontSize: 10,
    },
    verWrap: {
        flexDirection: "row",
    },
    textLineHeight: {
        color: "#fff",
        lineHeight: 24
    },
    draView: {
        padding: 10,
        backgroundColor: "#fff",
        borderColor: "#e1e1e1",
        borderBottomWidth: 1,
        borderTopWidth: 1
    },
    bigBtn: {
        backgroundColor: "#e54847",
        borderRadius: 2,
        justifyContent: "center",
        padding: 5,
        marginBottom: 10
    },
    bigBtnText: {
        color: "#fff",
        textAlign: "center",
    },
    navView: {
        padding: 10,
        marginTop: 10,
        backgroundColor: "#fff",
        borderColor: "#e1e1e1",
        borderBottomWidth: 1,
        borderTopWidth: 1,
        flex: 1,
        flexDirection: 'column',
        marginBottom: 10
    },
    navTitle: {
        lineHeight: 30
    },
    comments: {
        paddingTop: 20,
        paddingBottom: 10,
        borderTopWidth: 1,
        borderColor: "#e1e1e1"
    },
    commentsText: {
        marginTop: 10,
        marginBottom: 10,
        fontSize:16,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    userView: {
        flexDirection: 'row',
        alignItems: "center"
    },
    nickName: {
        marginLeft: 10
    },
    starIcon: {
        width: 10,
        height: 10,
    },
    starView: {
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    starText: {
        color: "#ff9a00",
    },
    stars: {
        flexDirection: 'row'
    },
    moreView: {
        borderTopWidth: 1,
        borderColor: "#e1e1e1",
        justifyContent: "center",
        alignItems: "center",
        height: 38,
    },
    more: {
        textAlign: "center",
        color: "#e54847"
    }
})