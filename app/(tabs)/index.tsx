import { StyleSheet, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {

  const [nome, setNome] = useState('');

  function abrirDetalhes() {
    router.push({
      pathname: '/detalhes',
      params: {
        nome: nome,
      },
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Tela Inicial
      </Text>

      <Text style={styles.texto}>
        Digite um nome:
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite aqui"
        value={nome}
        onChangeText={setNome}
      />

      <Button
        title="Ver detalhes"
        onPress={abrirDetalhes}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  texto: {
    marginVertical: 20,
  },

  input: {
    width: 250,
    height: 45,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },

});