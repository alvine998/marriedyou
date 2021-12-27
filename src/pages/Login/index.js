import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import { Button, Icon, Right } from "native-base";
import React, {Component} from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import normalize from 'react-native-normalize';
import { logo } from "../../assets";

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            collection:[]
        }
    }

    setEmail = async() => {
        await AsyncStorage.setItem('emailKey', this.state.email)
    }

    handleUsername(event){
        this.setState({email: event})
    }

    handlePassword(event){
        this.setState({password: event})
    }

    onLogin(){
        const auth = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post(`http://10.0.2.2:4000/userss/login`, auth)
        .then(
            res => {
                console.log(res.data)
                alert("Berhasil Login")
                this.setEmail()
                this.props.navigation.push('Home')
            }
        )
        axios.post(`http://192.168.18.6:4000/userss/login`, auth)
        .then(
            res => {
                console.log(res.data)
                alert("Berhasil Login")
                this.setEmail()
                this.props.navigation.push('Home')
            }
        )
        .catch(err => {
            if(this.state.email == "admin" && this.state.password == "admin"){
                alert("Berhasil Login")
                this.props.navigation.push('Dashboard')
                this.setState({email:'', password:''})
            } else {
                console.log(err)
                alert("Email atau Password yang anda masukkan salah")
            }
            
        })
    }

    componentDidMount(){
        
    }

    render(){
        return(
            <View>
                <View style={styles.bg}>
                    <ScrollView>
                    <View style={styles.center}>
                        <Image source={logo} style={styles.sizeImg} />
                        <View style={styles.square}>
                            <TextInput
                                value={this.state.email}
                                onChangeText={this.handleUsername.bind(this)}
                                placeholder="Email"
                            />
                        </View>
                        <View style={{paddingTop:normalize(10)}}/>
                        <View style={[styles.square, {flexDirection:'row'}]}>
                            <TextInput
                                value={this.state.password}
                                onChangeText={this.handlePassword.bind(this)}
                                placeholder="Password"
                                secureTextEntry={true}
                            />
                            <Right/>
                            
                        </View>
                        <View style={{paddingTop:normalize(10)}}/>
                        <View>
                            <Button onPress={() => this.onLogin()} full style={styles.buttonStyle}>
                                <Text style={{color:'white'}}>Masuk</Text>
                            </Button>
                        </View>
                        <View style={{paddingTop:normalize(10)}}/>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'white'}}>Belum Punya Akun ? </Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                                <Text style={{color:'blue'}}>Daftar Disini</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </ScrollView>
                </View>
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
        paddingTop:normalize(50)
    },
    sizeImg:{
        width:normalize(250),
        height:normalize(250)
    },
    square:{
        width:normalize(280),
        height:normalize(50),
        backgroundColor:'#fff',
        borderRadius:10,
        paddingLeft:normalize(10)
    },
    buttonStyle:{
        backgroundColor:'#31A5F9',
        width:normalize(280),
        height:normalize(40),
        borderRadius:10
    }
})