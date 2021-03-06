import axios from 'axios';

// const request1 = axios.create({ baseURL: 'http://localhost:8080/' })
const request1 = axios.create({ baseURL: 'https://my-json-server.typicode.com/samuellea/json-glamping' })
const request2 = axios.create({ baseURL: 'https://api.postcodes.io/postcodes/' })

export const getResults = (location, checkIn, checkOut) => {
  return request1.get('/sites').then(({ data }) => {
    let refinedResults = [...data];
    if (location !== 'Any Location' && location !== undefined) {
      refinedResults = refinedResults.filter(site => site.country == location);
    }
    if (checkIn !== null && checkIn !== undefined) {
      refinedResults = refinedResults.filter(site => Date.parse(site.bookingsOpen) < Date.parse(checkIn))
    }
    if (checkOut !== null && checkIn !== undefined) {
      refinedResults = refinedResults.filter(site => Date.parse(site.bookingsClose) > Date.parse(checkOut))
    }
    return refinedResults;
  })
}

export const getSiteById = (id) => {
  return request1.get(`/sites/${id}`).then(({ data }) => {
    return data;
  })
}

export const getLatLongFromPostCode = (postcode) => {
  return request2.get(`${postcode}`).then(({ data }) => {
    return {
      lat: data.result.latitude,
      long: data.result.longitude
    }
  });
}
