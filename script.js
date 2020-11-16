let btn = document.getElementById('btn');
let dogSpace = document.getElementById('dog');

const url = 'https://api.jsonbin.io/b/5f4d604b514ec5112d136cd6';

let getDog = () => {
    fetch(url)
    .then(response => response.json())
    .then(response => console.log(response))
};

getDog();