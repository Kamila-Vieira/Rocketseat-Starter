import { soma as somaFunction, subtracao } from './webpack/aula/functions';
import somarFunction, {subtracao as subtracaoFunction} from './webpack/aula/somar';
import * as funcoes from './webpack/aula/functions';
import ClasseUsuario, { info, idade as IdadeUsuario } from './webpack/desafio/functions';
import { minhaPromisse as Promisse, api} from './asyncAwait/aula/index';
//import {  } from './asyncAwait/aula/index';

//Webpack server
//Arquivo functions.js (exports secundários)
console.log('Aula 1:', somaFunction(1, 3));
console.log('Aula 2:', subtracao(1, 3));
//Arquivo somar.js (export default)
console.log('Aula 2.1:', somarFunction(4, 3));
//Arquivo somar.js (export secundário)
console.log('Aula 2.2:', subtracaoFunction(4, 3));
//Arquivo functions.js (todos os exports secundários)
console.log('Aula 2.3:', funcoes);
console.log('Aula 2.4:', funcoes.multiplicacao(2, 7));

console.log('Exercício.1 Idade:', IdadeUsuario);
console.log('Exercício.2:', ClasseUsuario);
//console.log('Exercício.3:', info);
//Async/Await
//Aula 1 (Promisses)
console.log('Aula 1:', Promisse);
//Aula 2 (axios)
console.log('Aula 1:', api);