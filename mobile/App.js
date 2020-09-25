import intl from 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    <Routes />
  );
}

