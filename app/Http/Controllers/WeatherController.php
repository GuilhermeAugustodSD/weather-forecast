<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Http;

class WeatherController extends Controller
{
  public function getWeather($search)
  {
    $api_key = Config::get('services.weather_api_key');

    $url = "https://api.weatherapi.com/v1/forecast.json?q=$search&days=5&lang=pt&key=$api_key";

    $response = Http::withHeaders([
      'Content-Type' => 'application/json',
    ])->timeout(30)->post($url);

    if (!$response->successful()) {
      return response()->json(['error' => 'Erro ao consultar a API'], 404);
    }

    return $response->json();
  }

  public function getHistoryWeather(Request $request)
  {
    // https://api.weatherapi.com/v1/history.json?q=london&key=a1743f3a417840c192f180158241012&dt=2024-01-01
  }

  public function getAutoCompleteLocation($search)
  {
    $api_key = Config::get('services.weather_api_key');

    $url = "https://api.weatherapi.com/v1/search.json?q=$search&key=$api_key";
    $response = Http::withHeaders([
      'Content-Type' => 'application/json',
    ])->timeout(30)->get($url);

    if (!$response->successful()) {
      return response()->json(['error' => 'Erro ao consultar a API'], 401);
    }

    return $response->json();
  }
}
