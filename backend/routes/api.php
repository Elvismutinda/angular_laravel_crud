<?php

use App\Http\Controllers\Auth\AuthenticateController;
use App\Http\Controllers\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('login', [AuthenticateController::class, 'loginUser']);
Route::post('register', [AuthenticateController::class, 'registerUser']);

Route::get('student', [StudentController::class, 'getStudents']);
Route::post('student', [StudentController::class, 'createStudent']);
Route::put('student/edit/{id}', [StudentController::class, 'updateStudent']);
Route::delete('student/delete/{id}', [StudentController::class, 'deleteStudent']);
