<?php

use App\Http\Controllers\TestController;
use App\Http\Controllers\TodoController;
use App\Http\Controllers\TodosControler;
use App\Http\Controllers\UsersControler;
use App\Models\Todos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => "/", "middleware" => "cors"], function () {
    Route::post("/add", [TodosControler::class, "addTodo"]);
    Route::post("/get", [TodosControler::class, "getTodo"])->middleware("auth:sanctum");
    Route::post("/changeCompleted", [TodosControler::class, "changeCompleted"]);
    Route::post("/delete", [TodosControler::class, "delete"]);
    Route::post("/edit", [TodosControler::class, "edit"]);
});

Route::group(['prefix' => "user/", "middleware" => "cors"], function () {
    Route::post("/registration", [UsersControler::class, "registration"]);
    Route::post("/authentication", [UsersControler::class, "authentication"]);
    Route::post("/getUser", [UsersControler::class, "getUser"])->middleware("auth:sanctum");
});
