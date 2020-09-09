import axios from 'axios';

//Aula 1 (Promisses)
export const minhaPromisse = () => new Promise(resolve => setTimeout(resolve('OK'), 2000));

minhaPromisse()
    .then(response => {
        console.log('Async/Await - Aula 1:', response);
    })
    .catch(err => {
        console.error('Async/Await - Aula 1 (ERRO):', 'erro no servidor');
    });

/* export async function executaPromisse(){
    const response = await minhaPromisse();
    console.log('Aula 1.2:', response);
}
executaPromisse(); */
export const executaPromisse = async () => {
    //const response = await minhaPromisse();
    console.log('Async/Await - Aula 1.2:', await minhaPromisse());
    //console.log('Async/Await - Aula 1.3:', await minhaPromisse());
    //console.log('Async/Await - Aula 1.4:', await minhaPromisse());
};

executaPromisse();

//Aula 2 (axios)
export class api {
    static async getUserInfo(username){
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log('Async/Await - Aula 2:', response.data);
        } catch (err) {
            console.error('Async/Await - Aula 2 (ERRO):', 'Erro na API');
        }
        
    }
}
api.getUserInfo('kamila-vieira');
//api.getUserInfo('kamila-vieiraDDDFF'); DISPARA ERRO