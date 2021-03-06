import { Button, Header, Icon } from "native-base";
import React, {Component} from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import normalize from "react-native-normalize";

export default class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <View style={styles.bg}>
                <Header style={styles.head}>
                    <Text style={styles.fontHead}>Dashboard-Admin</Text>
                </Header>
                <ScrollView>
                    <View style={styles.center}>
                        <Text style={styles.fontTitle}>Welcome Home, Admin Married You</Text>
                    </View>
                    <View style={{alignItems:'center', flexDirection:'row', justifyContent:'center', paddingBottom:normalize(20)}}>
                        <View style={{flexWrap:'wrap'}}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('DataUser')} style={styles.square}>
                                <View style={{alignItems:'center', paddingTop:normalize(40)}}>
                                    <Icon type={"FontAwesome5"} name="user-circle" style={{fontSize:normalize(50), color:'#62CBEC'}} />
                                    <Text style={styles.fontCard}>Data User</Text>
                                </View>
                            </TouchableOpacity>

                            <View style={{paddingTop:normalize(20)}} />
                            <TouchableOpacity style={styles.square}>
                                <View style={{alignItems:'center', paddingTop:normalize(40)}}>
                                    <Icon type={"FontAwesome5"} name="calendar-alt" style={{fontSize:normalize(50), color:'#62CBEC'}} />
                                    <Text style={styles.fontCard}>Data Kegiatan</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{paddingLeft:normalize(20)}} />
                        <View style={{flexWrap:'wrap'}}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ListChat')} style={styles.square}>
                                <View style={{alignItems:'center', paddingTop:normalize(40)}}>
                                    <Icon type={"FontAwesome5"} name="envelope" style={{fontSize:normalize(50), color:'#62CBEC'}} />
                                    <Text style={styles.fontCard}>Balas Pesan</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{paddingTop:normalize(20)}} />

                            <TouchableOpacity style={styles.square}>
                                <View style={{alignItems:'center', paddingTop:normalize(30)}}>
                                    <Icon type={"FontAwesome5"} name="question-circle" style={{fontSize:normalize(50), color:'#62CBEC'}} />
                                    <Text style={styles.fontCard}>Laporkan Masalah</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <Button full danger onPress={() => this.props.navigation.navigate('Login')}>
                    <Text>Logout</Text>
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
        padding:normalize(50),
        paddingTop:normalize(50)
    },
    head:{
        alignItems:'center',
        justifyContent:'center',
        borderBottomRightRadius:50, 
        backgroundColor:'#64B8F5'
    },
    sizeImg:{
        width:normalize(250),
        height:normalize(250)
    },
    square:{
        width:normalize(150),
        height:normalize(150),
        backgroundColor:'#fff',
        borderRadius:10,
        shadowColor:'black'
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
        fontFamily:'Quicksand-Bold',
        fontSize:normalize(22),
        color:'black',
        textAlign:'center'
    }
})