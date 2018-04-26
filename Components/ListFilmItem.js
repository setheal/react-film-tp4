/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';

export default class ListFilmItem extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => navigate('Film', {
          id: this.props.id,
          posterUrl: this.props.posterUrl,
          director: this.props.director,
          releaseDate: this.props.releaseDate,
          title: this.props.title,
          comments: this.props.comments })}>
          <Image
            source={ this.props.posterUrl }
            style={ styles.poster }
            resizeMode='contain'
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  poster: {
    height: 400,
    width: null,
  },
});
