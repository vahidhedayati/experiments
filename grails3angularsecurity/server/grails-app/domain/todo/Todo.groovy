package todo


import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class Todo {
    String description
    boolean done
}