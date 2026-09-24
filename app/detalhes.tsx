import { Button, StyleSheet } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

import { Text, View } from '@/components/Themed';

export default function DetalhesScreen() {

  const { nome } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes</Text>

      <Text style={styles.texto}>
        Você recebeu:
      </Text>

      <Text style={styles.nome}>
        {nome}
      </Text>

      <Button
        title="Voltar"
        onPress={() => router.back()}
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
    marginTop: 20,
  },

  nome: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20
  },
});