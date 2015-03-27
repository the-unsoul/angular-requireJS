# angular-requireJS
Sample page: http://the-unsoul.github.io/angular-requireJS/#/home

note: pages which using JSON API won't work with github-pages. The sample only for demonstrate loading speed and on-demand loading (dependencies injection)

## A seed project for angular and requireJS using AngularAMD
##### Author: UnS
##### Author's email: duylinh20032003@yahoo.com
##### Company: Elinext
##### State: (Offical) 


# Installation:
Install application dependencies:
 - [nodeJS](https://nodejs.org/download/) and npm
 - [gruntJS](http://gruntjs.com/)
 - [WebDriver Selenium](http://docs.seleniumhq.org/download/) (the requirement below are for e2e test only)
 - [JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

cd to project directory run:
```
npm install
```

#### End to end (e2e) protractor settup

require [Selenium Server] running along with JDK. 
Check out [server-setup](http://angular.github.io/protractor/#/server-setup)
```
npm install -g protractor
```

# Start up localhost  and json

Start node server then start fake API for the project
```
npm start
npm run json
```
access sample project seed at development state with [http://localhost:3030/](http://localhost:3030/)

# Testing

running both unit testing with e2e testing
```
webdriver-manager start
grunt test
```

### unit testing with karma + Jasmine
```
grunt unit
```

### e2e testing with protractor + Jasmine
```
grunt e2e
````

# Deploy 
```
grunt build
```
The deployed website will be found at public/ folder.
To access the deployed website with server environment use
```
npm run public
```
Then access it through the link [http://localhost:3031/](http://localhost:3031/)