/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ListFilms from './ListFilms';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View style = {{ flex: 1 }}>
        <StatusBar
          barStyle = "default"
        />
        <View style={styles.content}>
          <ListFilms navigation={this.props.navigation}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
