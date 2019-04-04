const {deepEqual,ok} = require ('assert');
const database = require('./database');
const DEFAULT_ITEM_CADASTRAR = {
    nome: 'Flash',
    poder: 'Speed',
    id: 1
};

describe("Suite de manipulaçao de Herois",()=>{
    it('deve pesquisar heroi usando arquivo',async ()=>{
        const expected = DEFAULT_ITEM_CADASTRAR;
        /**quando parametro esta entre [resultado] quer é mesma coisa que resultado[0]
         * se tivesse mais posições
         * [resultado,posicao2,posicao3 ...]
         * resultado[0],resultado[1],resultado[2] ...
         */
        const [resultado] = await database.listar(expected.id);
        /**ok so verifica se  o primeiro parametro é true */
        // ok(resultado,expected);
        deepEqual(resultado,expected);
    });

    // it('deve cadastrar um heroi, usando arquivos',async ()=>{
    //     const expected = DEFAULT_ITEM_CADASTRAR;
    //     ok(null,expected);
    // });

})