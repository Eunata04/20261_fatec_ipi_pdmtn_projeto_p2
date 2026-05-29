import { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from 'react-native';

export default function App() {

  const [nomePais, setNomePais] = useState('')
  const [dadosPais, setDadosPais] = useState<any>(null)

  const [capital, setCapital] = useState('')

  const buscarPais = async () => {

    const url = `https://restcountries.com/v3.1/name/${nomePais}`

    const response = await fetch(url)

    const data = await response.json()

    setDadosPais(data[0])

  }

  return (
    <View style={styles.container}>

      <Text style={styles.tituloPrincipal}>
        Projeto Países
      </Text>

      <Text style={styles.titulo}>
        Busca por Nome
      </Text>

      <TextInput
        style={styles.input}
        placeholder='Digite o nome do país'
        value={nomePais}
        onChangeText={setNomePais}
      />

      <Pressable
        style={styles.button}
        onPress={buscarPais}
      >
        <Text style={styles.buttonText}>
          Buscar País
        </Text>
      </Pressable>

      {dadosPais && (
        <>
          <Text>
            Nome comum: {dadosPais.name.common}
          </Text>

          <Text>
            Nome oficial: {dadosPais.name.official}
          </Text>

          <Text>
            Nome russo: {dadosPais.translations.rus.common}
          </Text>

          <Text>
            OpenStreetMap: {dadosPais.maps.openStreetMaps}
          </Text>
        </>
      )}

      <Text style={styles.titulo}>
        Busca por Capital
      </Text>

      <TextInput
        style={styles.input}
        placeholder='Digite a capital'
        value={capital}
        onChangeText={setCapital}
      />

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          Buscar Capital
        </Text>
      </Pressable>

    </View>
  )

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tituloPrincipal: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  titulo: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20,
  },

  input: {
    borderWidth: 1,
    width: '80%',
    padding: 10,
    borderRadius: 4,
  },

  button: {
    backgroundColor: '#007bff',
    width: '80%',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

})