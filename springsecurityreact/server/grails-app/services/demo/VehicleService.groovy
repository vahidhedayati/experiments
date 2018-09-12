package demo

import grails.converters.JSON

class VehicleService {

    def search(params) {

        //println "Service params inside service is ${params}"
        return (params as JSON)
    }

}