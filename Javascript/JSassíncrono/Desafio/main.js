//Exercício 1
var age = 22;
function checkAge(){
    return new Promise((resolve, reject) => {
        if(age >= 18){
            return resolve();
        } else {
            return reject();
        }
    }); 
}

checkAge()
    .then(function(){
        console.log('Exercício 1 (then):', 'Maior de idade');
    })
    .catch(function(){
        console.warn('Exercício 1.2 (catch):', 'Menor de idade');
    });

//Exercício 2

var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var users = ["kamila-vieira"];
var api = 'https://api.github.com/users/' + users + '/repos';
    
axios.get(api)
    .then((response) => {
        console.log('HEY:', response);
        var arrayRepos = JSON.parse(response.data[name]);
        console.log('HEY:', arrayRepos);
    function renderUsers(){
        listElement.innerHTML = '';
        for(repos of arrayRepos){
            var userElement = document.createElement('li');
            var userText = document.createTextNode(repos);
    
            userElement.appendChild(userText);
            listElement.appendChild(userElement);
        }   
    }
    renderUsers();
    
    function AddUser() {
        var userText = inputElement.value;
        
        users.push(userText);
        inputElement.value = '';
        renderUsers();  
    }
    
    buttonElement.onclick = AddUser;
        console.log('Aula 3:', response);
    })
    .catch((error) => {
        console.warn('Atenção:', error);
    });