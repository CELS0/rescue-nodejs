import 'dotenv/config';
import "reflect-metadata";
import express from 'express';
import "./database";
import { router } from "./router";

const app = express();

app.use(express.json());

app.use(router)

app.listen(3000, ()=>{
    console.log('listening on port 3000');
});