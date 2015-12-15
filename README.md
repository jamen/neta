Campfire
========
Campfire is a decentralized chatting client.  It's highly configurable and based on top of new technologies like [Electron](http://electron.atom.io/), ES2015 (using [Babel](https://babeljs.io/)), [Stylus](http://stylus-lang.com/), [RSCSS](http://rscss.io/), and [Vue](http://vuejs.org/).  It also supports themes and plugins to bring the best experience to it's users.

## Documentation
Campfire is documented with GitHub's [Wiki pages](https://github.com/jamen/campfire/wiki)

## Building
Building requires [NodeJS](http://nodejs.org) and [npm](http://npmjs.com/) to use [electron-packager](https://github.com/maxogden/electron-packager).

Campfire has 3 targets for each supported OS: `linux`, `macos`, and `windows`.  You can use them accordingly with `make` to package the source.  By default, packages output to `dist/`.

```
$ make linux
$ make macos
$ make windows
```

Alternatively you can use the `all` target (or simple run `make`) to build all 3 sources.

## Installation
There are currently no installers yet, like `.pkg` and `.deb`, so you have to build from the source and install it yourself.

However, you can use the `install` target to install on Linux very easily:
```
# make install
```
(Needs correct privileges, run with `sudo`)
