import React from 'react'

function Dashboard() {

    const stData = localStorage.getItem("user")
    
    if (stData !== null) {
        const obj = JSON.parse(stData)
        console.log(obj.email , obj.name , obj.phone)    
    }
    
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard