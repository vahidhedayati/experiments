
```
grails create-app testrest --profile rest-api --features hibernate5,json-views
grails create-domain-resource todo.Todo
grails create-restful-controller todo.Todo
```

Once all these files generated
> a few objects added to Todo domain class
> grails-app/init/BootStrap a line added to insert some entries

Application started
`testrest$ ./gradlew bootRun`


The final changes made was to UrlMappings.groovy in controllers folder

```
    "/todos"(resources:'todo')
    "/pendingTodos"(controller:'todo', action: 'pending')
    "/searchTodos"(controller:'todo', action: 'search')
```

These now map the additional actions required to be queried via rest:

Another console used to run curl tests:

-----------

`curl -H "Accept:application/json"  http://localhost:8080/todos/1`

Produces:

 ```
{"id":1,"done":false,"description":"Todo 1"}
```

-----------

`curl -H "Accept:application/json"  http://localhost:8080/searchTodos`

Produces:

```
TEST
```

-----------

`curl -H "Accept:application/json"  http://localhost:8080/pendingTodos`

Produces:

```
[
    {"id":1,"done":false,"description":"Todo 1"},{"id":2,"done":false,"description":"Todo 2"},
    {"id":3,"done":false,"description":"Todo 3"},{"id":4,"done":false,"description":"Todo 4"},
    {"id":5,"done":false,"description":"Todo 5"}
]
```
