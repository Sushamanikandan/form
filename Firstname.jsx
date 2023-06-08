import React from 'react'

function Firstname({handleChange,onHandleBlur,errorFields}) {
  return (
    <>
 <div className='firstname' >
   <label htmlFor=''>Name</label>
   <input type='text'name="firstName"onChange={handleChange} onBlur={onHandleBlur}/>
   {errorFields.firstName&&<p className='danger'>firstname is required</p>}
   </div>    
    </>
  )
}

export default Firstname
