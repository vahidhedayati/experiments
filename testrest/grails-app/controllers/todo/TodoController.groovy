package todo


import grails.rest.*
import grails.converters.*

class TodoController extends RestfulController {
    static responseFormats = ['json', 'xml']
    TodoController() {
        super(Todo)
    }

    def pending() {
        respond Todo.findAllByDone(false), view: 'index'
    }
    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond Todo.list(params), model:[TodoCount: Todo.count()]
    }
    def search() {

        render "TEST"
    }
}
