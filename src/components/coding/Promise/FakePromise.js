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
        console.log("constructor called")
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
        console.log("resolved", value)
        if(this._state !== STATE.PENDING){
            console.log("here")
            return
        }
        this._state = STATE.FULFILLED
        this._value = value
        this._propagateFulfilled()
    }

    _onRejected(reason){
        console.log("error")
        if(this._state !== STATE.PENDING){
            return
        }
        this._state = STATE.REJECTED
        this._reason = reason
        this._propagateRejected()
    }

    _propagateFulfilled(){
        this._thenCbs.forEach(([newPromise, thenCb]) => {
            if(typeof thenCb === 'function'){
                // console.log("then is a func", thenCb(this._value))
                console.log(this, newPromise)
                const valueOfPromise = thenCb(this._value)
                  if(checkPromise(valueOfPromise)){
                    console.log("is a promise")
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
     
    then(thenCb, catchCb){
        console.log('then called')
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

FakePromise.resolve = value => new FakePromise(resolve => resolve(value)) //5
FakePromise.reject = value => new FakePromise((_, reject) => reject(value))

module.exports = FakePromise