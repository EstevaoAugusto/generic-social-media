import styled from "styled-components";

/*Estilização da tela de login */

export const Container = styled.View`
    background-color: #fff;
    flex: 1;
    padding: 0 24px;
    align-items: center;
    justify-content: center;
`;


export const Titulo = styled.Text`
    font-size: 18px;
    font-weight: bold;
    
    margin: 32px;
    color: #1717a6;
`;

export const ErrorText = styled.Text`
    font-size: 14px;
    color: red;
    
    font-weight: bold;
`;

export const Input = styled.TextInput`
    width: 100%;
    height: 56px;
    border-radius: 8px;
    border-width: 1px;
    border-color: #dfdfdf;
    padding: 0 16px;
    font-size: 16px;
    border-radius: 8px;
    margin-bottom: 12px;
`;

export const Texto = styled.Text`
    font-size: 15px;
`;

export const Button = styled.TouchableOpacity`
    width: 100%;
    height: 56px;
    background-color: #1717a6;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    margin: 10px;
    
`;

export const ButtonText = styled.Text`
    font-size: 16px;
    color: white;
    font-weight: bold;
`;