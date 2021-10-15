import { Body, Header, Icon, Left } from "native-base";
import React, {Component} from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import normalize from "react-native-normalize";

export default class Profil extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }

    render(){
        return(
            <View style={styles.bg}>
                <ScrollView>
                    <View style={styles.border}>
                        <View style={styles.head}>
                            <Icon type={'FontAwesome5'} name="chevron-left" style={styles.iconHeader} />
                            <Text style={styles.fontHeader}>Nama, Usia</Text>
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
    head:{
        paddingLeft:normalize(0),
        flexDirection:'row',
        alignItems:'center',
        paddingTop:normalize(20)
    },
    border:{
        backgroundColor:'white',
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
        fontSize:normalize(30)
    },
    iconHeader:{
        color:'black',
        fontSize:normalize(40),
        paddingLeft:normalize(30),
        paddingRight:normalize(30)
    },
    fontFooter:{
        fontFamily:'Quicksand-Regular',
        color:'white'
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