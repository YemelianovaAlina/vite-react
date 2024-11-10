import { initializeCounter } from './counter.js';
// import image from './favicon-16x16.png';
import image from './steve-after-a-workshop.jpg?h=400&format=webp';
import { name } from './characters/gandorf.json';

console.log(name);

console.log(import.meta.env);

console.log(image);

const img = document.createElement('img');
img.src = image;

document.querySelector('#content').appendChild(img);
import('./counter').then(({ initializeCounter }) => {
  initializeCounter();
});

console.log('Hello from index.js');
