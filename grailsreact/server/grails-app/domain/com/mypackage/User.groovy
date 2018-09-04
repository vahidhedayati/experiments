package com.mypackage

import grails.rest.Resource

@Resource(uri='/api/user', formats=['json'])
class User {

    String username
    String firstName
    String lastName


    static hasMany=[roles:Role]

}