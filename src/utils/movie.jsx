// Gerar uma lista de filmes do tamanho que eu desejar
// Algoritmo em loop
export function getListMovies (size, movies) {
  const popularMovies = []
  for (let i = 0, l = size; i < l; i++) {
    popularMovies.push(movies[i])
  }
  return popularMovies
}

// Gerar um número aleatório com base no tamanho da lista de filmes
export function randomBanner (movies) {
  return Math.floor(Math.random() * movies.length)
}
