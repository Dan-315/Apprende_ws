import { gql } from 'apollo-server-express';

export const typeDefs = gql`

    type User{
        id:ID
        nombre:String,
        apePat:String,
        apeMat:String,
        pasword:String,
        telefono:String,
        email:String
    }
    input UserInput{
        nombre:String,
        apePat:String,
        apeMat:String,
        pasword:String,
        telefono:String,
        email:String
    }

    type Query{
        default:String
        getAllUsers:[User]
        getUser(id:ID):User
    }

    type Mutation{
        addUser(user:UserInput!):User,
        updatUser(id:ID!,user:UserInput):User,
        dellUser(id:ID!):Boolean
    }
`

 