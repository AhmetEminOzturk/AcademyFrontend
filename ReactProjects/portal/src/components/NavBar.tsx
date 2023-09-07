import React, { useEffect, useState } from 'react'
import { getAllCats } from '../Api'
import { NavLink } from 'react-router-dom'

function NavBar() {

    const [cats, setCats] = useState<string[]>([])
    
    useEffect(()=>{
        getAllCats().then(res=>{
            const dt = res.data
            if(dt){
                setCats(dt)
            }
        })

    },[])

    return (
        <>
            <nav className="navbar navbar-expand-lg bg body-tertiary">
                <div className="container-fluid">
                    <div className="navbar-brand" >Kategoriler</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {cats.map((item, index)=>
                            <NavLink key={index} to={'/category/' + item} className='nav-link'>{item}</NavLink>
                            )}                        
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar