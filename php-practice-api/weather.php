<?php include "./templates/header.php";?>


<form action="#" method="GET">
  <label for="city-name">Search for a City</label>
  <input type="text" name="city" id="city-name" autofocus>
  <input type="submit" value="Get Forecast">
</form>
<?php
  
if (isset($_GET['city']) && !empty($_GET['city']))
{
  $coordinatesResponse = file_get_contents(
    "https://www.metaweather.com/api/location/search/?query={$_GET['city']}"
  );
  if ($coordinatesResponse)  
  {
    $coordinatesList = json_decode($coordinatesResponse);
    foreach ($coordinatesList as $city)
    {
      $cityWeatherResponse = file_get_contents(
        "https://www.metaweather.com/api/location//api/location/{$city->woeid}/"
      );
      $cityWeatherList = json_decode($cityWeatherResponse);
      ?>
      <h2>Today's Forecast for <?php echo $city->title ?></h2>
        
        <p>
          Weather: <?php echo $cityWeatherList->consolidated_weather[0]->weather_state_name?>
        </p>
        <p>
        Wind: <?php echo " {$cityWeatherList->consolidated_weather[0]->wind_speed} km/h {$cityWeatherList->consolidated_weather[0]->wind_direction_compass}";
          ?>
        </p>
        <p>
          Temperature: <?php echo $cityWeatherList->consolidated_weather[0]->the_temp?>
        </p>
        <p>
          Humidity: <?php echo $cityWeatherList->consolidated_weather[0]->humidity?>
        </p>
      <?php
    }
  }
  else
  {
    echo "Sorry, we don't have this city";
  }

}
?>
<?php include "./templates/footer.php";?>