// API: https://v2.jokeapi.dev/joke/Any

/*
    useFetch 
    returns three different things
    - loading
    - data
    - error variable if there were any errors 
*/
import axios from "axios"
import { useState, useEffect } from "react"

const useFetch = (endpoint) => {
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState({})
    const [error, setError] = useState({})
    useEffect(() => {
        const fetchData = async() => {
            setLoading(true)
            const data = await axios.get(endpoint)
            setLoading(false)
            setResponse({
                category: data.data.category,
                response: data.data.delivery
            })
            setError({
                isError: false,
                error: "no error"
            })
        }

        try{
            fetchData()
        } catch(e) {
            setError({
                isError: true,
                error: e
            })
        }
    }, [endpoint])




    return [loading,response,error]
}



export default useFetch