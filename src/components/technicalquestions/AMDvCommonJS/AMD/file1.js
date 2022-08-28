/*
    AMD starts with the define method which accepts two parameters
    an array of dependencies you require and a function
*/
//array of dependencies could be like axios, react-router, react-virualized, ...etc

define([], function(){

    var methods = {}

    methods.sayHi = function(){
        console.log("hi")
    }

    methods.showAlert = function(arg){
        alert("hi from loader file", arg)
    }

    return methods
})