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

### File System

- `import fs from 'fs'`

- Buffer is streaming the file when you something like `readFile`

- Don't use `process.exit(1)` as you won't find out the type of error

## Packages

- Search, install and build different NPM packages

- `./` for internal modules only

- Global install modules are accessible outside of the app

- npx is like running off one global install; tools you don't want to install but need part of the functionality out of one one them for something else (like scaffolding or deployment tool - don't want to keep it around for too long)

- Don't use NPM and yarn in the same app; different lock files, depending on which you used to do an install

## CLIs

- #! /usr/bin/env node treated as a comment but used for CLIs

- Global commands and CLIs get collected in the bin folder

## Servers

- express: framework for building servers

- body-parser: middleware that parses incoming requests

- morgan: middleware for loggin incoming requests
