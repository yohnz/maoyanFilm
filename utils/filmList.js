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
    Alert
} from 'react-native';


import sale from './sale';
import filmInfo from './filmInfo'
import {ToolbarHome} from "./Toolbar";

export default class filmList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <ToolbarHome />
                <List navigator={this.props.navigator} />
            </View>
        )
    }
}


// listView
class List extends Component {
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
         var url = "http://xxx/movie/list.json?type=hot&offset=0&limit=1000"
        fetch(films)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data.movies)
                })
            })
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderFilm.bind(this) }
                style={styles.ListView}
                />
        )
    }

    getFilmInfo(id, name) {
        this.props.navigator.push({
            name: "filmInfo",
            component: filmInfo,
            params: {
                id: id,
                name: name
            }
        });
    }

    sale() {
        Alert.alert("提示", "没有API,暂无购票能使用！")
    }

    renderFilm(film) {
        var verText = film.ver.replace(/[\u4e00-\u9fa5]+/g, '').replace(/\/$/, '');
        var wishOrSc = film.preSale ? film.wish + "人想看" : film.sc + "分";
        var showInfo = film.preSale ? film.rt : film.showInfo;
        return (
            <TouchableOpacity onPress={() => this.getFilmInfo(film.id, film.nm) }>
                <View style={styles.nav}>
                    <Image source={{ uri: film.img }} style={styles.filmCover}></Image>
                    <View style={styles.info}>
                        <View style={styles.nameView}>
                            <Text style={styles.nm}>{film.nm}</Text>
                            <View style={styles.verView}>
                                <Text style={styles.verText}>{verText}</Text>
                            </View>
                        </View>
                        <Text>{film.cat}</Text>
                        <Text>{film.scm}</Text>
                        <Text style={styles.showInfo}>{showInfo}</Text>
                        <View style={styles.saleView}>
                            <Text style={styles.sc}>{wishOrSc}</Text>
                            <TouchableOpacity style={film.preSale ? styles.preSale : styles.sale}  onPress={() => this.sale() }>
                                <Text style={film.preSale ? styles.preSaleText : styles.saleText}>{film.preSale ? "预售" : "购票"}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}


var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    toolbar: {
        height: 40,
        backgroundColor: "#df2d2d"
    },
    filmCover: {
        width: 80,
        height: 110,
        borderRadius: 2
    },
    nav: {
        padding: 6,
        borderBottomWidth: 1,
        borderColor: "#ddd",
        flexDirection: "row",
    },
    nm: {
        color: "#333",
        fontSize: 16,
    },
    info: {
        flex: 1,
        paddingLeft: 10,
        flexDirection: 'column',
    },
    nameView: {
        paddingTop: 6,
        flexDirection: 'row',
        alignItems: "center",
    },
    showInfo: {
        fontSize: 12
    },
    verView: {
        justifyContent: 'center',
        backgroundColor: "#2895db",
        borderRadius: 2,
        paddingLeft: 5,
        paddingRight: 5
    },
    verText: {
        color: "#fff",
        fontSize: 10
    },
    sc: {
        color: "#ff9a00"
    },
    saleView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    preSale: {
        borderWidth: 1,
        borderColor: '#159df1',
        borderRadius: 2,
        paddingLeft: 10,
        paddingRight: 10
    },
    sale: {
        borderWidth: 1,
        borderColor: '#49d95d',
        borderRadius: 2,
        paddingLeft: 10,
        paddingRight: 10
    },
    preSaleText: {
        color: '#159df1',
    },
    saleText: {
        color: '#49d95d',
    }
})

