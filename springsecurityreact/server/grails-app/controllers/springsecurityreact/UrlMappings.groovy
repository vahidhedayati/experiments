package springsecurityreact

class UrlMappings {

    static mappings = {
        delete "/$controller/$id(.$format)?"(action:"delete")
        get "/$controller(.$format)?"(action:"index")
        get "/$controller/$id(.$format)?"(action:"show")
        post "/$controller(.$format)?"(action:"save")
        put "/$controller/$id(.$format)?"(action:"update")
        patch "/$controller/$id(.$format)?"(action:"patch")

        "/"(controller: 'application', action:'index')

        //Additional mapping
        "/api/vehicle"(resources:'vehicle')
        "/api/searchVehicle"(controller:'vehicle', action: 'search')

        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}
