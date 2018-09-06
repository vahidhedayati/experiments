package todo

import grails.plugin.springsecurity.annotation.Secured
import grails.rest.*

@Secured(['ROLE_ADMIN'])
class TodoController extends RestfulController {

    static responseFormats = ['json', 'xml']

    TodoController() {
        super(Todo)
    }

    def pending() {
        respond Todo.findAllByDone(false), view: 'index'
    }
}
