import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
  Modal,
  TouchableHighlight,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import getRealm from '../../services/realm';
import uuid from 'uuid';

import Plus from '../../assets/svg/plus.png';
import Check from '../../assets/svg/check.png';

import styles from './style';

const CanvasItem = ({ title, color, children, id, id_dream }) => {
  const [Item, setItem] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleEdit, setModalVisibleEdit] = useState(false);
  const [inputItem, setInputItem] = useState('');
  const [idNew, setIdNew] = useState('');

  async function handleAddItemListCanvas(id) {
    if (inputItem !== '') {
      const newItem = {
        id: uuid.v4(),
        name: inputItem,
        created: `${Date.now()}`,
        id_dream: id_dream,
        id_object: id,
        selected: false,
      };

      const realm = await getRealm();
      realm.write(() => {
        realm.create('ObjectDream', newItem);
      });

      setItem(state => [newItem, ...state]);
    } else {
      Alert.alert('Por favor colocar uma informação!');
    }
  }

  const loadItens = async () => {
    const realm = await getRealm();
    const data = realm
      .objects('ObjectDream')
      .filtered(`id_object == ${id} AND id_dream == "${id_dream}"`)
      .sorted('created', true);

    setItem(data);
  };

  useEffect(() => {
    loadItens();
  }, []);

  const handleAlterItem = async idNew => {
    if (inputItem !== '') {
      const realm = await getRealm();
      realm.write(() => {
        realm.create('ObjectDream', { id: idNew, name: inputItem }, 'modified');
      });

      loadItens();
    } else {
      Alert.alert('Valor inválido!', 'Por favor colocar um valor válido!');
    }

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
      const item = realm.objectForPrimaryKey('ObjectDream', id);
      realm.delete(item);
    });
    const newItem = Item.filter(item => item.id !== id);
    setItem(newItem);
  }

  async function selectedItem(id, selected) {
    const realm = await getRealm();
    if (!selected) {
      realm.write(() => {
        realm.create('ObjectDream', { id: id, selected: true }, 'modified');
      });
    } else {
      realm.write(() => {
        realm.create('ObjectDream', { id: id, selected: false }, 'modified');
      });
    }

    loadItens();
  }

  function handleDoubleFunction() {
    Keyboard.dismiss;
    setModalVisible(false);
    setInputItem('');
    handleAddItemListCanvas(id);
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

      <View style={styles.centeredView}>
        <KeyboardAvoidingView>
          <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}>
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
                  <TouchableHighlight onPress={handleDoubleFunction}>
                    <Image source={Check} style={{ width: 20, height: 20 }} />
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </Modal>
        </KeyboardAvoidingView>
      </View>

      <View style={[styles.container, { backgroundColor: color }]}>
        <View style={styles.containerItens}>
          {children}
          <View style={styles.viewContainerText}>
            <Text style={styles.textSuper}>{title}</Text>
          </View>
        </View>
        <View style={styles.renderItens}>
          {Item.map(item => {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => selectedItem(item.id, item.selected)}
                onLongPress={() => handleRemoveItemSelect(item.id, item.name)}>
                <Text
                  style={[
                    item.selected ? styles.selectedText : styles.renderText,
                  ]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.buttonPlus}>
          <BorderlessButton onPress={() => setModalVisible(true)}>
            <Image source={Plus} style={{ width: 20, height: 20 }} />
          </BorderlessButton>
        </View>
      </View>
    </>
  );
};

export default CanvasItem;
