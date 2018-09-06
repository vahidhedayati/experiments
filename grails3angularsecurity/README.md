Created out of work shop: http://alvarosanchez.github.io/grails-angularjs-springsecurity-workshop/
-> https://www.youtube.com/watch?v=9BHLSZWZGIk

`grails create-app --profile angular -features hibernate5,json-views,security grails3angularsecurity`

```
| Warning Feature hibernate does not exist in the profile angular! Possible solutions: hibernate4, hibernate5
| Application created at /home/mx1/work-projects/experiments/grails3angularsecurity
| 
This profile has created a multi-project build where the "server" module contains the Grails application and the "client" module contains the Angular 5 application.

To start the Grails application separately, execute `./gradlew server:bootRun`
To start the client side application separately, execute `./gradlew client:bootRun`
To start both the client and server applications simultaneously, execute `./gradlew bootRun --parallel`

Run the front-end unit tests and grails unit tests simultaneously with `./gradlew test`
Run the front-end e2e and grails integration tests simultaneously with `./gradlew integrationTest`

No need to install Node, though we would recommend doing so if you'll be working with the front-end directly often!
```

`grails3angularsecurity/server$ grails create-domain-resource todo`

CONFIGURE SUCCESSFUL

Total time: 1.407 secs
| Created grails-app/domain/grails3angularsecurity/Todo.groovy
| Created src/test/groovy/grails3angularsecurity/TodoSpec.groovy


Whilst in server folder: 
`grails create-restful-controller todo.Todo`
| Created grails-app/controllers/todo/TodoController.groovy



Whilst in server folder: 
`grails ng-generate-all todo.Todo`

This complained and was missing a config value:
`grails.plugin.springsecurity.rest.token.storage.jwt.secret` added to `application.groovy` this then fixed and allowed the command to complete.

A bunch of  files has now been generated inside the client folder from running above:

`grails3angularsecurity/client/src/app/todo/todo-show.component.ts`


Now to launch the app 

cd ..
`./gradlew bootRun --parallel`

But the app will not start up and it complains about todo service ts file and map function the issue was reported here  https://github.com/angular/angular/issues/15548

`vi client/src/app/core/todo/todo.service.ts`

Line 7 added `import 'rxjs/add/operator/map';`

Retry : `./gradlew bootRun --parallel`


The app now starts up and is accessible via http://localhost:4200


Attempting to access the todo angular controller generates:

```
ERROR Error: Uncaught (in promise): Error: StaticInjectorError(AppModule)[TodoService -> Http]: 
  StaticInjectorError(Platform: core)[TodoService -> Http]: 
    NullInjectorError: No provider for Http!
Error: StaticInjectorError(AppModule)[TodoService -> Http]: 
  StaticInjectorError(Platform: core)[TodoService -> Http]: 
    NullInjectorError: No provider for Http!

```
