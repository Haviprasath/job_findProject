<?php

namespace App\Http\Controllers;
use App\Models\post_jobs;
use Illuminate\Http\Request;

class JobController extends Controller
{
    function JobAdd(Request $req){
      $jobs=new post_jobs;
        $jobs->title=$req->input('title');
        $jobs->company=$req->input('company');
        $jobs->salary=$req->input('salary');
        $jobs->location=$req->input('location');
        $jobs->job_type=$req->input('job_type');
        $jobs->save();
        return $jobs;


  }
    function Jobshow(){
       $jobs=post_jobs::all();
        return $jobs;

    }


}
