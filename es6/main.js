//Classes
class List {
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log('AulaClasses_3:', this.data);
    }
}
class TodoList extends List{
    constructor(){
        super();
        this.usuario = 'Kamila';
    }

    mostraUsuario(){
        console.log('AulaClasses_2:', this.usuario);
    }
}

var minhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    minhaLista.mostraUsuario();
    minhaLista.add('novo todo');
}

class Matematica {
    static soma(a, b){
        return a + b;
    }
}

console.log('AulaClasses_1 | (Pressione Adicionar):', Matematica.soma(1, 3))

//Const & let
//const, diferente de var não se pode reatribuir valor. só se pode mutar(dentro de objetos{} e vetores[]):
const usuario = {nome: 'Kamila'};
usuario.nome = 'Diego';
console.log('AulaConst&Let_1:', usuario);
//let, são variáveis de escopo não são visíveis fora da funcão por exemplo:
function teste(x){
    let y = 2;
    if(x>5){
        console.log('AulaConst&Let_2:', x, y);
    }
}
teste(7);
//console.log(y) não é possível fora da função

//Operações em vetores
const arr = [-3, 1, 3, 4, 6, 12, 56, 80];

const newArr = arr.map(function(item, index){
    return item * 2 + index;
});
// map percorre o array
console.log('AulaOperacoesEmArray_1:', newArr);

const sum = arr.reduce(function(total, next){
    return total + next;
});
// reduce junta os valores do array
console.log('AulaOperacoesEmArray_2:', sum);

const filter = arr.filter(function(item){
    return item % 2 === 0;
  });
  // filter filtra os valores, somente por meio de operadores lógicos (booleans):
  console.log('AulaOperacoesEmArray_3:', filter);

const find = arr.find(function(item){
    return item === 4;
});
 // find busca os valores, também somente por meio de operadores lógicos (booleans):
 console.log('AulaOperacoesEmArray_4:', find);

 //Arrow Functions
const vet = [1, 3, 4, 6, 12, 16, 18];
const newVet = vet.map(item => item * 2);
console.log('AulaArrowFunctions_1:', newVet);

const testArrowFunction = () => ({ nome: 'Kamila', idade: 22 });
console.log('AulaArrowFunctions_2:', testArrowFunction());

//Valores padrão
function somar(a, b = 3){
    return a + b;
    //b = 3: foi definido um valor padrão
}
console.log('AulaValoresPadrao_1:', somar());
console.log('AulaValoresPadrao_2:', somar(1));
console.log('AulaValoresPadrao_3:', somar(1, 5));

const somar2 = (a, b) => a + b;
console.log('AulaValoresPadrao_4:', somar2(2, 5));

//Desestruturação
const user = {
    nome: 'Kamila',
    idade: 22,
    endereco: {
        rua: 'av. das amebas',
        numero: 234,
        cep: '99999-99',
        cidade: 'São Paulo',
        uf: 'SP',
    },
};
console.log('AulaDesestruturacao_1:', user);
const { nome, endereco: { uf }} = user;
console.log('AulaDesestruturacao_2:', nome);
console.log('AulaDesestruturacao_3:', uf);
//console.log('AulaDesestruturacao_4:', idade) não foi definida para desestruturação
function mostraDados({ idade, endereco:{cep}}){
    console.log('AulaDesestruturacao_4:', idade);
    console.log('AulaDesestruturacao_5:', cep);
}
mostraDados(user);

//Operadores rest/spred
//Rest em objetos
const user1 = {
    name: 'Kamila',
    age: 22,
    empresa: 'Acert'
};
const { name, ...resto } = user1;
console.log('AulaOperadoresRestSpred_1:', name);
console.log('AulaOperadoresRestSpred_2:', resto);
//Rest em vetores
const vetor = [1, 3, 5, 7, 9];
const [a, b, ...c] = vetor;
console.log('AulaOperadoresRestSpred_3:', a);
console.log('AulaOperadoresRestSpred_4:', b);
console.log('AulaOperadoresRestSpred_5:', c);
//Rest em parâmetros de função
function soma2(a, b, ...params){
    return params.reduce((total, next) => total + next);
    //return params; -> converte parametros de resto em array
}
console.log('AulaOperadoresRestSpred_6:', soma2(1, 2, 3, 5, 7));
//Spread em array
const vet1 = [1, 3, 5];
const vet2 = [2, 4, 6];
const vet3 = [...vet1, ...vet2];
console.log('AulaOperadoresRestSpred_7:', vet3);
//Spread em objeto
const adress = {
    avenue: "av das pampas",
    number: 23,
};
const adress1 = { ...adress, avenue: "av casas"};
console.log('AulaOperadoresRestSpred_7:', adress1);

//Template literals
const user2 = {
    nome1: 'Kamila',
    idade1: 22,
};
const { nome1, idade1 } = user2;
console.log('AulaTemplateLiterals_1:', 'Meu nome é ' + nome1 + ' e tenho ' + idade1 + ' anos.');
console.log('AulaTemplateLiterals_2:', `Meu nome é ${nome1} e tenho ${idade1} anos.`);

//Object Short Syntax
const user3 = {
    nome1,
    idade1,
    empresa1: 'Acert', 
};
console.log('AulaObjectShortSyntax_1:', user3);