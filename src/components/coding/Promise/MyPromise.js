const STATE = {
    PENDING: "PENDING",
    REJECTED: "REJECTED",
    FULFILLED: "FULFILLED"
}

class MyPromise{
    constructor(cb){
        console.log('constructor called')
        this._state = STATE.PENDING
        this._value
        this._thenCbs = []
        this._catchCbs = []
        let resolve = this._onSuccess.bind(this)
        let reject = this._onFailure.bind(this)
        try{
            cb(resolve, reject);
        } catch (e){
            this.onFailure(e)
        }
    }

    _runCallbacks(){
        console.log("running callbacks")
        if(this._state === STATE.FULFILLED){
            this._thenCbs.forEach((cb) => {
                cb(this._value)
            })

            this._thenCbs = []
        }

        if(this._state === STATE.REJECTED){
            this._catchCbs.forEach((cb) => {
                cb(this._value)
            })

            this._catchCbs = []
        }
    }
     
    _onSuccess(data){
        queueMicrotask(() => {
            console.log("handle success")
            if(this._state !== STATE.PENDING){
                return;
            }
            if(data instanceof MyPromise){
                data.then(this._onSuccess, this._onFailure)
                return;
            }
            this._value = data
            this._state = STATE.FULFILLED
            this._runCallbacks()
        })
    }

    _onFailure(data){
        queueMicrotask(() => {
            console.log("handle failure")
            if(this._state !== STATE.PENDING){
                return;
            }
            if(data instanceof MyPromise){
                data.then(this._onSuccess, this._onFailure)
            }
            this._value = data
            this._state = STATE.REJECTED
            this._runCallbacks()
        })
    }

    then(thenCb, catchCb){
        const newPromise = new MyPromise((resolve, reject) => {
            this._thenCbs.push((result) => {
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

            this._catchCbs.push((result) => {
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
            this._runCallbacks()
        })
        return newPromise
    }

    catch(cb){
        return this.then(null, cb)
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
            this._thenCbs.push((result) => {
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

            this._catchCbs.push((result) => {
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
            this._runCallbacks()
    }

    thenCb and catchCb are also closures in the then method
*/