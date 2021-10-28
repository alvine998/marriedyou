import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import { Button, Header, Icon } from "native-base";
import React, {Component} from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import normalize from "react-native-normalize";

export default class IsiBiodataUser extends Component{
    constructor(props){
        super(props);
        this.state={
            jumlah_user:0,
            id:'',
            nama:'',
            usia:'',
            nohp:'',
            email:'',
            alamat:'',
            jk:'',
            image:'',
            status:''
        }
    }

    async getDataUser(){
        await AsyncStorage.getItem('iduser')
        .then(
            ress => {
                console.log(ress)
                axios.get(`http://10.0.2.2:4000/users/id/${ress}`)
                .then(
                    res => {
                        const value = res.data;
                        this.setState({
                            id: value._id,
                            nama: value.nama,
                            usia: value.usia,
                            nohp: value.nohp,
                            email: value.email,
                            alamat: value.alamat,
                            jk: value.jenis_kelamin,
                            image: value.image,
                            status: value.status
                        })
                    }
                )
            }
        )
        
    }

    componentDidMount(){
        this.getDataUser();
    }

    render(){
        return(
            <View style={styles.bg}>
                <Header style={styles.head}>
                    <Text style={styles.fontHead}>Dashboard-Admin</Text>
                </Header>
                <ScrollView>
                    <View style={styles.center}>
                        <Text style={styles.fontTitle}>Profil User</Text>
                    </View>
                    
                    <ScrollView horizontal>
                        
                        <View style={{paddingBottom:normalize(20), alignItems:'center', paddingLeft:normalize(20)}}>
                            <View style={styles.center2}>
                                <Text style={styles.fontTitle}>Biodata</Text>
                            </View>
                            <View style={styles.square2}>
                                <View>
                                    <Text style={styles.fontCard}>Id : {this.state.id.substr(16,8)}</Text>
                                    <Text style={styles.fontCard}>Nama : {this.state.nama}</Text>
                                    <Text style={styles.fontCard}>Usia : {this.state.usia}</Text>
                                    <Text style={styles.fontCard}>Jenis Kelamin : {this.state.jk}</Text>
                                    <Text style={styles.fontCard}>Alamat : {this.state.alamat}</Text>
                                    <Text style={styles.fontCard}>No Hp : {this.state.nohp}</Text>
                                    <Text style={styles.fontCard}>Email : {this.state.email}</Text>
                                    <Text style={styles.fontCard}>Status : {this.state.status}</Text>
                                </View>
                            </View>
                            
                        </View>
                        <View style={{paddingBottom:normalize(20), alignItems:'center'}}>
                            <View style={styles.center2}>
                                <Text style={styles.fontTitle}>Foto Profil</Text>
                            </View>
                            <View style={{paddingLeft:normalize(10), paddingRight:normalize(20)}}>
                                <View style={[styles.square2, {alignItems:'center', justifyContent:'center'}]}>
                                    <View>
                                        {
                                            this.state.image !== '' ? (
                                                <Image source={{uri: `http://192.168.18.18:4000/resources/upload/${this.state.image}`}} style={styles.sizeImg} />
                                            ) : (
                                                <Text style={styles.fontTitle}>Belum ada foto</Text>
                                            )
                                        }
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    
                </ScrollView>
                <Button full warning onPress={() => this.props.navigation.navigate('BiodataUser')}>
                    <Text>Kembali</Text>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor:'#62CBEC',
        height:'100%'
    },
    center:{
        alignItems:'center',
        justifyContent:'center',
        padding:normalize(20),
        paddingTop:normalize(50)
    },
    center2:{
        alignItems:'center',
        justifyContent:'center',
        padding:normalize(10),
    },
    head:{
        alignItems:'center',
        justifyContent:'center',
        borderBottomRightRadius:50, 
        backgroundColor:'#64B8F5'
    },
    sizeImg:{
        width:normalize(340),
        height:normalize(340),
        borderRadius:20
    },
    square:{
        width:normalize(150),
        height:normalize(150),
        backgroundColor:'#fff',
        borderRadius:10,
        shadowColor:'black'
    },
    square2:{
        width:normalize(350),
        height:normalize(350),
        backgroundColor:'#fff',
        borderRadius:10,
        padding:normalize(30)
    },
    fontHead:{
        fontFamily:'Quicksand-Bold',
        fontSize:normalize(24),
        color:'white'
    },
    fontTitle:{
        fontFamily:'Quicksand-Bold',
        fontSize:normalize(30),
        color:'black',
        textAlign:'center'
    },
    fontCard:{
        fontFamily:'Quicksand-Regular',
        fontSize:normalize(22),
        color:'black',
        textAlign:'justify'
    }
})