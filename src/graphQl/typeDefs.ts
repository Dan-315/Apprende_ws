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
        id:ID
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

    type Suscrip{
        id:ID,
        idCurso:String,
        idUsuario:String,
        fechaCompra:String,
        MontoTotal:Float
    }
    input SuscripInput{
        idCurso:String,
        idUsuario:String,
        fechaCompra:String,
        MontoTotal:Float
    }

    type Query{
        default:String

        getUser(user:UserInput):[User]

        getAccess(acces:AccesInput):[Acces]
        
        getGrade(grade:GradeInput):[Grade]

        getSuscrip(suscrip:SuscripInput):[Suscrip]
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

        addSuscrip(suscrip:SuscripInput!):Suscrip
        updateSuscrip(id:ID!,suscrip:SuscripInput):Suscrip
        dellSuscrip(id:ID!):Boolean

    }

` 

 