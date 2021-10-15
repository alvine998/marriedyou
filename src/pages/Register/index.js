import axios from 'axios';
import { Body, Button, Header, Icon, Left } from 'native-base';
import React, { Component } from 'react'
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';

export default class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            nama:'',
            nohp:'',
            email:'',
            password:'',
            collection:[]
        };
        this.handleNama = this.handleNama.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleNohp = this.handleNohp.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    handleEmail(event) {
        this.setState({ email: event })
    }

    handleNama(event) {
        this.setState({ nama: event })
    }

    handleNohp(event) {
        this.setState({ nohp: event })
    }

    handlePassword(event) {
        this.setState({ password: event })
    }


    handleSubmit () {
        if(!this.state.nama){
            alert("Harap isi nama anda")
        } 
        else if(!this.state.email){
            alert("Harap isi email anda")
        }
        else if(!this.state.nohp){
            alert("Harap isi nomor telepon anda")
        }
        else if(!this.state.password){
            alert("Harap isi password anda")
        }
        else {
            const user = {
                nama: this.state.nama,
                email: this.state.email,
                nohp: this.state.nohp,
                password: this.state.password
            }
            console.log("hello", user)
            axios.post(`http://10.0.2.2:4000/users`, user)
                .then(res => {
                    console.log(res.data);
                    Alert.alert("Berhasil Daftar")
                    this.setState({nama:'', email:'', nohp:'', password:''})
                    this.props.navigation.navigate("Login")
                })
                .catch(err => {
                    console.log("API Error: " , err.message);
                });
        }
        
    }

    render(){
        const navigate = this.props;
        return(
            <View style={{backgroundColor:'#62CBEC', height:'100%'}}>
                <View style={styles.header}>
                    <Header transparent>
                        <Left>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                                <Icon type={"FontAwesome5"} name="chevron-left" />
                            </TouchableOpacity>
                        </Left>
                        <Body>
                            <Text style={{fontFamily:'RedHatDisplay-Regular', color:'white', fontWeight:'bold', fontSize:normalize(24)}}>Registrasi</Text>
                        </Body>
                    </Header>
                </View>
                <ScrollView>
                    
                    <View>
                        {this.state.collection && this.state.collection.map((collections, index) => {
                            console.log(collections);
                            return(
                                <Text>{collections.nama}</Text>
                            )
                        })}
                    </View>
                    <View style={{alignItems:'center', justifyContent:'center', paddingTop:normalize(50)}}>
                        <View>
                            <View style={styles.square}>
                                <TextInput
                                    value={this.state.nama}
                                    onChangeText={this.handleNama}
                                    placeholder="Nama"
                                />
                            </View>
                            <View style={{paddingTop:normalize(10)}}/>

                            <View style={styles.square}>
                                <TextInput
                                    value={this.state.email}
                                    onChangeText={this.handleEmail}
                                    placeholder="Email"
                                />
                            </View>
                            <View style={{paddingTop:normalize(10)}}/>

                            <View style={styles.square}>
                                <TextInput
                                    value={this.state.nohp}
                                    onChangeText={this.handleNohp}
                                    placeholder="Nomor Ponsel"
                                    keyboardType="number-pad"
                                    maxLength={12}
                                />
                            </View>
                            <View style={{paddingTop:normalize(10)}}/>

                            <View style={styles.square}>
                                <TextInput
                                    value={this.state.password}
                                    onChangeText={this.handlePassword}
                                    placeholder="Password"
                                    secureTextEntry={true}
                                />
                            </View>
                            <View style={{paddingTop:normalize(10)}}/>

                            <Button full warning style={{backgroundColor:'#31A5F9', height:normalize(40), borderRadius:10}} onPress={() => this.handleSubmit()}>
                                <Text style={{ color: 'white', fontFamily: 'RedHatDisplay-Regular', fontSize: normalize(20), fontWeight: 'bold' }}>Daftar</Text>
                            </Button>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#31A5F9',
        height:normalize(100),
        borderBottomRightRadius:50,
        width:'100%'
    },
    square:{
        width:normalize(280),
        height:normalize(50),
        backgroundColor:'#fff',
        borderRadius:10,
        paddingLeft:normalize(10)
    },
})