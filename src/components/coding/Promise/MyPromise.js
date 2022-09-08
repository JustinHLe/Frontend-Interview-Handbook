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