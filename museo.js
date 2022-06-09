let mysql = require("mysql2")
let connection = mysql.createConnection(
    {
        host     : "localhost",
        user     : "root",
        password : "escalopecode",
        database : "museo"
    });

connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log("conexion correcta")
    }
});

// ---------------------------------------------------------------------

// Obtener un listado de todos los objetos que el museo tiene en préstamo, su localización dentro
// de la exposición, la fecha de expiración de este, la información básica (nombre, apellidos y
// email) de la persona que los ha prestado.

let sql = `SELECT id_pieza, expositor, estado.fecha_fin, dueño.nombre, dueño.apellido1,
 dueño.apeyido2, dueño.mail FROM museo.estado INNER JOIN piezas ON (estado.id_estado = piezas.id_estado)
 INNER JOIN dueño ON (piezas.id_estado = estado.id_estado) WHERE estado.id_estado = 4
  GROUP BY piezas.id_pieza`
connection.query(sql,function(err, result){
    if(err){
        console.log(err);
    }else{
        console.log("obras seleccionadas");
        console.log(result)
    }
})

// ---------------------------------------------------------------------------------------------------

// Obtener de forma ordenada de mayor a menor, el número total de objetos o piezas agrupados
// por su situación dentro de la organización, esto es, cuántos hay expuestos, cuántos en
// itinerancia y cuántos almacenados.

// let sql = `SELECT COUNT(id_pieza), estado.estado FROM piezas 
// INNER JOIN estado ON (piezas.id_estado = estado.id_estado) 
// GROUP BY estado.id_estado ORDER BY COUNT(id_pieza) DESC;`
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("obras seleccionadas");
//         console.log(result)
//     }
// })
