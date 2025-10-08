import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

import ENVIRONMENT from "./config/environment.config.js";
import connectMongoDB from "./config/mongoDB.config.js";
import workspace_router from "./routes/workspace.route.js";
import auth_router from "./routes/auth.router.js";
import cors from 'cors'
import authMiddleware from "./middleware/authmiddleware.js";

// Modelos y repositorios
import WorkspacesRepository from "./repositories/Workspaces.repository.js";
import MemberWorkspace from "./models/MemberWorkspace.model.js";
import ChannelMessage from "./models/ChannelMessage.model.js";
import Channel from "./models/Channel.model.js";
import Users from "./models/User.model.js";
import Workspaces from "./models/workspaces.model.js";
import UserRepository from "./repositories/user.repository.js";
import { validarId } from "./utils/validation.utils.js";

// Conectar DB
connectMongoDB();

// Crear token de prueba
/*const token_test = jwt.sign(
    { Nombre: "Sonson" },
    ENVIRONMENT.JWT_SECRET_KEY,
    { expiresIn: "24h" }
);*/

const app = express()

const allowedOrigins = [
    "http://localhost:5173",
    "https://2025-pwa-slackapp-frontend.vercel.app",
];

// app.use(cors());

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
}));
app.use('/api/workspace', workspace_router)
app.use('/api/auth', auth_router)


//Personalizar el randomMiddleware para que podamos configurar el numero minimo de suerte (0.5 por defecto)
app.get('/ruta-protegida', authMiddleware, (request, response) => {
    console.log(request.user)
    response.send({
        ok: true
    })
})



app.listen(
    8080,
    () => {
        console.log("Esto esta funcionado")
    }
)









// app.get('/test/', (req, res) => {
//     res.send('<h1> Jesus is Love I love you Jesus <h1>')
// })

// app.get('/status', (req, res) => {
//     res.json({ Ok: true, message: "servidor done!" })
// })

// app.get(
//     '/users',
//     (request, response) => {
//         const users = UserRepository.getAll()
//         response.json(
//             {
//                 Ok: true,
//                 message: "Users finding",
//                 users: users
//             }
//         )
//     })

// app.get(
//     '/user1',
//     async (request, response) => {
//         const user1 = await UserRepository.getAll()
//         response.json(
//             {
//                 Ok: true,
//                 message: "User_1",
//                 user1: user1
//             }
//         )
//     })

/*Users.insertOne({
    name: 'Sonson',
    email: 'speilson87@gmail.com',
    password: 'Tisourit07'
})*/

/*Users.insertOne({
    email: "mackgustutn509@gmail.com",
    password: "Rosemacky001", // Necesitas hashearla
    name: "Zood1",
    createdAt: new Date()
})*/

// Workspaces.insertOne({
//     name: 'Test',
//     url_image: 'test-value'
// })
/*try {
    const workspace = new Workspaces({
        name: 'Test',
        url_name: 'test-value'
    });

    const savedWorkspace = await workspace.save();
    console.log('Workspace guardado:', savedWorkspace);
} catch (error) {
    console.error('Error:', error);
}*/

/*Channel.insertOne({
    name: "Channel de workspace",
    description: "Canal principal del workspace",
    type: "workspace",
    members: ["507f1f77bcf86cd799439022"],
    createdBy: "507f1f77bcf86cd799439022"
});*/

/*const messages = await ChannelMessage.insertMany([
    {
        channel: '667f1f77bcf86cd799439011',
        member: '507f1f77bcf86cd799439022',
        content: 'Primer mensaje'
    },
    {
        channel: '667f1f77bcf86cd799439011',
        member: '507f1f77bcf86cd799439023',
        content: 'Segundo mensaje'
    }
]);*/


/*const newMember = await MemberWorkspace.insertOne({
  user: new mongoose.Types.ObjectId("507f1f77bcf86cd799439011"), //ObjectId válido
  workspace: new mongoose.Types.ObjectId("607f1f77bcf86cd799439022"), //ObjectId válido
  role: "member" // opcional, por defecto es 'member'
});

console.log("Miembro creado:", newMember);*/

/*Workspaces.insertOne({
    name: 'Sonson',
    url_name: 'url_name'
})*/

// //Configurar a mi app de express para que use handlebars como motor de plantillas
// app.engine('handlebars', handlebars.engine())
// /* Delegamos a handlebars como motor de vistas (plantillas) */
// app.set('view engine', 'handlebars');
// /* Marcamos la carpeta donde estaran las plantillas */
// app.set('views', './src/views');










