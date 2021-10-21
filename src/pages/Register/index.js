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
            jenis_kelamin:'Laki-laki',
            jk1:'Laki-laki',
            jk2:'Perempuan',
            usia:'',
            checked:true,
            checked2:false,
            collection:[]
        };
        this.handleNama = this.handleNama.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleNohp = this.handleNohp.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleUsia = this.handleUsia.bind(this);
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

    handleUsia(event) {
        this.setState({ usia: event })
    }

    handleRadio(jk){
        this.setState({checked: true, checked2: false})
        this.setState({jenis_kelamin: jk})
        console.log('jenis kelamin: ', jk)
    }

    handleRadio2(jk){
        this.setState({checked2: true, checked: false})
        console.log('jenis kelamin: ', jk)
        this.setState({jenis_kelamin: jk})
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
        else if(!this.state.usia){
            alert("Harap isi usia anda")
        }
        else if(this.state.usia < 17){
            alert("Anda masih dibawah umur")
        }
        else {
            const user = {
                nama: this.state.nama,
                email: this.state.email,
                nohp: this.state.nohp,
                password: this.state.password,
                jenis_kelamin: this.state.jenis_kelamin,
                usia: this.state.usia
            }
            console.log("hello", user)
            axios.post(`http://10.0.2.2:4000/users`, user)
                .then(res => {
                    console.log(res.data);
                    Alert.alert("Berhasil Daftar")
                    this.setState({nama:'', email:'', nohp:'', password:'', checked: true, checked2:false})
                    this.props.navigation.navigate("Login")
                })
                .catch(err => {
                    console.log("API Error: " , err.message);
                });
        }
        
    }

    componentDidMount(){
        console.log(this.state.jenis_kelamin)
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

                            <View style={styles.squareUsia}>
                                <TextInput
                                    value={this.state.usia}
                                    onChangeText={this.handleUsia}
                                    placeholder="Usia"
                                    keyboardType="number-pad"
                                    maxLength={2}
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
                            <View style={{paddingTop:normalize(20)}}/>

                            <Text style={{fontFamily:'Quicksand-SemiBold'}}>Jenis Kelamin :</Text>
                            <View style={{paddingTop:normalize(10)}}/>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <TouchableOpacity onPress={() => {this.handleRadio(this.state.jk1)}} style={styles.radioButton}>
                                        {
                                            this.state.checked == true ? (
                                                <Icon type={"FontAwesome"} name="circle" style={styles.iconRadio}/>
                                            ) : this.state.checked2 == true ? (<View/>) : (<View/>)
                                        }
                                    </TouchableOpacity>
                                    <Text style={{fontFamily:'Quicksand-SemiBold', paddingLeft:normalize(10)}}>Laki-laki</Text>
                                </View>

                                <View style={{flexDirection:'row', alignItems:'center', paddingLeft:normalize(20)}}>
                                    <TouchableOpacity onPress={() => {this.handleRadio2(this.state.jk2)}} style={styles.radioButton}>
                                        {
                                            this.state.checked2 == true ? (
                                                <Icon type={"FontAwesome"} name="circle" style={styles.iconRadio}/>
                                            ) : this.state.checked == true ? (<View/>) : (<View/>)
                                        }
                                    </TouchableOpacity>
                                    <Text style={{fontFamily:'Quicksand-SemiBold', paddingLeft:normalize(10)}}>Perempuan</Text>
                                </View>
                            </View>

                            <View style={{paddingTop:normalize(20)}}/>

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
    squareUsia:{
        width:normalize(65),
        height:normalize(50),
        backgroundColor:'#fff',
        borderRadius:10,
        paddingLeft:normalize(10)
    },
    radioButton:{
        width:normalize(25),
        height:normalize(25),
        borderRadius:20,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    },
    iconRadio:{
        color:'black',
        fontSize:normalize(20)
    }
})