import { accesModel } from '../models/access.model';
import { utilServ } from '../services/util.service';

class AccesControll{

    async getAcces(acces:any){
        utilServ.log("Access Service","Intento---------->  getAcces");
        return await accesModel.find(acces);
    }
    async addAcces(acces:any){
        utilServ.log("Access Service","Intento---------->  addAcces");
        acces.fechaAcceso=utilServ.getFecha(false)
        let aux = await new accesModel(acces);
        await aux.save();
        return aux;
    }
    async dellAcces(id:String):Promise<Boolean>{ 
        utilServ.log("Access Service","Intento---------->  dellAcces");
        if(await accesModel.findByIdAndDelete(id)!=null){
            return true;
        }
        return false;
    }
    async updatAcces(id:String,acces:any){
        utilServ.log("Access Service","Intento---------->  updatAcces");
        return accesModel.findByIdAndUpdate(id,{$set:acces}, {new: true})
    }

}

export const accesCont = new AccesControll;