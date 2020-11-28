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
  KeyboardAvoidingView,
  Modal,
  TouchableHighlight,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';
import { BorderlessButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import getRealm from '../../services/realm';

import Check from '../../assets/svg/check.png';

import styles from './styles';

const Home = () => {
  const { navigate } = useNavigation();
  const [Itens, setItens] = useState([]);
  const [search, setSearch] = useState('');
  const [modalVisibleEdit, setModalVisibleEdit] = useState(false);
  const [inputItem, setInputItem] = useState('');
  const [idNew, setIdNew] = useState('');

  async function loadDreams() {
    const realm = await getRealm();

    const data = realm.objects('Dream').sorted('created', true);

    setItens(data);
  }

  useEffect(() => {
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
  const handleAlterItem = async idNew => {
    console.log('este item ', idNew);
    console.log('nome item ', inputItem);
    const realm = await getRealm();
    realm.write(() => {
      realm.create('Dream', { id: idNew, name: inputItem }, 'modified');
    });

    loadDreams();

    Keyboard.dismiss;
    setModalVisibleEdit(false);
    setInputItem('');
  };

  const handleEdit = (idItem, name) => {
    setIdNew(idItem);
    setModalVisibleEdit(true);
    setInputItem(name);
  };

  function handleRemoveItemSelect(id, name) {
    Alert.alert(
      `Selecione uma opção para o item: ${name}?`,
      '',
      [
        {
          text: 'Deletar',
          onPress: () => {
            Alert.alert(`Deletar o item: ${name}`, '', [
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
            ]);
          },
          styles: 'cancel',
        },
        {
          text: 'Editar',
          onPress: () => {
            handleEdit(id, name);
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
    <>
      <View style={styles.centeredView}>
        <KeyboardAvoidingView>
          <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisibleEdit}>
            <View style={styles.inputModal}>
              <View style={styles.caixaModal}>
                <TextInput
                  style={styles.textInputModal}
                  placeholder="Item"
                  value={inputItem}
                  onChangeText={setInputItem}
                  maxLength={20}
                />
                <View style={styles.buttonModal}>
                  <TouchableHighlight onPress={() => handleAlterItem(idNew)}>
                    <Image source={Check} style={{ width: 20, height: 20 }} />
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </Modal>
        </KeyboardAvoidingView>
      </View>

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
                <Icon name="chevron-right" size={20} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

export default Home;
