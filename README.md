# Bantam!

Created and maintained by the team at Hatchd Digital, Perth
(see static/humans.txt). We use:

- [Grunt](http://gruntjs.com/)
- [SASS](http://sass-lang.com/)
- [jQuery](http://jquery.com/)
- [RequireJS](http://requirejs.org/)

## Purpose

Bantam is a test bed for making sure that all of the hatchd components
work together coherantly and interoperate cleanly.

## Requirements

For development and to get the most out of this boilerplate we recommend
you install Node & npm, Grunt and Bower. This allows you to manage and
build your code with simple command-line commands.

```sh
brew install node
npm install -g grunt-cli bower
```

This will install `node` with `npm` + `grunt` and `bower` commenads globally,
ready for use with this project. For more information see the
[node](http://nodejs.org/), [npm](http://npmjs.com.au),
[grunt](http://gruntjs.com/) and [bower](bower.io) projects.

## Usage

We use Grunt to manage our builds. To start pull the repo then:

```sh
cd /path/to/bantam
npm install && bower install
grunt development
```

This will start a local server on http://localhost:3000 with a basic set
of placeholder content and widget tests.
