const btn = document.getElementById('btn');
const dogSpace = document.getElementById('dog');
const dogAge = document.getElementById('age');

const url = 'https://api.jsonbin.io/b/5f4d604b514ec5112d136cd6';

let dogs;

let getDogs = () => {
    fetch(url)
    .then(response => response.json())
    .then(response => {
        dogs = response
        getRandomDog();
    })
};

let getRandomDog = () => {
    let dog = dogs[Math.floor(Math.random() * dogs.length)];
    dogSpace.innerHTML = `<img src="${dog.img}"><br><p>${dog.name}</p>`;
    dogAge.innerHTML = `<p>${dog.age}</p>`;
}

btn.addEventListener('click', () => {
    getDogs();
});