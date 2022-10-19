import { gradeModel } from '../models/grade.model';
import { utilServ } from '../services/util.service';

class GradeControll{

    async getAllGrades(){
        let res=await gradeModel.find();
         return res
    }
    async getGrade(id:String){
        return await gradeModel.findById(id);
    }
    async addGrade(grade:any){
        let horario=[]
        for(let hora of grade.horario){
            horario.push(utilServ.getHora(hora))
        }
        grade.horario=horario
        let aux = await new gradeModel(grade);
        await aux.save();
        return aux;
    }
    async dellGrade(id:String):Promise<Boolean>{ 
        if(await gradeModel.findByIdAndDelete(id)!=null){
            return true;
        }
        return false;
    }
    async updatGrade(id:String,grade:any){
        return gradeModel.findByIdAndUpdate(id,{$set:grade}, {new: true})
    }

}

export const gradeCont = new GradeControll;