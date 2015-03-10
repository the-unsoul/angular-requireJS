# angular-requireJS
##testing with angular and requireJS


# Instal:
Install application dependencies
```
npm install
```
#### end to end (e2e) protractor settup
require [Selenium Server] running along with JDK [server-setup](http://angular.github.io/protractor/#/server-setup)
```
npm install -g protractor
```

# Start
Start node server then start fake API for the project
```
npm start
npm run json
```

# Development
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

