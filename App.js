import 'react-native-gesture-handler'
import React from 'react';
import Home from './screens/Home';
import Stack from './src/components/navigation';
import { NameProvider } from "./src/contexts/NameContext";

//Este app é uma rede social que visa imitar o Instagram

export default function App() {

  return (
    <NameProvider>
      <Stack>
        <Home/> 
      </Stack>
    </NameProvider>
  );
}


