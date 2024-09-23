import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function TopNavigation() {
  return (
    <div>
      <nav>
        <NavLink style={(obj)=>{
          console.log(obj);
          if (obj.isActive==true) {
            return {backgroundColor: "orange",color: "green"}
          } 
        }} to="/dashboard">
          Dashboard
          </NavLink>

        <NavLink style={(obj)=>{
          console.log(obj);
          if (obj.isActive==true) {
          return {backgroundColor: "yellow",color: "red"}
          }
        }} to="/tasks">Tasks</NavLink>

        <NavLink style={(obj)=>{
          console.log(obj);
          if (obj.isActive==true) {
            return {backgroundColor: "orange",color: "green"} 
          }
         }} to="/messages">Messages</NavLink>

        <NavLink style={(obj)=>{
          console.log(obj);
          if (obj.isActive==true) {
            return {backgroundColor: "orange",color: "green"}
          }
          }}  to="/leaves">Leaves</NavLink>
        <NavLink to="/"
        onClick={()=>{
          localStorage.clear();
        }}
        >SignOut</NavLink>
        </nav>
   
    </div>
  )
}

export default TopNavigation