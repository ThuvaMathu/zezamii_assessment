import express from "express";
import pkg from "mssql";

const dataRouter = express.Router();
// insert dummy data into table
dataRouter.post("/insert", async (req, res) => {
  const { pool } = req.app.locals;

  try {
    const insertDummyDataQuery = `
    -- Inserting into Products table with Vegetables
    INSERT INTO Products (ProductName, Price) VALUES
    ('Tomato', 1.50),
    ('Potato', 0.99),
    ('Carrot', 0.89),
    ('Cucumber', 1.20),
    ('Onion', 1.10),
    ('Lettuce', 1.30),
    ('Spinach', 1.75),
    ('Garlic', 2.50),
    ('Broccoli', 2.00),
    ('Bell Pepper', 1.80),
    ('Zucchini', 1.60),
    ('Eggplant', 2.10),
    ('Sweet Corn', 1.70),
    ('Pumpkin', 2.50),
    ('Cauliflower', 2.20),
    ('Cabbage', 1.40),
    ('Peas', 1.90),
    ('Green Beans', 1.85),
    ('Mushroom', 2.80),
    ('Asparagus', 3.00);
  
    -- Inserting into Customers table
    INSERT INTO Customers (CustomerName, Email) VALUES
    ('John Doe', 'john@example.com'),
    ('Jane Smith', 'jane@example.com'),
    ('Alice Johnson', 'alice.johnson@example.com'),
    ('Bob Williams', 'bob.williams@example.com'),
    ('Charlie Brown', 'charlie.brown@example.com'),
    ('Dave Harris', 'dave.harris@example.com'),
    ('Eve Adams', 'eve.adams@example.com'),
    ('Frank White', 'frank.white@example.com'),
    ('Grace Davis', 'grace.davis@example.com'),
    ('Hannah Scott', 'hannah.scott@example.com'),
    ('Isaac Lee', 'isaac.lee@example.com'),
    ('Jack Turner', 'jack.turner@example.com'),
    ('Karen Walker', 'karen.walker@example.com'),
    ('Liam King', 'liam.king@example.com'),
    ('Mia Thompson', 'mia.thompson@example.com'),
    ('Noah Green', 'noah.green@example.com'),
    ('Olivia Clark', 'olivia.clark@example.com'),
    ('Paul Lewis', 'paul.lewis@example.com'),
    ('Quinn Allen', 'quinn.allen@example.com'),
    ('Rachel Carter', 'rachel.carter@example.com');
  
-- Inserting into Orders table with different dates
INSERT INTO Orders (CustomerID, OrderDate) VALUES
(1, '2024-09-01 14:30:00'), 
(2, '2024-09-02 10:15:00'), 
(3, '2024-09-03 09:45:00'), 
(4, '2024-09-04 12:00:00'), 
(5, '2024-09-05 15:20:00'), 
(6, '2024-09-06 11:30:00'), 
(7, '2024-09-07 13:50:00'), 
(8, '2024-09-08 16:10:00'), 
(9, '2024-09-09 09:05:00'), 
(10, '2024-09-10 14:00:00'), 
(11, '2024-09-11 11:45:00'), 
(12, '2024-09-12 10:30:00'), 
(13, '2024-09-13 12:20:00'), 
(14, '2024-09-14 17:00:00'), 
(15, '2024-09-15 14:45:00'), 
(16, '2024-09-16 15:30:00'), 
(17, '2024-09-17 16:20:00'), 
(18, '2024-09-18 13:15:00'), 
(19, '2024-09-19 11:50:00'), 
(20, '2024-09-20 10:05:00');

    -- Inserting into OrderItems table
    INSERT INTO OrderItems (OrderID, ProductID, Quantity) VALUES
    (1, 1, 5), (1, 2, 3), (1, 3, 2),
    (2, 4, 4), (2, 5, 6), (2, 6, 1),
    (3, 7, 2), (3, 8, 5), (3, 9, 3),
    (4, 10, 4), (4, 11, 6), (4, 12, 2),
    (5, 13, 7), (5, 14, 3), (5, 15, 4),
    (6, 16, 2), (6, 17, 5), (6, 18, 3),
    (7, 19, 6), (7, 20, 7), (7, 1, 8),
    (8, 2, 9), (8, 3, 2), (8, 4, 4),
    (9, 5, 2), (9, 6, 3), (9, 7, 5),
    (10, 8, 2), (10, 9, 4), (10, 10, 3),
    (11, 11, 5), (11, 12, 2), (11, 13, 6),
    (12, 14, 2), (12, 15, 4), (12, 16, 3),
    (13, 17, 5), (13, 18, 2), (13, 19, 6),
    (14, 20, 7), (14, 1, 2), (14, 2, 3),
    (15, 3, 5), (15, 4, 2), (15, 5, 4),
    (16, 6, 3), (16, 7, 5), (16, 8, 2),
    (17, 9, 4), (17, 10, 3), (17, 11, 6),
    (18, 12, 2), (18, 13, 5), (18, 14, 7),
    (19, 15, 2), (19, 16, 3), (19, 17, 4),
    (20, 18, 6), (20, 19, 5), (20, 20, 7);
  `;

    await pool.request().query(insertDummyDataQuery);
    res.send("Dummy data inserted successfully");
  } catch (err) {
    res.status(500).send("Error inserting dummy data: " + err);
  }
});

export default dataRouter;
