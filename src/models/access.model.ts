import { timeStamp } from 'console';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AccesSchema = new Schema({
    idUsuario:String,
    fechaAcceso:String
});

export const accesModel = mongoose.model('Accesos',AccesSchema);