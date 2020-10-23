import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import CanvasItem from '../../components/CanvasItem';

import Processo from '../../assets/svg/processo.png';
import Aluna from '../../assets/svg/aluna.png';
import Custo from '../../assets/svg/custo.png';
import Dinheiro from '../../assets/svg/dinheiro.png';
import Ajuda from '../../assets/svg/socorro.png';
import Alcance from '../../assets/svg/terminar.png';

import styles from './styles';

const Item = props => {
  const [id_dream, setIdDream] = useState(props.route.params.id);
  const [name, setName] = useState(props.route.params.name);

  return (
    <View style={styles.container}>
      <Text style={styles.textNameDream}>{name}</Text>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
          alignItems: 'center',
        }}>
        <CanvasItem
          title="O que devo fazer para alcançá-lo?"
          color="#0AD2F5"
          id={1}
          id_dream={id_dream}>
          <Image source={Processo} style={{ width: 60, height: 60 }} />
        </CanvasItem>
        <CanvasItem
          title="Quais recursos necessito?"
          color="#A82F18cc"
          id={2}
          id_dream={id_dream}>
          <Image source={Custo} style={{ width: 60, height: 60 }} />
        </CanvasItem>
        <CanvasItem
          title="Quem pode me ajudar?"
          color="#D0D1E3"
          id={3}
          id_dream={id_dream}>
          <Image source={Aluna} style={{ width: 60, height: 60 }} />
        </CanvasItem>
        <CanvasItem
          title="Quem são os interessados no meu sonho?"
          color="#16F59B"
          id={4}
          id_dream={id_dream}>
          <Image source={Ajuda} style={{ width: 60, height: 60 }} />
        </CanvasItem>
        <CanvasItem
          title="Quanto preciso para colocar este sonho em prática?"
          color="#F5B116"
          id={5}
          id_dream={id_dream}>
          <Image source={Dinheiro} style={{ width: 60, height: 60 }} />
        </CanvasItem>
        <CanvasItem
          title="Quais são os benefícios e impactos obtidos com o alcance do meu sonho?"
          color="#C122F5cc"
          id={6}
          id_dream={id_dream}>
          <Image source={Alcance} style={{ width: 60, height: 60 }} />
        </CanvasItem>
      </ScrollView>
      {/* <TouchableOpacity style={styles.generatePDF} onPress={createPDF}>
        <Text style={styles.textPDF}>Gerar PDF</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Item;
