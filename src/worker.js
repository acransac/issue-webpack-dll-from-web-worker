import { someFunction }  from './dll.js';

(() => {
  postMessage(someFunction("worker"));
})();
