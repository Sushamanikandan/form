import React from 'react'

function Checkbox({handleCheckBox,fields,errorFields}) {
  return (
    <>
      <div className='skills'>
  <label htmlFor=''>skills</label>
  <br></br>
   <input type='checkbox' name="checkBox" value='HTML' checked={fields.checkBox.includes('HTML')}onChange={handleCheckBox}/>
  <label htmlFor=''>HTML</label>
  
  <br></br>
   <input type='checkbox'name="checkBox" value='CSS'checked={fields.checkBox.includes('CSS')} onChange={handleCheckBox}/>
   <label htmlFor=''>CSS</label>
   
   <br></br>
   <input type='checkbox'name="checkBox" value='Javascript'checked={fields.checkBox.includes('Javascript')}onChange={handleCheckBox}/>
   <label htmlFor=''>Javascript</label>
   {errorFields.checkBox&&<p className='danger'>select atleast one skill</p>}
   </div>
    </>
  )
}

export default Checkbox

