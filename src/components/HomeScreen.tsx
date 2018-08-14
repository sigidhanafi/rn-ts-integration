import React from 'react'
import { View, Text, Image, StyleSheet, FlatList } from 'react-native'

import { getPopularMovieRequest } from '../services/Api'

export interface Props {}

interface State {}

export default class HomeScreen extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      page: 1,
      isLoading: false
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    if (!this.state.isLoading) {
      const { page, data } = this.state
      this.setState({ isLoading: true }, () => {
        getPopularMovieRequest(page)
          .then(response => {
            console.log('DATA', response)
            const newData =
              page === 1
                ? response.data.results
                : [...data, ...response.data.results]
            this.setState({ data: newData, page: page + 1, isLoading: false })
          })
          .catch(error => {
            console.log('ERROR', error)
          })
      })
    }
  }

  loadMore = () => {
    this.getData()
  }

  renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: `https://image.tmdb.org/t/p/w185/${item.poster_path}` }} style={styles.itemImage} resizeMode={'cover'} />
        <View style={styles.itemContent}>
          <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
          <Text>{item.release_date}</Text>
          <Text style={styles.rating}>{`Rating: ${item.vote_average}`}</Text>
          <Text numberOfLines={3}>{item.overview}</Text>
        </View>
      </View>
    )
  }

  render() {
    const { data } = this.state
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          onEndReached={this.loadMore}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  itemContainer: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  itemImage: {
    width: 80,
    height: 120,
  },
  itemContent: {
    flex: 1,
    marginHorizontal: 8,
  },
  title: {
    marginBottom: 8,
    fontWeight: 'bold',
    fontSize: 17,
  },
  rating: {
    marginBottom: 8,
  }
})
