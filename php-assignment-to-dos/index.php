<?php 
  session_start();
  if (!isset($_SESSION['activeTasks'])){
    $_SESSION['activeTasks'] = array();
  }


  $GLOBALS['title'] = 'To Do List';
  include './templates/header.php';

  $newTask = FALSE;
  if (!empty($_POST) && trim($_POST['task']) != '')
  {
    $newTask = $_POST['task'];
    array_push($_SESSION['activeTasks'], "<input type=\"checkbox\" name=\"completed[]\" value=\"$newTask\" autofocus> $newTask");
  }

  if (isset($_POST["reset"]))
    {
    session_destroy();
    }
?>

<h1 class="screen-reader-text"><?php echo $GLOBALS['title'] ?></h1>
<h2>Add Task</h2>
<form action="index.php" method="POST">
  <label for="addTask">Add Task</label>
  <input type="text" name="task" id="addTask" value="" autofocus>

  <input type="submit" value="Add Task">
</form>

<h2>Active Tasks</h2>
<?php if (isset($_SESSION['activeTasks'])) : ?>
<form action="#" method="POST">
  <ul>
    <?php foreach ($_SESSION['activeTasks'] as $task) : ?>
      <li>
        <?php echo $task; ?>
      </li>
    <?php endforeach ?>
  </ul>
  <input type="submit" value="Finish Task">
  <input type="submit" name="reset" value="reset">
</form>
<?php endif; ?>


<?php
  $done = $_POST['completed'];
  if ($done) : ?>
    <h2>Completed Tasks</h2>
    <ul>
      <?php foreach ($done as $task) : ?>
        <li><?php echo $task?></li>
      <?php endforeach ?>
    </ul>
<?php endif ?>
<?php include './templates/footer.php' ?>