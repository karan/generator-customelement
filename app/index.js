'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var CustomelementGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous Customelement generator!'));

    var prompts = [{
      name: 'githubUsername',
      message: 'What is your Github username?',
      default: ''
    }, {
      name: 'elementName',
      message: 'What would you like to call your element? (format: x-element, or element-name)'
    }, {
      name: 'elementDescription',
      message: 'What does your element do?'
    }];

    this.prompt(prompts, function (props) {
      this.elementName = props.elementName;
      this.githubUsername = props.githubUsername;
      this.elementDescription = props.elementDescription;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir(this.elementName);
  },

  projectfiles: function () {
    this.copy('_bowerrc', '.bowerrc');
    this.copy('_seed-element.css', this.elementName + '/seed-element.css');
    this.copy('_index.html', this.elementName + '/index.html');

    this.template('_bower.json', this.elementName + '/bower.json');
    this.template('_demo.html', this.elementName + '/demo.html');
    this.template('_README.md', this.elementName + '/README.md');
    this.template('_seed-element.html', this.elementName + '/seed-element.html');
  }
});

module.exports = CustomelementGenerator;
