import express, { Application, Response, Request } from "express";
import dbConfig from "./config/db";
import appStore from "./app";
const port: number = 4000;

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "server is up and running",
  });
});

dbConfig();

appStore(app);

app.listen(port, () => {
  console.log(`listening to port: ${port}`);
});
