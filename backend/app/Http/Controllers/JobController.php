<?php

namespace App\Http\Controllers;
use App\Models\post_jobs;
use App\Models\company;
use App\Models;
use App\Models\User;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

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
       $jobs=DB::table('post_jobs')
           ->join('companies','companies.name','=','post_jobs.company')
           ->select('post_jobs.id','title','location','companies.name','companies.logo','salary','job_type','post_jobs.created_at')
           ->get();
       foreach($jobs as $job){
           $job->logo = url("images/{$job->logo}");
       }

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
        $jobs=DB::table('post_jobs')
            ->join('companies','companies.name','=','post_jobs.company')
            ->select('post_jobs.id','title','location','companies.name','companies.logo','salary','job_type','post_jobs.created_at');

        if (!empty($location) and !empty($job_type) and !empty($title)) {
            $jobs->where('location',$location)->where('job_type',$job_type)->where('title',$title);
        }
        elseif (!empty($location) and !empty($job_type)) {
            $jobs->where('location',$location)->where('job_type',$job_type);
        }
        elseif (!empty($location) and !empty($title)) {
            $jobs->where('location',$location)->where('title',$title);
        }
        elseif (!empty($title) and !empty($job_type)) {
            $jobs->where('title',$title)->where('job_type',$job_type);
        }
        elseif (!empty($title)) {
            $jobs->where('title',$title);
        }
        elseif (!empty($job_type)) {
            $jobs->where('job_type',$job_type);
        }
        elseif(!empty($location)){
            $jobs->where('location',$location);
        }
        else{
            $jobs="No found....!!!";
        }

       $jobs=$jobs->get();
        foreach($jobs as $job){
            $job->logo = url("images/{$job->logo}");
        }
        return $jobs;
    }
    function JobSearchById($id)
    {

       $job=post_jobs::find($id);

        return $job;
    }
    function CompanyDetails($company_name){
        $data=company::where('name',$company_name)->first();

            $data->logo = url("images/{$data->logo}");

        return $data;
    }
    function AddSeeker(Request $req)
    {
        $user=new User;
        validator()->make($req->all(),[
            'username'=>'required|unique:users',
            'password'=>'required',
            'email'=>'required|unique:users'
        ]);
        $user->name=$req->input('username');
        $user->email=$req->input('email');
        $user->password=Hash::make($req->input('password'));
        $user->save();
        return $user;
    }
    function ValidateUser(Request $req){
        $username=$req->input('username');
        $password=$req->input('password');
        $user=User::where('name',$username)->first();
         $isValid=false;
        if(Hash::check($req->input('password'),$user->password)){
            $isValid=true;
        }
        return response()->json(['success',$isValid]);
    }

}
