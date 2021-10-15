import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, {Component} from "react";
import RuangObrolan from "../../pages/Chat/RuangObrolan";
import Home from "../../pages/Home";

const Tab = createBottomTabNavigator();

const BotNav = (props) => {
    return(
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="RuangObrolan" component={RuangObrolan} />
        </Tab.Navigator>
    )
}

export default BotNav;