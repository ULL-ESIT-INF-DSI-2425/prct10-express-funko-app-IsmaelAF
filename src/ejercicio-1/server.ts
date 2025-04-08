import express from 'express';
import { FunkoType } from './types/FunkoType.js';
import { FunkoGenre } from './types/FunkoGenre.js';
import { Funko } from './Funko.js';

import bodyParser from 'body-parser';


export const app = express();
app.disable('x-powered-by');

app.use(bodyParser.json());

// GET  query       LEER O LISTA
app.get('/funkos', (req, res) => {
    console.log(req.query);
    const username: string = req.query.user as string;
    const id = req.query.id ? Number(req.query.id) : null;

    if (id !== null) {
        const existeFunko = true; // metodo readFunko(username, id)
        if (!existeFunko) {
            // respuesta error: Funko no encontrado
        }
        // mensaje success con funko
    }

    const listaFunkos = true; // metodo listarFunkos(username)
    // mensaje success con lista de funkos

    res.send("ejemplo get");
});

//POST  body        AÑADIR
app.post('/funkos', (req, res) => {
    const username: string = req.query.user as string;
    //const funko = Funko.fromJson(req.body);
    const funko1 = new Funko(
        req.body.id,
        req.body.nombre,
        req.body.descripcion,
        req.body.tipo,
        req.body.genero,
        req.body.franquicia,
        req.body.numero,
        req.body.exclusivo,
        req.body.caracteristicas,
        req.body.valor
    );
    const existe = true; //metodo readFunko(username, funko.id)
    if(existe){
        // mensaje error: ya existe
    }
    // metodo writeFunko(username, funko)
    // mensaje sucess, funko añadido
    
    //res.send("ejemplo post");
    console.log(funko1);
    res.json(funko1);
});

//DELETE    body    ELIMINAR
app.delete('/funkos', (req, res) => {
    const username: string = req.query.user as string;
    const id = req.body.id;
    const eliminado = true;//metodo deleteFunko(username, id)

    if(!eliminado){
        //mensaje success false, funko no se elimino
    }
    //mensaje success true, funko eliminado
    res.send("ejemplo delete");
});

//PATCH query(buscar)+body(modificar)   MODIFICAR
app.patch('/funkos', (req, res) => {
    const username: string = req.query.username as string;
    const funko1 = new Funko(
        req.body.id,
        req.body.nombre,
        req.body.descripcion,
        req.body.tipo,
        req.body.genero,
        req.body.franquicia,
        req.body.numero,
        req.body.exclusivo,
        req.body.caracteristicas,
        req.body.valor
    );
    const existe = true; //metodo existeFunko(user, funko.id);
    if(!existe) {
        //mensaje success falso, funko no existe
    }
    // metodo escribir funko
    // mensaje success true, funko modificado
    res.send("ejemplo patch");
});


app.listen(3000, () => {
    console.log('Server is up on port 3000');
});