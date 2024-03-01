import mongoose from 'mongoose';

const UsuarioSchema = mongoose.Schema ({
    nombre: {
        type: String,
        required: [true, 'Nombre obligatorio']
    },
    usuario: {
        type: String,
        required: [true, 'Usuario obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'Correo obligatorio']
    },
    password: {
        type: String,
        required: [true, 'Password obligatorio']
    },
    estado:{
        type: Boolean,
        default: true
    }
});

UsuarioSchema.methods.toJSON = function(){
    const { __v, password, _id, ...usuario} = this.toObject();
    usuario.uid = _id;
    return usuario;
}

export default mongoose.model('Usuario', UsuarioSchema);