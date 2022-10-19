import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SuscripSchema = new Schema({
    idUsuario:String,
    id:String,
    apeMat:String,
    pasword:String,
    telefono:String,
    email:String
});

export const suscripModel = mongoose.model('Suscripcion',SuscripSchema);