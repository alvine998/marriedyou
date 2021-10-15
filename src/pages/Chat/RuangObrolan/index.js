import { Icon } from "native-base";
import React, {Component} from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import normalize from "react-native-normalize";
import { logo } from "../../../assets";

export default class RuangObrolan extends Component{
    constructor(props){
        super(props);
        this.state={
            images:'https://lh3.googleusercontent.com/fife/AAWUweWtQgjE6FYkL5DwfrYrWLGVIkl5wGroiMmwfTxTACfW2eb5kdAwkMTqrLu_ZWdbOi2nRiIniWpNI7LHURaVFlJWEhSD1kN5-7osKqLwX7kTOLVi1fAgCZxqSKx1KhB40fe1dz50C95dmEYCwKyruAS87fAfIty41GmIrLNNvDOajyok6V9b7ETVYGy4zdYKMokn8yAHyDJhNFQ0rmGssSJ_5I1V0df5bd0fN4WD_hr8ZuFwnbs-hMjnzcBRwCtpNcmo5NaPYzOSzfb6Q4_hZkwKT9-fAZi8cSujTwKNsbYbz2B5h9QEOW1nZAYsrcT6a3uXGGj7jxpE7JziTPQ6T9FXaIG1NzT2_zWRl28NvuY67xa7jvWrhGd15_WxT7HDVLqBbwpmT-xF4lLz-im4qlnodCJEcR6qEmLuzEO_eAJ0tQk-xo65cJhkH1FZGeRg7UO0WXGKhdluT7mR7W3fTtGu-eS3MTmKzgYTeJMRbHS9p1-HoUMgHk2jnrrG2VuohNhbqoinYV0xZXtxCZ647b8E5NbYA8pGPso-TWFkPwtHEmk60847WojRLchX9pl3pmdtav1y6TUvH211pQrhVbyO5XY_tQB0iFOeTBHhYdewjlfsllbinI4zZhvCUGzLFeP3QJVSA_aN974Qe-o1YtPl-QpmYrFd2dFCwr5ky3uYWPRS2QE_n4P2vNI8stvysshXN7dJ6_W2uo27JyKvGnvcyUTmpbCevpw=w811-h609-ft',
            
        }
    }

    renderEmptyChat(){
        return(
            <View>
                <Image source={{uri:this.state.images[0]}} style={styles.imageStyle} />
            </View>
        )
    }

    render(){
        return(
            <View style={styles.bg}>
                <View style={styles.head}>
                    <Text style={styles.fontHeader}>Ruang Obrolan</Text>
                    <Icon type={'FontAwesome5'} name="comments" style={styles.iconHeader} />
                </View>
                <ScrollView>
                    <View style={{alignItems:'center', justifyContent:'center', paddingTop:normalize(20)}}>
                        <Image source={{uri:this.state.images}} style={styles.imageStyle} />
                        <Text style={styles.fontCaption}>
                            Kamu Hari Ini Belum Mengobrol {"\n"}
                            Dengan Siapapun. {"\n"}
                        </Text>
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
                                <Icon type={'FontAwesome'} name="comments" style={styles.iconFooterActive} />
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
                        <View style={{padding:normalize(10), paddingLeft:normalize(10)}}>
                            <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}}>
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
        backgroundColor:'white',
        width:normalize(150),
        height:normalize(180),
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20
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
    }
})