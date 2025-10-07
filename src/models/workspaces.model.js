import mongoose from "mongoose"

const workspaceSchema = new mongoose.Schema(
    {
        
        
        name: {
            type: String,
            unique: true,
            required: true
        },
        url_name : {
            type: String,
            required: true
        },
        created_at: {
            type: Date, 
            default: Date.now
        },
        modified_at: {
            type: Date,
            default: null
        },
        active: {
            type: Boolean,
            default: true
        }
    }
)
//Crear el modelo de User, cada accion que hagamos a la coleccion de User se hara por medio del modelo
const Workspaces = mongoose.model('workspace', workspaceSchema)

export default Workspaces

