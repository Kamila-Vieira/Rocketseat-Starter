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