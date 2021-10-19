import AsyncStorage from "@react-native-community/async-storage";
import { Button, Icon } from "native-base";
import React, {Component} from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import normalize from "react-native-normalize";

export default class Kegiatan extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    // Tampilan Jika Ada Kegiatan
    renderAvailKegiatan(){
        return(
            <View>

            </View>
        )
    }

    // Tampilan Jika Tidak Ada Kegiatan
    renderEmptyKegiatan(){
        return(
            <View>
                <Image source={{uri: 'https://image.freepik.com/free-vector/events-concept-illustration_114360-931.jpg'}} style={styles.imageStyle} />
                <View style={{padding:normalize(20), alignItems:'center'}}>
                    <Text style={styles.fontCaption}>Ditunggu Ya Untuk Kegiatan Selanjutnya !</Text>
                </View>
            </View>
        )
    }

    render(){
        return(
            <View style={styles.bg}>
                <View style={styles.head}>
                    <Text style={styles.fontHeader}>Kegiatan</Text>
                    <Icon type={'FontAwesome5'} name="calendar-alt" style={styles.iconHeader} />
                </View>
            <ScrollView>
                <View style={{alignItems:'center', justifyContent:'center', paddingTop:normalize(20)}}>
                    {
                        this.renderEmptyKegiatan()
                    }
                </View>
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
                                <Icon type={'FontAwesome'} name="comments" style={styles.iconFooter} />
                                <Text style={styles.fontFooter}>Obrolan</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{alignItems:'center', justifyContent:'center'}}>
                            <View style={{borderWidth:1, height:normalize(50)}} />
                        </View>

                        {/* Footer Kegiatan */}
                        <View style={{padding:normalize(10), paddingLeft:normalize(10)}}>
                            <TouchableOpacity onPress={() => this.props.navigation.push('Kegiatan')} style={{alignItems:'center', justifyContent:'center'}}>
                                <Icon type={'FontAwesome5'} name="calendar-alt" style={styles.iconFooterActive} />
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
        width:normalize(50),
        height:normalize(50),
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:normalize(130),
        marginTop:normalize(-40)
    },
    mainContainer:{
        backgroundColor:'#31A5F9',
        width:normalize(300),
        height:normalize(450),
        borderRadius:20,
        alignItems:'center',
        marginTop:normalize(20),
        marginBottom:normalize(20),
        padding:normalize(10)
    },
    imageStyle:{
        width:normalize(375),
        height:normalize(300),
    },
    imageContainer:{
        width:normalize(150),
        height:normalize(150),
        borderRadius:75,
        backgroundColor:'#31A5F9',
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
    iconStyle:{
        color:'#62CBEC',
        fontSize:normalize(25),
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
    },
    buttonStyle:{
        backgroundColor:'#008BF0',
        borderRadius:10,
        height:normalize(40),
        width:normalize(200)
    },
    buttonStyleLogout:{
        backgroundColor:'#D66666',
        borderRadius:10,
        height:normalize(40),
        width:normalize(200)
    }
})