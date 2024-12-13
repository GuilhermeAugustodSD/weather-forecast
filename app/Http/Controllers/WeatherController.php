<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Http;

class WeatherController extends Controller
{
  public function getWeather($search)
  {
    try {
      $api_key = Config::get('services.weather_api_key');

      if (empty($api_key)) {
        return response()->json(['error' => 'API key is missing'], 500);
      }

      $url = "https://api.weatherapi.com/v1/forecast.json?q=$search&days=5&lang=pt&key=$api_key";

      $response = Http::withHeaders([
        'Content-Type' => 'application/json',
      ])->timeout(30)->get($url);

      if (!$response->successful()) {
        return response()->json([
          'error' => 'Failed to fetch weather data',
          'status_code' => $response->status(),
          'message' => $response->json('error.message') ?? 'Unknown error'
        ], $response->status());
      }

      return response()->json($response->json());
    } catch (\Illuminate\Http\Client\RequestException $e) {
      return response()->json([
        'error' => 'Request failed',
        'message' => $e->getMessage()
      ], 408);
    } catch (\Exception $e) {
      return response()->json([
        'error' => 'An unexpected error occurred',
        'message' => $e->getMessage()
      ], 500);
    }
  }

  public function getAutoCompleteLocation($search)
  {
    try {
      $api_key = Config::get('services.weather_api_key');

      if (empty($api_key)) {
        return response()->json(['error' => 'API key is missing'], 500);
      }

      $url = "https://api.weatherapi.com/v1/search.json?q=$search&key=$api_key";

      $response = Http::withHeaders([
        'Content-Type' => 'application/json',
      ])->timeout(30)->get($url);

      if (!$response->successful()) {
        return response()->json([
          'error' => 'Failed to fetch autocomplete locations',
          'status_code' => $response->status(),
          'message' => $response->json('error.message') ?? 'Unknown error'
        ], $response->status());
      }

      return response()->json($response->json());
    } catch (\Illuminate\Http\Client\RequestException $e) {
      return response()->json([
        'error' => 'Request failed',
        'message' => $e->getMessage()
      ], 408);
    } catch (\Exception $e) {
      return response()->json([
        'error' => 'An unexpected error occurred',
        'message' => $e->getMessage()
      ], 500);
    }
  }
}
