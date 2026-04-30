import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav  className='d-flex justify-content-center'>
            <ul style={{listStyle:"none"}}>
                <li><Link to={'/employee'} style={{textDecoration:"none",color:"red",fontSize:"20px"}}>Employees</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header