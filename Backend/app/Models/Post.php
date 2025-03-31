<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    //
    protected $fillable = [
        'jobTitle',
        'companyName',
        'jobType',
        'companyLogo',
        'location',
        'salaryRange',
        'jobDescription',
        'requiredSkills',
        'experienceLevel',
        'applicationDeadline',
        'contactInfo',
    ];
}
