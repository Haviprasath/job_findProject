<?php

namespace App\Models;

use Illuminate\support\Str;
use Illuminate\Database\Eloquent\Model;

class category extends Model
{
    protected $fillable=['name','slug'];
    public static function boot(){
        parent::boot();
        static::creating(function($category){
            $category->slug=Str::slug($category->name);
            $slugCount=$category::where('slug',$category->slug)->count();
            if($slugCount>0){
                $category->slug='-'.($slugCount+1);
            }
        });
    }
    public function jobs(){
        return $this>hasMany(post_jobs::class);
    }


}
