import React, {useState} from "react";
import { ScrollView, Text, View, StyleSheet , Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Titulo } from "../src/style/styleHeader";
import { Botao } from "../src/style/styleHeader";

export default function Header() {
    const [likes, setLikes] = useState(0)
    const handleLikes = () => {
        setLikes(likes+1)
    }
    
    const navigation = useNavigation();
    const irParaOutraPagina = () => {
        navigation.navigate('User');
    };
    
    const clicado = () => {
        console.log("voce me clicou")
    }
    

    return (
    <ScrollView>
        <Titulo>Social Media</Titulo>
        <Botao onPress={irParaOutraPagina}>
            <Text>User</Text>
        </Botao>
        <View style={estilo.bloco}>
            <Text style={estilo.organizacao} onPress={irParaOutraPagina}>Generic User</Text>
            
            <View style={estilo.imgContainer}>
                <View style={estilo.img}>
                    <Image  style={estilo.img} source={require("../assets/cat.png")}/>   
                </View>
            </View>
        </View>

      <Text>I like cats. Here's David</Text>
      <Text style={estilo.alinhamento } onPress={handleLikes}>Curtir {likes}</Text>
      <Text>Comentar</Text>
      <Text>Salvar post</Text>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
    alinhamento:{
        textAlign: 'justify',
        flex: 1,
        alignContent: 'center',
    },
    
    organizacao: {
        marginVertical: 12,
        fontSize: 20,
        marginLeft: 12,
    },
  bloco: {
    backgroundColor: 'red',
    height: 350,
    margin: 15,
    position: 'relative', // Adicionado position: 'relative'
  },
  imgContainer: {
    paddingTop: 35,
    position: 'absolute',
    top: 15,
    left: 15,
    right: 15,
    bottom: 15,
  },
  img: {
    backgroundColor: 'blue',
    height: '100%', // Ajustado para 100% da altura do imgContainer
    width: '100%', // Ajustado para 100% da largura do imgContainer
  },
});
