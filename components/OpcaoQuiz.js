import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function OpcaoQuiz({ texto, aoPressionar, selecionada }) {
  return (
    <TouchableOpacity
      style={[styles.opcao, selecionada && styles.opcaoSelecionada]}
      onPress={aoPressionar}
      activeOpacity={0.7}
    >
      <Text style={[styles.texto, selecionada && styles.textoSelecionado]}>
        {texto}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  opcao: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: '#CBD5E1',
  },
  opcaoSelecionada: {
    backgroundColor: '#DBEAFE',
    borderColor: '#2563EB',
  },
  texto: {
    fontSize: 16,
    color: '#1E293B',
    fontWeight: '500',
  },
  textoSelecionado: {
    color: '#1D4ED8',
    fontWeight: 'bold',
  },
});