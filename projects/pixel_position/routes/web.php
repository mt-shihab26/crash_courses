<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\JobListingController;
use App\Http\Controllers\TagController;
use Illuminate\Support\Facades\Route;

Route::get('/', [JobListingController::class, "index"]);
Route::get("/search", [JobListingController::class, "search"]);

Route::get("/jobs/create", [JobListingController::class, "create"])->middleware("auth");
Route::post("/jobs", [JobListingController::class, "store"])->middleware("auth");

Route::get("/tags/{tag:name}", [TagController::class, "show"]);

Route::get("/register", [AuthController::class, "registerCreate"])->middleware("guest");
Route::post("/register", [AuthController::class, "registerStore"])->middleware("guest");

Route::get("/login", [AuthController::class, "loginCreate"])->middleware("guest")->name("login");
Route::post("/login", [AuthController::class, "loginStore"])->middleware("guest");

Route::delete("/logout", [AuthController::class, "logout"])->middleware("auth");
