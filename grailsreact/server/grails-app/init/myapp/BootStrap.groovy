package myapp

import com.mypackage.Role
import com.mypackage.User

class BootStrap {

    def init = { servletContext ->

        if(!Role.list()) {
            log.info "Creating user roles..."

            def role = new Role(name: "Admin").save()

            [[username: "admin",firstName:'Admin', lastName:'admin',  role: role],
             [username: "suea",firstName:'Sue', lastName:'Adams',  role: role],
             [username: "jalex",firstName:'Justin', lastName:'Alexander',  role: role],].each { props ->
                def user = new User()
                user.properties = props
                user.save(flush: true)
            }



        }
    }
    def destroy = {
    }
}
