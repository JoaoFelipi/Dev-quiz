import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Botao({ texto, aoPressionar, corFundo = '#2563EB' }) {
  return (
    <TouchableOpacity
      style={[styles.botao, { backgroundColor: corFundo }]}
      onPress={aoPressionar}
      activeOpacity={0.8}
    >
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  texto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});