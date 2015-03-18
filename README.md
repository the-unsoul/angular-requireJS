# angular-requireJS
Sample page: http://the-unsoul.github.io/angular-requireJS/#/home

note: pages which using JSON API won't work with github-pages. The sample only for demonstrate loading speed and on-demand loading (dependencies injection)

## A seed project for angular and requireJS using AngularAMD
##### Author: UnS
##### Author's email: duylinh20032003@yahoo.com
##### Company: Elinext
##### State: (Alpha) 


# Installation:
Install application dependencies
```
npm install
```
#### end to end (e2e) protractor settup
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
access sample project seed with [http://localhost:3030/](http://localhost:3030/)

# Development with coffee script (on draft, might be removed)
```
grunt watchjs
```

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

