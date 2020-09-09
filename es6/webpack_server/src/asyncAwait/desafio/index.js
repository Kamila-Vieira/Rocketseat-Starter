import axios from 'axios';

export const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

//Exercio 1
export const executaUmPorSegundo = async () => {
    //const response = await delay();
    console.log('Async/Await - 1s', await delay());
    console.log('Async/Await - 2s', await delay());
    console.log('Async/Await - 3s', await delay());
};
executaUmPorSegundo();

//Exercio 2
export class getUser {
    static async FromGithub(user){
        try {
            const response = await axios.get(`https://api.github.com/users/${user}`);
            console.log('Async/Await - Exercicio 2:', response.data);
        } catch (error) {
            console.log('Async/Await - Exercicio 2:', 'Usuário não existe');
        }
    }
}
getUser.FromGithub('kamila-vieira');
//getUser.FromGithub('diego3g124123'); DISPARA ERRO

//Exercio 3
export class Github {
    static async getRepositories(user, repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${user}/${repo}`)
            console.log('Async/Await - Exercicio 3:', response.data);
        } catch (error) {
            console.log('Async/Await - Exercicio 3:', 'Repositório não existe');
        }
    }
}
Github.getRepositories('kamila-vieira', 'AceleradevJava');
//Github.getRepositories('rocketseat', 'dslkvmskv'); DISPARA ERRO

//Exercio 4
const buscaUsuario = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}/repos`)
        console.log('Async/Await - Exercicio 4:', response.data);
    } catch (error) {
        console.log('Async/Await - Exercicio 4:', 'Usuário não existe');
    }
}
buscaUsuario('kamila-vieira');