import axios from 'axios';
import { Button } from 'bootstrap'
import React, { useState,useEffect } from 'react'
import { Link, useNavigate, useParams } from "react-router";
export const EditUser = () => {

    
  let navigate = useNavigate();

   const {id}=useParams();
    const [user,setUser] = useState({

        name:"",
        userName:"",
        email:""
    })

    const {name,userName,email} = user;

    useEffect(()=>{
      loadUser();
  },[]);

  const loadUser = async()=>{

      const result = await axios.get(`http://localhost:8080/user/${id}`)
      console.log(result.data);

      setUser(result.data);
      
  } 
    const onhandleChange =(e)=>{

            setUser({...user,[e.target.name] :e.target.value})

    }

    const onSubmit =async (e)=>{

        e.preventDefault();

        await axios.put(`http://localhost:8080/user/update/${id}`,user)
        navigate('/')

    }
     

  return (
    <div className="container">
        <div className='row'> 
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2  shadow'>
                <h2 className='text-center m-4'>update User</h2>
                <form onSubmit={(e)=>{onSubmit(e)}}>
                 <div className='mb-3'>
                    <label htmlFor='name' className='form-label'>
                        Name
                    </label>
                    <input 
                    type={"text"}
                    placeholder='enter your name'
                    className='form-control'
                    name='name'
                    value={name}
                    onChange={(e=>onhandleChange(e))}
                    />

                 </div>

                 <div className='mb-3'>
                    <label htmlFor='userName' className='form-label'>
                        userName
                    </label>
                    <input 
                    type={"text"}
                    placeholder='enter your userName'
                    className='form-control'
                    name='userName'
                    value={userName}
                    onChange={(e=>onhandleChange(e))}

                    />


                 </div>

                 <div className='mb-3'>
                    <label htmlFor='e-mail' className='form-label'>
                        E-mail
                    </label>
                    <input 
                    type={"text"}
                    placeholder='enter your e-mail'
                    className='form-control'
                    name='email'
                    value={email}
                    onChange={(e=>onhandleChange(e))}

                    />

                 </div>
                 <button type='submit' className='btn btn-outline-primary'>
                    Submit
                 </button>
                 <Link type='submit' className='btn btn-outline-danger mx-2' to={"/"} >
                    Cancel
                 </Link>
                 </form>
            </div>
        </div>
        </div>
    
        
    
  )
}

    