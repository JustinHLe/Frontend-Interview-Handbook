import { useEffect, useState } from "react"

/*
    Every time a variable changes log the variable to the console

*/

const setInitialVariable = (v) => {
    return v
}
const useUpdateLogger = (v) => {
    const [variable, setVariable] = useState(() => {
        return setInitialVariable(v)
    })
    //callback in setState runs only the first render

    useEffect(() => {
        console.log(variable)
    }, [variable])


    return [variable, setVariable]
}

export default useUpdateLogger