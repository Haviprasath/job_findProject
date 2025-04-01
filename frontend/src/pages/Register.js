
import register from "../assets/images/register.png";
import {useEffect, useState} from "react";
import {AddSeeker} from "../Api services/AddSeeker";

export default function Register(){
    const [username,setName]=useState('');
    const [password,setPassword]=useState('');
    const [email,setMail]=useState('');
     const [user,setUser]=useState(null);


     function SignUp(event)
    {
     AddSeeker(username,password,email).then((data)=>{
         setUser(data);
         alert("sucessfully registerd");
     }).catch(console.error);
        setName('')
        setPassword('')
        setMail('')

    }

    return(
        <div className="container mt-4">

            <div className="row">
                <h1 className="bg-light fw-bold p-2">Register</h1>
            </div>
            <div className="row p-2">
                <div className="col-md-6">
                    <img src={register} alt=""></img>
                    <p></p>

                </div>
                <div className="col-md-6">
                    <div className='loginBack '>
                        <div className='outlineBorder'>
                            <div className='loginForm form-control'>
                                <div className="mt-2">
                                    <label className="form-label fw-bold" >E-Mail</label>
                                    <input type='email'  value={email} onChange={(e)=>{setMail(e.target.value)}} className='fa form-control' placeholder='&#xf007;  E-Mail'/><br/>
                                </div>
                                <div className="mt-2">
                                    <label className="form-label fw-bold" >UserName</label>
                                    <input type='text' value={username} onChange={(e)=>{setName(e.target.value)}} className='fa form-control' placeholder='&#xf007; Username'/><br/>
                                </div>
                                <div>
                                    <label className="form-label fw-bold" >Password</label>
                                    <input type='password'  value={password} onChange={(e)=>{setPassword(e.target.value)}} className='fa form-control' placeholder='&#xf023; Password'/><br/>
                                </div>



                                <div className="d-flex justify-content-around mb-2">
                                    <button  className='btn btn-lg btn-primary align-content-center' onClick={SignUp}>Register</button>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}