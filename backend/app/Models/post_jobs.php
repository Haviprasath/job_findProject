<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class post_jobs extends Model
{
    protected $fillable=['title','company','location','salary','job_type','description','category_id'];
    public static function boot (){
        parent::boot();
        static::creating(function($post_jobs){
            $categoryMapping = [
                'Technology' => ['software engineer', 'developer', 'engineer'],
                'Finance' => ['accountant', 'finance', 'analyst'],
                'Marketing' => ['marketing', 'seo', 'advertising'],
                'healthcare' => ['doctor', 'nurse', ],
                'design' => ['frontend', 'ui/ux', ],
            ];

            $title=$post_jobs->title;
            $categoryname=null;
            foreach ($categoryMapping as $key=>$value){
                foreach ($value as $key1 => $value1) {
                    similar_text(strtolower($title), strtolower($value1),$percent);
                    if($percent>=50){
                        $categoryname=$key;
                    }
                }
            }
            $category = category::where('name', $categoryname)->first();
            $post_jobs->category_id=$category->id;

        });

    }
    public function category(){
        return $this>belongsTo(category::class);
    }
}


