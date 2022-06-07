let mysql = require("mysql2")
let connection = mysql.createConnection(
    {
        host     : "localhost",
        user     : "root",
        password : "escalopecode",
        database : "codenotch"
    });

connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log("conexion correcta")
    }
});

// let sql = "ALTER TABLE alumnos ADD nota VARCHAR(60)"
// connection.query(sql,function(err,result){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("columna creada")
//         console.log(result)
//     }
// })

// let sql = "ALTER TABLE alumnos DROP COLUMN nota"      
// connection.query(sql,function(err,result){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("columna ELIMINADA")
//         console.log(result)
//     }
// })

let sql = "DROP TABLE alumnos"
connection.query(sql,function(err,result){
    if(err){
        console.log(err)
    }else{
        console.log("Tabla eliminada")
        console.log(result)
    }
})

// --------------------- RETO 2 -------------------------------------

