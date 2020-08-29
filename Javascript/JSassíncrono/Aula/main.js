//Requisições AJAX
var xhr = new XMLHttpRequest();
console.log('Aula 1:', xhr);
xhr.open('GET', 'https://api.github.com/users/kamila-vieira');
xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        console.log('Aula 1.2:', JSON.parse(xhr.responseText));
    }
}

// Promises
var myPromise = function(){
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/kamila-vieira');
        xhr.send(null);
        
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição!');
                }
            }
        }
    });
}

myPromise()
    .then(function(response){
        console.log('Aula 2.2:', response);
    })
    .catch(function(error){
        console.warn('Aula 2.3:', error);
    });

console.log('Aula 2:', myPromise());
//console.log('Aula 2.1:', reject);

// Utilizando Axios
axios.get('https://api.github.com/users/kamila-vieira')
    .then(function(response){
        console.log('Aula 3:', response.data);
        console.log('Aula 3.2:', response);
    })
    .catch(function(error){
        console.warn('Aula 3.3:', error);
    });

//console.log('Aula 3:', response.data);