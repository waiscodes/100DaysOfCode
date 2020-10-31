<?php 
  $GLOBALS['title'] = 'PHP Practice Blog';
  include './templates/header.php';
  require_once './includes/Article.Class.php';
  require_once './includes/Decode.Class.php';
?>

<?php
  $articlesFileString = file_get_contents('./data/articles.json');
  $articlesArray = new Decode($articlesFileString);

  $decodedJSON = $articlesArray->decodeJson();
  
  foreach ($decodedJSON as $object)
  {
    $newArticles = new Articles($object->id, $object->title, $object->content);
    $newArticles->outPut();
  }
?>


<?php 
  include './templates/footer.php';
?>
