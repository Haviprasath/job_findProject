<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JobController;
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('Jobshow',[JobController::class,'Jobshow']);
Route::post('JobAdd',[JobController::class,'JobAdd']);
