# power-turtle

Interactive turtle power in your browser.

http://timothypratley.github.io/power-turtle

http://timothypratley.blogspot.com

## Overview

Conveniences for using clojure-turtle in ClojureScript.

## Todo

* Allow preferred language in route
* Toggle languages

## Setup

To get an interactive development environment run:

    lein dev

and open your browser at [localhost:3449](http://localhost:3449/).
This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

To create a production build run:

    lein min

And open your browser in `resources/public/index.html`. You will not
get live reloading, nor a REPL. 

## License

Copyright © 2016 Timothy Pratley

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
