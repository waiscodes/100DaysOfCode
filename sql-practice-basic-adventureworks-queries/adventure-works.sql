-- What kind of credit card does Ms. Carla J. Adams own?
SELECT `ContactID`, `Title`, `FirstName`, `MiddleName`, `LastName`
FROM `contact` 
WHERE `Title` = 'Ms.'
AND `FirstName`= 'Carla'
AND `MiddleName` = 'J.'
AND `LastName` = 'Adams';
--First find the correct Carla. Her contactID is 8

SELECT C.ContactID, C.Title, C.FirstName, C.MiddleName, C.LastName, CC.CreditCardID
FROM contact as C, contactcreditcard as CC 
WHERE C.ContactID = CC.ContactID
AND C.`ContactID` = 8;
--Find the credit card ID in the contactcreditcard associative entity which is 8937

SELECT C.ContactID, C.Title, C.FirstName, C.MiddleName, C.LastName, CC.CreditCardID, cr.CardType
FROM contact as C, contactcreditcard as CC, creditcard as cr 
WHERE C.ContactID = CC.ContactID
AND C.`ContactID` = 8
AND CC.CreditCardID = cr.CreditCardID;
--The final query connects contactcreditcard with creditcard and showed type. which is Vista

--

--
-- Print all of the addresses for customer with account number AW00000222
SELECT *
FROM customer
WHERE `AccountNumber` = 'AW00000222'
--Find the customer first

SELECT c.CustomerID, ca.AddressID, ca.AddressTypeID
FROM customer as c, customeraddress as ca
WHERE `AccountNumber` = 'AW00000222'
--Find the AddressID and AddressTypeID

SELECT c.AccountNumber, adt.Name, ad.AddressLine1, ad.City, sp.Name, ad.PostalCode
FROM customer as c, customeraddress as ca, address as ad, addresstype as adt, stateprovince as sp
WHERE `AccountNumber` = 'AW00000222'
AND c.CustomerID = ca.CustomerID
AND ca.AddressID = ad.AddressID
AND ca.AddressTypeID = adt.AddressTypeID
AND ad.StateProvinceID = sp.StateProvinceID
--The whole address for the specified customer including state

-- Query: Print the city of the customer with customer ID number 40
SELECT ad.City
FROM customer as c, customeraddress as ca, address as ad
WHERE c.CustomerID = 40
AND c.CustomerID = ca.CustomerID
AND ca.AddressID = ad.AddressID
--city = Laredo

-- Challenge Insert: Add a home address for customer with account number AW00000222. Address is 1 Churchill Square Edmonton AB A1A 1A1
-- 1. INSERT INTO address (AddressLine1, City, StateProvinceID, PostalCode)
INSERT INTO address (`AddressLine1`, `City`, `StateProvinceID`, `PostalCode`) 
VALUES('1 Churchill Square', 'Edmonton', 1, 'A1A A1A')-- AddressID: 32522 
-- 2. INSERT INTO addresstype (Name)
INSERT INTO addresstype (`Name`)
VALUES ('Home'); -- AddresstypeID = 7
-- 3. INSERT INTO customeraddress (CustomerID, AddressID, AddressTypeID)
INSERT INTO customeraddress (`CustomerID`, `AddressID`, `AddressTypeID`)
VALUES (222, 32522, 7)
