
const url = 'https://rickandmortyapi.com/api/character';

const divWrapp = document.querySelector('.container');

function f(){
    fetch(url)
    .then(response => 
         response.json())
    .then(myJson => {
        myJson.results.forEach(el => function(){
            let photo = result.image;
            let img = document.createElement('img');
            img.setAttribute('src', photo);
            divWrapp.appendChild(img);

        });
        
    })

    
}