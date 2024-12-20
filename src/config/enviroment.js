import dotenv from "dotenv";
dotenv.config();

const ENVIROMENT = {
    PORT: process.env.PORT || 3000,
}

export default ENVIROMENT