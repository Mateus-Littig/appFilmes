import axios from 'axios'

// https://api.themoviedb.org/3
// https://api.themoviedb.org/3/movie/now_playing?api_key=0f19eeea760be294ef2b624362e5e1e1&language=pt-BR&page=1

export const key = '0f19eeea760be294ef2b624362e5e1e1'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

export default api
