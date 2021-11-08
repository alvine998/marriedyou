import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import BotNav from "./src/components/BotNav";
import Account from "./src/pages/Account";
import IsiChat from "./src/pages/Admin/BalasPesan/IsiChat";
import ListChat from "./src/pages/Admin/BalasPesan/ListChat";
import Dashboard from "./src/pages/Admin/Dashboard";
import DataUser from "./src/pages/Admin/DataUser";
import BiodataUser from "./src/pages/Admin/DataUser/BiodataUser";
import IsiBiodataUser from "./src/pages/Admin/DataUser/IsiBiodataUser";
import Kegiatan from "./src/pages/Agenda/Kegiatan";
import Obrolan from "./src/pages/Chat/Obrolan";
import RuangObrolan from "./src/pages/Chat/RuangObrolan";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import Profil from "./src/pages/Profil";
import Register from "./src/pages/Register";
import Splash from "./src/pages/Splash";

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Splash"} screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Splash" component={Splash}/>

        {/* Home */}
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Profil" component={Profil}/>


        {/* Chat */}
        <Stack.Screen name="RuangObrolan" component={RuangObrolan}/>
        <Stack.Screen name="Obrolan" component={Obrolan}/>

        {/* Account */}
        <Stack.Screen name="Account" component={Account}/>

        {/* Kegiatan */}
        <Stack.Screen name="Kegiatan" component={Kegiatan}/>

        {/* Admin Dashboard */}
        <Stack.Screen name="Dashboard" component={Dashboard}/>
        {/* Admin Data User */}
        <Stack.Screen name="DataUser" component={DataUser}/>
        <Stack.Screen name="BiodataUser" component={BiodataUser}/>
        <Stack.Screen name="IsiBiodataUser" component={IsiBiodataUser}/>

        {/* <Stack.Screen name="DataUser" component={DataUser}/> */}
        {/* Admin Balas Pesan */}
        <Stack.Screen name="ListChat" component={ListChat}/>
        <Stack.Screen name="IsiChat" component={IsiChat}/>




      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Home/>
    // </View>
  )
}

export default App;