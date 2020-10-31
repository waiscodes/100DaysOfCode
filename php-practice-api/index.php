<?php include "./templates/header.php";?>


<form action="#" method="GET">
  <label for="city-name">Search for a City</label>
  <input type="text" name="city" id="city-name">
  <input type="submit" value="Get coordinates">
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
    foreach ($coordinatesList as $item)
    {
      ?>
        <p>The coordinates (Lat, Long) of <?php echo $item->title; ?>: <?php echo $item->latt_long; ?></p>
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