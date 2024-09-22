import dotenv from "dotenv";
import express from "express";
import pkg from "mssql";
import dbRouters from "./routers/dbRoutes.js";
import dataRouter from "./routers/dataRouter.js";

dotenv.config();

const { connect } = pkg;
const app = express();
app.use(express.json());
const port = process.env.PORT || 3002;

// DB configuration
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

async function connectToDatabase() {
  console.log("Connecting to database...");
  try {
    const pool = await connect(dbConfig);
    console.log("Connected to MSSQL database");

    // Check and create tables if not exist
    await createTables(pool);
    console.log("Tables are ready");

    return pool;
  } catch (err) {
    console.error("Database connection failed:", err);
  }
}

// SQL to create tables
async function createTables(pool) {
  const createTablesQuery = `
    IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Products' AND xtype='U')
    CREATE TABLE Products (
      ProductID INT PRIMARY KEY IDENTITY(1,1),
      ProductName NVARCHAR(100),
      Price DECIMAL(10, 2)
    );

    IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Customers' AND xtype='U')
    CREATE TABLE Customers (
      CustomerID INT PRIMARY KEY IDENTITY(1,1),
      CustomerName NVARCHAR(100),
      Email NVARCHAR(100)
    );

    IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Orders' AND xtype='U')
    CREATE TABLE Orders (
      OrderID INT PRIMARY KEY IDENTITY(1,1),
      CustomerID INT,
      OrderDate DATETIME,
      FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
    );

    IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='OrderItems' AND xtype='U')
    CREATE TABLE OrderItems (
      OrderItemID INT PRIMARY KEY IDENTITY(1,1),
      OrderID INT,
      ProductID INT,
      Quantity INT,
      FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
      FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
    );
  `;
  await pool.request().query(createTablesQuery);
}

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  const pool = await connectToDatabase();
  app.locals.pool = pool;
  app.use("/db", dbRouters);
  app.use("/dummy", dataRouter);
});
