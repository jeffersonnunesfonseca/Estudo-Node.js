const service  = require('./services');

async function main() {
    try {
        const result = await service.obterPessoas('a');
        const names =[];
        /**for */
        console.time("for");
        for(let i = 0;i<=result.results.length -1; i++){
            const pessoa = result.results[i];
            names.push(pessoa.name);
        }
        console.timeEnd("for");
        
        /**for in */
        console.time("for-in");
        for(let i in result.results){
            const pessoa = result.results[i];
            names.push(pessoa.name);
        }
        console.timeEnd("for-in");
        
        /**forof */
        console.time("for-of");
        for(pessoa of result.results){
            names.push(pessoa.name);
        }
        console.timeEnd("for-of");


        console.log("nomes",names)




    } catch (error) {
        console.error('erro interno',error);        
    }
}
main();