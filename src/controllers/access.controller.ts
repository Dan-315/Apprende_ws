import { accesModel } from '../models/access.model';
import { utilServ } from '../services/util.service';

class AccesControll{

    async getAllAcces(){
        let res=await accesModel.find();
         return res
    }
    async getAcces(id:String){
        return await accesModel.findById(id);
    }
    async addAcces(acces:any){
        acces.fechaAcceso=utilServ.getFecha(false)
        let aux = await new accesModel(acces);
        await aux.save();
        return aux;
    }
    async dellAcces(id:String):Promise<Boolean>{ 
        if(await accesModel.findByIdAndDelete(id)!=null){
            return true;
        }
        return false;
    }
    async updatAcces(id:String,acces:any){
        return accesModel.findByIdAndUpdate(id,{$set:acces}, {new: true})
    }

}

export const accesCont = new AccesControll;