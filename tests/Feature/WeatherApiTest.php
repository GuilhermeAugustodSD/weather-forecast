<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Config;

class WeatherApiTest extends TestCase
{
  public function test_get_weather_successful()
  {
    Config::set('services.weather_api_key', 'fake_api_key');

    Http::fake([
      'https://api.weatherapi.com/v1/forecast.json*' => Http::response([
        'location' => ['name' => 'São Paulo'],
        'current' => ['temp_c' => 25],
        'forecast' => ['forecastday' => []]
      ], 200),
    ]);

    $response = $this->get('/api/weather/SaoPaulo');

    $response->assertStatus(200);
    $response->assertJsonFragment(['name' => 'São Paulo']);
    $response->assertJsonPath('current.temp_c', 25);
  }

  public function test_get_weather_missing_api_key()
  {
    Config::set('services.weather_api_key', null);

    $response = $this->get('/api/weather/SaoPaulo');

    $response->assertStatus(500);
    $response->assertJsonFragment(['error' => 'API key is missing']);
  }

  public function test_get_weather_api_failure()
  {
    Config::set('services.weather_api_key', 'fake_api_key');

    Http::fake([
      'https://api.weatherapi.com/v1/forecast.json*' => Http::response(['error' => ['message' => 'Invalid request']], 400),
    ]);

    $response = $this->get('/api/weather/InvalidCity');

    $response->assertStatus(400);
    $response->assertJsonFragment(['error' => 'Failed to fetch weather data']);
    $response->assertJsonPath('message', 'Invalid request');
  }

  public function test_get_auto_complete_location_successful()
  {
    Config::set('services.weather_api_key', 'fake_api_key');

    Http::fake([
      'https://api.weatherapi.com/v1/search.json*' => Http::response([
        ['name' => 'São Paulo', 'region' => 'São Paulo', 'country' => 'Brazil'],
        ['name' => 'São José', 'region' => 'Santa Catarina', 'country' => 'Brazil']
      ], 200),
    ]);

    $response = $this->get('/api/weather/city/autocomplete/Sao');

    $response->assertStatus(200);
    $response->assertJsonCount(2);
    $response->assertJsonFragment(['name' => 'São Paulo']);
  }

  public function test_get_auto_complete_location_failure()
  {
    Config::set('services.weather_api_key', 'fake_api_key');

    Http::fake([
      'https://api.weatherapi.com/v1/search.json*' => Http::response(['error' => ['message' => 'Invalid request']], 400),
    ]);

    $response = $this->get('/api/weather/city/autocomplete/InvalidQuery');

    $response->assertStatus(400);
    $response->assertJsonFragment(['error' => 'Failed to fetch autocomplete locations']);
    $response->assertJsonPath('message', 'Invalid request');
  }

  public function test_get_auto_complete_location_missing_api_key()
  {
    Config::set('services.weather_api_key', null);

    $response = $this->get('/api/weather/city/autocomplete/Sao');

    $response->assertStatus(500);
    $response->assertJsonFragment(['error' => 'API key is missing']);
  }
}
