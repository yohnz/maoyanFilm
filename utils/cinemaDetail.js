import React, {
    Component,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
    ScrollView,
    Image,
    ProgressBarAndroid,
    Alert
} from 'react-native';

import Toolbar, {ToolbarHome} from "./Toolbar";

var id, name, data;
var movieIndex = 0, dateIndex = 0;
var date = new Date();
var month = date.getMonth() + 1;
month = (month) < 10 ? "0" + month : month;
var initDate = date.getFullYear() + "-" + month + "-" + date.getDate();
export default class cinemaDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            data: null,
            date: initDate,
            loading: false
        }
    }
    componentDidMount() {
        this.fetchData("");
    }
    fetchData(_id) {
        var id = _id;
        var url = "http://xxx/showtime/wrap.json?cinemaid=" + this.props.id + "&movieid=" + id;
        if (_id != "") {
            this.setState({
                loading: true,
            });
        }
        fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                data = responseData.data;
                var showModel = data.DateShow[initDate];
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(showModel),
                    data: responseData.data,
                    loading: false
                })

            })
    }
    render() {
        return (
            <View style={styles.container}>
                <Toolbar {...this.props} navigator={this.props.navigator} />
                {this.loadingData() }
                {this.renderInfo() }
            </View>
        )
    }
    loadingData() {
        if (this.state.loading) {
            return <View><ProgressBarAndroid color="#e54847" styleAttr="Horizontal" indeterminate={true} /></View>
        }
    }
    renderInfo() {
        var data = this.state.data;
        if (!data) {
            return (
                <View><ProgressBarAndroid  color="red" styleAttr='Inverse'/></View>
            )
        }
        // 影院信息
        var cinemaDetailModel = data.cinemaDetailModel;
        var cinemaInfo =
            <View style={styles.cinemaInfo}>
                <Text>{cinemaDetailModel.addr}</Text>
                <Text>{cinemaDetailModel.tel[0] || ""}</Text>
            </View>

        // 当前电影
        var currentMovieModel;
        // 所有电影
        var moviesModel = data.movies;
        var movies = []
        for (var i = 0; i < moviesModel.length; i++) {
            if (i == movieIndex) {
                currentMovieModel = moviesModel[i];
                movies.push(
                    <TouchableOpacity style= { styles.movieView } >
                        <Image source={{ uri: moviesModel[i].img }} style={styles.movieImgCur}></Image>
                    </TouchableOpacity>
                )
                continue;
            }
            movies.push(
                <TouchableOpacity style={styles.movieView} onPress={this._onPressMovie.bind(this, i, moviesModel[i].id) } >
                    <Image source={{ uri: moviesModel[i].img }} style={styles.movieImg}></Image>
                </TouchableOpacity>
            )
        }
        // 日期
        var dateView = [];
        var dateModel = data.Dates;
        for (var i = 0; i < dateModel.length; i++) {
            if (i == dateIndex) {
                dateView.push(
                    <TouchableOpacity style={[styles.dateView, styles.dateViewCur]} >
                        <Text style={styles.dateTextCur}>{dateModel[i].text}</Text>
                    </TouchableOpacity>
                )
                continue;
            }
            dateView.push(
                <TouchableOpacity style={styles.dateView} onPress={this._onPressDate.bind(this, i, dateModel[i].slug) } >
                    <Text style={styles.dateText}>{dateModel[i].text}</Text>
                </TouchableOpacity>
            )
        }

        var List;
        if (this.state.dataSource._cachedRowCount == 0) {
            List = <View style={styles.emptyList}><Text>今天已无放映场次</Text></View>
        } else {
            List = <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderCinemaDetail.bind(this)}
                style={styles.ListView}
                />
        }
        
        return (
            <View style={styles.content}>
                {cinemaInfo}
                <View>
                    <ScrollView style={styles.movieScroll} horizontal={true} >
                        {movies}
                    </ScrollView>
                </View>
                <View style={styles.movieNameView}>
                    <Text style={styles.movieNameText}>{currentMovieModel.nm}</Text>
                </View>
                <View>
                    <ScrollView style={styles.dateScroll} horizontal={true} showsHorizontalScrollIndicator={false}>
                        {dateView}
                    </ScrollView>
                </View>

                {List}
            </View>

        )
    }
    _onPressMovie(_index, _id) {
        movieIndex = _index;
        dateIndex = 0; // 重置日期
        this.fetchData(_id);
    }
    _onPressDate(_index, _date) {
        dateIndex = _index;
        var showModel = data.DateShow[_date];
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(showModel),
        });

    }

    _renderCinemaDetail(showModel) {
        return (
            <View style={styles.showModel}>
                <View style={styles.timeView}>
                    <Text style={styles.timeStart}>{showModel.tm}</Text>
                    <Text style={styles.timeEnd}>{showModel.end}结束</Text>
                </View>
                <View style={styles.thView}>
                    <View style={styles.langView}>
                        <Text>{showModel.lang}</Text><Text>{showModel.tp}</Text>
                    </View>
                    <Text>{showModel.th}</Text>
                </View>
                <View style={styles.priceView}>
                    {/* 返回的价格有问题，这里写死一个价格 */}
                    <Text style={styles.sellText}>38</Text>
                    <Text style={styles.priceText}>原价100</Text>
                </View>
                <View style={styles.buyView}>
                    <TouchableOpacity style={styles.buyButton} onPress={() => this.sale()}>
                        <Text style={styles.buyText}>选座购票</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    sale(){
        Alert.alert("提示","没有API,暂无购票能使用！")
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eee",
    },
    content: {
        flex: 1,
    },
    cinemaInfo: {
        padding: 10,
        backgroundColor: "#fff"
    },
    movieScroll: {
        height: 124,
        backgroundColor: "#333",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 3,
        paddingRight: 3,
        flexDirection: "row"
    },
    movieView: {
        paddingRight: 10,
    },

    movieImg: {
        width: 75,
        height: 104,
    },
    movieImgCur: {
        width: 75,
        height: 104,
        borderWidth: 2,
        borderColor: "#fff"
    },
    movieNameView: {
        padding: 10,
        backgroundColor: "#fff"
    },
    movieNameText: {
        fontSize: 16,
        fontWeight: "bold"
    },
    dateScroll: {
        padding: 10,
        borderColor: "#ddd",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        flexDirection: "row",
    },
    dateView: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 8
    },
    dateViewCur: {
        backgroundColor: "#df2d2d",
        borderRadius: 18
    },
    dateTextCur: {
        color: "#fff"
    },
    showModel: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderColor: "#eee",
        borderWidth: 1,
        backgroundColor: "#fff"
    },
    timeView: {
        flex: 1,
        width: 80,
    },
    thView: {
        flex: 2,
        alignItems: "center",
    },
    timeStart: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#df2d2d",
        textAlign: "center",
    },
    timeEnd: {
        fontSize: 12
    },
    langView: {
        flexDirection: "row",
        alignItems: "center",
    },
    priceView: {
        flex: 1,
        alignItems: "center",
    },
    sellText: {
        fontSize: 20,
        color: "#df2d2d",
    },
    priceText: {
        textDecorationLine: 'line-through',
        fontSize: 10,
    },
    buyView: {
        flex: 1,
        alignItems: "center",
    },
    buyButton: {
        padding: 4,
        backgroundColor: "#df2d2d",
        borderRadius: 2,
    },
    buyText: {
        fontSize: 10,
        color: "#fff",
        textAlign: "center"
    },
    ListView: {
        flex: 1
    },
    emptyList:{        
        backgroundColor:"#fff",
        alignItems:"center",
        padding:20
    }
});