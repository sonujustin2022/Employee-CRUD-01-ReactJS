import axios from 'axios'
import React, { useState } from 'react'

const Employee = () => {


const [value,setValue] = useState('')



const addClick = async() =>{

    try {

        if(value === ""){
        alert("please enter the employee name")
    } else {
        let reqBody = {
            name : value
        }

        let apiResponse = await axios.post(" http://localhost:3000/employees",reqBody);
        console.log(apiResponse);  

        if(apiResponse.status === 201){
            alert("emplyee successfully  added")
        } else{
            alert("not added .something went wrong")
        }
      }
        
    } catch (error) {
        console.log(error);
        alert("something went wrong")
    }
}


  return (
    <div style={{height:"100vh"}} className=' d-flex  flex-column '>
        {/* input area */}
        <div className='d-flex gap-3 justify-content-center'> 
            <div>
              <input onChange={(event)=>setValue(event.target.value)} className='form-control' type="text" placeholder='Employee name here....' />
            </div>
             <div>
                <button onClick={addClick} className='btn btn-primary'>Add Employee</button>
             </div>     
        </div>

            {/*employee table area  */}

            <div className='container mt-5' style={{border:"none",borderRadius:"10px", boxShadow:"0 0 5px gray"}}>
                <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Employee Name</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>01</td>
      <td>Athul RAj</td>
      <td><button className='btn btn-warning'>Edit</button> <button className='btn btn-danger'>delete</button></td>
    </tr>
  </tbody>
</table>
            </div>

    </div>
  )
}

export default Employee