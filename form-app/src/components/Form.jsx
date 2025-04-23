import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormField from './FormField'

function Form() {
  const navigate=useNavigate()

  const [formData,setFormData]=useState()

  const returnForm=()=>{
    navigate('/')
  }
  useEffect(()=>{
    let data=JSON.parse(localStorage.getItem('formData'))
    setFormData(data)
  },[])
  console.log(formData,'hfkjhfk');
  
  return (
    <div className="container-fluid">
    <button className="btn btn-success return-btn" onClick={returnForm}>Create</button>

      <div className="screen d-flex justify-content-center align-items-center full-form">
        <div className="form-container">
          <h3 className='form-title'>Form</h3>
          <div className="form-body">
          {formData?.map((field, index) => {
                  return (
                    <div className="m-3">
                    <FormField key={index} fields={field}  />

                    </div>

                    // <div className="row mb-3">

                    //   <div className="col-4">
                    //     <FormField key={index} fields={field} />
                    //   </div>
                    //   <div className="col-2">
                    //     <button
                    //       className="btn btn-danger"
                    //       onClick={() => deleteField(index)}
                    //     >
                    //       Delete
                    //     </button>
                    //   </div>
                    // </div>
                  );
                })}
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Form