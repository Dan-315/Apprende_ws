import { userModel } from '../models/users.model';
import { utilServ } from '../services/util.service';

class UserControll{

    async getUser(user:any){
        utilServ.log("User Service","Intento---------->  getUser");
        return await userModel.find(user);
    }
    async addUser(user:any){
        utilServ.log("User Service","Intento---------->  addUser");
        let aux = await new userModel(user);
        await aux.save();
        return aux;
    }
    async dellUser(id:String):Promise<Boolean>{ 
        utilServ.log("User Service","Intento---------->  dellUser");
        if(await userModel.findByIdAndDelete(id)!=null){
            return true;
        }
        return false;
    }
    async updatUser(id:String,user:any){
        utilServ.log("User Service","Intento---------->  updatUser");
        return userModel.findByIdAndUpdate(id,{$set:user}, {new: true})
    }

}

export const userCont = new UserControll;