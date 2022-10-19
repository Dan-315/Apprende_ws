import { suscripModel } from '../models/suscrip.model';

class SuscripControll{

    async getAllSuscrip(){
        return await suscripModel.find();
    }
    async getSuscrip(id:String){
        return await suscripModel.findById(id);
    }
    async addSuscrip(suscrip:any){
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