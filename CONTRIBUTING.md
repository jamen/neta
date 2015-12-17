# Issues
We hope you do the following before creating an issue:
 1. Search opened and closed issues first.
 2. State your operating system.
 3. State the version of Neta you're using when the issue happened.
 4. Post error stack traces (if any).

# Contributing
Neta encourages and welcomes contributing as long as you follow our guidelines as best you can.

## Prerequisites (What you should know)
Neta is built on many technologies, some of which you may need to know when wanting to contribute.  We want Neta to be well-made, so we are pretty strict about pull requests!

Here is a list of some widespread things in Campefire (in no particular order):
 - [ES2015](https://babeljs.io/docs/learn-es2015/) (JavaScript)
 - [Electron](http://electron.atom.io/)
 - [NodeJS](http://nodejs.org/)
 - [Stylus](http://stylus-lang.com/)
 - [Vue](http://vuejs.org/)

## Guidelines
Our guidelines are _config-form_, we use [eslint](.eslintrc.json) to keep a consistent style throughout the code, to keep it neat.  Remember to always lint your code when making a contribution!

Neta has made this easy for you by setting up a npm-script, `"lint"`:
```
$ npm run lint
```

We recommend you use a plugin for linting inside of your editor / IDE.  For instance, [linter-eslint](https://atom.io/packages/linter-eslint) when using [Atom](http://atom.io/) makes life a lot easier.

## Testing
`electron-prebuild` is included as a developer depdendency.  It's bound to `"test"` in the npm scripts, so you can test it with:
```
$ npm test
```

## What do I do?
Take a look at issues labeled with [`help wanted`](https://github.com/jamen/neta/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) if you don't know where to start.  If there are none then feel free to poke around in the rest of the issues.

## Licensing
Neta is licensed under MIT and any contributions made towards Neta are (must be) licensed under MIT as well.
