# generator-customelement

Scaffolding a Polymer custom element the right way - based on official [Creating reusable elements](http://www.polymer-project.org/docs/start/reusableelements.html) guide.

![](http://i.imgur.com/zYCmQ14.png)

To install generator-customelement from npm, run:

```bash
$ npm install -g generator-customelement
```

Finally, initiate the generator:

```bash
$ yo customelement
```

When ready to deploy to Github, push the `master` branch, then run the `update_docs.sh` script.

### Workflow

```bash
$ mkdir x-meme && cd $_   // make project directory and cd into it
$ yo customelement        // scaffold the element
```

This gives the following directory structure:

![](http://i.imgur.com/OouxRH7.png)

The outer `x-meme` directory is where you should start your development server, and then browse to `localhost:8000/x-meme` in your web browser.

## License

MIT
