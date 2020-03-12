'use strict';
var Generator = require('yeoman-generator');
var _ = require('lodash');
var chalk = require('chalk');
// Var fs = require('fs');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    // Get more info with `--help`.
    this.argument('name', {
      required: true,
      type: String,
      desc: 'The component javascript file name.'
    });
  }

  initializing() {
    // Create an object to contain all our name variations.
    this.behaviorName = {};

    // Preserve the raw layout name.
    this.behaviorName.raw = this.options.name;

    // Make sure it's the dashed version fo the component name.
    this.behaviorName.dashed = _.kebabCase(this.options.name);

    // Create a dashed version of the layout name.
    this.behaviorName.camel = _.camelCase(this.options.name);

    this.log('Creating component JavaScript ' + this.behaviorName.dashed + '.es6');
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('_component-js.es6'),
      this.destinationPath('components/' + this.behaviorName.dashed + '/' + this.behaviorName.dashed + '.es6'),
      {
        camel: this.behaviorName.camel,
        dashed: this.behaviorName.dashed
      }
    );
  }

  install() {
    this.log('=========================================');
    this.log('Created a new component JavaScript file named ' + chalk.red(this.options.name) + '.');
    this.log('-----------------------------------------');
  }
};
