const assert = require("assert");
const service = require("./service");

/** case do mocha */
describe("Star Wars Tests",function (){
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