import api from './api';

class App {
    constructor(){
        this.repositories = [];
        this.formEl = document.querySelector('#repo-form');
        this.inputUserEl = document.querySelector('input[name=user]');
        this.inputRepoEl = document.querySelector('input[name=repository]');
        this.listEl = document.querySelector('#repo-list');

        this.registerHandlers();
    }

    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true){
        if(loading === true){
            //setTimeout({}, 2000);
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode(' Carregando...'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);
        } else{
            document.getElementById('loading').remove();
        }
    }

    async addRepository(event){
        event.preventDefault();

        const userInput = this.inputUserEl.value;
        const repoInput = this.inputRepoEl.value;
        if(userInput.length === 0)
        return;
        if(repoInput.length === 0)
        return;

        this.setLoading();

        try {
            await api.get(`/users/${userInput}`);
            const response = await api.get(`/repos/${userInput}/${repoInput}`);

            const { name, description, html_url, owner: { avatar_url } } = response.data;
            
            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            });
            this.inputUserEl.value = '';
            this.inputRepoEl.value = '';

            this.render();
        } catch (error) {
            alert('404 (Not Found) : O Repositório não existe!');
        }
        this.setLoading(false);
    }

    render(){
        this.listEl.innerHTML = '';
        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);
            
            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));
            
            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}

new App();