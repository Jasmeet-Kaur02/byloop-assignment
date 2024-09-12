const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./app/database");
const router = require("./app/routes");
const app = express();

dotenv.config();
app.use(express.json());
connectDB();

app.use("/", router);

app.listen(process.env.PORT, (error) => {
  if (error) {
    console.log(`Error while running application ${error}`);
  }
  console.log(`Application is running on port ${process.env.PORT}`);
});
