
import sign from "../assets/images/sign.webp";
import {useEffect, useState} from "react";
import {ValidateUser} from "../Api services/ValidateUser";
import {useNavigate} from 'react-router-dom';
export default function Login(){

    const [username,setName]=useState("");
    const [password,setPassword]=useState("");
    const [remember,setRemember]=useState(false);
    const navigate=useNavigate();

    function SignIn(){

            ValidateUser(username,password).then((result)=>{
               if(result[1]===true){
                   alert("login successfully");

                   navigate(`profile/${username}`);
               }
               else{
                   alert("login failured");

               }
            }).catch(console.error);

    }



    return(
        <div className="container mt-4">

        <div className="row">
            <h1 className="bg-light fw-bold p-2">Login</h1>
        </div>
        <div className="row p-2">
            <div className="col-md-6">
                <img src={sign} alt=""></img>
                <p></p>

            </div>
            <div className="col-md-6">
                <div className='loginBack '>
                    <div className='outlineBorder'>
                        <div className='loginForm form-control'>
                            <div className="mt-2">
                                <label className="form-label fw-bold" >UserName</label>
                                <input type='text' value={username} onChange={(e)=>{setName(e.target.value)}} className='fa form-control' placeholder='&#xf007; Username'/>
                            </div>
                            <div>
                                <label className="form-label fw-bold" >Password</label>
                                <input type='password' onChange={(e)=>{setPassword(e.target.value)}}   className='fa form-control' placeholder='&#xf023; Password'/><br/>
                            </div>

                            <div className="d-flex justify-content-start ">
                                    <input type="checkbox" className="form-check-input mt-1" onChange={(e)=>{setRemember(e.target.value)}}  ></input>
                                    <p className="fw-bold ms-2">Remember me</p>
                            </div>

                            <div className="d-flex justify-content-around mb-2">
                                <button type="submit" className='btn btn-lg btn-primary align-content-center' onClick={SignIn} >Login Now</button>
                            </div>


                        </div>

                    </div>
                </div>
            </div>

        </div>

        </div>

    )
}