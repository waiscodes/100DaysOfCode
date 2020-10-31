<?php 
  include './templates/header.php';
  require './constants/constants.php';
  $message = NULL;

  if ($_POST) // Insert Tasks into Database
  {

    $connection = new MySQLi(HOST, USER, PASSWORD, DATABASE);
    if($connection->connect_errno) 
    {
        die('Connection failed: ' . $connection->connect_error);
    }
    $insertStatement = $connection->prepare(
      "INSERT INTO Tasks (CatID, TaskName, TaskDue, TaskStat)
      VALUES(?,?,?,?)"
    );
    $insertStatement->bind_param(
      "isss", $_POST['category'], $_POST['taskName'], $_POST['dueDate'], $_POST['taskStat'] 
    );
    if ($insertStatement->execute()) 
    {
      if ($_POST['dueDate'] === '2020-11-05')
      {
        $message = "<h3>Remember, Remember. The 5th of November</h3>";
      }
      else 
      {
        $message = "<h3> Pitter Patter, lets get at er</h3>";
      }
      
    }
    else
    {
      echo "Yikes something went wrong, didn't add to database";
    }
  }

  $date = date_create(date('y-m-d'));
  date_add($date, date_interval_create_from_date_string('2 days'));
  $setDate = date_format($date, 'Y-m-d');
  // I needed a way to add dates and I found this on php.net
  // https://www.php.net/manual/en/datetime.add.php
?>

  <form action="#" method="POST">
    <label for="taskName">Task: </label>
    <input type="text" name="taskName" id="taskName">
    <label for="category">Category: </label>
    <select name="category" id="category">
      <option value=""></option>
      <option value="1">Education</option>
      <option value="2">Health</option>
      <option value="3">Finance</option>
      <option value="4">House Work</option>
      <option value="5">Misc</option>
    </select>
    <label for="dueDate">Due Date: </label>
    <input type="date" name="dueDate" id="dueDate" value="<?php echo $setDate; ?>">
    <input type="hidden" name="taskStat" value="A">
    <input type="submit" value="Submit">
  </form>
  <?php echo $message; ?>
<?php 
  include './templates/list.php';
  $connection->close();
?>

<?php include './templates/footer.php'; ?>