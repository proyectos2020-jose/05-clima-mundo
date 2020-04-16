const axios = require('axios');
const appid = '0f22f58e638133d14623c8871ae0b9f1';
const getClima = async (lat, lon) => {
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=metric`);
    return response.data.main.temp;
}

module.exports = {getClima}
