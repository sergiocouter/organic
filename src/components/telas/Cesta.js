import React from "react"
import { StyleSheet, Image, Dimensions, Text, View } from "react-native"

import topo from "../../../assets/assets/assets/topo.png"
import logoFazenda from "../../../assets/assets/assets/logo.png"

import Texto from "../Texto"

const width = Dimensions.get("screen").width

export default function Cesta (){
    return <>
        <Image source={topo} style={estilos.topo}/>
        <Texto style={estilos.titulo}>Detalhe da Cesta</Texto>

        <View style={estilos.containerView}>
            <Texto style={estilos.nomeDaCesta}>Cesta de Verduras</Texto>

            <View style={estilos.containerFazenda}>
                <Image source={logoFazenda} style={estilos.imagemFazenda}/>
                <Texto style={estilos.nomeDaFazenda}>Fazenda Esperança</Texto>
            </View>

            <Texto style={estilos.descricao}>Uma cesta com produtos selecionados da fazenda para sua cozinha</Texto>
            <Texto style={estilos.preco}>R$ 40,00</Texto>
        </View>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 20,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
    },
    containerView: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
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
    }

})