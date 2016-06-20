# change log
由于最近这个项目被猫眼电影想github投诉了，指责我用了他们的logo和数据，所以，此项目中的logo和api都做了相应修改,某眼的api可以在网上找到,请自行coding。

[戳这里查看](https://github.com/github/dmca/blob/master/2016-06-01-Maoyan.md)。

对于Fork了此项目而受到牵连的童鞋说声抱歉。同时提醒大家以后注意类似情况，毕竟一不小心就会遇到小气而又无聊的公司。

由于暂时没有找到开放的电影api,所以项目中的api不能正常返回数据,各位可以自行进行替换,如果你有开放好用的电影api的,请向我分享一下，谢谢！

* 运行之前请先对项目中的数据接口(xxx)进行替换.
---
# maoyanFilm
这是一个仿猫眼电影的App，基于React Native构建。
由于找到的猫眼API并不完整，所以只能实现部分页面。
代码写得都很简单，欢迎一起交流学习。(大牛请忽略)

## 运行
### Android
1. 进入maoyanFilm根目录，安装依赖:`npm install`
2. 连接手机机或者虚拟机
3. 运行`react-native start` `react-native run-android`

### IOS
1. 进入maoyanFilm根目录，安装依赖:`npm install`
2. XCode打开ios下的film.xcodeproj
3. 点击Run

## Android安装包
![](./images/down1.jpg)

## 用到的React Native技术
* Flex 布局
* Image/Text/ListView/TouchableOpacity/ToolbarAndroid/Navigator/ScrollView/ProgressBarAndroid等组件
* ScrollView纵向、横向列表
* Tabbar导航
* Tab选项卡局部切换
* ScrollView上拉加载
* ...

## Android演示：

(录制于原生安卓模拟器,真机效果会更流畅)

![](http://yunl.sinaapp.com/images/filmApp.gif)

## IOS截图：
![](./images/1.png)
![](./images/2.png)
![](./images/3.png)
![](./images/4.jpg)



## TODO
- [X] 更多评论列表
- [X] 影院列表页
- [X] 影院详情页
- [ ] ~~选座页网上的API返回数据有问题~~
- [X] 登录页


## License

This project is available under the MIT license.
