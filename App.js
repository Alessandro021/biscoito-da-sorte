import { useState } from 'react';
import { frases } from './src/frasesDaSorte';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App(){

    const [frase, setFrase ] = useState("")
    const [open, setOpen] = useState(false)

  function quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * frases.length);

      setFrase(`"${frases[numeroAleatorio]}"`)
      setOpen(true)
  }

  function novoBiscoito(){

      setFrase("")
      setOpen( false)
  }

    return (
        <View style={styles.container}>
          <StatusBar style="auto" />

          {open ? (
            <Image
            source={require("./assets/biscoitoAberto.png")}
            style={styles.img}
          />
          ) : (
            <Image
            source={require("./assets/biscoito.png")}
            style={styles.img}
          />
          )}

          <Text style={styles.texto}> {frase} </Text>

            { open ? (
                <TouchableOpacity style={styles.botaoBiscoito} onPress={novoBiscoito}>
                  <View style={styles.btnArea}>
                    <Text style={styles.btnTextoBiscoito}> Abrir Outro Biscoito </Text>
                  </View>
                </TouchableOpacity>
              
              ):( 

              <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
                <View style={styles.btnArea}>
                  <Text style={styles.btnTexto}> Abrir Biscoito </Text>
                </View>
              </TouchableOpacity>
            )}     

       </View>
      );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  img: {
    width: 250,
    height: 250
  },
  texto:{
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
  },
  botao:{
    width:  230,
    height:  50,
    borderWidth: 2,
    borderColor: "#dd7b22",
    borderRadius: 25,
  },
  botaoBiscoito:{
    width:  230,
    height:  50,
    borderWidth: 2,
    borderColor: "#dd7b22",
    borderRadius: 25,
    backgroundColor: "#dd7b22",
  },
  btnArea:{
    flex: 1,
    flexDirection: "row",
    justifyContent:"center",
    alignItems: "center",
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#dd7b22",
  },
  btnTextoBiscoito: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  }
});
