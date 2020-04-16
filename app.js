const lugares = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'Direccion a consultar'
    }
}).argv;


const getInfo = async (direccion) => {
    try {
        let coordenadas = await lugares.getLugarLatLong(argv.direccion);
        let climaParam = await clima.getClima(coordenadas.lat, coordenadas.lng);
        return `El clima para la ciudad ${direccion} es de ${climaParam}`
    }catch (e) {
        return `No se puedieron obtener los datos para la direccio ${direccion}`;
    }
}

getInfo(argv.direccion).then(console.log).catch(console.log)


