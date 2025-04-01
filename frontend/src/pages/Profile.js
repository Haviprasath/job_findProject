

import React, {useState} from "react";
import {useParams} from "react-router-dom";
import SideBar from "../components/SideBar";
import {BiBookAlt, BiHelpCircle, BiHome, BiMessage, BiStats} from "react-icons/bi";

export default function Profile(){
    const {username}=useParams();
    const [activetab,setActiveTab]=useState('dashboard');

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

                        <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button">
                                {username}
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">DashBoard</a></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className='menu'>

                        <div className='menu--list'>
                            <a href="#" className="item active" onClick={()=>{setActiveTab('dashboard')}}>
                                <BiHome className='icon'/>
                                Dashboard
                            </a >
                            <a href="#" className="item" >
                                <BiStats className='icon'/>
                                Settings
                            </a>
                            <a href="#" className="item" onClick={()=>{setActiveTab('application')}}>
                                <BiMessage className='icon'/>
                               Application
                            </a>
                            <a href="#" className="item">
                                <BiHelpCircle className='icon'/>
                                Messages
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    {
                        activetab ==='dashboard' ?
                            <div className=" col-md-6 border border-secondary-subtle p-3" >
                                <h3 className="fw-bold">Manage Applications</h3>
                                <h5>Manage your applications</h5>
                                <button className="btn btn-secondary"> Go to applications</button>
                            </div>
                            : ''
                    }

                    {
                        activetab==='application'?

                            <div className="table">
                                <thead>
                                <tr>
                                    <th>JobTitle</th>
                                    <th>ComapnyName</th>
                                    <th>AppliedDate</th>
                                    <th>Application Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                </tbody>
                            </div>
                            :''

                    }
                </div>

            </div>
        </header>

    )
}