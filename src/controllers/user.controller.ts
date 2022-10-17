import { userModel } from '../models/users.model';

class UserControll{

    async getUsers(){
        return await userModel.find();
    }
    async getUser(id:String){
        return await userModel.findById(id);
    }
    async addUser(nombre:String,apePat:String,apeMat:String,pasword:String,telefono:String,email:String){
        let user = await new userModel({nombre,apePat,apeMat,pasword,telefono,email});
        await user.save();
        return user;
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