import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import { Button, Header, Icon } from "native-base";
import React, {Component} from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import normalize from "react-native-normalize";

export default class IsiBiodataUser extends Component{
    constructor(props){
        super(props);
        this.state={
            jumlah_user:0,
            collection:[]
        }
    }

    getDataUser(){
        axios.get('http://10.0.2.2:4000/users')
        .then(
            res => {
                const value = res.data;
                this.setState({jumlah_user: value.length})
                console.log("Jumlah user: ", value.length)
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
                    <View style={{alignItems:'center', flexDirection:'row', justifyContent:'center', paddingBottom:normalize(20)}}>
                        <View style={styles.square}>

                        </View>
                    </View>
                </ScrollView>
                <Button full warning onPress={() => this.props.navigation.navigate('Dashboard')}>
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