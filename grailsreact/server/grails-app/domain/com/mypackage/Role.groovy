package com.mypackage

import grails.rest.Resource


@Resource(uri='/api/role', formats=['json'])
class Role {

    String name

    static belongsTo = [user:User]
    

}