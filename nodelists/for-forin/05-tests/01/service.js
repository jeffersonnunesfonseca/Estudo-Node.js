/**utiliza axios */
const axios = require('axios');
/**url api para teste */
const URL = `https://swapi.co/api/people`;

async function obterPessoas(nome) {
    console.log("chamando");
    const url = `${URL}/?search=${nome}&format=json`;
    const response = await axios.get(url);

    return response.data.results.map(mapearPessoas);
}
function mapearPessoas(item){
    return{
        nome: item.name,
        peso: item.height
    }
}
module.exports = {
    obterPessoas
}