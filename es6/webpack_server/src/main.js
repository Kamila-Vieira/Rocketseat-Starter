import { soma as somaFunction, subtracao } from './functions';
import somarFunction, {subtracao as subtracaoFunction} from './somar';
import * as funcoes from './functions';
import ClasseUsuario, { info, idade as IdadeUsuario } from './desafio/functions';
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

console.log('Exercício: Idade:', IdadeUsuario);