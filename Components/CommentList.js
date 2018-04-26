import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Button } from 'react-native';

class CommentList extends Component {
    apiUrl = 'https://setheal-api-films.herokuapp.com';

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.comments.reverse(),
        };
        console.log(this.props.id);
    }

    sendComment() {
        let comments = this.state.data.slice();
        comments.unshift({
            name: this.state.name,
            comment: this.state.comment
        });
        this.setState({
            name: "",
            comment: "",
            data: comments
        });

        const fetchOptions = {
            method: "POST",
            mode: "no-cors",
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
            body: "filmId="+ this.props.id +"&name="+this.state.name+"&comment="+this.state.comment
        }

        fetch(this.apiUrl+'/addComment', fetchOptions)
            .then(response => {
                console.log(response);

            }).catch(err => {
                console.log(err);
            });
    }

  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Comments</Text>
            <FlatList
                contentContainerStyle={styles.commentList}
                data={ this.state.data }
                renderItem={({item}) => (
                    <Text>
                        <Text style={ styles.name }>{ item.name } </Text>
                        { item.comment }
                    </Text> )} /> 
            <Text style={styles.title}>Add a comment</Text>
            <TextInput
                onChangeText={ name => this.setState({name}) }
                value={this.state.name}
                placeholder="Name"
            />
            <TextInput
                onChangeText={ comment => this.setState({comment}) }
                value={this.state.comment}
                placeholder="Your comment"
            />
            <Button
                onPress={() => this.sendComment()}
                title="Send"
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    name: {
        fontWeight: 'bold',
    },
    commentList: {
        height: 100,
    }
})

export default CommentList;
