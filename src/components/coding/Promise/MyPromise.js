const STATE = {
    PENDING: "PENDING",
    REJECTED: "REJECTED",
    FULFILLED: "FULFILLED"
}

class MyPromise{
    #state = STATE.PENDING
    #value
    #thenCbs = []
    #catchCbs = []
    constructor(cb){
        console.log('constructor called')
        let resolve = this.#onSuccess.bind(this)
        let reject = this.#onFailure.bind(this)
        try{
            cb(resolve, reject);
        } catch (e){
            this.onFailure(e)
        }
    }

    #runCallbacks(){
        console.log("running callbacks")
        if(this.#state === STATE.FULFILLED){
            this.#thenCbs.forEach((cb) => {
                cb(this.#value)
            })

            this.#thenCbs = []
        }

        if(this.#state === STATE.REJECTED){
            this.#catchCbs.forEach((cb) => {
                cb(this.#value)
            })

            this.#catchCbs = []
        }
    }
     
    #onSuccess(data){
        console.log("handle success")
        if(this.#state !== STATE.PENDING){
            return;
        }
        this.#value = data
        this.#state = STATE.FULFILLED
        this.#runCallbacks()
    }

    #onFailure(data){
        console.log("handle failure")
        if(this.#state !== STATE.PENDING){
            return;
        }
        this.#value = data
        this.#state = STATE.REJECTED
        this.#runCallbacks()
    }

    then(thenCb, catchCb){
        return new MyPromise((resolve, reject) => {
            this.#thenCbs.push((result) => {
                if(thenCb == null){
                    resolve(result)
                    return
                }

                try{
                    resolve(thenCb(result))
                } catch(err){
                    reject(err)
                }
            })

            this.#catchCbs.push((result) => {
                if(catchCb == null){
                    reject(result)
                    return
                }

                try{
                    resolve(catchCb(result))
                } catch(err){
                    reject(err)
                }
            })
            this.#runCallbacks()
        })
    }

    catch(cb){
        this.then(null, cb)
    }

    finally(cb){

    }

}

module.exports = MyPromise

/*
    Make note line 64 this keyword is not referring to the new object created,
    it still refers to the object initially created from the demo js file

    Make note the new promise we create at line 64 is an arrow function and we call the arrow function 
    in the constructor. For arrow functions this will inherit this from the enclosing scope - the outer class at the time

    The arrow function acts as a closure, when we call the callback we look for this.thenCbs in our current scope 
    As you can see this.ThenCbs is nowhere to be found so we look for this.thencbs in the outer scope.
    The outer scope of the function is the then method and has this bounded to promise2 in demojs which has this.thencbs so we push to the outer scope

    (resolve, reject) => {
            this.#thenCbs.push((result) => {
                if(thenCb == null){
                    resolve(result)
                    return
                }

                try{
                    resolve(thenCb(result))
                } catch(err){
                    reject(err)
                }
            })

            this.#catchCbs.push((result) => {
                if(catchCb == null){
                    reject(result)
                    return
                }

                try{
                    resolve(catchCb(result))
                } catch(err){
                    reject(err)
                }
            })
            this.#runCallbacks()
    }

    thenCb and catchCb are also closures in the then method
*/