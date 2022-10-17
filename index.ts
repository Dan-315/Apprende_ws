import express, { Express, Request, Response } from 'express';
import { apprendeDB } from './config/database';
import dotenv from 'dotenv';
import { utilServ } from './src/services/util.service';
import { ApolloServer}  from 'apollo-server-express';
import { typeDefs } from './src/graphQl/typeDefs'
import { resolvers } from './src/graphQl/resolvers'

async function start(){

  dotenv.config();

  const app: Express = express();
  const port = process.env.PORT;

  const apolloServ =new ApolloServer({
    typeDefs,
    resolvers
  })
  
  await apolloServ.start();

  apolloServ.applyMiddleware({app})
   
  app.get('/',(req,res)=>res.send("Apprende API"))
  app.get('*',(req,res)=>res.status(404).send("Ruta no encontrada"))

  app.listen(port, () => {
    utilServ.log(`http://localhost:${port}`,"Servidor iniciado","info");
  });
  
  apprendeDB.initConect(process.env.DBHOST||""
    ,   process.env.DBNAME||""
    );
}

start();
  