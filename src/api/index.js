import axios from 'axios'

const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
    params: {
      query: 'eiffel tower',
      lang: 'en_US',
      units: 'km'
    },
    headers: {
      'X-RapidAPI-Key': 'key',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };

const getPlacesData = async ()=>{
    try {
        const response = await axios.request(options);
        console.log(response);
    } catch (error) {
        console.log(error.message);
    }
}