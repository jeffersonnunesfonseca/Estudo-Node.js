const assert = require("assert");
const service = require("./service");
const nock = require("nock");


//pacote nock para simular requisicoes

/** case do mocha */
describe("Star Wars Tests",function (){
    this.beforeAll(()=>{
        const response ={
            results: [{
                name: 'R2-D2',
                height: '96'
            }]
        }
        //toda vez que houver requisicoes, do tipo get , simula 200 e retorna o response
        nock("https://swapi.co/api/people")
        .get("/?search=r2-d2&format=json")
        .reply(200,response);
    });

    //oque irá testar
    it("Deve buscar o R2-D2 com formato correto",async function (){
        const expected  = [{nome:'R2-D2',peso:'96'}];
        const nomeBase  = "r2-d2";
        const resultado = await service.obterPessoas(nomeBase);
        console.log(resultado);
        //resultado, resultado esperado
        assert.deepEqual(resultado,expected);
    });
});