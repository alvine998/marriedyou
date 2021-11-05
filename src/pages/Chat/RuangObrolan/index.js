import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import { Icon, Right } from "native-base";
import React, {Component} from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import normalize from "react-native-normalize";
import { logo } from "../../../assets";

export default class RuangObrolan extends Component{
    constructor(props){
        super(props);
        this.state={
            images:'https://lh3.googleusercontent.com/fife/AAWUweWtQgjE6FYkL5DwfrYrWLGVIkl5wGroiMmwfTxTACfW2eb5kdAwkMTqrLu_ZWdbOi2nRiIniWpNI7LHURaVFlJWEhSD1kN5-7osKqLwX7kTOLVi1fAgCZxqSKx1KhB40fe1dz50C95dmEYCwKyruAS87fAfIty41GmIrLNNvDOajyok6V9b7ETVYGy4zdYKMokn8yAHyDJhNFQ0rmGssSJ_5I1V0df5bd0fN4WD_hr8ZuFwnbs-hMjnzcBRwCtpNcmo5NaPYzOSzfb6Q4_hZkwKT9-fAZi8cSujTwKNsbYbz2B5h9QEOW1nZAYsrcT6a3uXGGj7jxpE7JziTPQ6T9FXaIG1NzT2_zWRl28NvuY67xa7jvWrhGd15_WxT7HDVLqBbwpmT-xF4lLz-im4qlnodCJEcR6qEmLuzEO_eAJ0tQk-xo65cJhkH1FZGeRg7UO0WXGKhdluT7mR7W3fTtGu-eS3MTmKzgYTeJMRbHS9p1-HoUMgHk2jnrrG2VuohNhbqoinYV0xZXtxCZ647b8E5NbYA8pGPso-TWFkPwtHEmk60847WojRLchX9pl3pmdtav1y6TUvH211pQrhVbyO5XY_tQB0iFOeTBHhYdewjlfsllbinI4zZhvCUGzLFeP3QJVSA_aN974Qe-o1YtPl-QpmYrFd2dFCwr5ky3uYWPRS2QE_n4P2vNI8stvysshXN7dJ6_W2uo27JyKvGnvcyUTmpbCevpw=w811-h609-ft',
            collection:[],
            nama:'',
            msg:'',
            image:'',
            collect:[],
            target_id:'',
            obrolan_id:''
        }
    }

    renderEmptyChat(){
        return(
            <View style={{alignItems:'center', justifyContent:'center', paddingTop:normalize(20)}}>
                <Image source={{uri:this.state.images}} style={styles.imageStyle} />
                <Text style={styles.fontCaption}>
                    Kamu Hari Ini Belum Mengobrol {"\n"}
                    Dengan Siapapun. {"\n"}
                </Text>
            </View>
        )
    }

    renderAvailableChat(){
        return(
            <View style={{paddingTop:normalize(20)}}>
                    {
                        this.state.collect.map((res,i) => {
                            return(<View key={i}>
                            {res.users_target.map((el,i) => {
                                   return(
                                    <TouchableOpacity key={i} onPress={() => [this.props.navigation.push('Obrolan'), this.setChat(el._id, res._id)]} style={styles.border}>
                                       <View style={{flexDirection:'row', padding:normalize(10)}}>
                                        <View style={styles.imageContainer}>
                                            {
                                                el.image !== '' && (
                                                    <Image source={{uri:`http://192.168.18.18:4000/resources/upload/${el.image}`}} style={styles.imageStyle2} />
                                                )
                                            }
                                        </View>
                                        {/* <View style={styles.onlineCircle}/> */}
    
                                        <View style={{paddingLeft:normalize(20)}}>
                                            <Text style={styles.fontName}>{el.nama}</Text>
                                            <Text style={styles.fontText}>{res.msg[1]}</Text>
                                        </View>
    
                                        <Right/>
                                        <View style={styles.availChatCircle}>
                                            <Text style={{color:'white'}}>{res._id}</Text>
                                        </View>
                                    </View>
                                    </TouchableOpacity>
                                    )
                            })}
                            </View>
                            )
                        })
                    }
            </View>
        )
    }


    async setChat(id, iid){
        const dataObrolan = {
            target_id: id,
            obrolan_id: iid
        }
        await AsyncStorage.setItem('chatKey', JSON.stringify(dataObrolan))
        .then(
            res => {
                console.log("Thanks ",res)
            }
        )
    }

    async getChat(){
        await AsyncStorage.getItem('emailKey')
        .then(
            res => {
                axios.get(`http://10.0.2.2:4000/users/${res}`)
                .then(
                    respon => {
                        const id = respon.data._id
                        console.log("id : ", id)
                        axios.get(`http://10.0.2.2:4000/chats/user/${id}`)
                        .then(
                            val => {
                                const collect = val.data;
                                collect.map(e => {
                                    e.users_target.map(elemet => {
                                        console.log("Hello : ", elemet.nama)
                                        console.log("Hello : ", e.msg)
                                    })
                                })
                                console.log(...collect)
                                this.setState({collect})  
                            }
                        )
                    }
                )
            }
        )
    }

    componentDidMount(){
        this.getChat()
    }

    render(){
        const iid = this.state.collection.map(res => res._id);
        return(
            <View style={styles.bg}>
                <View style={styles.head}>
                    <Text style={styles.fontHeader}>Ruang Obrolan</Text>
                    <Icon type={'FontAwesome5'} name="comments" style={styles.iconHeader} />
                </View>
                <ScrollView>
                    {
                        this.state.collect.length > 0 ? (
                            this.renderAvailableChat() 
                        )  : this.renderEmptyChat()
                    }
                </ScrollView>
                {/* Ini Footer */}
                <View style={{alignItems:'center', justifyContent:'center'}}>
                    <View style={styles.footer}>
                        {/* Footer Beranda */}
                        <View style={{padding:normalize(10), paddingLeft:normalize(30)}}>
                            <TouchableOpacity onPress={() => this.props.navigation.push('Home')} style={{alignItems:'center', justifyContent:'center'}}>
                                <Icon type={'FontAwesome5'} name="home" style={styles.iconFooter} />
                                <Text style={styles.fontFooter}>Beranda</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{alignItems:'center', justifyContent:'center'}}>
                            <View style={{borderWidth:1, height:normalize(50)}} />
                        </View>

                        {/* Footer Obrolan */}
                        <View style={{padding:normalize(10), paddingLeft:normalize(10)}}>
                            <TouchableOpacity onPress={() => this.props.navigation.push('RuangObrolan')} style={{alignItems:'center', justifyContent:'center'}}>
                                <Icon type={'FontAwesome'} name="comments" style={styles.iconFooterActive} />
                                <Text style={styles.fontFooter}>Obrolan</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{alignItems:'center', justifyContent:'center'}}>
                            <View style={{borderWidth:1, height:normalize(50)}} />
                        </View>

                        {/* Footer Kegiatan */}
                        <View style={{padding:normalize(10), paddingLeft:normalize(10)}}>
                            <TouchableOpacity onPress={() => this.props.navigation.push('Kegiatan')} style={{alignItems:'center', justifyContent:'center'}}>
                                <Icon type={'FontAwesome5'} name="calendar-alt" style={styles.iconFooter} />
                                <Text style={styles.fontFooter}>Kegiatan</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{alignItems:'center', justifyContent:'center'}}>
                            <View style={{borderWidth:1, height:normalize(50)}} />
                        </View>

                        {/* Footer Akun */}
                        <View style={{padding:normalize(13), paddingLeft:normalize(15)}}>
                            <TouchableOpacity onPress={() => this.props.navigation.push('Account')} style={{alignItems:'center', justifyContent:'center'}}>
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
        paddingLeft:normalize(20),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    border:{
        backgroundColor:'#fff',
        width:'100%',
        height:normalize(70),
        borderBottomWidth:1,
        borderBottomColor:'#dfdfdf',
    },
    imageStyle:{
        width:normalize(340),
        height:normalize(300),
    },
    imageStyle2:{
        width:normalize(50),
        height:normalize(50),
        borderRadius:25
    },
    imageContainer:{
        width:normalize(50),
        height:normalize(50),
        borderRadius:25,
        backgroundColor:'#31A5F9'
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
        width:normalize(350),
        height:normalize(80),
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