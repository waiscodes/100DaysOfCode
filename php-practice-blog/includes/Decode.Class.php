<?php
  class Decode
  {
    public $jsonFile;

    function __construct($dataString)
    {
      $this->jsonFile = $dataString;
    }

    function decodeJson()
    {
      $articlesArray = json_decode($this->jsonFile);
      return $articlesArray;
    }
  }
?>
