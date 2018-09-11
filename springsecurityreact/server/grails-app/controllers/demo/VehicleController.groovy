package demo

import grails.plugin.springsecurity.annotation.Secured
import grails.rest.*
import grails.converters.*
//@Secured(['ROLE_DRIVER'])
@Secured(['permitAll'])
class VehicleController extends RestfulController {
    static responseFormats = ['json']//, 'xml']

    def vehicleService

    VehicleController() {
        super(Vehicle)
    }

    def search() {
        log.error "search triggered"
        System.out.println('search triggered')
        println "- search triggered  ${params}"

        def a = vehicleService.search(params)


        respond Vehicle.get(1), view:'vehicle'
    }


}
