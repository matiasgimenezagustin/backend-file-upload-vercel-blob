import ENVIROMENT from "./config/enviroment.js";
import express from "express";


const app = express();

app.get("/", (req, res) => {
    res.json(
        {
            message: "Hello World",
            status: 200,
            ok: true
        }
    )
})

app.listen(ENVIROMENT.PORT, () => {
    console.log(`Server running on port ${ENVIROMENT.PORT}`);
})