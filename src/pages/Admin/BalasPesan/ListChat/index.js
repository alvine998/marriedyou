import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import { Button, Header, Icon } from "native-base";
import React, {Component} from "react";
import { RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import normalize from "react-native-normalize";

export default class ListChat extends Component{
    constructor(props){
        super(props);
        this.state={
            collection:[],
            refresh: false
        }
    }

    getDataChat(){
        axios.get(`http://10.0.2.2:4000/chats/`).then(
            res => {
                const collection = res.data;
                this.setState({collection});
            }
        )
    }

    async setId(id){
        await AsyncStorage.setItem('idUser', id)
    }

    componentDidMount(){
        this.getDataChat()
    }

    onRefresh (){
        this.setState({refresh: true})
        setTimeout(() => {
            this.setState({refresh: false})
            this.getDataChat()
        }, 2000)
    }

    render(){
        return(
            <View style={styles.bg}>
                <Header style={styles.head}>
                    <Text style={styles.fontHead}>Dashboard-Admin</Text>
                </Header>
                <ScrollView refreshControl={<RefreshControl refreshing={this.state.refresh} onRefresh={() => this.onRefresh()} />}>
                    <View style={styles.center}>
                        <Text style={styles.fontTitle}>Balas Pesan</Text>
                    </View>
                    {
                        this.state.collection.reverse() && this.state.collection.map((element,i) => {
                            return(
                                <View key={i} style={{alignItems:'center',justifyContent:'center', paddingBottom:normalize(20)}}>
                                    <TouchableOpacity style={styles.square} onPress={() => {this.setId(element._id), this.props.navigation.push('IsiChat')}}>
                                        <Text style={styles.fontCard}>{element._id}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                    
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
        padding:normalize(20),
        paddingTop:normalize(20)
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