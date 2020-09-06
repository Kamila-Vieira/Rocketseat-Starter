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