import AsyncStorage from '@react-native-async-storage/async-storage'

// Buscar os filmes salvos
export async function getMoviesSave (key) {
  const myMovies = await AsyncStorage.getItem(key)

  const moviesSave = JSON.parse(myMovies) || [] // Verifica se o filme está salvo
  return moviesSave
}

// Salvar um novo filme
export async function saveMovie (key, newMovie) {
  const moviesStored = await getMoviesSave(key)

  // Verifica se tem algum filme salvo com esse mesmo ID / ou duplicado ele igonora
  const hasMovie = moviesStored.some(item => item.id === newMovie.id) // verifica se dentro da Array já tem o filme
  if (hasMovie) {
    console.log('Esse filme já existe na lista')
    return
  }

  moviesStored.push(newMovie)
  await AsyncStorage.setItem(key, JSON.stringify(moviesStored))
  console.log('Filme salvo com sucesso')
}

// Deletar algum filme específico
export async function deleteMovie (id) {
  const moviesStored = await getMoviesSave('@primevideo')

  const myMovies = moviesStored.filter(item => {
    return (item.id !== id)
  })

  await AsyncStorage.setItem('@primevideo', JSON.stringify(myMovies))
  console.log('Filme deletado com sucesso')
  return myMovies
}

// Filtrar algum filme se já está salvo
export async function hasMovie (movie) {
  const moviesStored = await getMoviesSave('@primevideo')

  const hasMovie = moviesStored.find(item => item.id === movie.id)

  if (hasMovie) {
    return true
  }
  return false
}
