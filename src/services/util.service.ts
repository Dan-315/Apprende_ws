import * as moment from 'moment';
import chalk from 'chalk';

const info=chalk.bold.cyan;
const error=chalk.bold.red;
const warn=chalk.bold.yellow;
const normal=chalk.bold.white;

class UtilService{


    log(origen:String,message:String,type?:"error"|"info"|"warn"){
        let typ,premess
        if(type=="error"){
            typ=error;
            premess=`--ERROR:\n${moment.utc().format("DD/MMMM/YYYY - HH:mm:ss")}`
        }else if(type=="info"){
            premess=`--INFO:\n${moment.utc().format("DD/MMMM/YYYY - HH:mm:ss")}`
            typ=info
        }else if(type=="warn"){
            premess=`--WARNING:\n${moment.utc().format("DD/MMMM/YYYY - HH:mm:ss")}`
            typ=warn
        }else {
            premess=`--MESSAGE:\n${moment.utc().format("DD/MMMM/YYYY - HH:mm:ss")}`
            typ=normal
        }
        
        console.log(typ("////////////////////////////////////////////////////////////////////////////////////////"));
        console.log(premess);
        console.log(`[${origen}]-->     ${message}`);
        console.log(typ("////////////////////////////////////////////////////////////////////////////////////////"));
    
        
    }
    getFecha(fromat:boolean,date?:string){
        let aux=date?moment.utc(new Date(date)):moment.utc()
        return fromat? 
            aux.format("DD/MMMM/YYYY - HH:mm:ss")  :  aux.toString()
    }
    getHora(time?:string){
        return time?moment.utc(new Date("Jan 01 2000 "+time)).format("HH:mm:ss"):moment.utc().format("HH:mm:ss")
    }

}

export const utilServ = new UtilService()