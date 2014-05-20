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
      message: 'What would you like to call your element?'
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
    this.copy('bowerrc', '.bowerrc');
    this.copy('_seed-emelent.css', 'seed-emelent.css');
    this.copy('_index.html', 'index.html');

    this.template('_bower.json', 'bower.json');
    this.template('_demo.html', 'demo.html');
    this.template('_README.md', 'README.md');
    this.template('_seed-emelent.html', 'seed-emelent.html');
  }
});

module.exports = CustomelementGenerator;
