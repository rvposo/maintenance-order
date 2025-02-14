const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const orderRoutes = require("./routes/orderRoutes");
require("dotenv").config();

app.use(bodyParser.json());
app.use("/", orderRoutes);

app.get("/", (req, res) => {
  res.send({ message: `${process.env.MESSAGE}` });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
