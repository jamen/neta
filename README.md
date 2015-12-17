Neta
========
Neta is a decentralized chatting client.  It's highly configurable and based on top of new technologies like [Electron](http://electron.atom.io/), ES2015 (using [Babel](https://babeljs.io/)), [Stylus](http://stylus-lang.com/), [RSCSS](http://rscss.io/), and [Vue](http://vuejs.org/).  It also supports themes and plugins to bring the best experience to it's users.

## Installing
Neta is built per release and can be found on [the "Releases" tab](https://github.com/jamen/neta/releases).

Alternatively, Neta can be packaged from the source using the `makefile`; however, note that this method requires [NodeJS](http://nodejs.org/) and [npm](http://npmjs.com/) in order to use [electron-packager](https://github.com/maxogden/electron-packager).

Example:
```
$ make PLATFORM=darwin ARCH=ia32
```

#### Makefile options
Options are specified after the command in a `KEY=VALUE` format.  All options have completely uppercase names.

 - `PLATFORM`: Platform to package for. (Default `linux`)
 - `ARCH`: Architecture to package for. (Default `x64`)
 - `DIST`: Folder to output app(s) in. (Default `./dist`)
 - `VERSION`: The version of Electron to use.
 - `NAME`: The name for the binary output (Default `neta`)

## Contributing
Please see the [CONTRIBUTING.md](CONTRIBUTING.md) file for information on guidelines towards helping Neta.

## License
Neta is completely free-to-use and licensed under the MIT License.  See [LICENSE](LICENSE) for more information.
