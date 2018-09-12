package demo

import grails.plugin.springsecurity.annotation.Secured
import grails.rest.RestfulController

//@Secured(['ROLE_DRIVER'])
@Secured(['ROLE_DRIVER'])
class VehicleController extends RestfulController {
    static responseFormats = ['json']//, 'xml']

    def vehicleService

    VehicleController() {
        super(Vehicle)
    }

    def search() {
     //   println "- search triggered  ${params}"
        def jsonResponse = vehicleService.search(params)
        println "-=-- json response =  "+jsonResponse
        render jsonResponse
    }

}
