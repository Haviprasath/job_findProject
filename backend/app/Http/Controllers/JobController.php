<?php

namespace App\Http\Controllers;
use App\Models\post_jobs;
use App\Models;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class JobController extends Controller
{
    function JobAdd(Request $req){
      $jobs=new post_jobs;
        $jobs->title=$req->input('title');
        $jobs->company=$req->input('company');
        $jobs->salary=$req->input('salary');
        $jobs->location=$req->input('location');
        $jobs->job_type=$req->input('job_type');
        $jobs->description=$req->input('description');
        $jobs->save();
        return $jobs;


  }
    function Jobshow(){
       $jobs=post_jobs::all();
        return $jobs;

    }
    function Jobsummary()
    {
//        $categorydetails=post_jobs::all()->groupBy('category_id')->map->count();
//        $posts = post_Jobs::has('category')->with('category')->get();
        $categorydetails= DB::table('post_jobs')
            ->join('categories', 'post_jobs.category_id', '=', 'categories.id')
            ->select(DB::raw('count(post_jobs.category_id) as job_count'), 'categories.name as category_name')
            ->groupBy('categories.id', 'categories.name')
            ->get();
        return $categorydetails;
    }


}
