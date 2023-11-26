import React from "react";
import { Image, View, StyleSheet } from "react-native";

const Estilo = StyleSheet.create({
    foto:{
        borderRadius: 16,
        height: 100,
        width: 100,
    },
    container: {
        padding: 12,
        justifyContent: "flex-start",
    },
})

const DisplayImage = () => {
    return(
        <View style={Estilo.container}>
            <Image 
            style={Estilo.foto}
            source={require("person.png")}
            />
        </View>
    )
}

export default DisplayImage