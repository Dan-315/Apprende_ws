import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nombre:String,
    apePat:String,
    apeMat:String,
    pasword:String,
    telefono:String,
    email:String
});

export const userModel = mongoose.model('Usuario',UserSchema);