<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class post_jobs extends Model
{
    protected $fillable=['title','company','location','salary','job_type'];
}
