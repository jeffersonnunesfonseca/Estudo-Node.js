const EventEmitter = require('events');
class MeuEmissor extends EventEmitter{
    /**
     * extende classe abstrata do node para manipulação de evento
    */

}
const meuEmissor = new MeuEmissor();

/** simula click */
const nomeEvento = 'usuario:click';
meuEmissor.on(nomeEvento, function(click){
    console.log('um usuario clicou',click);
});

// meuEmissor.emit(nomeEvento,'barra rolagem');
// meuEmissor.emit(nomeEvento,'click');

/** pega evento pelo terminal */
const stdin = process.openStdin();
stdin.addListener('data', function(value){
    console.log(`Você digitou ${value.toString()}`);
});