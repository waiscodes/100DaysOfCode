<?php 
  require './constants/constants.php';
  include './templates/header.php';

  $connection = new mysqli (HOST, USER, PASSWORD, DATABASE);
  if ($connection->connect_errno)
  {
    die("Connection failed". $connection->connect_error);
  }
  
  if (!isset($_GET['taskID']) || $_GET['taskID'] === '')
  {
    exit("wrong page gancho");
  }

  $taskID = NULL;
  if (filter_var($_GET['taskID'], FILTER_VALIDATE_INT))
  {
    $taskID = $_GET['taskID'];
  }
  else 
  {
    exit("that taskID not not a number");
  }

  $sql = "SELECT * FROM Tasks WHERE TaskID=$taskID";
  $result = $connection->query($sql);
  if (!$result)
  {
    exit("Houston we have a problem. No results fetched");
  }
  if (0 === $result->num_rows)
  {
    exit("No match for that ID");
  }
  
  $row = $result->fetch_assoc();
  $taskName = $row['TaskName'];
  $display = "display";

  if ($_POST)
  {
    $display = "none";
    $update = "UPDATE Tasks SET TaskStat = 'F' WHERE TaskID = $taskID";
    if ($connection->query($update))
    {
      ?>
        <a href="index.php">Go back to tasks</a>
      <?php
    }
    exit();
  }
?>

  <h4>Are you sure you finished "<?php echo $taskName; ?>"</h4>
  <form action="#" method="POST">
    <input type="hidden" name="taskID" value="<?php echo $taskID ?>">
    <input type="submit" value="Yes">
    <a href="index.php">No lol, I lied</a>
  </form>

<?php 
  $connection->close();
  include './templates/footer.php'; 
?>