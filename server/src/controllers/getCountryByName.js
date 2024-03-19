const {Country} = require('../db');

const getCountryByName = async (name)=>{
    // console.log(name)
    const contryBd = await Country.findAll({where: {nombre: name}});
    if(!contryBd) throw Error("País no Registrado o no existe")
    return contryBd;
}
module.exports = {
    getCountryByName
}