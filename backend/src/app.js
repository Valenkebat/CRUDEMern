const express = require("express");
const cors = require("cors");
const app = express();

// Settings ----------------------------------------------------------------------
//( Configuracion del servidor, nombre del servidor, motor de plantillas, etc, etc)

app.set("port", process.env.PORT || 4000); // En que puerto se va a ejecutar la aplicación Si exista un avariable de entorno, la toma sino va a la 4000

// Middlewares --------------------------------------------------------------------
// Funciones que se ejecutan antes de llegar a las urls
// Cors --> Comunicacion entre servidores

app.use(cors());
app.use(express.json());

// routes
app.use("/api/users", require("./routes/users"));
app.use("/api/notes", require("./routes/notes"));

module.exports = app;
