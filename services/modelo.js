const db = require("./db")

async function create(body) {
    try {
        let params = [body.id, body.nombres, body.apellidos, body.folio, body.correo, body.telefono, body.codigo_postal, body.ciudad, body.sucursal]
        let rows = await db.query(
            `INSERT INTO Concurso (id, nombres, apellidos, folio, correo, telefono, codigo_postal, ciudad, sucursal) 
            Values (?, ?, ?, ?, ?, ?, ?, ?, ?);`, params);

        let message = "Se registro correctamente, recuerda guardar tu folio, ya que si ganas deberas mostrarlo para obtener tu premio"
        return {
            error: false,
            message
        }
    } catch (error) {
        console.log(error)
        if (error.errno == 1062) {
            return {
                error: true,
                code: 1062,
                message: "Parece que ya existe un registro con ese folio, si no has registrado ese folio vuelve a intentar registrar el folio"
            }
        } else {
            return {
                error: true,
                code: error.errno,
                message: "Ha sucedido un error, intentalo de nuevo mas tarde y manda captura de este mensaje a nuestras redes sociales CODIGO ERROR: " + error.errno
            }
        }
    }
}

async function read({ id_folio }) {
    try {
        let rows = await db.query("select * from Concurso where folio = ?;", [id_folio])
    
        return {
            error: false,
            data: rows,
            message: "Se encontraron registros"
        }
    } catch (error) {
        console.log(error)
        return {
            data: error,
            error: true,
            code: error.errno,
            message: "Ha sucedido un error, intentalo de nuevo mas tarde y manda captura de este mensaje a nuestras redes sociales CODIGO ERROR: " + error.errno
        }    
    }
}

module.exports = {
    create,
    read
}