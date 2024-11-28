import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { EditUser } from '../user/EditUser';

export const Home = () => {

    const [users,setUsers]=useState([]);

    useEffect(()=>{
        loadUser();
    },[]);

    const loadUser = async()=>{

        const result = await axios.get('http://localhost:8080/user/getAllUser')
        console.log(result.data);

        setUsers(result.data);
        
    } 
    const deleteUser = async(id)=>{

      const result = await axios.delete(`http://localhost:8080/user/delete/${id}`)
      console.log(result.data);
        loadUser();
      
  } 

    const handleEdit = (user)=>{

    }

  return (
    <div className='container'>
        <div className='py-4'>

        <table class="table boarder shadow">
  <thead>
    <tr>
      <th scope="col">Si.No</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
    {
      users.map((user,index)=>(

    <tr>
      {/* <th scope="row">{index+1}</th> */}
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.userName}</td>
      <td>{user.email}</td>
      <td>
        <Link className='btn btn-primary mx-2'  to={`/viewUser/${user.id}`} >view</Link>
        <Link className='btn btn-outline-primary mx-2' to={`/editUser/${user.id}`} >edit</Link>
        <button className='btn btn-danger mx-2' onClick={()=> deleteUser(user.id)}>delete</button>

      </td>

      
    </tr>

      ))
}
    
  </tbody>
</table>
        </div>

    </div>
  )
}
