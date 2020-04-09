import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import Cartao from '../components/Cartao';

const TelaComecoDoJogo = (props) => {
    return(

        <View style = {estilos.tela}>
            <Text style ={estilos.titulo}>Comece um Jogo</Text>
            <Cartao estilos ={estilos.entradaView}>
                <Text>Escolha um número</Text>
                <TextInput />
                <View style ={estilos.buttonView}>
                    <Button
                        title = "Reiniciar"/>
                    <Button
                        title = "Confirmar"/>
                </View>
            </Cartao>
        </View>
    );

}

const estilos = StyleSheet.create({
    titulo:{
        fontSize:20,
        marginVertical: 10,
    },
    entradaView:{
        width:300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonView:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    tela:{
        flex:1,
        padding:10,
        alignItems: 'center'
    }
});

export default TelaComecoDoJogo;