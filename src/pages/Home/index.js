import { Icon } from "native-base";
import React,{Component} from "react";
import { Animated, BackHandler, Image, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import normalize from "react-native-normalize";
import { logo } from "../../assets";



export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            backClickCount:0
        }
        this.springValue = new Animated.Value(100);
        this.handleExit = this.handleExit.bind(this)
    }

    _spring(){
        this.setState({backClickCount: 1}, () => {
            Animated.sequence([
                Animated.spring(
                    this.springValue, 
                    {
                        toValue: -.15 * height,
                        friction: 5,
                        duration: 300,
                        useNativeDriver: true,
                    }
                ),
                Animated.timing(
                    this.springValue,
                    {
                        toValue: 100,
                        duration: 300,
                        useNativeDriver: true,
                    }
                ),
            ]).start(() => {
                this.setState({backClickCount: 0});
            });
        })
    }

    handleExit(){
        setTimeout(() => {
            this.setState({backClickCount: 0});
          }, 2000);
        
        if(this.state.backClickCount == 0){
        this.setState({backClickCount: this.state.backClickCount + 1});
        ToastAndroid.show("Tekan 2 kali untuk keluar!", ToastAndroid.SHORT);
        } else {
        BackHandler.exitApp()
        }
        return true;
    }

    componentDidMount(){
        BackHandler.addEventListener("hardwareBackPress", this.handleExit)
    }

    componentWillUnmount(){
        BackHandler.removeEventListener("hardwareBackPress", this.handleExit)
    }

    render(){
        return(
            <View style={styles.bg}>
                <ScrollView>
                    <View style={styles.head}>
                        <Image source={logo} style={styles.imageStyle} />
                    </View>
                    <View>
                        <View style={{flexDirection:'row', padding:normalize(30)}}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Profil')}>
                                <View style={styles.border}>

                                </View>
                            </TouchableOpacity>
                            <View style={{paddingLeft:normalize(20)}} />
                            <View style={styles.border}>

                            </View>
                        </View>

                        <View style={{flexDirection:'row', paddingLeft:normalize(30), paddingTop:normalize(0)}}>
                            <View style={styles.border}>

                            </View>
                            <View style={{paddingLeft:normalize(20)}} />
                            <View style={styles.border}>

                            </View>
                        </View>
                    </View>
                </ScrollView>

                {/* Ini Footer */}
                <View style={{alignItems:'center', justifyContent:'center'}}>
                    <View style={styles.footer}>
                        {/* Footer Beranda */}
                        <View style={{padding:normalize(10), paddingLeft:normalize(30)}}>
                            <TouchableOpacity onPress={() => this.props.navigation.push('Home')} style={{alignItems:'center', justifyContent:'center'}}>
                                <Icon type={'FontAwesome5'} name="home" style={styles.iconFooterActive} />
                                <Text style={styles.fontFooter}>Beranda</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{alignItems:'center', justifyContent:'center'}}>
                            <View style={{borderWidth:1, height:normalize(50)}} />
                        </View>

                        {/* Footer Obrolan */}
                        <View style={{padding:normalize(10), paddingLeft:normalize(10)}}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('RuangObrolan')} style={{alignItems:'center', justifyContent:'center'}}>
                                <Icon type={'FontAwesome'} name="comments" style={styles.iconFooter} />
                                <Text style={styles.fontFooter}>Obrolan</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{alignItems:'center', justifyContent:'center'}}>
                            <View style={{borderWidth:1, height:normalize(50)}} />
                        </View>

                        {/* Footer Kegiatan */}
                        <View style={{padding:normalize(10), paddingLeft:normalize(10)}}>
                            <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}}>
                                <Icon type={'FontAwesome5'} name="calendar-alt" style={styles.iconFooter} />
                                <Text style={styles.fontFooter}>Kegiatan</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{alignItems:'center', justifyContent:'center'}}>
                            <View style={{borderWidth:1, height:normalize(50)}} />
                        </View>

                        {/* Footer Akun */}
                        <View style={{padding:normalize(13), paddingLeft:normalize(15)}}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Account')} style={{alignItems:'center', justifyContent:'center'}}>
                                <Icon type={'FontAwesome'} name="user-circle" style={styles.iconFooter} />
                                <Text style={styles.fontFooter}>Akun</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bg:{
        backgroundColor:'#62CBEC',
        height:'100%',
        flex:1
    },
    head:{
        backgroundColor:'#64B8F5',
        width:'100%',
        height:normalize(100),
        borderBottomRightRadius:50,
        justifyContent:'center',
        alignItems:'center'
    },
    border:{
        backgroundColor:'white',
        width:normalize(150),
        height:normalize(180),
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20
    },
    imageStyle:{
        width:normalize(133),
        height:normalize(136)
    },
    footer:{
        width:normalize(350),
        height:normalize(70),
        backgroundColor:'#31A5F9',
        marginBottom:normalize(10),
        borderRadius:30,
        flexDirection:"row"
    },
    iconFooterActive:{
        color:'#fff',
        fontSize:normalize(30)
    },
    iconFooter:{
        color:'#F2D2B1',
        fontSize:normalize(30)
    },
    fontFooter:{
        fontFamily:'Quicksand-Regular',
        color:'white'
    }
})