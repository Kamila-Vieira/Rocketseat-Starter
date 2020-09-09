//Webpack 
//Arquivo functions.js (exports secundários)
import { soma as somaFunction, subtracao } from './webpack/aula/functions';
//Arquivo somar.js (somarFunction - export default e subtracaoFunction - export secundário)
import somarFunction, {subtracao as subtracaoFunction} from './webpack/aula/somar';
//Arquivo functions.js (todos os exports secundários)
import * as funcoes from './webpack/aula/functions';
import ClasseUsuario, { info, idade as IdadeUsuario } from './webpack/desafio/functions';//Desafio Webpack
//Async/Await
import { minhaPromisse as Promisse, api} from './asyncAwait/aula/index';//Aula 1 (Promisses)/Aula 2 (axios)
import { delay } from './asyncAwait/desafio';//Desafio Async/Await


console.log('Webpack server - Aula 1:', somaFunction(1, 3));
console.log('Webpack server - Aula 2:', subtracao(1, 3));
console.log('Webpack server - Aula 2.1:', somarFunction(4, 3));
console.log('Webpack server - Aula 2.2:', subtracaoFunction(4, 3));
console.log('Webpack server - Aula 2.4:', funcoes.multiplicacao(2, 7));
console.log('Webpack server - Exercício 1:', IdadeUsuario);
//console.log('Webpack server - Exercício 2:', ClasseUsuario);
//console.log('Exercício.3:', info);
