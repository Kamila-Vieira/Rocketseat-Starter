//Classes
class List {
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log('3:', this.data);
    }
}
class TodoList extends List{
    constructor(){
        super();
        this.usuario = 'Kamila';
    }

    mostraUsuario(){
        console.log('2:', this.usuario);
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

console.log('(Pressione Adicionar) | 1:', Matematica.soma(1, 3))

//Const & let
//const, diferente de var não se pode reatribuir valor. só se pode mutar(dentro de objetos{} e vetores[]):
const usuario = {nome: 'Kamila'};
usuario.nome = 'Diego';
console.log('4:', usuario);
//let, são variáveis de escopo não são visíveis fora da funcão por exemplo:
function teste(x){
    let y = 2;
    if(x>5){
        console.log(x, 'e', y);
    }
}
teste(7);
console.log(y);
