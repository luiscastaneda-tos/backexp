let dotenv = require("dotenv").config();
const config = {
    db: {
        host: process.env.HOSTNAME,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    },
    listPerPage: 12
}
/*
CREATE TABLE Concurso (
    id VARCHAR(40) PRIMARY KEY,                -- id como clave primaria
    nombres VARCHAR(100),               -- Nombres del cliente
    apellidos VARCHAR(100),             -- Apellidos del cliente
    folio INT UNIQUE,                   -- Folio único
    correo VARCHAR(255),                -- Correo electrónico
    telefono VARCHAR(15),               -- Teléfono
    codigo_postal VARCHAR(10),          -- Código postal
    ciudad VARCHAR(100),                -- Ciudad
    sucursal ENUM('Aragon', 'Pena Pena', 'Izazaga') -- Sucursal
);
*/

module.exports = config;