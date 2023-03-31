/* eslint-disable no-const-assign */
import React, { useState } from 'react'
import Header from '../../components/Header'
import { Container, ListMovies } from './styles'

import { getMoviesSave, deleteMovie } from '../../utils/storage'
import FavoriteItem from '../../components/FavoriteItem'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
function Movies () {
  const navigation = useNavigation()
  // const isFocused = useIsFocused() // Faz com o que a screen que você está seja renderizada novamente com todas as functions
  const [movies, setMovies] = useState([])
  useFocusEffect(
    React.useCallback(() => {
      getFavoriteMovies()
    }, [])
  )

  async function getFavoriteMovies () {
    const result = await getMoviesSave('@primevideo')

    setMovies(result)
  }

  async function handleDelete (id) {
    const result = await deleteMovie(id)
    setMovies(result)
  }

  function navigateDetailsPage (item) {
    navigation.navigate('Detail', { id: item.id })
  }

  return (
    <Container>
      <Header title='Meus filmes' />

      <ListMovies
        showsVerticalScrollIndicator={false}
        data={movies}
        keyExtractor={ item => String(item.id)}
        renderItem={ ({ item }) => (
          <FavoriteItem
            data={item}
            deleteMovie={handleDelete}
            navigatePage={ () => navigateDetailsPage(item) }
          />
        )}
      />

    </Container>
  )
}

export default Movies
