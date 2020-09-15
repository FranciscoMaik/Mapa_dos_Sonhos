import React, { useCallback } from 'react';
import {
  View,
  Text,
  Linking,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import styles from './style';

const TestsVocation = () => {
  const handlePressPravaler = useCallback(() => {
    Linking.openURL(
      'https://www.pravaler.com.br/testes/teste-vocacional-online-gratis/',
    );
  }, []);
  const handlePressQueroBolsa = useCallback(() => {
    Linking.openURL('https://querobolsa.com.br/teste-vocacional-gratis');
  }, []);
  const handlePressMundo = useCallback(() => {
    Linking.openURL(
      'https://www.mundovestibular.com.br/simulados/teste-vocacional',
    );
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.menuSuper}>
            <Text style={styles.textMenu}>Testes Vocacionais</Text>
          </View>
          <View style={styles.divLinks}>
            <TouchableOpacity
              onPress={handlePressPravaler}
              style={styles.touch}>
              <Text style={styles.textLink}>Pravaler</Text>
              <Text>
                Escolher a profissão pode ser o primeiro grande desafio que
                precisamos enfrentar na carreira.
              </Text>
              <Text style={styles.link}>Click Aqui</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handlePressQueroBolsa}
              style={styles.touch}>
              <Text style={styles.textLink}>Quero Bolsa</Text>
              <Text>
                O Teste Vocacional Grátis do Quero Bolsa foi desenvolvido com
                base na Teoria das Inteligências Múltiplas do Psicólogo Howard
                Gardner.{' '}
              </Text>
              <Text style={styles.link}>Click Aqui</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePressMundo} style={styles.touch}>
              <Text style={styles.textLink}>Mundo Vestibular</Text>
              <Text>
                Faça o teste vocacional gratuito do Mundo Vestibular pra
                descobrir quais carreiras mais combinam com a sua personalidade!
              </Text>
              <Text style={styles.link}>Click Aqui</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TestsVocation;
