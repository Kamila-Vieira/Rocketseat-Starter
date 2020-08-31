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

//Exercício 2 e 3
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var users = ["kamila-vieira"];
var api = 'https://api.github.com/users/' + users + '/repos';
    
axios.get(api)
    .then((response) => {

        var stringField = JSON.stringify(response.data);
        var arrayRepos = JSON.parse(stringField);
        console.log('HEY:', arrayRepos);

    function renderUsers(){
        listElement.innerHTML = '';

        for(repos of arrayRepos){
            var repoElement = document.createElement('li');
            var repoText = document.createTextNode(repos.name);
    
            repoElement.appendChild(repoText);
            listElement.appendChild(repoElement);
        }   
    }
    renderUsers();
    
    function AddUser() {
       
        for(user of users){
            var userText = inputElement.value;
            users.push(userText);
            inputElement.value = '';
        }
       
        renderUsers();  
    }
    buttonElement.onclick = AddUser;
    
    })
    .catch((error) => {
        console.warn('Atenção:', error);
    });

    console.log(users);