import React from 'react'
import Select from 'react-select'

function Country({onCountry,errorFields,options}) {
  return (
    <>
    <div className='country'>
   <Select options={options}  name="country"onChange={onCountry}/>
   {errorFields.country&&<p className='danger'>country is required</p>}
   </div>
   </>
   )
   
}

export default Country
