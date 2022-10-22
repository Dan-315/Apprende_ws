import { suscripModel } from '../models/suscrip.model';
import { utilServ } from '../services/util.service';

class SuscripControll{

    async getSuscrip(suscrip:any){
        return await suscripModel.find(suscrip);
    }
    async addSuscrip(suscrip:any){
        suscrip.fechaCompra=utilServ.getFecha(false)
        let aux = await new suscripModel(suscrip);
        await aux.save();
        return aux;
    }
    async dellSuscrip(id:String):Promise<Boolean>{
        if(await suscripModel.findByIdAndDelete(id)!=null){
            return true;
        }
        return false;
    }
    async updateSuscrip(id:String, suscrip:any){
        return suscripModel.findByIdAndUpdate(id,{$set:suscrip}, {new: true})
    }

}

export const suscripCont = new SuscripControll;