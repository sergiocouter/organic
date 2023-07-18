import React from "react"
import { View, Image, StyleSheet, TouchableOpacity } from "react-native" 

import Texto from "../../../Texto"

export default function Detalhes ({nomeDaCesta, imagemFazenda, nomeDaFazenda, descricao, preco, botao }) {
    return <>
        <Texto style={estilos.nomeDaCesta}>{nomeDaCesta}</Texto>

        <View style={estilos.containerFazenda}>
            <Image source={imagemFazenda} style={estilos.imagemFazenda}/>
            <Texto style={estilos.nomeDaFazenda}>{nomeDaFazenda}</Texto>
        </View>

        <Texto style={estilos.descricao}>{descricao}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>

        <TouchableOpacity style={estilos.botao}>
            <Texto style={estilos.textoBotao}>{botao}</Texto>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    nomeDaCesta: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold",
    },
    containerFazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda:{
        width: 32,
        height:32,
    },
    nomeDaFazenda: {
        fontSize: 16,
        lineHeight: 26, 
        marginLeft: 12,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,

    },
    textoBotao: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",

    },

})