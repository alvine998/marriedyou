import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import { Body, Header, Icon, Left } from "native-base";
import React, {Component} from "react";
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import normalize from "react-native-normalize";
import { akhwat, ikhwan } from "../../assets";

export default class Profil extends Component{
    constructor(props){
        super(props);
        this.state={
            nama:'',
            usia:'',
            photo:'',
            hobi:'',
            tentang:'',
            status:'',
            jenis_kelamin:'',
            id:'',
            id2:'',
            id3:[],
            id4:'',
            collection:[],
        }
    }

    async getDataProfil(){
        await AsyncStorage.getItem('profilKey')
        .then(
            res => {
                console.log("id2 : ",res)
                this.setState({id2: res})
                axios.get(`http://10.0.2.2:4000/users/id/${res}`)
                .then(
                    result => {
                        const val = result.data;
                        this.setState({
                            nama: val.nama, 
                            usia: val.usia, 
                            photo: val.image,
                            hobi: val.hobi,
                            tentang: val.tentang,
                            jenis_kelamin: val.jenis_kelamin,
                            status: val.status
                        })
                        console.log(val)
                    }
                )
            }
        )
    }

    async getDataFor(){
        await AsyncStorage.getItem('emailKey')
        .then(
            res => {
                axios.get(`http://10.0.2.2:4000/users/${res}`)
                .then(
                    respon => {
                        const id = respon.data._id
                        console.log("id : ", id)
                        this.setState({id})

                        axios.get(`http://10.0.2.2:4000/chats/user/${id}`)
                        .then(
                            res => {
                                const collection = res.data;
                                collection.map(
                                    e => {e.users.map(
                                    element => {
                                    this.setState({id3: element._id})
                                })
                                    e.users_target.map(
                                    elements => {
                                        this.setState({id4: elements._id})
                                        console.log("id3 : ", this.state.id3)
                                        console.log("id4 : ", this.state.id4)
                                    })}
                                );
                                if(this.state.id3 == this.state.id && this.state.id2 == this.state.id4){
                                    console.log("sukses")
                                } else {
                                    console.log("Gagal")
                                }
                                this.setState({collection})
                            }
                        )
                    }
                )
            }
        )
    }

    onMulai(){
        const data = {
            msg: '',
            msg2: '',
            userid: this.state.id,
            targetid: this.state.id2
        }
        console.log(data)
        if(this.state.id3 == this.state.id && this.state.id2 == this.state.id4){
            alert("Langsung chat")
            this.props.navigation.push('Obrolan')
        } else {
            axios.post(`http://10.0.2.2:4000/chats`, data)
            .then(
                res => {
                    console.log("Sukses Disimpan",res.data)
                    this.props.navigation.push('Obrolan')
                }
            )
        }
            
        
    }

    componentDidMount(){
        this.getDataProfil();
        this.getDataFor();
    }

    render(){
        return(
            <View style={styles.bg}>
                <ScrollView>
                    {/* <ImageBackground source={{uri:`http://192.168.56.1:4000/resources/upload/${this.state.photo}`}} style={styles.border}>
                        <View style={styles.head}>
                            <Icon onPress={() => this.props.navigation.navigate('Home')} type={'FontAwesome5'} name="chevron-left" style={styles.iconHeader} />
                            <Text style={styles.fontHeader}>{this.state.nama}, {this.state.usia}</Text>
                        </View>
                    </ImageBackground> */}
                    {
                        this.state.jenis_kelamin == 'Laki-laki' ?
                        this.state.photo == '' ? 
                        (
                            <ImageBackground source={ikhwan} style={styles.border}>
                                <View style={styles.head}>
                                    <Icon onPress={() => this.props.navigation.navigate('Home')} type={'FontAwesome5'} name="chevron-left" style={styles.iconHeader} />
                                    <Text style={styles.fontHeader}>{this.state.nama}, {this.state.usia}</Text>
                                </View>
                            </ImageBackground>
                        ): 
                        (
                            <ImageBackground source={{uri:`http://192.168.56.1:4000/resources/upload/${this.state.photo}`}} style={styles.border}>
                                <View style={styles.head}>
                                    <Icon onPress={() => this.props.navigation.navigate('Home')} type={'FontAwesome5'} name="chevron-left" style={styles.iconHeader} />
                                    <Text style={styles.fontHeader}>{this.state.nama}, {this.state.usia}</Text>
                                </View>
                            </ImageBackground>
                        )
                        :
                        this.state.photo == ''? 
                        (
                            <ImageBackground source={akhwat} style={styles.border}>
                                <View style={styles.head}>
                                    <Icon onPress={() => this.props.navigation.navigate('Home')} type={'FontAwesome5'} name="chevron-left" style={styles.iconHeader} />
                                    <Text style={styles.fontHeader}>{this.state.nama}, {this.state.usia}</Text>
                                </View>
                            </ImageBackground>
                        ): 
                        (
                            <ImageBackground source={{uri:`http://192.168.56.1:4000/resources/upload/${this.state.photo}`}} style={styles.border}>
                                <View style={styles.head}>
                                    <Icon onPress={() => this.props.navigation.navigate('Home')} type={'FontAwesome5'} name="chevron-left" style={styles.iconHeader} />
                                    <Text style={styles.fontHeader}>{this.state.nama}, {this.state.usia}</Text>
                                </View>
                            </ImageBackground>
                        )
                    }
                    <View style={{paddingTop:normalize(20),alignItems:'center', justifyContent:'center'}}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <View style={styles.borderHobi}>
                                <Text style={styles.fontFooter2}>Hobi : {"\n"}{this.state.hobi}</Text>
                            </View>
                            <View style={{paddingLeft:normalize(10)}} />
                            <View>
                                <View style={[styles.borderStatus, {alignItems:'center', justifyContent:'center'}]}>
                                    <Text style={styles.fontFooter}>Status : {this.state.status}</Text>
                                </View>
                                <View style={{paddingTop:normalize(7)}} />
                                {/* <TouchableOpacity style={styles.borderLove}>

                                </TouchableOpacity>
                                <View style={{paddingTop:normalize(7)}} /> */}
                                
                                <TouchableOpacity onPress={() => {this.onMulai()}} style={[styles.borderMulai, {alignItems:'center', justifyContent:'center'}]}>
                                    {/* <Icon type={'FontAwesome5'} name="comments" style={styles.iconFooter} /> */}
                                    <Text style={styles.fontFooter}>Mulai Obrolan</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{paddingTop:normalize(20)}}>
                            <View style={styles.borderTentang}>
                                <Text style={styles.fontFooter}>Tentangku : {"\n"}{this.state.tentang}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
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
    borderHobi:{
        width:normalize(176),
        height:normalize(133),
        backgroundColor:'#77dd77',
        padding:normalize(20),
        borderRadius:20
    },
    borderTentang:{
        width:normalize(330),
        height:normalize(140),
        backgroundColor:'#A987E0',
        padding:normalize(20),
        borderRadius:20,
        marginBottom:normalize(20)
    },
    borderStatus:{
        width:normalize(150),
        height:normalize(70),
        backgroundColor:'#A987E0',
        borderRadius:10
    },
    borderLove:{
        width:normalize(150),
        height:normalize(40),
        backgroundColor:'#31A5F9',
        padding:normalize(10),
        borderRadius:10
    },
    borderMulai:{
        width:normalize(150),
        height:normalize(40),
        backgroundColor:'#D05F5F',
        borderRadius:10
    },
    head:{
        paddingLeft:normalize(0),
        flexDirection:'row',
        alignItems:'center',
        paddingTop:normalize(20)
    },
    border:{
        width:'100%',
        height:normalize(400),
        borderBottomRightRadius:50,
    },
    imageStyle:{
        width:normalize(340),
        height:normalize(300),
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
        fontSize:normalize(24)
    },
    iconHeader:{
        color:'white',
        fontSize:normalize(40),
        paddingLeft:normalize(30),
        paddingRight:normalize(30)
    },
    fontFooter:{
        fontFamily:'Quicksand-Regular',
        color:'white'
    },
    fontFooter2:{
        fontFamily:'Quicksand-Regular',
        color:'black'
    },
    fontHeader:{
        fontFamily:'Quicksand-Bold',
        color:'#BF1E1E',
        fontSize:normalize(24)
    },
    fontCaption:{
        fontFamily:'Quicksand-SemiBold',
        color:'white',
        fontSize:normalize(20)
    }
})