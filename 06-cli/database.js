/** biblioteca para manipulação de arquivo */
const{readFile} = require('fs'); //fileSystem
/** biblioteca para utilidades do node, neste caso trazendo o promisify */
const {promisify} = require('util');

/**transformando em promise para utilizar o async */
const readFileAsync = promisify(readFile);

class Database{

    constructor(){
        this.NOME_ARQUIVO = 'herois.json';
    }

    async obterDadosArquivo(){
        const arquivo = await readFileAsync(this.NOME_ARQUIVO,'utf8');
        
        /** força o to string no retorno */
        return JSON.parse(arquivo.toString());
    }
    escreverArquivo(){

    }
    async listar(id){
        const dados = await this.obterDadosArquivo();

        /**filter se nao achar condição, retorna lista inteira */
        const dadosFiltrados = dados.filter(item => (id?item.id:true));

        return dadosFiltrados;
    }
}

/**exporta classe inteira */
module.exports = new Database();