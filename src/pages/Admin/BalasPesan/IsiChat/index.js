import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import { Icon, Right } from "native-base";
import React, {Component} from "react";
import { Image, RefreshControl, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native";
import normalize from "react-native-normalize";
import { akhwat, ikhwan, send } from "../../../../assets";

export default class IsiChat extends Component{
    constructor(props){
        super(props);
        this.state={
            images:'https://lh3.googleusercontent.com/fife/AAWUweWtQgjE6FYkL5DwfrYrWLGVIkl5wGroiMmwfTxTACfW2eb5kdAwkMTqrLu_ZWdbOi2nRiIniWpNI7LHURaVFlJWEhSD1kN5-7osKqLwX7kTOLVi1fAgCZxqSKx1KhB40fe1dz50C95dmEYCwKyruAS87fAfIty41GmIrLNNvDOajyok6V9b7ETVYGy4zdYKMokn8yAHyDJhNFQ0rmGssSJ_5I1V0df5bd0fN4WD_hr8ZuFwnbs-hMjnzcBRwCtpNcmo5NaPYzOSzfb6Q4_hZkwKT9-fAZi8cSujTwKNsbYbz2B5h9QEOW1nZAYsrcT6a3uXGGj7jxpE7JziTPQ6T9FXaIG1NzT2_zWRl28NvuY67xa7jvWrhGd15_WxT7HDVLqBbwpmT-xF4lLz-im4qlnodCJEcR6qEmLuzEO_eAJ0tQk-xo65cJhkH1FZGeRg7UO0WXGKhdluT7mR7W3fTtGu-eS3MTmKzgYTeJMRbHS9p1-HoUMgHk2jnrrG2VuohNhbqoinYV0xZXtxCZ647b8E5NbYA8pGPso-TWFkPwtHEmk60847WojRLchX9pl3pmdtav1y6TUvH211pQrhVbyO5XY_tQB0iFOeTBHhYdewjlfsllbinI4zZhvCUGzLFeP3QJVSA_aN974Qe-o1YtPl-QpmYrFd2dFCwr5ky3uYWPRS2QE_n4P2vNI8stvysshXN7dJ6_W2uo27JyKvGnvcyUTmpbCevpw=w811-h609-ft',
            nama:'',
            usia:'',
            photo:'',
            text:'',
            text2:'',
            jenis_kelamin:'',
            id1:'',
            id2:'',
            kode:'',
            kode2:'',
            kode3:'',
            val:[],
            vals:[],
            message:[],
            refresh:false,
            message2:[],
            sender:"admin"
        }
    }

    async getChat(){
        await AsyncStorage.getItem('idUser')
        .then(
            res => {
                console.log(res)
                this.setState({kode: res})
                axios.get(`http://10.0.2.2:4000/chats/${res}`)
                .then(
                    result => {
                        const val = result.data;
                        console.log("Mesg", val.msg)
                        val.users_target.map(e => {
                            this.setState({
                                nama: e.nama, 
                                usia: e.usia, 
                                photo: e.image,
                                jenis_kelamin: e.jenis_kelamin,
                                kode3: e._id
                            })
                        })
                        axios.get(`http://10.0.2.2:4000/details/id/${val._id}`)
                        .then(
                            rrr => {
                                const message = rrr.data;
                                console.log("Ini chat : ", message)
                                this.setState({message})
                            }
                        )                        
                        console.log("Data:",val)
                    }
                )

                // Phone
                axios.get(`http://192.168.18.6:4000/chats/${res}`)
                .then(
                    result => {
                        const val = result.data;
                        console.log("Mesg", val.msg)
                        val.users_target.map(e => {
                            this.setState({
                                nama: e.nama, 
                                usia: e.usia, 
                                photo: e.image,
                                jenis_kelamin: e.jenis_kelamin,
                                kode3: e._id
                            })
                        })
                        axios.get(`http://192.168.18.6:4000/details/id/${val._id}`)
                        .then(
                            rrr => {
                                const message = rrr.data;
                                console.log("Ini chat : ", message)
                                this.setState({message})
                            }
                        )                        
                        console.log("Data:",val)
                    }
                )
                
            }
        )
    }

    componentDidMount(){
        this.getChat();
    }

    renderChat(){
        return(
            <View>
                {
                    this.state.message.map((element,i) => {
                        return(
                            element.sender == this.state.kode3 ? (
                            <View style={{padding:normalize(20), paddingLeft:normalize(70)}}>
                                <View style={styles.borderChat3} key={i}>
                                    <Text>{element.body}</Text>
                                </View>
                            </View>
                            ) : (
                            <View style={{padding:normalize(20), paddingLeft:normalize(20)}}>
                                <View style={styles.borderChat2} key={i}>
                                    <Text>{element.body}</Text>
                                </View>
                            </View>
                            )
                            
                        )
                    })                    
                }
            </View>
        )
    }

    onSend(kode){
        const data = {
            body: this.state.text,
            chatid: kode,
            sender: this.state.kode3
        }
        console.log(data)
        if(this.state.text == ''){

        } else {
            axios.post(`http://10.0.2.2:4000/details/`, data)
            .then(
                res => {
                    console.log(res.data)
                    console.log("Terkirim ", this.state.text + this.state.sender)
                    this.setState({text:''})
                    axios.get(`http://10.0.2.2:4000/details/id/${kode}`)
                    .then(
                        datas => {
                            console.log(datas.data)
                            this.setState({message: datas.data})
                        }
                    )
                }
            )

            // Phone
            axios.post(`http://192.168.18.6:4000/details/`, data)
            .then(
                res => {
                    console.log(res.data)
                    console.log("Terkirim ", this.state.text + this.state.sender)
                    this.setState({text:''})
                    axios.get(`http://192.168.18.6:4000/details/id/${kode}`)
                    .then(
                        datas => {
                            console.log(datas.data)
                            this.setState({message: datas.data})
                        }
                    )
                }
            )
            
        }
            // console.log("find : ",kode)
            // console.log("find : ",kode2)
            // console.log("find : ", id2)


    }

    async deleteAsync (){
        await AsyncStorage.removeItem('idUser')
        console.log("sukses delete")
        this.props.navigation.push('ListChat')
    }

    render(){
        return(
            <View style={styles.bg}>
                <View style={styles.head}>
                    <View style={{paddingRight:normalize(10)}}>
                        <Icon onPress={() => { this.deleteAsync()}} type={'FontAwesome5'} name="chevron-left" />
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profil')} style={{paddingRight:normalize(20), paddingLeft:normalize(20)}}>
                        {/* <Image style={styles.imageStyle} source={{uri: `http://192.168.56.1:4000/resources/upload/${this.state.photo}`}} /> */}
                        {
                            this.state.jenis_kelamin == 'Laki-laki' ?
                            this.state.photo == '' ? 
                            (<Image source={ikhwan} style={styles.imageStyle} />): 
                            (<Image source={{uri: `http://10.0.2.2:4000/resources/upload/${this.state.photo}` || `http://localhost:4000/resources/upload/${this.state.photo}`}} style={styles.imageStyle} />)
                            :
                            this.state.photo == ''? 
                            (<Image source={akhwat} style={styles.imageStyle} />): 
                            (<Image source={{uri: `http://10.0.2.2:4000/resources/upload/${this.state.photo}` || `http://localhost:4000/resources/upload/${this.state.photo}`}} style={styles.imageStyle} />)
                        }
                    </TouchableOpacity>
                    <View style={{paddingRight:normalize(80)}}>
                    <Text style={styles.fontHeader}>{this.state.nama.substr(0,10)}, {this.state.usia}</Text>

                    </View>
                </View>
                <ScrollView ref={ref => {this.scrollView = ref}} onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})}>
                    {
                        this.renderChat()
                    }
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
                    <TouchableOpacity onPress={() => this.onSend(this.state.kode)} style={[styles.imageContainer, {marginLeft:normalize(15)}]}>
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
    borderChat2:{
        backgroundColor:'#E7F1CC',
        width:normalize(290),
        height:normalize(50),
        borderBottomRightRadius:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        paddingLeft:normalize(20),
        paddingTop:normalize(10)
    },
    borderChat3:{
        backgroundColor:'#fff',
        width:normalize(290),
        height:normalize(50),
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        paddingLeft:normalize(20),
        paddingTop:normalize(10)
    },
    borderChat:{
        backgroundColor:'#fff',
        width:normalize(290),
        height:normalize(50),
        borderRadius:10,
        paddingLeft:normalize(20),
        paddingTop:normalize(10)
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