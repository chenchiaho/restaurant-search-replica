import axios from 'axios'

export default axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses",
  headers: {
    "Access-Control-Allow-Origin": '*',
    Authorization: 'Bearer 6M_efaOyLjfpYZY6b_VukJZBkrPIDbLNOXZ2iAUrbTv8dXYX9RKv-jsif55d4KJwQ_D7xBdW6yCePRpTXgXGaQ7y04nDHtkzPtLEiPKc21Ux5ZnTC27dtFD2kA1WZHYx'
  }
})