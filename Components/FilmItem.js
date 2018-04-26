import React, { Component } from 'React';
import { View, Text, Image, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import CommentList from './CommentList';

export default class FilmItem extends Component {
  render() {
    const { params } = this.props.navigation.state;
    const id = params ? params.id : null;
    const posterUrl = params ? params.posterUrl : null;
    const director = params ? params.director : null;
    const releaseDate = params ? params.releaseDate : null;
    const title = params ? params.title : null;
    const comments = params ? params.comments : null;

    return (
      <KeyboardAvoidingView behavior="padding">
        <ScrollView>
          <Text style = { styles.title }>
            { title }
          </Text>
          <View style = { styles.posterWrapper } >
            <Image
              source={ posterUrl }
              style={ styles.poster }
              resizeMode='contain'
            />
          </View>
          <View style = { styles.detailsWrapper }>
            <Text>Director: { director }</Text>
            <Text>Release date: { releaseDate }</Text>
            <CommentList comments={ comments } id={id} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 20,
  },
  posterWrapper: {
    backgroundColor: 'black',
    marginVertical: 20,
  },
  poster: {
    height: 400,
    width: null,
  },
  detailsWrapper: {
    paddingHorizontal: 20,
  },
});
