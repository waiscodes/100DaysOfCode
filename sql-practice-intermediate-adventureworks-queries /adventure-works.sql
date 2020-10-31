-- Query: Determine the employee with the highest accumulated vacation hours.
SELECT Concat(contact.FirstName, contact.LastName) FullName, employee.VacationHours
FROM contact, employee
WHERE employee.ContactID = contact.ContactID 
AND employee.VacationHours = (SELECT MAX(employee.VacationHours) FROM employee)

-- Query: Determine how many employees there are whose names start with the letter S.
SELECT COUNT(`FirstName`)
FROM contact, employee
WHERE contact.FirstName LIKE 'S%'
AND employee.ContactID = contact.ContactID

-- Query: Determine the current pay rate of the CEO of Adventure Works.
SELECT employeepayhistory.Rate
FROM employeepayhistory
WHERE employeepayhistory.EmployeeID = (
    SELECT EmployeeID
	FROM employee
	WHERE employee.Title = 'Chief Executive Officer'
	)

-- Query: Determine how many employees are currently employed in each department.
SELECT COUNT(`EmployeeID`)
FROM employeedepartmenthistory
GROUP BY employeedepartmenthistory.DepartmentID