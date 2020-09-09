import { soma as somaFunction, subtracao } from './webpack/aula/functions';
import somarFunction, {subtracao as subtracaoFunction} from './webpack/aula/somar';
import * as funcoes from './webpack/aula/functions';
import ClasseUsuario, { info, idade as IdadeUsuario } from './webpack/desafio/functions';
import { minhaPromisse as Promisse, api} from './asyncAwait/aula/index';
import { delay } from './asyncAwait/desafio';
//import {  } from './asyncAwait/aula/index';

//Webpack server
//Arquivo functions.js (exports secundários)
console.log('Webpack server - Aula 1:', somaFunction(1, 3));
console.log('Webpack server - Aula 2:', subtracao(1, 3));
//Arquivo somar.js (export default)
console.log('Webpack server - Aula 2.1:', somarFunction(4, 3));
//Arquivo somar.js (export secundário)
console.log('Webpack server - Aula 2.2:', subtracaoFunction(4, 3));
//Arquivo functions.js (todos os exports secundários)
console.log('Webpack server - Aula 2.3:', funcoes);
console.log('Webpack server - Aula 2.4:', funcoes.multiplicacao(2, 7));

console.log('Webpack server - Exercício 1:', IdadeUsuario);
console.log('Webpack server - Exercício 2:', ClasseUsuario);
//console.log('Exercício.3:', info);
//Async/Await
//Aula 1 (Promisses)
Promisse();
//Aula 2 (axios)
api.getUserInfo('kamila-vieira');
//Desafio
delay();