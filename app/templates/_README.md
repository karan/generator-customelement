\<<%= elementName %>\>
================

The meme element for modern web

| [Documentation](http://<%= githubUsername %>.github.io/<%= elementName %>/) | [Live demo](http://<%= githubUsername %>.github.io/<%= elementName %>/components/<%= elementName %>/demo.html) |
| --- | --- |

## Install

### Method 1 - bower

    bower install <%= elementName %>

### Method 2 - Polymer

1. Import Web Components' polyfill:

  ```xml
  <script src="//cdnjs.cloudflare.com/ajax/libs/polymer/0.2.4/platform.js"></script>
  ```

2. Import Custom Element:

  ```xml
  <link rel="import" href="<%= elementName %>.html">
  ```

3. Start using it!

  ```xml
  <<%= elementName %>></<%= elementName %>>
  ```
