<?php
class Articles
{
  public $id;
  public $title;
  public $content;

  function __construct ($idData = '', $titleData = '', $contentData = '')
  {
   $this->id = $idData;
   $this->title = $titleData;
   $this->content = $contentData;
  }

  function outPut()
  {
    ?>
    <article>
      <h2 id="<?php echo $this->id; ?>"><?php echo $this->title; ?></h2>
      <p><?php echo $this->content; ?></p>
    </article>
    <?php
  }
}
?>