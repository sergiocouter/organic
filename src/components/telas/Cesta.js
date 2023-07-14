import React from "react"
import { StyleSheet, Image, Dimensions, Text, View } from "react-native"

import topo from "../../../assets/assets/assets/topo.png"
import logoFazenda from "../../../assets/assets/logo.png"

const width = Dimensions.get("screen").width

export default function Cesta (){
    return <>
        <Image source={topo} style={estilos.topo}/>
        <Text style={estilos.titulo}>Detalhe da Cesta</Text>

        <View style={estilos.containerView}>
            <Text style={estilos.nomeDaCesta}>Cesta de Verduras</Text>

            <View style={estilos.containerFazenda}>
                <Image source={logoFazenda} style={estilos.imagemFazenda}/>
                <Text style={estilos.nomeDaFazenda}>Fazenda Esperança</Text>
            </View>

            <Text style={estilos.descricao}>Uma cesta com produtos selecionados da fazenda para sua cozinha</Text>
            <Text style={estilos.preco}>R$ 40,00</Text>
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
        fontWeight: 900,
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
        fontFamily: "MontserratBold",
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
        fontFamily: "MontserratRegular",
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: 900,
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }

})