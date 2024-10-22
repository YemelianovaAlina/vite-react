import { initializeCounter } from './counter.js';
import('./counter').then(({ initializeCounter }) => {
  initializeCounter();
});

console.log('Hello from index.js');
