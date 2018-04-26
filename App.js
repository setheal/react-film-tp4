import React from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './Components/Home';
import FilmItem from './Components/FilmItem';

const Navigation = StackNavigator({
  Home: { screen: Home },
  Film: { screen: FilmItem },
});

export default class App extends React.Component {
  render() {
    return <Navigation />
  }
}
