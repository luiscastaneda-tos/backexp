const db = require("./db")

async function create(body) {
    let rows;
    rows = await db.query(
        `INSERT INTO Anuncios (
        nombre, 
        apellido, 
        correo, 
        telefono, 
        codigo_postal, 
        ciudad, 
        anuncio, 
        anuncio_otro, 
        objetivo, 
        dia)
        VALUES (
        "${body.nombre}", 
        "${body.apellido}", 
        "${body.correo}", 
        "${body.telefono}", 
        "${body.codigo_postal}", 
        "${body.ciudad}", 
        "${body.anuncio}", 
        "${body.anuncio_otro}", 
        "${body.objetivo}", 
        "${body.dia}"
        );`
    );

    let message = "Error al crear el objeto"
    if (rows.affectedRows) {
        message = "Creado con exito"
    }
    return {
        ok: true,
        message
    }

}

module.exports = {
    create
}