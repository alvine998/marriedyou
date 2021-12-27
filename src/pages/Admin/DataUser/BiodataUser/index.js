import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import { Button, Header, Icon } from "native-base";
import React, {Component} from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import normalize from "react-native-normalize";

export default class BiodataUser extends Component{
    constructor(props){
        super(props);
        this.state={
            jumlah_user:0,
            collection:[],
            id:'',
            nama:'',
            collect:[],
            searching:false
        }
    }

    getDataUser(){
        axios.get(`http://10.0.2.2:4000/users/`)
        .then(
            res => {
                const collection = res.data;
                console.log(collection);
                this.setState({collection})
            }
        )
        axios.get(`http://192.168.18.6:4000/users/`)
        .then(
            res => {
                const collection = res.data;
                console.log(collection);
                this.setState({collection})
            }
        )
    }

    searchUser(){
        axios.get(`http://10.0.2.2:4000/search?nama=${this.state.nama}`)
        .then(
            res => {
                const collect = res.data;
                console.log(collect);
                this.setState({collect})
            }
        )
        axios.get(`http://192.168.18.6:4000/search?nama=${this.state.nama}`)
        .then(
            res => {
                const collect = res.data;
                console.log(collect);
                this.setState({collect})
            }
        )
    }

    async setDataUser(id){
        await AsyncStorage.setItem('iduser', id)
        console.log("id : ", id)
    }

    renderSearch(){
        return(
            this.state.collect.reverse() && this.state.collect.map((res,i) => {
                return(
                    <View key={i} style={{paddingBottom:normalize(10)}}>
                        <TouchableOpacity onPress={() => {this.setDataUser(res._id),this.props.navigation.push('IsiBiodataUser')}} style={styles.square}>
                            <Text style={styles.fontCard}>{res._id.substr(16,8)} : {res.nama}</Text>
                        </TouchableOpacity>
                    </View>
                )
            })
        )
    }

    componentDidMount(){
        this.getDataUser();
    }

    renderAllData(){
        return(
            this.state.collection.reverse() && this.state.collection.map((res,i) => {
                return(
                    <View key={i} style={{paddingBottom:normalize(10)}}>
                        <TouchableOpacity onPress={() =>{this.setDataUser(res._id), this.props.navigation.push('IsiBiodataUser')}} style={styles.square}>
                            <Text style={styles.fontCard}>{res._id.substr(16,8)} : {res.nama}</Text>
                        </TouchableOpacity>
                    </View>
                )
            })
        )
    }

    render(){
        return(
            <View style={styles.bg}>
                <Header style={styles.head}>
                    <Text style={styles.fontHead}>Dashboard-Admin</Text>
                </Header>
                <ScrollView>
                    <View style={styles.center}>
                        <View style={styles.borders}>
                            <Text style={styles.fontTitle}>Biodata User</Text>
                        </View>
                    </View>

                    {/* Untuk Component Search */}
                    <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                        <View style={styles.square2}>
                            <TextInput
                                placeholder="Cari disini"
                                value={this.state.nama}
                                onChangeText={(event) => this.setState({nama: event})}
                            />
                        </View>
                        {
                            this.state.searching == true ? (
                                <TouchableOpacity onPress={() => {this.setState({searching: false})}} style={[styles.square3, {marginLeft:normalize(10)}]}>
                                    <Icon type={"FontAwesome5"} name="times-circle" style={{fontSize:normalize(30), color:'#62CBEC'}} />
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={() => {this.searchUser(), this.setState({searching: true})}} style={[styles.square3, {marginLeft:normalize(10)}]}>
                                    <Icon type={"FontAwesome5"} name="search" style={{fontSize:normalize(30), color:'#62CBEC'}} />
                                </TouchableOpacity>
                            )
                        }
                        
                    </View>
                    <View style={{alignItems:'center', justifyContent:'center', paddingBottom:normalize(20), paddingTop:normalize(20)}}>
                        {
                            this.state.searching ? this.renderSearch() : this.renderAllData() 
                        }
                    </View>
                </ScrollView>
                <Button full warning onPress={() => this.props.navigation.navigate('DataUser')}>
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
        padding:normalize(30),
        paddingTop:normalize(30)
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
        width:normalize(375),
        height:normalize(50),
        backgroundColor:'#fff',
        borderRadius:10,
        shadowColor:'black',
        alignItems:'center',
        justifyContent:'center'
    },
    square2:{
        width:normalize(270),
        height:normalize(50),
        backgroundColor:'#fff',
        borderRadius:10,
        paddingLeft:normalize(10)
    },
    square3:{
        width:normalize(50),
        height:normalize(50),
        backgroundColor:'#fff',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    borders:{
        width:normalize(200),
        height:normalize(100),
        backgroundColor:'#fff',
        borderRadius:20,
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