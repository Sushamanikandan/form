import React from 'react'

function Email({handleChange,onHandleBlur,errorFields}) {
  return (
    <div>
      < div className='email'>
   <label htmlFor=''>email</label>
   <input type='text' name="email"onChange={handleChange} onBlur={onHandleBlur}/>
   {errorFields.email&&<p className='danger'>email is required</p>}
   </div>
    </div>
  )
}

export default Email
