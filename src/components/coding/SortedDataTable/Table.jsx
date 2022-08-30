import axios from 'axios'
import React, { useState, useEffect } from 'react'

export const Table = () => {
    const [companies, setCompanies] = useState([])
    const [searchedCompanies, setSearchedCompanies] = useState([])
    const [direction, setDirection] = useState("")
    const [searching, setSearching] = useState(false)
    const [searchData, setSearchDate] = useState("")
    const [column, setColumn] = useState("")
    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(`https://fakerapi.it/api/v1/companies?_quantity=25`)
            let dataArr = data.data.data
            let myData = []

            dataArr.forEach((el) => {
                myData.push({
                    id: el.id,
                    firstName: el.contact.firstname,
                    lastName: el.contact.lastname,
                    email: el.contact.email,
                    company: el.name,
                    zip: el.contact.address.buildingNumber,
                    street: el.contact.address.street,
                    country: el.contact.address.country
                })
            })

            setCompanies(myData)
        }

        fetchData()
    }, [])
    useEffect(() => {
        let newArr = []
        for(let i = 0; i < companies.length; i++){
            for(const key in companies[i]){
                if(companies[i][key].toString().toLowerCase().includes(searchData.toLowerCase())){
                    newArr.push(companies[i])
                    break;
                }
            }
        }
        setSearchedCompanies(newArr)
    },[searchData])
    useEffect(() => {
        const compareFn = (a, b) => {
            if(Number(a[column])){ // if number column
                if(direction === "ASC"){
                    return a[column] - b[column]
                }
                return b[column] - a[column]
            } else { // if column is string
                if(direction === "ASC"){
                    if (a[column] < b[column]) {
                        return -1;
                    }
                    return 1;
                } else {
                    if (a[column] > b[column]) {
                        return -1;
                    }
                    return 1;
                }
            }
        }
        companies.sort(compareFn)
        setCompanies([...companies.sort(compareFn)]) //setCompanies since in the setState is async
    }, [direction, column])
    const handleSort = (e) => {
        //if empty state initialize to sorted ascending and set column to the current column clicked on
        if(direction === "" && column === ""){
            setDirection("ASC")
            setColumn(e.target.innerHTML)
            return
        }
        //if we already clicked on column
        if(column !== ""){
            if(column === e.target.innerHTML){ //if same column toggle between asc and desc
                if(direction === "ASC"){
                    setDirection("DESC")
                } else {
                    setDirection("ASC")
                }
            } else {
                setDirection("ASC") //if different column set new column and default asc
                setColumn(e.target.innerHTML)
                return
            }
        }
    }
    const handleInput = (e) => {
        if(e.target.value === ""){
            setSearching(false)
        } else {
            setSearching(true)
        }
        setSearchDate(e.target.value)
    }
    return (
        <>
            <input placeholder='search' onChange={handleInput}></input>
            <table>
                <tr onClick={handleSort}>
                    <th>id</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>email</th>
                    <th>company</th>
                    <th>zip</th>
                    <th>street</th>
                    <th>country</th>
                </tr>
                {searching === false ? 
                <>
                    {companies.map((el, index) => {
                    return (
                        <tr>
                            <td>{el.id}</td>
                            <td>{el.firstName}</td>
                            <td>{el.lastName}</td>
                            <td>{el.email}</td>
                            <td>{el.company}</td>
                            <td>{el.zip}</td>
                            <td>{el.street}</td>
                            <td>{el.country}</td>
                        </tr>
                    )
                    })}          
                </>
                :
                <>
                    {searchedCompanies.map((el, index) => {
                    return (
                        <tr>
                            <td>{el.id}</td>
                            <td>{el.firstName}</td>
                            <td>{el.lastName}</td>
                            <td>{el.email}</td>
                            <td>{el.company}</td>
                            <td>{el.zip}</td>
                            <td>{el.street}</td>
                            <td>{el.country}</td>
                        </tr>
                    )
                    })}   
                </>    
                }
            </table>
        </>
    )
}

/*
    Things to learn: sort, compareFn in sort
*/