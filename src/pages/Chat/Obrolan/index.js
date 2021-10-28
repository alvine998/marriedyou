import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import { Icon, Right } from "native-base";
import React, {Component} from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native";
import normalize from "react-native-normalize";
import { akhwat, ikhwan, logo, send } from "../../../assets";

export default class Obrolan extends Component{
    constructor(props){
        super(props);
        this.state={
            images:'https://lh3.googleusercontent.com/fife/AAWUweWtQgjE6FYkL5DwfrYrWLGVIkl5wGroiMmwfTxTACfW2eb5kdAwkMTqrLu_ZWdbOi2nRiIniWpNI7LHURaVFlJWEhSD1kN5-7osKqLwX7kTOLVi1fAgCZxqSKx1KhB40fe1dz50C95dmEYCwKyruAS87fAfIty41GmIrLNNvDOajyok6V9b7ETVYGy4zdYKMokn8yAHyDJhNFQ0rmGssSJ_5I1V0df5bd0fN4WD_hr8ZuFwnbs-hMjnzcBRwCtpNcmo5NaPYzOSzfb6Q4_hZkwKT9-fAZi8cSujTwKNsbYbz2B5h9QEOW1nZAYsrcT6a3uXGGj7jxpE7JziTPQ6T9FXaIG1NzT2_zWRl28NvuY67xa7jvWrhGd15_WxT7HDVLqBbwpmT-xF4lLz-im4qlnodCJEcR6qEmLuzEO_eAJ0tQk-xo65cJhkH1FZGeRg7UO0WXGKhdluT7mR7W3fTtGu-eS3MTmKzgYTeJMRbHS9p1-HoUMgHk2jnrrG2VuohNhbqoinYV0xZXtxCZ647b8E5NbYA8pGPso-TWFkPwtHEmk60847WojRLchX9pl3pmdtav1y6TUvH211pQrhVbyO5XY_tQB0iFOeTBHhYdewjlfsllbinI4zZhvCUGzLFeP3QJVSA_aN974Qe-o1YtPl-QpmYrFd2dFCwr5ky3uYWPRS2QE_n4P2vNI8stvysshXN7dJ6_W2uo27JyKvGnvcyUTmpbCevpw=w811-h609-ft',
            nama:'',
            usia:'',
            photo:'',
            text:'',
            text2:'',
            jenis_kelamin:''
        }
    }

    async getDataProfil(){
        await AsyncStorage.getItem('profilKey')
        .then(
            res => {
                console.log(res)
                axios.get(`http://10.0.2.2:4000/users/id/${res}`)
                .then(
                    result => {
                        const val = result.data;
                        this.setState({
                            nama: val.nama, 
                            usia: val.usia, 
                            photo: val.image,
                            jenis_kelamin: val.jenis_kelamin
                        })
                        console.log(val)
                    }
                )
            }
        )
    }

    componentDidMount(){
        this.getDataProfil();
    }

    render(){
        return(
            <View style={styles.bg}>
                <View style={styles.head}>
                    <View style={{paddingRight:normalize(10)}}>
                        <Icon onPress={() => this.props.navigation.navigate('RuangObrolan')} type={'FontAwesome5'} name="chevron-left" />
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profil')} style={{paddingRight:normalize(20), paddingLeft:normalize(20)}}>
                        {/* <Image style={styles.imageStyle} source={{uri: `http://192.168.56.1:4000/resources/upload/${this.state.photo}`}} /> */}
                        {
                            this.state.jenis_kelamin == 'Laki-laki' ?
                            this.state.photo == '' ? 
                            (<Image source={ikhwan} style={styles.imageStyle} />): 
                            (<Image source={{uri: `http://192.168.56.1:4000/resources/upload/${this.state.photo}`}} style={styles.imageStyle} />)
                            :
                            this.state.photo == ''? 
                            (<Image source={akhwat} style={styles.imageStyle} />): 
                            (<Image source={{uri: `http://192.168.56.1:4000/resources/upload/${this.state.photo}`}} style={styles.imageStyle} />)
                        }
                    </TouchableOpacity>
                    <View style={{paddingRight:normalize(100)}}>
                    <Text style={styles.fontHeader}>{this.state.nama}, {this.state.usia}</Text>

                    </View>
                </View>
                <ScrollView>
                    
                </ScrollView> 
                {/* Untuk Mengirim Pesan */}
                <View style={styles.footer}>
                    <View style={styles.borderChat}>
                        <TextInput
                            placeholder="Tulis Pesan Disini"
                            value={this.state.text}
                            onChangeText={(event) => this.setState({text: event})}
                            maxLength={255}
                        />
                    </View>
                    <TouchableOpacity style={[styles.imageContainer, {marginLeft:normalize(15)}]}>
                        <Image 
                            source={send}
                            style={styles.imageSend}
                        />
                    </TouchableOpacity>
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
        paddingLeft:normalize(20),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    borderChat:{
        backgroundColor:'#fff',
        width:normalize(290),
        height:normalize(50),
        borderRadius:10,
        paddingLeft:normalize(20)
    },
    imageStyle:{
        width:normalize(80),
        height:normalize(80),
        borderRadius:40
    },
    imageContainer:{
        width:normalize(50),
        height:normalize(50),
        borderRadius:25,
        backgroundColor:'#64B8F5',
        padding:normalize(10)
    },
    imageSend:{
        width:normalize(30),
        height:normalize(30),
    },
    onlineCircle:{
        width:normalize(15),
        height:normalize(15),
        borderRadius:10,
        backgroundColor:'#6ECD5E',
        marginLeft:normalize(-10)
    },
    offlineCircle:{
        width:normalize(15),
        height:normalize(15),
        borderRadius:10,
        backgroundColor:'#C74141',
        marginLeft:normalize(-10)
    },
    availChatCircle:{
        width:normalize(30),
        height:normalize(30),
        borderRadius:15,
        backgroundColor:'#6ECD5E',
        alignItems:'center',
        justifyContent:'center'
    },
    footer:{
        width:'100%',
        height:normalize(70),
        backgroundColor:'#31A5F9',
        flexDirection:"row",
        padding:normalize(13)
    },
    iconFooterActive:{
        color:'#fff',
        fontSize:normalize(30)
    },
    iconFooter:{
        color:'#F2D2B1',
        fontSize:normalize(30)
    },
    iconHeader:{
        color:'#F2D2B1',
        fontSize:normalize(50),
        paddingLeft:normalize(30)
    },
    fontFooter:{
        fontFamily:'Quicksand-Regular',
        color:'white'
    },
    fontHeader:{
        fontFamily:'Quicksand-Bold',
        color:'white',
        fontSize:normalize(24)
    },
    fontCaption:{
        fontFamily:'Quicksand-SemiBold',
        color:'white',
        fontSize:normalize(20)
    },
    fontName:{
        fontFamily:'Quicksand-SemiBold',
        color:'black',
        fontSize:normalize(20)
    },
    fontText:{
        fontFamily:'Quicksand-Regular',
        color:'black',
        fontSize:normalize(18)
    }
})