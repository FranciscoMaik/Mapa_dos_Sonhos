import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import Alvo from '../../assets/svg/lista-de-controle.png';
import Mapa from '../../assets/svg/mapa_mental.png';

import styles from './styles';

const Information = () => {
  return (
    <View style={styles.alignMenu}>
      <View style={styles.menuSuper}>
        <Text style={styles.textMenu}>Informações</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
          alignItems: 'center',
        }}>
        <View style={styles.divArea}>
          <View>
            <Image
              style={{ width: 120, height: 120, marginTop: 15 }}
              source={Mapa}
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.textH1}>Aplicativo mapa dos sonhos</Text>
            <Text style={styles.textInformation}>
              {'\t'}
              Este aplicativo tem como propósito principal disponibilizar uma
              ferramenta de planejamento dos objetivos pessoais e/ou
              profissionais, estruturado de forma simples, objetiva e dinâmica
              para auxiliar qualquer público interessado em planejar e organizar
              o seu futuro, em especial os estudantes do nono ano do ensino
              fundamental que estão em fase de transição para o ensino médio e
              já precisa realizar o planejamento seja a médio ou em longo prazo.{' '}
            </Text>
          </View>
          <View style={styles.imageBack}>
            <Image
              style={{ width: 120, height: 120, marginTop: 15 }}
              source={Alvo}
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.textH1}>Teste Vocacional</Text>
            <Text style={styles.subTopic}>O que é?</Text>
            <Text style={styles.textInformation}>
              {'\t'}É uma ferramenta que auxilia na escolha profissional. A
              palavra “vocação” está relacionada a uma tendência da pessoa para
              exercer uma determinada atividade de acordo com as aptidões e
              interesses específicos.
            </Text>
            <Text style={styles.subTopic}>Por que fazer?</Text>
            <Text style={styles.textInformation}>
              {'\t'}O processo de decisão profissional é complexo e a pessoa
              precisa ter conhecimento de si próprio para sustentar sua decisão.
              Sendo assim, o teste vocacional é uma opção para embasar essa
              escolha e torná-la mais assertiva e menos propensas a sofrerem
              mudanças no percurso. Isso não quer dizer que todas as pessoas que
              fazem o teste vocacional ficam 100% seguras com as escolhas,
              afinal, muitas mudanças acontecem no caminho de todos nós que
              podem interferir esse processo profissional.
            </Text>
            <Text style={styles.subTopic}>Para que serve?</Text>
            <Text style={styles.ulLi}>
              {'\t'}1 - Identificar interesses, gostos, valores e
              potencialidades;
            </Text>
            <Text style={styles.ulLi}>{'\t'}2 - Reduz ansiedades;</Text>
            <Text style={styles.ulLi}>
              {'\t'}3 - Planejar o futuro profissional;
            </Text>
            <Text style={styles.ulLi}>
              {'\t'}4 - Evitar possíveis descontentamentos;
            </Text>
            <Text style={styles.ulLi}>
              {'\t'}5 - Desenvolver o auto-conhecimento;
            </Text>
            <Text style={styles.ulLi}>
              {'\t'}6 - Ajuda na construção de um projeto de vida somado a
              planejamento de carreira, melhoria na performance e futuro
              profissional.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Information;
