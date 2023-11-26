import React, {createContext, useContext} from 'react';
import {ScrollView, View , Image, StyleSheet} from "react-native";
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
                    <NomeUser style={estilo.organizacao}>Generic User</NomeUser>
                </Container>

                <TextDesc style={estilo.organizacao}>Descrição</TextDesc> {/* Descrição com texto placeholder*/}
                <Texto style={estilo.organizacao}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum mollis posuere. 
                    Sed convallis molestie magna et cursus. Integer eget velit ipsum. In tincidunt odio massa, ut sodales justo dignissim a. 
                    Sed sed finibus augue. Mauris malesuada, felis mattis malesuada placerat, elit mi pretium felis, quis vestibulum nunc
                    ante nec ex. Vestibulum eleifend libero nisi, in bibendum tellus varius semper.</Texto>
                <TextDesc style={estilo.organizacao}>Amigos</TextDesc>
                <Container>
                    <Image name="Jonh" style={estilo.amigos} source={require("../assets/man1.jpg")}/>
                    <Image name="Tomas" style={estilo.amigos} source={require("../assets/man2.jpg")}/>
                    <Image name="Jonh" style={estilo.amigos} source={require("../assets/man1.jpg")}/>
                    <Image name="Tomas" style={estilo.amigos} source={require("../assets/man2.jpg")}/>
                    <Image name="Jonh" style={estilo.amigos} source={require("../assets/man1.jpg")}/>
                    <Image name="Tomas" style={estilo.amigos} source={require("../assets/man2.jpg")}/>
                    
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