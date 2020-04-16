const axios = require('axios');

const getLugarLatLong = async (direccion) => {
    const encodedUrl = encodeURI(direccion);
    let instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key": "951423b7cfmshfa8201bf591ef46p15be04jsnd301f737a771"
        }
    })
    let response = await instance.get();

    if(response.data.Results.length === 0) {
        throw new Error('No hay datos para la dirección introducida');
    }

    const data = response.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        dir, lat, lng
    }
}

module.exports = { getLugarLatLong };

