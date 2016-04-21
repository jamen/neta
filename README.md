Neta
====
> A modern, decentralized, and customizable chatting client.

Neta is a modern, decentralized, and customizable chatting client.  It uses a developer-friendly ecosystem to enable use of plugin and theme APIs, so users can build a more personal chatting client, but not at the expense of security, usability, or price.

## Installation
You cannot currently install `neta` from npm, dep files, etc...  You wont be able to [until v1][v1-issues].  Until then, clone this repository and see "Usage" as well as "Building & Packaging" below.

## Building & Packaging
Building the source files (outputs to `out`):
```shell
$ npm run build
```

Building the source and packaging (outputs to `dist`):
```shell
$ npm run package
```

When packaging from `gulp`, you can use specific systems:
 - `package-win32`: Windows
 - `package-linux`: linux
 - `package-mac`: Mac OS
 - `package`: Everything

## Usage
Build Neta and start with Electron:
```shell
$ npm start
```

Watch file changes and restart Neta as needed:
```shell
$ npm run watch
```
(Close the Electron process and gulp will reopen it when the source changes)

## Docs & Support
 - [GitHub Wiki][wiki]
 - [Repo Issues][issues]
 - [Contact](#Credits)

## Credits
|![Jamen Marz][jamen-image]|
|:--------:|
| [@jamen] |

## License
[GPL v3](LICENSE) &copy; Jamen Marzonie

<!-- All http links must be "tagged" -->
 [@jamen]: https://github.com/jamen
 [jamen-image]: https://avatars2.githubusercontent.com/u/6251703?v=3&s=125
 [wiki]: https://github.com/jamen/neta/wiki
 [issues]: https://github.com/jamen/neta/issues
 [v1-issues]: https://github.com/jamen/neta/milestones/v1
