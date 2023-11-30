import React, { useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import {ErrorText, ButtonText, Container, Input, Button,Titulo } from "../src/style/style";
import * as yup from 'yup';

import {yupResolver} from '@hookform/resolvers/yup'
//import PageStack from "../src/components/navigation";


const signInFormSchema = yup.object().shape({
    email: yup.string().required('Email é obrigatorio').email('Informe um email valido'),
    senha: yup.string().required('Senha é obrigatoria'),
});

 export default function Home () {
    const navigation = useNavigation();
    const irParaOutraPagina = () => {
        navigation.navigate('Header');
      };
    


    const {control, handleSubmit, formState: {errors, isSubmitting}} = useForm({
        resolver: yupResolver(signInFormSchema)
    })
    const [dados, setDados] = useState("","")
    

    const HandleSignIn = (data) => {
        console.log(data)
    }

    /*
    const HandLogOn = (data) => {

    }*/

    /*const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    const HandleSignIn = () =>{
        console.log(usuario)
        console.log(senha)
    }*/

    return(
        <Container>
            <Titulo>Rede Social</Titulo>

            <Controller 
                control={control}
                render={({field: {onChange, value}}) => (
                    <Input 
                    placeholder="Email" 
                    value={value} 
                    keyboardType = "email-address"
                    onChangeText = { value => onChange(value)} 
                    />
                )}
                name="email"
                defaultValue=""
            />
            {!!errors.email && <ErrorText>{errors.email.message}</ErrorText>}
            
            <Controller 
                control={control}
                render={({field: {onChange, value}}) => (
                
                <Input 
                    placeholder="Senha"  
                    value={value}
                    secureTextEntry
                    onChangeText = { value => onChange(value)} />
                )}
                name="senha"
                defaultValue=""
            />
            {!!errors.senha && <ErrorText>{errors.senha.message}</ErrorText>}

            <Button onPress={handleSubmit(HandleSignIn)}>
                <ButtonText >Cadastrar</ButtonText>
            </Button>

            
            <Button onPress={irParaOutraPagina}>
                <ButtonText>Entrar</ButtonText>
            </Button>
            
        </Container>
    )
}