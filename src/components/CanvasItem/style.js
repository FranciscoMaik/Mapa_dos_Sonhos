import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 23,
    borderRadius: 8,
    marginTop: 18,
  },
  containerItens: {
    flexDirection: 'row',
    borderWidth: 0.5,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textSuper: {
    marginLeft: 18,
    fontSize: 18,
  },
  viewContainerText: {
    width: '80%',
  },
  buttonPlus: {
    alignItems: 'flex-end',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputModal: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#77777700',
  },
  buttonModal: {
    width: '80%',
    marginTop: 18,
    alignItems: 'flex-end',
  },
  caixaModal: {
    width: '80%',
    height: 140,
    backgroundColor: '#Fafafa',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  textInputModal: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 8,
    paddingLeft: 12,
    borderWidth: 0.5,
  },
  renderItens: {
    margin: 12,
  },
  renderText: {
    fontSize: 16,
  },
});

export default styles;
