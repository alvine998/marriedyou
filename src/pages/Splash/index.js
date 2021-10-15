import AsyncStorage from "@react-native-community/async-storage";
import { StackActions } from "@react-navigation/native";
import React, {Component} from "react";
import { Image, StyleSheet, View } from "react-native";
import normalize from 'react-native-normalize';
import { logo } from "../../assets";

export default class Splash extends Component{
    constructor(props){
        super(props);
        this.state={
            valMail:'',
            login: false,
            values:''
        }
    }

    getDataItem = async() => {
        await AsyncStorage.getItem('emailKey')
        .then(
            values => {
                console.log(values);
                this.setState({valMail: values});
                if(!values){
                    this.setState({login: false});
                    setTimeout(() => {
                        this.props.navigation.dispatch(StackActions.replace('Login'))
                    }, 1500)
                } else {
                    this.setState({login: true});
                    setTimeout(() => {
                        this.props.navigation.dispatch(StackActions.replace('Home'))
                    }, 1500)
                }
            }
        )
    }

    componentDidMount(){
        this.getDataItem();
    }

    render(){
        return(
            <View>
                <View style={styles.bg}>
                    <View style={styles.center}>
                        <Image source={logo} style={styles.sizeImg} />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor:'#1FB3E2',
        height:'100%'
    },
    center:{
        alignItems:'center',
        justifyContent:'center',
        paddingTop:normalize(120)
    },
    sizeImg:{
        width:normalize(300),
        height:normalize(300)
    }
})