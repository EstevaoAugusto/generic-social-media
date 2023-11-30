import 'react-native-gesture-handler'
import React from 'react';
import Home from './screens/Home';
import Stack from './src/components/navigation';

//Este app é uma rede social que visa imitar o Instagram

export default function App() {

  /*Arquivo App é criado ao inicir um projeto, logo é aqui que ele sera iniciado*/
  /*Stack é a navegação em Pilha*/
  //Home é onde será a tela de login
  return (
      <Stack> 
        <Home/> 
      </Stack>
  );
}


