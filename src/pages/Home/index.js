import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  TextInput,
  Image,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';
import { BorderlessButton } from 'react-native-gesture-handler';

import getRealm from '../../services/realm';

import Check from '../../assets/svg/check.png';

import styles from './styles';

const Home = () => {
  const { navigate } = useNavigation();
  const [Itens, setItens] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function loadDreams() {
      const realm = await getRealm();

      const data = realm.objects('Dream').sorted('created', true);

      setItens(data);
    }
    loadDreams();
  }, []);

  async function handleAddedItemList() {
    if (search !== '') {
      const newItem = {
        id: uuid.v4(),
        name: search,
        created: `${Date.now()}`,
      };

      const realm = await getRealm();

      realm.write(() => {
        realm.create('Dream', newItem);
      });

      setItens(state => [newItem, ...state]);

      setSearch('');
      Keyboard.dismiss();
    } else {
      Alert.alert('Coloque o nome do sonho!');
    }
  }

  function handleRemoveItemSelect(id, name) {
    Alert.alert(
      `Apagar o sonho ${name}?`,
      '',
      [
        {
          text: 'Sim',
          onPress: () => {
            removeItemList(id);
          },
          styles: 'cancel',
        },
        {
          text: 'Não',
          onPress: () => {
            console.log('Não');
          },
        },
      ],
      { cancelable: true },
    );
  }

  async function removeItemList(id) {
    const realm = await getRealm();
    realm.write(() => {
      const item = realm.objectForPrimaryKey('Dream', id);
      realm.delete(item);
      const itensList = realm
        .objects('ObjectDream')
        .filtered(`id_dream == "${id}"`)
        .sorted('created', true);
      realm.delete(itensList);
    });

    const newItem = Itens.filter(item => item.id !== id);
    setItens(newItem);
  }

  function handleTouchItem(id, name) {
    navigate('Item', { id, name });
  }

  return (
    <View style={styles.container}>
      <View style={styles.menuSuper}>
        <Text style={styles.textMenu}>Home</Text>
      </View>
      <View style={styles.search}>
        <TextInput
          style={styles.textInput}
          value={search}
          onChangeText={setSearch}
          placeholder="Sonho"
          maxLength={20}
        />
        <BorderlessButton style={styles.button} onPress={handleAddedItemList}>
          <Image source={Check} style={{ width: 20, height: 20 }} />
        </BorderlessButton>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
          alignItems: 'center',
        }}>
        {Itens.map(item => {
          return (
            <TouchableOpacity
              key={item.id}
              style={styles.buttonDream}
              onPress={() => handleTouchItem(item.id, item.name)}
              onLongPress={() => handleRemoveItemSelect(item.id, item.name)}>
              <Text style={styles.textDream}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Home;
