import axios from 'axios';

const request = axios.create({ baseURL: 'http://localhost:8080/' })

export const getResults = (location, checkIn, checkOut) => {
  // console.log('reaching getResults')
  return request.get('/sites').then(({ data }) => {
    return data;
  })
}
