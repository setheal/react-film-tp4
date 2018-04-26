import React, { Component } from 'React';
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native';
import ListFilmItem from './ListFilmItem';

export default class ListFilms extends Component {
  apiUrl = 'https://setheal-api-films.herokuapp.com';

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch(this.apiUrl+'/films')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          films: responseJson,
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
      if(this.state.isLoading) {
        return(<View style={ styles.loadingContainer }>
          <ActivityIndicator size="large" />
        </View>);
      }
      return(<FlatList
        data={ this.state.films }
        renderItem={({item}) => (
          <ListFilmItem
            id={item.id}
            title={item.title}
            posterUrl={{uri: this.apiUrl + item.poster }}
            director={item.director}
            releaseDate={item.releaseDate}
            comments={item.comments}
            navigation={this.props.navigation}
          />
        )}
      />)
  }

}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
