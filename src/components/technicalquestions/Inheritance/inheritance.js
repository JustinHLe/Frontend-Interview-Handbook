class User {
    //constructor function is invoked when class is instantiated
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }


    register(){
        console.log(this.username+' is now registered')
    }

    /*
        if a method or property is static we don't have to instantiate a new object to use it
        call directly from class
        if we try to call a static method or access a static property we will get
        error for former and undefined for latter
    */
    static countUsers(){
        console.log('There are 50 users')
    }
}

// let bob = new User('bob', 'bob@gmail.com', "password")
// bob.register(); 

// User.countUsers()

class Member extends User{
    constructor(username, email, password, memberPackage){
        super(username, email, password);
        /*
            the super keyword calls the base claass constructor
        */
        this.package = memberPackage
    }

    getPackage(){
        console.log(this.username + " is a subscribed to the " + this.package )
    }
}

const mike = new Member("mike", "mike@google.com", "password", "nfl")
console.log(mike.register())