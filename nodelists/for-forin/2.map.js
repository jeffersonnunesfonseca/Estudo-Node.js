const service  = require('./services');
async function main() {
    try {
        const results = await service.obterPessoas("a");
        // const names = [];
        /**for each */
        // results.results.forEach(function (item){
        //     names.push(item.name);
        // });

        /** array map */
        const names = results.results.map(pessoa => pessoa.name);
        console.log(names);

    } catch (error) {
        console.error("deu ruim",error);
        
    }
}
main();