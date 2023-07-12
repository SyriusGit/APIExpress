import express from "express";
import {config} from "dotenv";

config();

const app = express();
const port = process.env.PORT || 3333;
app.get("/teste", (request, response) => {response.send("Atenção terráqueos, o Grêmio vai sair campeão!!!")})
app.listen(port, () => console.log(`listening on port ${port}!`));
