import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from "../../screens/Header";
import Home from "../../screens/Home";
import User from "../../screens/User";

const Stack = createStackNavigator()

/*É aqui onde ocorre a navegação */

export default function PageStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="User" component={User}/>
                <Stack.Screen name="Header" component={Header}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}