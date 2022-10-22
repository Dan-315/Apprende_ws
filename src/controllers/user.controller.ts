import { userModel } from '../models/users.model';

class UserControll{

    async getUser(user:any){
        return await userModel.find(user);
    }
    async addUser(user:any){
        let aux = await new userModel(user);
        await aux.save();
        return aux;
    }
    async dellUser(id:String):Promise<Boolean>{ 
        if(await userModel.findByIdAndDelete(id)!=null){
            return true;
        }
        return false;
    }
    async updatUser(id:String,user:any){
        return userModel.findByIdAndUpdate(id,{$set:user}, {new: true})
    }

}

export const userCont = new UserControll;