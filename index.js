const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const orderRoutes = require("./routes/orderRoutes");
const sequelize = require("./config/database");
require("dotenv").config();

app.use(bodyParser.json());
app.use("/api", orderRoutes);

app.get("/api", (req, res) => {
  res.send({ message: "Welcome to the API" });
});

app.get("/", (req, res) => {
  res.send({ message: `${process.env.MESSAGE}` });
});

// app.listen(process.env.PORT, () => {
//   console.log(`Server running at http://localhost:${process.env.PORT}`);
// });

const startServer = async () => {
  try {
    await sequelize.sync(); // Sincroniza o banco de dados
    app.listen(process.env.PORT, () => {
      console.log(`Server running at http://localhost:${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
