import { gql } from 'apollo-server-express';

export const typeDefs = gql`

    scalar GraphQLDateTime
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
    type Acces{
        id:ID
        idUsuario:ID
        fechaAcceso:GraphQLDateTime
    }
    input AccesInput{
        idUsuario:ID
        fechaAcceso:GraphQLDateTime
    }
    type Grade{
        id:ID
        idInstructor:String,
        nombre:String,
        horario:[String],
        categorias:[String],
        descripcion:String,
        duracion:Float,
        costo:Float,
        cupo:Float
    }
    input GradeInput{
        idInstructor:String,
        nombre:String,
        horario:[String],
        categorias:[String],
        descripcion:String,
        duracion:Float,
        costo:Float,
        cupo:Float
    }

    type Query{
        default:String

        getAllUsers:[User]
        getUser(id:ID!):User

        getAllAcces:[Acces]
        getAcces(id:ID!):Acces
        
        getAllGrades:[Grade]
        getGrade(id:ID!):Grade
    }

    type Mutation{
        addUser(user:UserInput!):User,
        updatUser(id:ID!,user:UserInput):User
        dellUser(id:ID!):Boolean

        addAcces(acces:AccesInput!):Acces
        updatAcces(id:ID!,acces:AccesInput):Acces
        dellAcces(id:ID!):Boolean

        
        addGrade(grade:GradeInput!):Grade
        updatGrade(id:ID!,grade:GradeInput):Grade
        dellGrade(id:ID!):Boolean
    }
`

 