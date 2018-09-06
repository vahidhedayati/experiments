package grails3angularsecurity

import grails.testing.gorm.DomainUnitTest
import spock.lang.Specification
import todo.Todo

class TodoSpec extends Specification implements DomainUnitTest<Todo> {

    def setup() {
    }

    def cleanup() {
    }

    void "test something"() {
        expect:"fix me"
        true == false
    }
}
