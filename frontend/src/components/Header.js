import  './Header.css'
import firstImage from "../assets/images/first.jpeg";
import React from "react";
import {Link} from "react-router-dom";


export default function Header(){
    return (
        <header className="p-3  text-dark " id="header">

            <div className="row">
                <div className="col">
                    <h1 className="text-primary">JObie</h1>
                    <span>
                        <p className="fw-bold">We Have 500+ open Position Find The job That Suite Your Life</p>
                    </span>
                </div>
                <div className="col">
                    <div className="d-flex justify-content-center gap-3">
                         <Link to="/home">
                             <a className="text-dark text-decoration-none btn btn-outline-primary" href="">Home</a>
                         </Link>
                        <Link to="/about">
                            <a className="text-dark text-decoration-none btn btn-outline-primary"
                               href="">About</a>
                        </Link>
                       <Link to="contact">
                           <a className="text-dark text-decoration-none btn btn-outline-primary"
                              href="">Contact</a>
                       </Link>
                        <Link to="login">
                            <a className="text-dark text-decoration-none btn btn-outline-primary"
                               href="">Login</a>
                        </Link>
                        <Link to="Reg">
                            <a className="text-dark text-decoration-none btn btn-outline-primary"
                               href="">Register</a>
                        </Link>


                    </div>
                </div>
                    <div  id="imagebox" className="col">

                        <img id="image" src={firstImage} alt="A man searching a Job"     />
                        <a type="button" className="btn btn-primary" >Post a Job</a>
                    </div>


            </div>
        </header>
    );
}
