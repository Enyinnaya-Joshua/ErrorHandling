import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";

const appStore = (app: Application) => {
  // MIDDLE-WARE
  app.use(express.json()).use(cors).use(morgan("dev"));
};

export default appStore;
