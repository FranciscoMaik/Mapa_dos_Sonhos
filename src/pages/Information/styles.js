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
    justifyContent: 'center',
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
  divArea: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 20,
  },
  imageBack: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  containerText: {
    marginTop: 17,
    width: '95%',
  },
  textH1: {
    textTransform: 'uppercase',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 17,
  },
  subTopic: {
    fontWeight: '700',
    fontSize: 17,
  },
  textInformation: {
    textAlign: 'justify',
    marginTop: 5,
    marginBottom: 5,
    fontSize: 15,
  },
  ulLi: {
    textAlign: 'justify',
    fontSize: 15,
  },
  alignMenu: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    marginBottom: 30,
  },

  youtubeLayout: {
    alignItems: 'center',
    marginTop: 20,
  },
  viewApresentarion: {
    width: '90%',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  textApresentarion: {
    fontSize: 18,
  },
});
