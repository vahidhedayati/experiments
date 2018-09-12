package todo


import grails.rest.*

@Resource(uri = '/todos')
class Todo {

    String description
    boolean done

}