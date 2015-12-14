# Contributing
_Requires node and npm._

 1. Fork this repository on GitHub.
 2. Clone your fork locally and `cd` into it.
 3. Fetch dependecies with `npm install`.
 4. Create a new branch such as `fix-issue-1337` or `feature-unicorns`.
 5. Commit changes and push.
 6. Create a pull request on GitHub.

Take a look at issues labeled with [_help wanted_](https://github.com/jamen/campfire/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) if you don't know where to start.  If there are none then feel free to poke around in the issue list.

## Pull Request Guidelines
Some guidelines we hope you follow when contributing code to campfire.
 - Present tense commits. ("Add foo" not "Added foo")
 - Imperative style commits. ("Move with bar" instead of "Moves with bar")
 - Run tests and jshint your code.

### Fixing a issue
 - [Open a issue](https://github.com/jamen/campfire/issues) on GitHub if it doesn't exist already.
 - Mention the issue number in a commit message or a pull request message (preferably the title).

### Adding a new feature
 - Open a issue to propose your idea before you add it, so you don't waste your time if we don't accept it.
 - Create a new test for the feature you added.

## Issues Guidelines
Some guidelines we hope you follow when creating a issue for campfire.
 - Search open and closed issues first.
 - If you've hit a problem in a closed issue, create a new one and reference the old one.
 - State your operating system and version of campfire.

## Styling
campfire uses [RSCSS](http://rscss.io) and [Stylus](http://stylus-lang.com) for it's layout.  Each component is a seperate file, but their elements and variants are also included in the same file.  All defualt styles go in the `style/` directory of the repo.  
