import { suscripModel } from '../models/suscrip.model';
import { utilServ } from '../services/util.service';

class SuscripControll{

    async getSuscrip(suscrip:any){
        console.log("Intento---------->  getSuscrip");
        return await suscripModel.find(suscrip);
    }
    async addSuscrip(suscrip:any){
        console.log("Intento---------->  addSuscrip");
        suscrip.fechaCompra=utilServ.getFecha(false)
        let aux = await new suscripModel(suscrip);
        await aux.save();
        return aux;
    }
    async dellSuscrip(id:String):Promise<Boolean>{
        console.log("Intento---------->  dellSuscrip");
        if(await suscripModel.findByIdAndDelete(id)!=null){
            return true;
        }
        return false;
    }
    async updateSuscrip(id:String, suscrip:any){
        console.log("Intento---------->  updateSuscrip");
        return suscripModel.findByIdAndUpdate(id,{$set:suscrip}, {new: true})
    }

}

export const suscripCont = new SuscripControll;