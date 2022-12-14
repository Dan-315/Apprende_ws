import { accesCont } from "../controllers/access.controller";
import { gradeCont } from "../controllers/grade.controller";
import { userCont } from "../controllers/user.controller";
import { suscripCont } from "../controllers/suscrip.controller";

export const resolvers = {
    Query:{
        default: ()=> 'GraphQL default execution',

        getUser: async (_:any,{user}:any)=>{
            return await userCont.getUser(user)
        },

        getAccess: async (_:any,{acces}:any)=>{
            return await accesCont.getAcces(acces);
        },

        getGrade: async (_:any,{grade}:any)=>{
            return await gradeCont.getGrade(grade);
        },

        getSuscrip: async(_:any,{suscrip}:any)=>{
            return await suscripCont.getSuscrip(suscrip);
        },

        getGradeWhitOut: async (_:any,{grade}:any)=>{
            return await gradeCont.getGradeWhitOut(grade);
        }, 

        getGradeSuscripted: async (_:any,prams:any)=>{
            console.log(prams);
            
            let {user,sucripted}=prams;

            console.log(user,sucripted);
            

            let suscrips=await suscripCont.getSuscrip({idUsuario:user.id});
            console.log(suscrips);
            let ids=[]
            for(let suscrip of suscrips){
                if(suscrip.idCurso)
                    ids.push(suscrip.idCurso);
            }
            console.log(ids);
            
            return await gradeCont.getGradeSuscripted(ids,user.id,sucripted);
        },

        CountSuscripPerGrade: async(_:any,{grade}:any)=>{
            let suscrips=await suscripCont.getSuscrip({idCurso:grade.id});
            return suscrips.length;
        },
        

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
        updateSuscrip: async (_:any, {id,suscrip}:any,) =>{
            return await suscripCont.updateSuscrip(id,suscrip);
        },
        dellSuscrip: async (_:any,{id}:any)=>{
            return await suscripCont.dellSuscrip(id);
        },
    }
}