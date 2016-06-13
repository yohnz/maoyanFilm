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
    Alert
} from 'react-native';

import moreComment from "./moreComment";
import RenderCommentList from "./renderCommentList";
import Toolbar from "./Toolbar";

var id, name;
export default class filmInfo extends Component {
    constructor(props, params) {
        super(props);
        this.state = {
            dataSource: null,
            filmData: null
        }
    }
    componentDidMount() {
        id = this.props.id;
        name = this.props.name;
        this.fetchData();
    }
    fetchData() {
        var url = "http:/xxx/movie/" + this.props.id + ".json";
        fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                var Comments = responseData.data.CommentResponseModel.hcmts;
                Comments.length = 5;
                this.setState({
                    dataSource: Comments,
                    filmData: responseData.data.MovieDetailModel
                })

            })
    }
    render() {
        if (!this.state.dataSource) {
            return (
                <View></View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <Toolbar {...this.props} navigator={this.props.navigator} />
                    <ScrollView style={styles.ScrollView}>
                        <FilmDetail filmData={this.state.filmData} />
                        <Comments dataSource={this.state.dataSource} navigator={this.props.navigator} />
                    </ScrollView>
                </View>
            )
        }
    }

}



// info

class FilmDetail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var data = this.props.filmData || {};
        var verText = data.ver || '';
        verText = verText.replace(/[\u4e00-\u9fa5]+/g, '').replace(/\/$/, '');
        var dra = data.dra || "";
        dra = dra.replace(/<p>/, '').replace(/<\/p>/, '');
        var scoreView="";
        if(data.showSnum){
           scoreView =  <View style={styles.scoreView}><Text style={styles.score}>{data.sc}分</Text><Text style={styles.snum}>({data.snum}人评分) </Text></View>           
        }else{
           scoreView =  <View style={styles.scoreView}><Text style={styles.score}>{data.wish}人想看</Text></View>
        }
        return (
            <View style={styles.detailWrap}>
                <View style={styles.detailView}>
                    <Image source={{ uri: data.img }} style={styles.filmCover}></Image>
                    <View style={styles.infoView}>
                        <Text style={styles.name}>{data.nm}</Text>
                        <View style={styles.verWrap}>
                            <View style={styles.verView}>
                                <Text style={styles.verText}>{verText}</Text>
                            </View>
                        </View>                       
                           {scoreView}                        

                        <Text style={styles.textLineHeight}>{data.cat}</Text>
                        <Text style={styles.textLineHeight}>{data.src}/{data.dur}分钟</Text>
                        <Text style={styles.textLineHeight}>{data.rt}</Text>
                    </View>
                </View>
                <View style={styles.draView}>
                    <TouchableOpacity style={styles.bigBtn} onPress={() => this.sale()}>
                        <Text style={styles.bigBtnText}>立即购票</Text>
                    </TouchableOpacity>
                    <Text>{dra}</Text>
                </View>
                <View style={styles.navView}>
                    <Text style={styles.navTitle}>演员表</Text>
                    <Text>{data.star}</Text>
                </View>
            </View>
        )
    }
    sale(){
        Alert.alert("提示","没有API,暂无购票能使用！")
    }
    
}

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
        }
    }
    componentDidMount() {
        if (!this.props.dataSource) return;
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.props.dataSource),
        });
    }
    render() {
        return (
            <View>
                <View style={styles.navView}>
                    <Text style={styles.navTitle}>短评</Text>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderComments}
                        style={styles.commentRows}
                        />
                    <TouchableOpacity style={styles.moreView} onPress={()=>this.moreComment()}>
                        <Text style={styles.more}>查看全部评论</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    renderComments(data) {
        return (
            <RenderCommentList data={data} />
        )
    }
    // more
    moreComment() {        
        this.props.navigator.push({
            name: "moreComment",
            component: moreComment,
            params: {
                id: id,
                name: name
            }
        });
    }
}


module.export = { Toolbar}

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