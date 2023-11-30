import React, {createContext, useContext} from 'react';
import {ScrollView, View , Image, StyleSheet, Text} from "react-native";
import { StatusBar } from "expo-status-bar";
import { NameContext } from "../src/contexts/NameContext";
import { NomeUser , Container, TextDesc, Texto} from "../src/style/styleUser";
/*
    Este é o arquivo de um usuario generico
*/

export default function Header(){
    const {name} = useContext(NameContext)
    
    
    return(
        <ScrollView>
                <StatusBar style="auto"/>
                <Container> {/* Profile picture de um usuario generico*/}
                    <Image style={estilo.logo} source={require("../assets/person.png")}/>
                    <Text style={estilo.organizacao}>Generic User</Text>
                </Container>

                
                <TextDesc style={estilo.organizacao}>Descrição</TextDesc> {/* Descrição com texto placeholder*/}
                <Text style={estilo.organizacao}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum mollis posuere. 
                    Sed convallis molestie magna et cursus. Integer eget velit ipsum. In tincidunt odio massa, ut sodales justo dignissim a. 
                    Sed sed finibus augue. Mauris malesuada, felis mattis malesuada placerat, elit mi pretium felis, quis vestibulum nunc
                    ante nec ex. Vestibulum eleifend libero nisi, in bibendum tellus varius semper.</Text>
                <Text style={estilo.organizacao}>Amigos</Text>
                <Container>
                    <Image name="Jonh" id={1} style={estilo.amigos} source={require("../assets/man1.jpg")}/>
                    <Image name="Tomas" id={2} style={estilo.amigos} source={require("../assets/man2.jpg")}/>
                    
                    </Container>
        </ScrollView>
    )
}

const estilo = StyleSheet.create({ //Estilização de alguns elementos da pagina
    amigos:{
        width: 512/3,
        height: 512/3,
        marginLeft: 35,
    },
    logo:{
        width: 512/3,
        height: 512/3,
    },
    organizacao:{
        padding: 12,
        margin: 12,
    }
});