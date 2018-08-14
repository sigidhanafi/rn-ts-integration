import axios from 'axios'

const apiKey = '9d2a61648c32785276abeaee4471a2f9'
const request = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 1000,
  headers: {}
})

export const getPopularMovieRequest = page => {
  return request.get('/movie/popular',
    {
      params: {
        api_key: apiKey,
        language: 'en',
        page: page,
      }
    })
}
