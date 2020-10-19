// const axios = require('axios');

// const getLugarLatLng = async(direccion) => {

//     // const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=8a72fe115a6ecf969e642b05ec65f9f4&units=metric`)

//     return {
//         direccion,
//         lat: '40.750000',
//         lng: '-74.000000'
//     };

// }

// module.exports = {
//     getLugarLatLng
// }


const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodedUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUlr }`,
        headers: { 'X-RapidAPI-Key': 'YrIv9XHJxmmshCBitpg1YTAnahQSp1KbdHhjsnSBU1hvMDMlzK' }
    });

    const resp = await instance.get();

    console.log(resp.data);

    if (resp.data.Results) {
        if (resp.data.Results.length === 0) {
            throw new Error(`No hay resultados para ${ dir }`);
        }
    } else {
        throw new Error(`resp.data.Results null`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLng
}