const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=8a72fe115a6ecf969e642b05ec65f9f4&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}