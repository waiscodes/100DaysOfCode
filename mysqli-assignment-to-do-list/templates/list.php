<?php 
  $tasks_sql = "SELECT TaskID, TaskName, TaskDue, TaskStat, CatName
  FROM Tasks
  INNER JOIN Categories
  USING (CatID)
  ORDER BY TaskDue";

  $connection = new mysqli(HOST, USER, PASSWORD, DATABASE);
  if ($connection->connect_errno)
  {
    die("Connection Failed: " . $connection->connect_error);
  }
  if (!$task_results = $connection->query($tasks_sql))
  {
    echo "Yikes, something went wrong with the query";
    exit();
  }

  function output($show)
  {
    echo '<pre>';
    print_r($show);
    echo '</pre>';
  }

  
  // Extract from results
  $activeTasks = NULL;
  $finishedTasks = NULL;
  $overdueTasks = NULL;

  if (0 === $task_results->num_rows)
  {
    echo "couldn't get tasks for some reason";
  }
  else
  {
    while ($rows = $task_results->fetch_assoc())
    {
      if ($rows['TaskStat'] === "A")
      {
        if ($rows['TaskDue'] > date('Y-m-d'))
        {
          $activeTasks .= sprintf(
            '<tr>
              <td>%s</td>
              <td>%s</td>
              <td>%s</td>
              <td>
              <a href="complete.php?taskID=%s"><button>&#10003;</button></a>
              <a href="remove.php?taskID=%s"><button>&#215;</button></a>
              </td>
            </tr>',
            $rows['CatName'],
            $rows['TaskName'],
            $rows['TaskDue'],
            $rows['TaskID'],
            $rows['TaskID']
          );
        }
        else
        {
          $overdueTasks .= sprintf(
            '<tr>
              <td>%s</td>
              <td>%s</td>
              <td>%s</td>
              <td>
              <a href="complete.php?taskID=%s"><button>&#10003;</button></a>
              <a href="remove.php?taskID=%s"><button>&#215;</button></a>
              </td>
            </tr>',
            $rows['CatName'],
            $rows['TaskName'],
            $rows['TaskDue'],
            $rows['TaskID'],
            $rows['TaskID']
          );
        }
      }
      else
      {
        $finishedTasks .= sprintf(
          '<tr>
            <td>%s</td>
            <td>%s</td>
            <td>%s</td>
          </tr>',
          $rows['CatName'],
          $rows['TaskName'],
          $rows['TaskDue']
        );
      }
    }
  }
?>

<section>
  <h3>To do</h3>
  <table>
    <tr>
      <th>Category</th>
      <th>Task</th>
      <th>Due Date</th>
    </tr>
    <?php echo $activeTasks; ?>
  </table>

  <h3>Overdue</h3>
  <table>
    <tr>
      <th>Category</th>
      <th>Task</th>
      <th>Due Date</th>
    </tr>
    <?php echo $overdueTasks; ?>
  </table>

  <h3>Done</h3>
  <table>
    <tr>
      <th>Category</th>
      <th>Task</th>
      <th>Due Date</th>
    </tr>
    <?php echo $finishedTasks; ?>
  </table>
</section>
