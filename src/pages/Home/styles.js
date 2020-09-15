import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  menuSuper: {
    backgroundColor: '#167B8D',
    marginTop: 18,
    width: '80%',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  textMenu: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  button: {
    backgroundColor: '#0AD2F5',
    padding: 10,
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollView: {
    marginTop: 20,
    width: '100%',
  },
  buttonDream: {
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDream: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  search: {
    flexDirection: 'row',
    width: '90%',
    margin: 12,
    padding: 15,
  },
  textInput: {
    width: '80%',
    backgroundColor: '#fff',
    paddingLeft: 12,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
  },
});
