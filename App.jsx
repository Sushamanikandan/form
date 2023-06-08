import { Fragment, useMemo, useState } from 'react'
import './App.css'
import countryList from 'react-select-country-list'
import Firstname from './components/Firstname'
import Email from './components/Email'
import Radio from './components/Radio'
import Dob from './components/Dob'
import Checkbox from './components/Checkbox'
import Country from './components/Country'



function App() {
 
  
  const options=useMemo(()=>countryList().getData(),[])
  const[fields,setFields]=useState({
    firstName:"",
    email:"",
    radio:"",
    checkBox:[],
    dob:"",
    country:"",

  })
  const[errorFields,setErrorFields]=useState({
    firstName:false,
    email:false,
    radio:false,
    checkBox:false,
    dob:false,
    country:false,
  })
  const onSubmit=()=>{
    if(fields.firstName===""){
      setErrorFields(prev=>({
        ...prev,
        firstName:true,
      
      }))
    }
      else{
        setErrorFields(prev=>({
          ...prev,
          firstName:false,
        
      }))
  }
  if(fields.email==''){
    setErrorFields(prev=>({
      ...prev,
      email:true,
    
    }))
  }
    else{
      setErrorFields(prev=>({
        ...prev,
        email:false,
      
    }))
}
if(fields.radio==''){
  setErrorFields(prev=>({
    ...prev,
    radio:true,
  
  }))
}
  else{
    setErrorFields(prev=>({
      ...prev,
      radio:false,
    
  }))
}
if(fields.dob==''){
  setErrorFields(prev=>({
    ...prev,
    dob:true,
  
  }))
}
  else{
    setErrorFields(prev=>({
      ...prev,
      dob:false,
    
  }))
}
if(fields.checkBox==''){
  setErrorFields(prev=>({
    ...prev,
    checkBox:true,
  
  }))
}
  else{
    setErrorFields(prev=>({
      ...prev,
      checkBox:false,
    
  }))
}
if(fields.country==''){
  setErrorFields(prev=>({
    ...prev,
    country:true,
  
  }))
}
  else{
    setErrorFields(prev=>({
      ...prev,
      country:false,
    
  }))
}
  }
  const isFormValid=()=>{
    if(Object.values(errorFields).some((error)=>error===true)){
      return false;
    }
    else{
      return true;
    }
  }
const handleCheckBox=(event)=>{const {value,checked}=event.target;
if(checked)
{
    setFields(prev=>({
      ...prev,
      checkBox:([...prev.checkBox,value])
    })
  
      
);
  }
  else{
    setFields(prev=>({
      ...prev,
      checkBox:(fields.checkBox.filter((data)=>data!==event.target.value))

    }))
  }
   
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(isFormValid())
    {
      console.log("submitted")
      alert("submitted")
    }
    else{
      console.log("Submission denied");
    }
  }
  const onCountry=(options)=>{
       setFields(prev=>({
      ...prev,
     "country":options.label
   }));
    
  }
  const handleChange=(event)=>{
    setFields((prev)=>({
      ...prev,
      [event.target.name]:
      event.target.value,

    }));
  };
  console.log(fields)
  const onHandleBlur=(event)=>{
    let error=false;

    if(event.target.name=="firstName"&&event.target.value=="")
    {
      setErrorFields((prev)=>({
        ...prev,
       [event.target.name ]:true,

      }))
      
    }
    else if(event.target.name==="email"&&event.target.value==""){
      setErrorFields((prev)=>({
        ...prev,
        [event.target.name] :true
        

      }))
    }
       else if(event.target.name==="radio"&&event.target.value==""){
        setErrorFields((prev)=>({
          ...prev,
          [event.target.name] :true,
  
        }))
       }
      
  }
return(
    <Fragment>
    <form onSubmit={handleSubmit}>   
    <Firstname handleChange ={handleChange} onHandleBlur={onHandleBlur} errorFields={errorFields}/>
    <Email  handleChange ={handleChange} onHandleBlur={onHandleBlur} errorFields={errorFields}/>
    <Radio  handleChange ={handleChange} onHandleBlur={onHandleBlur}  errorFields={errorFields}/> 
    <Dob handleChange ={handleChange} errorFields={errorFields} />
    <Checkbox handleCheckBox={handleCheckBox} fields={fields} errorFields={errorFields}/>
    <Country onCountry={onCountry} errorFields={errorFields} options={options}/>
    <div className='submit'>
   <button type="submit" onClick={onSubmit}>Submit</button>
   </div>
   </form>
   </Fragment>
   )
  }
  export default App