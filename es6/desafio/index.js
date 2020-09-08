//Exercício 1
class Usuario {
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
        this.admin = false
        //email == 'email@teste.com' && senha == 'senha123'? this.admin = false : this.admin = true;
    }
    
    isAdmin(){
          if(this.admin == false){
              return false;
          } else {
            return true;
          }
    }
}
class Admin extends Usuario{
    constructor(email, senha){
        super();
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log('Exercício 1:', User1.isAdmin()); // false
console.log('Exercício 1.1:', Adm1.isAdmin());// true

//Exercício 2
const users = [
    { name: 'Diego', age: 23, company: 'Rocketseat' },
    { name: 'Gabriel', age: 15, company: 'Rocketseat' },
    { name: 'Lucas', age: 30, company: 'Facebook' },
   ];
console.log('Exercício 2:', users); 
/* {name: "Diego", age: 46, company: "Rocketseat"}
{name: "Gabriel", age: 30, company: "Rocketseat"}
{name: "Lucas", age: 60, company: "Facebook"} */
//2.1 Utilizando o map (Crie uma variável que contenha todas idades dos usuários)
const showAge = users.map((user) => {
    return user.age;
});
console.log('Exercício 2.1:', showAge); //[23, 15, 30]
/* 2.2 Utilizando o filter (Crie uma variáveis que tenha apenas os usuários
 que trabalham na Rocketseat e com mais de 18 anos) */
 const rocketseatWorkerAndOlder = users.filter((user) => {
    return user.company == 'Rocketseat' && user.age >= 18; 
 });
 console.log('Exercício 2.2:', rocketseatWorkerAndOlder); //{name: "Diego", age: 23, company: "Rocketseat"}
 //2.3 Utilizando o find (Crie uma variável que procura por um usuário que trabalhe na empresa Google)
 const googleWorker = users.find(user => {
    return user.company == 'Google';
 });
 console.log('Exercício 2.3:', googleWorker); //undefined
/* 2.4 Unindo operações (Multiplique a idade de todos usuários por dois e 
depois realize um filtro nos usuários que possuem no máximo 50 anos) */
const showGreaterThanFifty = users.filter(user => {
    user.age *= 2; 
    return user.age <= 50;
});
console.log('Exercício 2.4:', showGreaterThanFifty); 
/* {name: "Diego", age: 46, company: "Rocketseat"}
{name: "Gabriel", age: 30, company: "Rocketseat"} */
//Exercício 3
//Converta em arrow function
// 3.1
const arr = [1, 2, 3, 4, 5];
const arrChanged = arr.map(item => item + 10);
console.log('Exercício 3.1:', arrChanged); // [11, 12, 13, 14, 15]
// 3.2 (Dica: Utilize uma constante pra function)
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = usuario => usuario.idade;
console.log('Exercício 3.2:', mostraIdade(usuario)); // 23
// 3.3 (Dica: Utilize uma constante pra function)
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => {
 return { nome, idade };
};
console.log('Exercício 3.3:', mostraUsuario(nome, idade)); //{nome: "Diego", idade: 23}
console.log('Exercício 3.3.1:', mostraUsuario(nome)); //{nome: "Diego", idade: 18}
// 3.4
const promise = () => new Promise((resolve, reject) => {
    return resolve();
});

console.log('Exercício 3.4:', promise()); // Promise {<fulfilled>: undefined}

//Exercício 4
//4.1 Desestruturação simples
const empresa = {
    nome1: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
};  
const { nome1, endereco: { cidade, estado }} = empresa;
console.log('Exercício 4.1:', nome1 + ' em ' + cidade + '/' + estado); //Rocketseat em Rio do Sul/SC
//4.2 Desestruturação em parâmetros
function mostraInfo() {
    return `${nome2} tem ${idade1} anos.`;
}
const user = { nome2: 'Diego', idade1: 23 };
const { nome2, idade1 } = user;
console.log('Exercício 4.2:', mostraInfo()) //Diego tem 23 anos.

//Exercício 5
//5.1 Rest
const array = [1, 2, 3, 4, 5, 6];
const [x, ...y] = array;
console.log('Exercício 5.1:', x); // 1
console.log('Exercício 5.1:', y); // [2, 3, 4, 5, 6]
//5.1.1
function soma(...params){
    return params.reduce((total, next) => total + next);
}
console.log('Exercício 5.1.1:', soma(1, 2, 3, 4, 5, 6)); // 21
console.log('Exercício 5.1.1:', soma(1, 2)); // 3
//5.2 Spread
const user1 = {
    name1: 'Diego',
    age1: 23,
    adress1: {
    city1: 'Rio do Sul',
    state1: 'SC',
    country1: 'Brasil',
    }
};
const user2 = {...user1, name1: 'Gabriel'};
const user3 = {...user1, adress1:{...user1.adress1, city1: 'Lontras'}};
console.log('Exercício 5.2:', user2); //name1: "Gabriel", age1: 23, adress1: {city1: "Rio do Sul", state1: "SC", country1: "Brasil"}
console.log('Exercício 5.2:', user3); //name1: "Diego", age1: 23, adress1: {city1: "Lontras", state1: "SC", country1: "Brasil"}

//Exercício 6
const usuario2 = 'Diego';
const idade2 = 23;
console.log('Exercício 6:', `O usuário ${usuario2} possui ${idade2} anos`); //O usuário Diego possui 23 anos

//Exercício 7
const nome3 = 'Diego';
const idade3 = 23;
const usuario3 = {
    nome3,
    idade3,
    cidade: 'Rio do Sul',
};
console.log('Exercício 7:', usuario3); //{nome: "Diego", idade: 23, cidade: "Rio do Sul"}