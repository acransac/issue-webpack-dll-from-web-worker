import { someFunction } from './dll.js';

(() => {
  console.log(someFunction("main thread"));

  const worker = new Worker("./runner.js");

  worker.onmessage = ({data}) => console.log(data);
})();
