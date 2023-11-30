import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import {ErrorText, ButtonText, Container, Input, Button,Titulo } from "../src/style/style";
import * as yup from 'yup';

import {yupResolver} from '@hookform/resolvers/yup'
//import PageStack from "../src/components/navigation";


const signInFormSchema = yup.object().shape({ 
    //Checara se os dados estão no formato esperado
    //E enviara uma mensagem ao usuario
    email: yup.string().required('Email é obrigatorio').email('Informe um email valido'),
    senha: yup.string().required('Senha é obrigatoria'),
});

 export default function Home () {
    const navigation = useNavigation();
    const irParaOutraPagina = () => { //Vai para o header
        navigation.navigate('Header');
      };
    


    const {control, handleSubmit, formState: {errors}} = useForm({ //Tratamento de erros
        resolver: yupResolver(signInFormSchema)
    })
    

    const HandleSignIn = (data) => { //Checara se os dados estão corretos
        if(data.email === "User@email.com" && data.senha === "123456"){
            irParaOutraPagina() //Se estiver correto vai para outra pagina
        } else {
            console.log("Email e senha invalidos") //Senao uma mensagem irá aparecer no console log
        
        }
    }


    return(
        <Container>
            <Titulo>Rede Social</Titulo>

            {/*Utilizei o react forms para o email e a senha*/}
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
            {/*Mensagem de erro só aparece em abos caso !!error.email for verdadeiro*/}

            <Controller 
                control={control}
                render={({field: {onChange, value}}) => (
                
                <Input 
                    placeholder="Senha"  
                    value={value}
                    secureTextEntry
                    keyboardType="numeric"
                    onChangeText = { value => onChange(value)} />
                )}
                name="senha"
                defaultValue=""
            />
            {!!errors.senha && <ErrorText>{errors.senha.message}</ErrorText>}

            <Button onPress={handleSubmit(HandleSignIn)}>
                <ButtonText >Entrar</ButtonText> 
            </Button>
            {/*É aqui onde o usuario irá clicar */}
                {/*Clicando no Entrar o app checa os dados
                caso eles estejam corretos, o usuario vai para o header */}
            
        </Container>
    )
}