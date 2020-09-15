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
    width: '85%',
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
  divLinks: {
    width: '95%',
    marginTop: 49,
  },
  textLink: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  touch: {
    marginBottom: 20,
    borderColor: '#111',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
  },
  link: {
    textAlign: 'right',
    color: '#C70AFD',
  },
});
