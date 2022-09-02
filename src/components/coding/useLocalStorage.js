

/*
    create a hook which stores data in localStorage

    the hooks looks something like this
 
    const [name, setName] = useLocalStorage("name", "bob")
*/

import { useEffect, useState } from "react"

const getSavedValue = (key, initialValue) => {
    const savedValue = JSON.parse(localStorage.getItem(key))
    /*
        Check if key alreaday exists if we do immediately return the key
    */
    if(savedValue) return savedValue

    /*
        similar to useState if initivalValue is a function meaning we passed in 
        something like setState, call the function and return it
        else
        return initivalValue
    */
    if(initialValue instanceof Function) return initialValue()
    return initialValue
}
const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => getSavedValue(key, initialValue))
    /*
        if useState is passed a function it will be only ran once 
        Subsequent renders wont call the state again
    */
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])
    /*
        Everytime setValue is called this will update localStorage
    */


    return [value, setValue]
}


export default useLocalStorage