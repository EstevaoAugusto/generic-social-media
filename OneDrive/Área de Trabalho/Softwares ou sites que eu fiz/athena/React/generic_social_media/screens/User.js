import React, {useState} from 'react';
import {ScrollView, Text , Image, StyleSheet} from "react-native";
import { StatusBar } from "expo-status-bar";
import { NomeUser , Container, TextDesc, Texto} from "../src/style/styleUser";
import { Titulo } from '../src/style/styleHeader';
import { TouchableOpacity } from 'react-native-gesture-handler';
/*
    Este é o arquivo de um usuario generico
*/


export default function Header(){
    /*Estes dados definem os cards selecionaveis */
    const [state, setState] = useState({ nome: "", mostrarTexto: false }); //Diz se mostrara o texto como tambem o nome da imagem
    const [caminho2, setCaminho2] = useState(require('../assets/man2.jpg')) //Contem caminho da 2a imagem
    const [caminho1, setCaminho1] = useState(require('../assets/man1.jpg')) //Contem caminho da 1a imagem
    
    /*Função que possibilita trocar de caminho, como tambem setar os valores caminho1 e caminho2.
    É importante lembrar que o id é um valor único, portanto não deve existir dois ids iguais*/
    const verDados = (name ,id) => {
        if(id === 1) {
            if(caminho1 === require('../assets/man1.jpg')){ //checa se  o caminho ainda nao foi alterado
                setCaminho1(require('../assets/tela_cinzenta.png'))//muda para uma imagem cinzenta
                setState((prevState) => ({...prevState ,nome: name, mostrarTexto: true}) );//texto desaparece
            } else {//se o arquivo nao foi alterado, mude para a imagem original
                setCaminho1(require('../assets/man1.jpg'))
                setState((prevState) => ({...prevState ,nome: name, mostrarTexto: false}) ); //texto some
            }
        } else { //o proximo é o mesmo que o outro, a diferença é o id
            if(caminho2 === require('../assets/man2.jpg')){
                setCaminho2(require('../assets/tela_cinzenta.png'))
                setState((prevState) => ({...prevState ,nome: name, mostrarTexto: true}) );
            } else {
                setCaminho2(require('../assets/man2.jpg'))
                setState((prevState) => ({...prevState ,nome: name, mostrarTexto: false}) );
            }
        }
        
    }


    return(
        <ScrollView>
                <StatusBar style="auto"/>
                <Container> 
                    <Image style={estilo.logo} source={require("../assets/person.png")}/>
                    <NomeUser style={estilo.organizacao}>Generic User</NomeUser>
                </Container>

                <TextDesc style={estilo.organizacao}>Descrição</TextDesc >
                <Texto style={estilo.organizacao}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum mollis posuere.
                    Sed convallis molestie magna et cursus. Integer eget velit ipsum. In tincidunt odio massa, ut sodales justo dignissim a. 
                    Sed sed finibus augue. Mauris malesuada, felis mattis malesuada placerat, elit mi pretium felis, quis vestibulum nunc
                    ante nec ex. Vestibulum eleifend libero nisi, in bibendum tellus varius semper.
                </Texto>

                    <TextDesc style={estilo.organizacao}>Amigos</TextDesc>
                    {/*Aqui em baixo estao os cards selecionaveis, quando tocar neles
                    uma funcao anonima será acionada que possibilitara voce ver o nome da imagem */}
                <Container>
                    <TouchableOpacity onPress={() => verDados("Jonh",1)}>
                        <Image name="Jonh" id={1} style={estilo.amigos} source={caminho1}/>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => verDados("Tomas",2)}>
                        <Image name="Tomas" id={2} style={estilo.amigos} source={caminho2}/>
                                
                    </TouchableOpacity>

                </Container>
                {state.mostrarTexto && <Text style={estilo.nomeAmigo}>{state.nome}</Text>}
                

                <Titulo>Feito por Estevao Augusto</Titulo>
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
    },
    nomeAmigo:{
        padding: 6,
        margin: 6,
    }
});