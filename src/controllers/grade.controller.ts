import { gradeModel } from '../models/grade.model';
import { utilServ } from '../services/util.service';

class GradeControll{

    async getGrade(grade:any){
        console.log("Intento---------->  getGrade");
        return await gradeModel.find(grade);
    }
    async addGrade(grade:any){
        console.log("Intento---------->  addGrade");
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
        console.log("Intento---------->  dellGrade");
        if(await gradeModel.findByIdAndDelete(id)!=null){
            return true;
        }
        return false;
    }
    async updatGrade(id:String,grade:any){
        console.log("Intento---------->  updatGrade");
        return gradeModel.findByIdAndUpdate(id,{$set:grade}, {new: true})
    }

}

export const gradeCont = new GradeControll;