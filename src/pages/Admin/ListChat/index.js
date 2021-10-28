import { Button, Header, Icon } from "native-base";
import React, {Component} from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import normalize from "react-native-normalize";

export default class ListChat extends Component{
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
                        <Text style={styles.fontTitle}>Balas Pesan</Text>
                    </View>
                    <View style={{alignItems:'center',justifyContent:'center', paddingBottom:normalize(20)}}>
                        <TouchableOpacity style={styles.square}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.fontCard}>Andi </Text>
                                <Text style={styles.fontCard}>Ke</Text>
                                <Text style={styles.fontCard}> Mona</Text>
                            </View>
                        </TouchableOpacity>
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
        width:'100%',
        height:normalize(50),
        backgroundColor:'#fff',
        shadowColor:'black',
        alignItems:'center',
        justifyContent:'center'
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