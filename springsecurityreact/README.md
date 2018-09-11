Test Grails react
---

This is straight out of the box grails 3.3.8 application. To generate a react web application simply issue:



`grails create-app springsecurityreact --profile=react`


Then the rest is from http://guides.grails.org/react-spring-security/guide/index.html

This will create the app and outline what needs to be done to start either or all in one go.

```
| Application created at /home/xxxxx/work-projects/grailsreact
| This profile provides a client/server multi-project build structure. The server Grails app is using the rest-api profile with CORS enabled. It can be started using 'grails run-app' or using the Gradle wrapper:

  ./gradlew server:bootRun

The React client app has been built using the create-react-app CLI. It can be started via 'npm start' (in which case you will need to run 'npm install' to install npm dependencies) or using the Gradle wrapper (which will install npm dependencies automatically if needed):

  ./gradlew client:start

The client app's build.gradle defines other tasks to test and build the app using react-scripts. Please see create-react-app's documentation for more information: https://github.com/facebookincubator/create-react-app

To run both client & server projects in parallel, use the Gradle wrapper:

 ./gradlew bootRun -parallel

```


The base folder provides a `settings.gradle`, import this file into intelij and the project will open up both modules.




To login use:
username: Susan  password: password1

 These details can be found in Bootstrap.groovy in the  init folder of the server folder.


----

Additional Stuff

server$ grails create-restful-controller demo.Vehicle
| Created grails-app/controllers/demo/VehicleController.groovy

