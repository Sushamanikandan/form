import React from 'react'

function Dob({handleChange,errorFields})  {
  return (
    <>
 <div className='dob'>
  <label>Date of birth</label>
  <input type='date' name='dob' onChange={handleChange} />
  {errorFields.dob&&<p className='danger'>Date of birth is required</p>}
 </div>
    </>
  )
}

export default Dob
