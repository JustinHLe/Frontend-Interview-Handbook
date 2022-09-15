const STATE = {
    PENDING: "pending",
    FULFILLED: "fulfilled",
    REJECTED: "rejected"
}

const checkPromise = (promise) => {
    return promise && typeof promise.then === 'function'
}
class FakePromise {
    constructor(cb){
        this._state = STATE.PENDING;
        this._value = null;
        this._reason = null;

        this._thenCbs = [];
        this._finallyCbs = [];

        if(typeof cb === "function"){
            setTimeout(() => {
                try{
                    cb(
                        this._onFulfilled.bind(this),
                        this._onRejected.bind(this)
                    )
                } catch(err){
                    this._onRejected(err)
                }
            })
        }
    }
    _onFulfilled(value){
        if(this._state !== STATE.PENDING){
            return
        }
        this._state = STATE.FULFILLED
        this._value = value
        this._propagateFulfilled()
    }

    _onRejected(reason){
        if(this._state !== STATE.PENDING){
            return
        }
        this._state = STATE.REJECTED
        this._reason = reason
        this._propagateRejected()
    }

    /*
        currently resolving fakePromise this refers to fakePromise
        we're still executing the cb() from fakePromise
        fakePromise CB completed

        called callback on the promise from FakePromise.resolve(5)
        this is pointing to valueOfPromise
    */
   /*
        PropagateFulfilled()
        Will loop through all subarrays in the current promises
        thenCb array
        if the thenCb/catchCb is a function we execute 
        Call the thenCb
            if the thenCb is not a promise
                call nextPromise with returned value from then
            else
            If thenCb returns a new promise
                call then on the new promise immediately
                and pass back the reject/resolve handlers from
                the current promise's next promise which will now
                resolve/reject with the data returned from the newly created
                promise
        else 
            call the nextPromise with the current fulfillment
   */
    _propagateFulfilled(){
        this._thenCbs.forEach(([newPromise, thenCb]) => {
            if(typeof thenCb === 'function'){
                // console.log("then is a func", thenCb(this._value))
                // console.log(this, newPromise)
                const valueOfPromise = thenCb(this._value)
                  if(checkPromise(valueOfPromise)){
                    // console.log("is a promise")
                     valueOfPromise.then(
                        value => newPromise._onFulfilled(value),
                        reason => newPromise._onRejected(reason)
                     )
                 } else {
                    newPromise._onFulfilled(valueOfPromise)
                 }
            } else {
                return newPromise._onFulfilled(this._value)
            }
        })

        this._finallyCbs.forEach(([newPromise, finallyCb]) => {
            finallyCb()
            newPromise._onFulfilled(this._value)
        })
        this._thenCbs = []
        this._finallyCbs = []
    }

    _propagateRejected(){
        this._thenCbs.forEach(([newPromise, _, catchCb]) => {
            if(typeof catchCb === 'function'){
                const valueOfPromise = catchCb(this._reason)

                 if(checkPromise(valueOfPromise)){
                     valueOfPromise.then(
                        value => newPromise._onFulfilled(value),
                        reason => newPromise._onRejected(reason)
                     )
                 } else {
                    newPromise._onFulfilled(valueOfPromise)
                 }
            } else {
                return newPromise._onRejected(this._reason)
            }
        })
        this._finallyCbs.forEach(([newPromise, finallyCb]) => {
            finallyCb()
            newPromise._onRejected(this._value)
        })
        this._thenCbs = []
        this._finallyCbs = []
    }
    /*
        then creates a new promise which we can return 
        in order to chain promises together

        Then will push the newly created promise and all the arguments
        to the original promise which called then.
    */
    then(thenCb, catchCb){
        const newPromise = new FakePromise()
        this._thenCbs.push([newPromise, thenCb, catchCb])
        if(this._state === STATE.FULFILLED){
            this._propagateFulfilled()
        }

        else if(this._state === STATE.REJECTED){ 
            this._propagateRejected()
        }

        return newPromise
    }

    /*
        Then will handle catch so all we have to do is passed
        undefined in the first argument
    */
    catch(catchcb){
        return this.then(undefined, catchcb)
    }

    finally(sideEffectFn){
        if(this._state !== STATE.PENDING){
            sideEffectFn()

            if(this._state === STATE.FULFILLED) return FakePromise.resolve(this._value)
            if(this._state === STATE.REJECTED)  return FakePromise.reject(this._reason)
        }

        const newPromise = new FakePromise()
        this._finallyCbs.push([newPromise, sideEffectFn])

        return newPromise
    }
}

/*
    The two static methods for promise are resolve and reject
    both take a value and return a new promise.
    Both methods pass in a callback as an argument where
    it will either resolve or rejct the value immediately.
*/
FakePromise.resolve = value => new FakePromise(resolve => resolve(value)) //5
FakePromise.reject = value => new FakePromise((_, reject) => reject(value))

module.exports = FakePromise