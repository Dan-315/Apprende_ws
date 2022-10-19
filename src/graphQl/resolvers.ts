import { accesCont } from "../controllers/access.controller";
import { gradeCont } from "../controllers/grade.controller";
import { userCont } from "../controllers/user.controller";
import { suscripCont } from "../controllers/suscrip.controller";

export const resolvers = {
    Query:{
        default: ()=> 'GraphQL default execution',

        getAllUsers: async ()=>{
            return await userCont.getUsers();
        },
        getUser: async (_:any,{id}:any)=>{
            return await userCont.getUser(id)
        },

        getAllAcces: async ()=>{
            return await accesCont.getAllAcces();
        },
        getAcces: async (_:any,{id}:any)=>{
            return await accesCont.getAcces(id);
        },

        getAllGrades: async ()=>{
            return await gradeCont.getAllGrades();
        },
        getGrade: async (_:any,{id}:any)=>{
            return await gradeCont.getGrade(id);
        },

        getAllSuscrip: async ()=>{
            return await suscripCont.getAllSuscrip();
        },
        getSuscrip: async(_:any,{id}:any)=>{
            return await suscripCont.getSuscrip(id);
        }

    },
    Mutation:{ 
        addUser: async (_:any, {user}:any,) =>{
            return await userCont.addUser(user);
        },
        updatUser: async (_:any, {id,user}:any,) =>{
            return await userCont.updatUser(id,user);
        },
        dellUser: async (_:any,{id}:any)=>{
            return await userCont.dellUser(id)
        },

        addAcces: async (_:any, {acces}:any,) =>{
            return await accesCont.addAcces(acces);
        },
        updatAcces: async (_:any, {id,acces}:any,) =>{
            return await accesCont.updatAcces(id,acces);
        },
        dellAcces: async (_:any,{id}:any)=>{
            return await accesCont.dellAcces(id)
        },

        addGrade: async (_:any, {grade}:any,) =>{
            return await gradeCont.addGrade(grade);
        },
        updatGrade: async (_:any, {id,grade}:any,) =>{
            return await gradeCont.updatGrade(id,grade);
        },
        dellGrade: async (_:any,{id}:any)=>{
            return await gradeCont.dellGrade(id)
        },

        addSuscrip: async(_:any, {suscrip}:any,) =>{
            return await suscripCont.addSuscrip(suscrip);
        },
        updatSuscrip: async (_:any, {id,suscrip}:any,) =>{
            return await suscripCont.updateSuscrip(id,suscrip);
        },
        dellSuscrip: async (_:any,{id}:any)=>{
            return await suscripCont.dellSuscrip(id);
        },
    }
}