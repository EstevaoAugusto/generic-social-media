import React, {useState} from "react";
import { ScrollView, Text, View, StyleSheet , Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Titulo , Botao, Descricao} from "../src/style/styleHeader";

//Aqui será encontrado o post

export default function Header() {
    //Essas constantes permitem voce interagir com o post
    //Seja curtindo, comentando ou salvando o post
    const [posts, setPosts] = useState(0)
    const [likes, setLikes] = useState(0)
    const [comentarios , setComentarios] = useState(0)

    //Funções que setam os valores acima
    const handComments = () => {
      setComentarios(comentarios + 1)
    }
    const handlePosts = () =>{
      if(posts == 0){
        setPosts(1)
      } else {
        setPosts(0)
      }
    }

    const handleLikes = () => {
        if(likes == 0){
          setLikes(1)
        } else {
          setLikes(0)
        }
    }
    
    const navigation = useNavigation(); //Outra função de navegação em pilha
    const irParaOutraPagina = () => {
        navigation.navigate('User');
    };
    

    

    return (
    <ScrollView>
        <Titulo>Social Media</Titulo>
        <Botao onPress={irParaOutraPagina}>
            <Text>User</Text>
        </Botao> 
        {/*Clique no User ou no Generic User para ir na pagina do usuario */}
        <View style={estilo.bloco}>
            <Text style={estilo.organizacao} onPress={irParaOutraPagina}>Generic User</Text>
            

            <View style={estilo.imgContainer}>
                <Image  name = {"david"} id={3} style={estilo.img} source={require("../assets/cat.png")}/>   
            </View>
        </View>

      <Descricao>I like cats. Here's David</Descricao>
      <Descricao onPress={handleLikes}>{likes} Curtidas</Descricao>
      <Descricao onPress={handComments}>{comentarios} Comentarios</Descricao>
      <Descricao onPress={handlePosts}>{posts} Posts Salvos</Descricao>
    </ScrollView>
  );
}


/*Estilização da pagina utilizando o stylesheet */
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
    position: 'relative',
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
    height: '100%',
    width: '100%', 
  },
});
