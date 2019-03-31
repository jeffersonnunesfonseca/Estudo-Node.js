    /**
     * CASE
     * 0 - obter usuario
     * 1 - numero usuario pelo id
     * 2 - endereco usuario pelo id
     */

    /**
     * PROMISE
     * primeiro 
     */
    /**
     * PROMISES ESTADOS
     * pending -> andamento
     * fulfilled -> terminou , possivel resgatar
     * reject -> erro
     */

    /**
     * .then(), trata sucesso
     * .catch(), trata erros
     */

    // modulo interno node.js
    const util = require('util');

    //converter função para async
    // a função que será convertida deverá estar seguindo a convenção de callback
    // exemplo(error,sucess)

    const obterEnderecoAsync = util.promisify(obterEndereco);


    function obterUsuario(){
        return new Promise(function resolvePromise(resolve, reject){
            setTimeout(() => {
                return resolve({
                    id:1,
                    nome: 'Billy',
                    dataNascimento: new Date()
                })
            }, 1000);
            
        });

    }

    function obterTelefone(idUsuario){
        return new Promise(function resolvePromise(resolve, reject){
            setTimeout(() => {
                return resolve({
                    telefone: '30921001',
                    ddd     : '41'
                })
        
            }, 2000);
        });

    }

    /**
     * exemplo com callback
     */
    function obterEndereco(idUsuario,callback){
        setTimeout(() => {
            return callback(null,{
                endereco: "dr levi",
                numero  : '111'
            });
        }, 1000);
    }

    /**  MANEIRA SEM ASYNC/AWAIT */
    // const usuarioPromisse = obterUsuario();
    // usuarioPromisse
    //     .then(function(resultado){
    //         console.log('nome', resultado.nome)
    //     })
    //     .catch(function (error){
    //         console.erron('erro',error)
    //     });

    main();
    /** async=> retornara uma Promise */

    async function main(){

        try {
            const usuario  = await obterUsuario();

            /**
             * quando um resultado não depende do outro, nao usar await desta maneira
             * deixa execução lenta
             */

            // const telefone = await obterTelefone(usuario.id); 
            // const endereco = await obterEnderecoAsync(usuario.id);

            /**
             * utilizar desta forma, que deixa independente e executa as 2 ao mesmo tempo
             */
            const resultado = await Promise.all([
                obterTelefone(usuario.id), 
                obterEnderecoAsync(usuario.id)   

            ]);
            const endereco =resultado[1];
            const telefone =resultado[0];
            console.log(
                `
                    Nome: ${usuario.nome},
                    Telefone : ${telefone.ddd} ${telefone.telefone},
                    Endereco: ${endereco.endereco}, ${endereco.numero}
                `
            )

        } catch (error) {
            console.error('ERRO',error);
        }

    }

    /** chamando sem sincrozinzar 
     * desta forma da erro pois a função ainda não terminou a execução
    */
    // const usuario  = obterUsuario();
    // const  telefone = obterTelefone(usuario.id);

    // console.log('usuario',usuario);
    // console.log('telefone',telefone);
