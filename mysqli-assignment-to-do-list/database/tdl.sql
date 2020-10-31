DROP TABLE IF EXISTS Tasks;
DROP TABLE IF EXISTS Categories;

CREATE TABLE Categories (
  CatID int(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  CatName varchar(45) NOT NULL
);

CREATE TABLE Tasks (
  TaskID int(10) PRIMARY KEY AUTO_INCREMENT,
  CatID int(10), 
  TaskName varchar(20) NOT NULL,
  TaskDue varchar(30) NOT NULL,
  TaskStat char(1) NOT NULL,
  CONSTRAINT CK_Tasks_TaskStat CHECK (TaskStat IN ('A', 'F')),
  CONSTRAINT FOREIGN KEY FK_Tasks_Categories (CatID) REFERENCES Categories(CatID)
);

INSERT INTO Categories (`CatName`)
VALUES 
  ('Education'),
  ('Health'),
  ('Finance'),
  ('House Work'),
  ('Misc');

INSERT INTO Tasks (`CatID`, `TaskName`, `TaskDue`, `TaskStat`)
VALUES 
  ('3', 'Do Taxes', '2020-10-21', 'A'),
  ('4', 'Laundry', '2020-10-5', 'A'),
  ('1', 'To Do List', '2020-10-19', 'A'),
  ('4', 'Clean Dishes', '2020-10-16', 'A'),
  ("4", "Hockey", "2020-05-20", "F"),
  ("4", "Soccer", "2020-05-10", "F");

