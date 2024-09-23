import React from 'react'
import TopNavigation from './TopNavigation'
import { useLocation } from 'react-router-dom'



function Dashboard() {
 
    let loc = useLocation();
  console.log(loc);

  return (
    <div>
        <TopNavigation/>
        <h1>Dashboard</h1>
        <h1>{loc && loc.state && loc.state.msg? loc.state.msg:"please login correctly"}</h1>
    </div>
  )
}

export default Dashboard