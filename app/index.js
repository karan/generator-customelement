'use strict';

var banner = require('../banner');
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');


var CustomelementGenerator = yeoman.generators.Base.extend({
  init: function () {
    if (!this.options['skip-install-message']) {
        this.log(banner);
    }
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the Custom Element generator!'));

    var prompts = [{
      name: 'githubUsername',
      message: 'What is your Github username?',
      default: ''
    }, {
      name: 'elementName',
      message: 'What would you like to call your element? (format: x-element, or element-name)',
      default: 'my-element'
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
    this.copy('_bowerrc', this.elementName + '/.bowerrc');
    this.copy('_gitignore', this.elementName + '/.gitignore');
    this.copy('_seed-element.css', this.elementName + '/' + this.elementName + '.css');
    this.copy('_index.html', this.elementName + '/index.html');

    this.template('_bower.json', this.elementName + '/bower.json');
    this.template('_demo.html', this.elementName + '/demo.html');
    this.template('_README.md', this.elementName + '/README.md');
    this.template('_seed-element.html', this.elementName + '/' + this.elementName + '.html');
    this.template('_update_docs.sh', this.elementName + '/update_docs.sh');

    this.copy('tests/runner.html', this.elementName + '/tests/runner.html');
    this.template('tests/seed-element-basic.html', this.elementName + '/tests/' + this.elementName + '-basic.html');
    this.template('tests/tests.html', this.elementName + '/tests/tests.html');
    this.directory('tests/tools', this.elementName + '/tests/tools');
  },

  installDependencies: function() {
    var done = this.async();
    var elementDir = process.cwd() + '/' + this.elementName;
    process.chdir(elementDir);
    this.bowerInstall();
  },

  // Add custom message to say goodbye
});

module.exports = CustomelementGenerator;
