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

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          Buscar País
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
  },

  input: {
    borderWidth: 1,
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
  },

  button: {
    backgroundColor: '#007bff',
    width: '80%',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

})