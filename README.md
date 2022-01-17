# Introduction to Node.js, v2 (Front-End Masters)

## Intro

- NVM best way to deal with different node versions (ensure its installed via nvm -v)

- REPL is like a console and not used to build/run apps

- Create a directory, cd into it and type node and you have a REPL

- To run a file: node <file-name>

- Anything DOM related within the file will not work within the REPL

## Basic Components

### Globals

- global: object with things to do with event loops(?) / like window

- dirname and filename (important for build tools like webpack)

- process: an object with everything about the environment is stored

### Modules

- Reusable chunk of code

- Encapsulated and then shared between JavaScript bits, so there are no leaks

- CommonJS: exports, require, module etc.

- To expose it, with CommonJS you can do something like `module.export`

```
// app.js
const action = require('./index)

// index.js
const action = () => {
  console.log('hello')
}

module.exports = action

// node app.js <- like running a dependency tree
```

- CommonJS is old, better to use ES modules (introduced at version 10?)

- ES modules/ECMA modules: can you use the extensions .mjs or go into package.json and be able to use .js extension
