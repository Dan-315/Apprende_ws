import { userCont } from "../controllers/user.controller";

export const resolvers = {
    Query:{
        default: ()=> 'GraphQL default execution',
        getAllUsers: async ()=>{
            return await userCont.getUsers();
        },
        getUser: async (_:any,{id}:any)=>{
            return await userCont.getUser(id)
        }
    },
    Mutation:{ 
        addUser: async (_:any, {user}:any,) =>{
            let {nombre,apePat,apeMat,pasword,telefono,email} = user;
            return await userCont.addUser(nombre,apePat,apeMat,pasword,telefono,email);
        },
        updatUser: async (_:any, {id,user}:any,) =>{
            return await userCont.updatUser(id,user);
        },
        dellUser: async (_:any,{id}:any)=>{
            return await userCont.dellUser(id)
        }
    }
}