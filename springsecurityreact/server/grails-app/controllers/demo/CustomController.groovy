package demo

import grails.plugin.springsecurity.annotation.Secured

@Secured(['permitAll'])
class CustomController {

    def vehicleService

    def search() {
        log.error "search triggered"
        System.out.println('search triggered')
        println "- search triggered  ${params}"

        def a = vehicleService.search(params)


        respond a
    }
}