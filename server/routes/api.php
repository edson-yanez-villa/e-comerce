<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::resources([
    'products' => ProductController::class,
    'carts' => CartController::class,
]);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



Route::post('register', 'App\Http\Controllers\UserController@register');
Route::post('login', 'App\Http\Controllers\UserController@authenticate');


Route::group(['middleware' => ['jwt.verify']], function() {
    Route::post('user','App\Http\Controllers\UserController@getAuthenticatedUser');
    Route::get('users','App\Http\Controllers\UserController@getAllUsers');
});
