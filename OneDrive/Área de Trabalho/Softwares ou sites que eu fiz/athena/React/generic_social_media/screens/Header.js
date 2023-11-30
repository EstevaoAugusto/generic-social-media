import React, {useState} from "react";
import { ScrollView, Text, View, StyleSheet , Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Titulo , Botao, Descricao} from "../src/style/styleHeader";

export default function Header() {
    const [likes, setLikes] = useState(0)
    const handleLikes = () => {
        if(likes == 0){
          setLikes(1)
        } else {
          setLikes(0)
        }
    }
    
    const navigation = useNavigation();
    const irParaOutraPagina = () => {
        navigation.navigate('User');
    };
    

    

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
                    <Image name = {"david"} id={3} style={estilo.img} source={require("../assets/cat.png")}/>   
                </View>
            </View>
        </View>

      <Descricao>I like cats. Here's David</Descricao>
      <Descricao onPress={handleLikes}>{likes} Curtidas</Descricao>
      <Descricao>0 Comentarios</Descricao>
      <Descricao>0 Posts Salvos</Descricao>
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
    backgroundColor: "#b4b4b4",
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
