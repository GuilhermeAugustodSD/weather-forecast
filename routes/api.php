<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WeatherController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::controller(WeatherController::class)->prefix("/weather")->group(function(){
  Route::get('/city/autocomplete/{search}', 'getAutoCompleteLocation')->name('weather.getAutoCompleteLocation');
  Route::get('/{search}', 'getWeather')->name('weather.getWeather');
});
