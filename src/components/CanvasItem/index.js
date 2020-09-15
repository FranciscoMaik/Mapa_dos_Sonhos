import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
  CheckBox,
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
  const [isCheck, setIsCheck] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [inputItem, setInputItem] = useState('');

  async function handleAddItemListCanvas(id) {
    if (inputItem !== '') {
      const newItem = {
        id: uuid.v4(),
        name: inputItem,
        created: `${Date.now()}`,
        id_dream: id_dream,
        id_object: id,
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

  useEffect(() => {
    async function loadItens() {
      const realm = await getRealm();
      const data = realm
        .objects('ObjectDream')
        .filtered(`id_object == ${id} AND id_dream == "${id_dream}"`)
        .sorted('created', true);

      setItem(data);
    }
    loadItens();
  }, [id, id_dream]);

  function handleRemoveItemSelect(id, name) {
    Alert.alert(
      `Apagar  o item ${name}?`,
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
      const item = realm.objectForPrimaryKey('ObjectDream', id);
      realm.delete(item);
    });
    const newItem = Item.filter(item => item.id !== id);
    setItem(newItem);
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
                onLongPress={() => handleRemoveItemSelect(item.id, item.name)}>
                <Text style={styles.renderText}>{item.name}</Text>
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
