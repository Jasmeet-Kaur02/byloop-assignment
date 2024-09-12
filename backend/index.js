const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.use(express.json());

app.listen(process.env.PORT, (error) => {
    if(error) {
        console.log(`Error while running application ${error}`);
    }
    console.log(`Application is running on port ${process.env.PORT}`);
});
