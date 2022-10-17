
import { utilServ } from './../src/services/util.service';
import mongoose from 'mongoose';

class ConectDB { 
    initConect(host:string, db:string){
        mongoose.connect(host, {dbName:db})
            .then(()=>{
                utilServ.log(host+db,"Conectado satisfactoriamente","info");
            }).catch((error:Error)=>{
                utilServ.log(host+db,error.message,"error");
            })
    }
} 

export const apprendeDB = new ConectDB()