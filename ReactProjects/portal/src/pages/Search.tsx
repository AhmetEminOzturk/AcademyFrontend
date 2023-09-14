import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import { useParams } from 'react-router-dom'
import { search } from '../Api'
import ProductItem from '../components/ProductItem'
import { IProducts } from '../models/IProducts'

function Search() {

    const {q} = useParams()
    const [proObj, setProObj] = useState<IProducts>()
    useEffect(() => {
        if(q){
            search(q,0).then(res=> {
            const dt = res.data
            if(dt){
                setProObj(dt)
            }
      })
        } 
    }, [])
    
  return (
    <>
    <Header/>
    <NavBar/>
    <h2>Search Result : {q}</h2>
    <div className="row">
        {proObj && proObj.products.map((item, index) =>
          <ProductItem item={item} key={index} />
        )}
      </div>
    </>
  )
}

export default Search