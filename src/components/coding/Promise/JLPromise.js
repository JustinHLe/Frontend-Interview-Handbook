const STATE = {
    FULFILLED: "FULFILLED",
    REJECTED: "REJECTED",
    PENDING: "PENDING"
}
class JLPromise {
    constructor(cb){
        // console.log("constructor called")
        this._state = STATE.PENDING
        this._value
        this._reason

        this._callbacks = []
        this._finallyCbs = []
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
        // console.log("resolved", value)
        if(this._state !== STATE.PENDING) return 
        this._state = STATE.FULFILLED
        this._value = value
        this._propagateFulfilled()
    }

    _onReject(reason){
        // console.log("reject", reason)
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
                    newPromise._onFulfilled(valueOfPromise) // 6
                }
            } else {
                newPromise._onFulfilled(this._value)
            }
        })
        this._finallyCbs.forEach(([newPromise, finallyCb]) => {
            if(typeof finallyCb === 'function'){
                try{
                    const valueOfFinally = finallyCb()
                    if(this._isPromise(valueOfFinally)){
                        valueOfFinally.then(
                            undefined,
                            (reason) => newPromise._onReject(reason)
                        )
                    } else {
                        newPromise._onFulfilled(this._value)
                    }
                } catch(err){
                    newPromise._onReject(err)
                }
            } else {
                newPromise._onFulfilled(this._value)
            }
        })
        this._callbacks = []
        this._finallyCbs = []
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
        this._finallyCbs.forEach(([newPromise, finallyCb]) => {
            if(typeof finallyCb === 'function'){
                try{
                    const valueOfFinally = finallyCb()
                    if(this._isPromise(valueOfFinally)){
                        valueOfFinally.then(
                            undefined,
                            (reason) => newPromise._onReject(reason)
                        )
                    } else {
                        newPromise._onFulfilled(this._value)
                    }
                } catch(err){
                    newPromise._onReject(err)
                }
            } else {
                newPromise._onFulfilled(this._value)
            }
        })

        this._callbacks = []
        this._finallyCbs = []
    }

    /*
        if then doesnt receive a callback, it is skipped
        and the value is passed through the chain
    */
    then(thenCb, catchCb){
        // console.log("then called")
        const newPromise = new JLPromise()

        this._callbacks.push([newPromise, thenCb, catchCb])


        return newPromise
    }

    //returning because you need to chain the newPromise created from then
    catch(catchCb){
        // console.log("catch called")
        return this.then(undefined, catchCb)
    }

    finally(finallyCb){
        // console.log("finally called")
        const newPromise = new JLPromise()

        this._finallyCbs.push([newPromise, finallyCb])

        return newPromise
    }

    _isPromise(promise){
        return promise instanceof JLPromise
    }

}

/*
    static methods for promise include resolve and reject
    they take a value and return a new promise
    with a callback that either rejects/resolves the value
*/
JLPromise.resolve = (value) => new JLPromise(resolve => resolve(value))
JLPromise.reject = value => new JLPromise((_, reject) => reject(value))
JLPromise.all = (arr) => {
    const res = []
    let completed = 0
    const newPromise = new JLPromise((resolve, reject) => {
        arr.forEach((promise, index) => {
            promise.then(value => {
                completed++
                res[index] = value
                console.log(value)
                if(completed === arr.length){
                    resolve(res)
                }
            }).catch(reject)
        })
    })


    return newPromise
}
module.exports = JLPromise