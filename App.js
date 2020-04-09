import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './components/Cabecalho';
import TelaComecoDoJogo from './telas/TelaComecoDoJogo';

export default function App() {
  return (
    <View style = {estilos.tela}>
      <Cabecalho titulo={"Adivinha o número"} />
      <TelaComecoDoJogo />
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex:1
  }
  
});
