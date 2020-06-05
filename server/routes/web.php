<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('/logout', 'HomeController@logout')->name('logout');
// Route::post('/login', '\App\Http\Controllers\Auth\LoginController@login')->name('login');
Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');
Route::get('/home', function (Request $request){
  echo json_encode(['success' => 'You are authenticated']);
});

Route::get('/checkout', 'HomeController@checkout')->name('checkout');
Route::post('/pay', 'HomeController@pay')->name('pay');
Route::get('/check-login', 'HomeController@checkLoggedIn');
Route::get('/client-secret', function (Request $request) {
  return json_encode(['client_secret' => session()->get('client_secret')]);
});

Route::get('/cart-items', 'HomeController@cartItems');
Route::post('/addToCart', 'HomeController@addToCart');

