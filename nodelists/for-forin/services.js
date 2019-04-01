/**utiliza axios */
const axios = require('axios');
/**url api para teste */
const URL = `https://swapi.co/api/people`;

/** promise para tratar busca */
async function obterPessoas(nome) {
    const url = `${URL}/?search=${nome}&format=json`;
    const response = await axios.get(url);
    return response.data;
}

/**TESTE */
// obterPessoas('r2')
//     .then(function(resultado){
//         console.log('resultado',resultado)
//     })
//     .catch(function(error){
//         console.error('deu ruim',error)
//     });

/** transforma em um modulo */
module.exports={
    obterPessoas
}