import React from 'react'

function Radio({handleChange,onHandleBlur,errorFields}) {
  return (
    <div>
    <div className='gender'>
   <label htmlFor=''>Gender</label>
   <input type='radio'name="radio" value='male'onChange={handleChange} onBlur={onHandleBlur}/>
   <label>Male</label>
  <input type='radio' name="radio"value='Female' onChange={handleChange}/>
  <label>Female</label>
  {errorFields.radio&&<p className='danger'>Gender is required</p>}
  </div>
      
    </div>
  )
}

export default Radio
