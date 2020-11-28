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
  const handleNaPratica = useCallback(() => {
    Linking.openURL('https://www.napratica.org.br/teste-vocacional/');
  }, []);
  const handleQueCurso = useCallback(() => {
    Linking.openURL('https://app.quecurso.com.br/teste-vocacional/');
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.menuSuper}>
        <Text style={styles.textMenu}>Testes Vocacionais</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.divLinks}>
            <View style={styles.touch}>
              <Text style={styles.textLink}>Pravaler</Text>
              <Text>
                Escolher a profissão pode ser o primeiro grande desafio que
                precisamos enfrentar na carreira.
              </Text>
              <TouchableOpacity onPress={handlePressPravaler}>
                <Text style={styles.link}>Click Aqui</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.touch}>
              <Text style={styles.textLink}>Quero Bolsa</Text>
              <Text>
                O Teste Vocacional Grátis do Quero Bolsa foi desenvolvido com
                base na Teoria das Inteligências Múltiplas do Psicólogo Howard
                Gardner.{' '}
              </Text>
              <TouchableOpacity onPress={handlePressQueroBolsa}>
                <Text style={styles.link}>Click Aqui</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.touch}>
              <Text style={styles.textLink}>Mundo Vestibular</Text>
              <Text>
                Faça o teste vocacional gratuito do Mundo Vestibular pra
                descobrir quais carreiras mais combinam com a sua personalidade!
              </Text>
              <TouchableOpacity onPress={handlePressMundo}>
                <Text style={styles.link}>Click Aqui</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.touch}>
              <Text style={styles.textLink}>Na Prática</Text>
              <Text>
                Faça o teste vocacional profissional grátis do Na Prática
                conversando com o Fê, o robô assistente virtual da Fundação
                Estudar, e descubra profissões que fazem sentido de acordo com
                seu perfil e interesses.
              </Text>
              <TouchableOpacity onPress={handleNaPratica}>
                <Text style={styles.link}>Click Aqui</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.touch}>
              <Text style={styles.textLink}>Que Curso?</Text>
              <Text>
                A Que Curso? tem um teste vocacional gratuito, sem segredos. O
                teste vocacional é atualizado para todos os cursos reconhecidos
                pelo MEC, usa uma metodologia desenvolvida e validada por
                psicólogos e não cobra nada por isso.
              </Text>
              <TouchableOpacity onPress={handleQueCurso}>
                <Text style={styles.link}>Click Aqui</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TestsVocation;
