# Summary
This is an example of an issue I face with Webpack where a dll (built with DllPlugin) does not seem to be usable from a web worker (where it is linked with DllReferencePlugin). The export of the dll is properly available from the main thread.
To reproduce the issue:

```shell
    $ git clone https://github.com/acransac/issue-webpack-dll-from-web-worker
    $ cd issue-webpack-dll-from-web-worker
    $ npm install
    $ npm run build-dll
    $ npm run test
```

The last command starts Webpack dev server. Navigate to the page at http://localhost:8080, open the dev tools and check the log in the console tab. It should show:

```
    message from main thread 

    Uncaught ReferenceError: dll is not defined
        at Object.dll-reference dll (external "dll":1)
        at __webpack_require__ (bootstrap:19)
        at Object../src/dll.js (dll.js" from dll-reference dll:1)
        at __webpack_require__ (bootstrap:19)
        at src_worker_js.js:72
        at worker.js:5
        at worker.js:5
```

while what is expected is:

```
    message from main thread 

    message from worker
```

# Solutions Or Workarounds
## Two Dlls, One For Worker With Library Type "self"
Build two dlls: one for the main thread, one for the worker. The latter is configured with a library type "self". In this case, the worker is also built separately (not using Webpack's built-in worker loader) to allow targeting the worker dll's manifest in DllReferencePlugin.

This setup can be found in the branch "library-type-self".

This solution does not work.
