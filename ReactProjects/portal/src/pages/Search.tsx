import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import { useParams } from 'react-router-dom'

function Search() {

    const {q} = useParams()
  return (
    <>
    <Header/>
    <NavBar/>
    <h2>Search Result : {q}</h2>
    </>
  )
}

export default Search