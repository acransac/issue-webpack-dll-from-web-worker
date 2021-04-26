import { someFunction } from './dll.js';

(() => {
  console.log(someFunction("main thread"));

  const worker = new Worker(new URL("./worker.js", import.meta.url));

  worker.onmessage = ({data}) => console.log(data);
})();
