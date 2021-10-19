import AsyncStorage from "@react-native-community/async-storage";
import { Button, Icon } from "native-base";
import React, {Component} from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import normalize from "react-native-normalize";

export default class Account extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    onLogout = async() => {
        await AsyncStorage.clear();
        this.props.navigation.push('Login')
    }

    render(){
        return(
            <View style={styles.bg}>
                <View style={styles.head}>
                    <Text style={styles.fontHeader}>Akun</Text>
                    <Icon type={'FontAwesome'} name="user-circle" style={styles.iconHeader} />
                </View>
            <ScrollView>
                <View style={{alignItems:'center', justifyContent:'center', paddingTop:normalize(20)}}>
                    <View style={styles.imageContainer}>

                    </View>
                    <TouchableOpacity style={styles.border}>
                        <Icon  type={'FontAwesome'} name="camera" style={styles.iconStyle} />
                    </TouchableOpacity>

                    {/* main container */}
                    <View style={styles.mainContainer}>
                        <View>
                            <TextInput
                                underlineColorAndroid="#fff"
                                placeholder="Nama Lengkap"
                                placeholderTextColor="#fff"
                                style={{width:normalize(250), color:'#fff'}}
                                maxLength={25}
                            />
                        </View>

                        <View>
                            <TextInput
                                underlineColorAndroid="#fff"
                                placeholder="Usia"
                                placeholderTextColor="#fff"
                                style={{width:normalize(250), color:'#fff'}}
                                keyboardType="number-pad"
                                maxLength={2}
                            />
                        </View>

                        <View>
                            <TextInput
                                underlineColorAndroid="#fff"
                                placeholder="Alamat"
                                placeholderTextColor="#fff"
                                style={{width:normalize(250), color:'#fff'}}
                                maxLength={20}
                            />
                        </View>

                        <View>
                            <TextInput
                                underlineColorAndroid="#fff"
                                placeholder="Hobi :"
                                placeholderTextColor="#fff"
                                style={{width:normalize(250), color:'#fff'}}
                                maxLength={100}
                                numberOfLines={5}
                                multiline
                            />
                        </View>

                        <View>
                            <TextInput
                                underlineColorAndroid="#fff"
                                placeholder="Tentangku :"
                                placeholderTextColor="#fff"
                                style={{width:normalize(250), color:'#fff'}}
                                numberOfLines={5}
                                maxLength={100}
                                multiline
                            />
                        </View>
                    </View>

                    <View style={{paddingBottom:normalize(20)}}>
                        <Button full style={styles.buttonStyle}>
                            <Text style={styles.fontCaption}>Simpan</Text>
                        </Button>
                        <View style={{paddingTop:normalize(20)}}>
                        <Button onPress={() => {this.onLogout()}} full style={styles.buttonStyleLogout}>
                            <Text style={styles.fontCaption}>Logout</Text>
                        </Button>
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
                                <Icon type={'FontAwesome'} name="user-circle" style={styles.iconFooterActive} />
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
        width:normalize(340),
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