import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import BotNav from "./src/components/BotNav";
import RuangObrolan from "./src/pages/Chat/RuangObrolan";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
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

        {/* Chat */}
        <Stack.Screen name="RuangObrolan" component={RuangObrolan}/>

      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Home/>
    // </View>
  )
}

export default App;