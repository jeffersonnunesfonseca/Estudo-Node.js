// const service  = require('./services');
/**tras somente um metodo da biblioteca */
const {obterPessoas}  = require('./services');

async function main() {
    try {
        const {
            results
        } = await obterPessoas("a");
        const familia = results.filter(function(item){
            /**
             * retorna um boolean
             * false remove da lista
             * true mantem na lista
             */
            const result = item.name.toLowerCase().indexOf("lars") !== -1;
            return result;
        });

        const names = familia.map(pessoa => pessoa.name);

        console.log(names);

    } catch (error) {
        console.error("deu ruim",erro);
    }
}
main();