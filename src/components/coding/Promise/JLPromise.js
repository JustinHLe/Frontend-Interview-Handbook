const STATE = {
    FULFILLED: "FULFILLED",
    REJECTED: "REJECTED",
    PENDING: "PENDING"
}
class JLPromise {
    constructor(cb){
        console.log("constructor called")
        this._state = STATE.PENDING
        this._value
        this._reason

        this._callbacks = []

        if(typeof cb === "function"){
            setTimeout(() => {
                try{
                    cb(this._onFulfilled.bind(this), this._onReject.bind(this))              
                } catch(err){
                    this._onReject(err)
                }
            })
        }
    }

    _onFulfilled(value){
        console.log("resolved", value)
        if(this._state !== STATE.PENDING) return 
        this._state = STATE.FULFILLED
        this._value = value
        this._propagateFulfilled()
    }

    _onReject(reason){
        console.log("reject", reason)
        if(this._state !== STATE.PENDING) return 
        this._state = STATE.REJECTED
        this._reason = reason
        this._propagateReject()
    }

    _propagateFulfilled(){
        this._callbacks.forEach(([newPromise, thenCb]) => {
            if(typeof thenCb === 'function'){
                const valueOfPromise = thenCb(this._value)
                if(this._isPromise(valueOfPromise)){
                    valueOfPromise.then(
                        (value) => newPromise._onFulfilled(value),
                        (reason) => newPromise._onReject(reason)
                    )
                } else {
                    newPromise._onFulfilled(valueOfPromise) // 10
                }
            } else {
                newPromise._onFulfilled(this._value)
            }
        })

        this._callbacks = []
    }

    _propagateReject(){
        this._callbacks.forEach(([newPromise, _, catchCb]) => {
            if(typeof catchCb === 'function'){
                const valueOfPromise = catchCb(this._reason)

                if(this._isPromise(valueOfPromise)){
                    valueOfPromise.then(
                        (value) => newPromise._onFulfilled(value),
                        (reason) => newPromise._onReject(reason)
                    )
                } else {
                    newPromise._onFulfilled(valueOfPromise)
                }
            } else {
                newPromise._onReject(this._reason) //pass rejection forward
            }
        })

        this._callbacks = []
    }

    /*
        if then doesnt receive a callback, it is skipped
        and the value is passed through the chain
    */
    then(thenCb, catchCb){
        console.log("then called")
        const newPromise = new JLPromise()

        this._callbacks.push([newPromise, thenCb, catchCb])


        return newPromise
    }

    //returning because you need to chain the newPromise created from then
    catch(catchCb){
        console.log("catch called")
        return this.then(undefined, catchCb)
    }

    _isPromise(promise){
        return promise instanceof JLPromise
    }

    finally(){

    }
}

/*
    static methods for promise include resolve and reject
    they take a value and return a new promise
    with a callback that either rejects/resolves the value
*/
JLPromise.resolve = (value) => new JLPromise(resolve => resolve(value))
JLPromise.reject = value => new JLPromise((_, reject) => reject(value))
module.exports = JLPromise