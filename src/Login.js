import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios'

function Login() {
    const[email,setemail]= useState('');
    const[password,setpsw]=useState('');
    function handlesubmit(event){
        event.preventDefault();
axios.post(' ' , {email,password}).then(res=>console.log(res));

        
        
    }
    return (

        <div className='d-flex vh-100 justify-content-center align-item-center bg-primary'>
            <div className='p-3 bg-white w-25'>
            <form onSubmit={handlesubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
     onChange={e=>setemail(e.target.value)}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" onChange={e=>setpsw(e.target.value)}/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Login</button>
</form>
<br/>
            
            
<ul>
                <li ><a style={{listStyle:'none'}}  href='#'>forgetpassward</a></li>
            </ul> 
            </div>
<div>
    {email}<br/>
    <br/>
    {password}
</div>
        </div>
    
    );
}

export default Login;