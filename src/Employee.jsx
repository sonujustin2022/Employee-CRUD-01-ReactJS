import React from 'react'

const Employee = () => {
  return (
    <div style={{height:"100vh"}} className=' d-flex  flex-column '>
        {/* input area */}
        <div className='d-flex gap-3 justify-content-center'> 
            <div>
              <input className='form-control' type="text" placeholder='Employee name here....' />
            </div>
             <div>
                <button className='btn btn-primary'>Add Employee</button>
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