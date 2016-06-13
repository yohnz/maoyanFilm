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
    ProgressBarAndroid,
} from 'react-native';

import RenderCommentList from "./renderCommentList";
import Toolbar from "./Toolbar";
var num = 15;
var Comments = [];
export default class moreComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
        }
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData() {
        var url = "http://xxx/mmdb/comments/movie/" + this.props.id + ".json?_v_=yes&offset="+num;
        this.setState({loading:true});
        fetch(url)
            .then((response) => response.json())
            .then((responseData) => {            
                var arr = [];
                arr = Comments.concat(responseData.cmts);
                Comments = arr;
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(Comments),
                    loading:false,
                })

            })
    }
    render() {
        var loading;
        if(this.state.loading){
            loading =  <View><ProgressBarAndroid color="#e54847" styleAttr="Horizontal" indeterminate={true} /></View>
        }else{
            loading = null;
        }
        return (
            <View style={styles.container}>
                <Toolbar {...this.props} navigator={this.props.navigator} />
                {loading}
                <View style={styles.navView}>
                    <View style={styles.commentsTitle}><Text>热门短评</Text></View>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderComments}
                        style={styles.commentRows}
                        onEndReached={this.loadMore.bind(this)}
                        />
                </View>
            </View>

        )
    }
    loadMore(){
        num+=15;
        this.fetchData();
    }
    renderComments(data) {
        return (
            <RenderCommentList data={data} />
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
        borderColor: "#ddd"
    },
    commentsText: {
        marginTop: 10,
        marginBottom: 10,
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
    commentsTitle:{
        height:30
    }
})
