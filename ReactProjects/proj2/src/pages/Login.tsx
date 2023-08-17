import React, { FormEvent } from 'react'

function Login() {

  const fncLogin = ( evt: FormEvent) => {
    evt.preventDefault()  
    console.log("Giriş yapıldı")
  }


  return (
    <>
    <div className='mb-3'>
    <div  className='row'>
        <div className=' col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-4 col-xxl-4'></div>
        <div className=' col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4'>
            <form onSubmit={fncLogin}>
              <h2>Admin Login</h2>
              <div className='mb-3'>
                <input placeholder='E-Mail' type='email' className='form-control'/>
              </div>
              <button className='btn btn-success'>Send</button>
            </form>
        </div>
        <div className=' col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-4 col-xxl-4'></div>
    </div>
    </div>
    </>
  )
}

export default Login