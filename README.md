#sl-angular-starter

#Overview
This is a static AngularJS front-end project template to help get a project up and running quickly.

#Usage
- clone this repo
- create a new target project
- copy the 'less' and 'www' directories into the 'client' directory of your target project
- add your own modules and libs
- if you're running a Mac you can test the setup by running:
```
python -m SimpleHTTPServer 8000
```
- you should see the following:
![screenshot](https://raw.githubusercontent.com/strongloop-community/sl-angular-starter/master/www/images/screenshot.png)

#Composition:
- index.html
- style.css
- bootstrap
- starter modules
- angular files:
-- angular (v1.2.10)
-- angular-animate
-- angular-cookies
-- angular-resource
-- angular-sanitize
-- angular-spinner
-- angular-touch
-- angular-ui-router
-- ui-bootstrap
-- ui-utils
- js helper files
-- lodash.js - utility belt
-- spin.js - activity indicator
-- moment.js - date/time helper methods

##starter modules:
###Main
The 'root' module of the app ($rootScope)
- ui-router 'state' configuration lives here

###Common
A place to put shared directives and services
- OOTB contains helper directives for: 'submit on enter key', 'focus on select', activity indicator
- this is where the LoopBack api factory code generally goes

###HelloWorld
A sample 'feature' module featuring an angular directive pointing to a HTML template file

#Notes
- run 'git pull' on this repo before starting a new front end to get the latest version
- this can obviously be optimized and automated but serves the purpose for getting something up and running quick and dirty
