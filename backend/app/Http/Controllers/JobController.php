<?php

namespace App\Http\Controllers;
use App\Models\post_jobs;
use App\Models;
use GuzzleHttp\Psr7\Response;
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
            ->select(DB::raw('count(post_jobs.category_id) as job_count'), 'categories.name as category_name',
                DB::raw("CONCAT('" . url('images') . "/', categories.img_url) as img_url"))
            ->groupBy('categories.id', 'categories.name','categories.img_url' )
            ->get();
        return $categorydetails;
    }
    function Jobsearch(Request $req){
        $location = $req->input('location');
        $title = $req->input('job_title');
        $job_type = $req->input('job_type');
        if (!empty($location) and !empty($job_type) and !empty($title)) {
            $jobs=post_jobs::where('location',$location)->where('job_type',$job_type)->where('title',$title)->get();
        }
        elseif (!empty($location) and !empty($job_type)) {
            $jobs=post_jobs::where('location',$location)->where('job_type',$job_type)->get();
        }
        elseif (!empty($location) and !empty($title)) {
            $jobs=post_jobs::where('location',$location)->where('title',$title)->get();
        }
        elseif (!empty($title) and !empty($job_type)) {
            $jobs=post_jobs::where('title',$title)->where('job_type',$job_type)->get();
        }
        elseif (!empty($title)) {
            $jobs=post_jobs::where('title',$title)->get();
        }
        elseif (!empty($job_type)) {
            $jobs=post_jobs::where('job_type',$job_type)->get();
        }
        elseif(!empty($location)){
            $jobs=post_jobs::where('location',$location)->get();
        }
        else{
            $jobs="No found....!!!";
        }

        return $jobs;
    }

}
