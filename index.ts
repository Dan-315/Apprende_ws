import express, { Express, Request, Response } from 'express';
import { apprendeDB } from './config/database';
import dotenv from 'dotenv';
import { utilServ } from './services/util.service';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});
 
app.listen(port, () => {
  utilServ.log(`https://localhost:${port}`,"Servidor iniciado","info");
});

apprendeDB.initConect(process.env.DBHOST||""
    ,   process.env.DBNAME||""
    );  