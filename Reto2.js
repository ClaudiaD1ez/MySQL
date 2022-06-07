let mysql = require("mysql2")
let connection = mysql.createConnection(
    {
        host     : "localhost",
        user     : "root",
        password : "escalopecode",
        database : "Reto2"
    });

connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log("conexion correcta")
    }
});

// ---------------------------------------------------------

// let sql = "INSERT INTO teacher (first_name , last_name) VALUES (\"Jose\" , \"Herrera\")"
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato insertado");
//         console.log(result)
//     }
// });

// sql = "INSERT INTO teacher (first_name , last_name) VALUES (\"Menchu\" , \"Martin\")"
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato insertado");
//         console.log(result)
//     }
// });

// sql = "INSERT INTO teacher (first_name , last_name) VALUES (\"Dani\" , \"Vera\")"
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato insertado");
//         console.log(result)
//     }
// });

// sql = "INSERT INTO teacher (first_name , last_name) VALUES (\"Ruben\" , \"Garcia\")"
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato insertado");
//         console.log(result)
//     }
// });

// sql = "INSERT INTO teacher (first_name , last_name) VALUES (\"Pilar\" , \"Cascales\")"
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato insertado");
//         console.log(result)
//     }
// });

// sql = "INSERT INTO teacher (first_name , last_name) VALUES (\"Teresa\" , \"Lopez\")"
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato insertado");
//         console.log(result)
//     }
// });

// ---------------------------------------------------------------

// let sql = "INSERT INTO groups (name) VALUES (\"Full Time-Presencial\")"
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato insertado");
//         console.log(result)
//     }
// })

// sql = "INSERT INTO groups (name) VALUES (\"Full Time-Online\")"
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato insertado");
//         console.log(result)
//     }
// })

// sql = "INSERT INTO groups (name) VALUES (\"Part Time\")"
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato insertado");
//         console.log(result)
//     }
// })


// sql = "INSERT INTO groups (name) VALUES (\"Verano\")"
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato insertado");
//         console.log(result)
//     }
// })

// sql = "INSERT INTO groups (name) VALUES (\"Invierno\")"
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato insertado");
//         console.log(result)
//     }
// })

// ------------------------------------------------------------------------------

// let sql = "INSERT INTO subject (title) VALUES (\"Fundamentos\")"
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato insertado");
//         console.log(result)
//     }
// })

// sql = "INSERT INTO subjects (title) VALUES (\"POO\")"
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato insertado");
//         console.log(result)
//     }
// })

// sql = "INSERT INTO subjects (title) VALUES (\"Maquetacion\")"
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato insertado");
//         console.log(result)
//     }
// })

// sql = "INSERT INTO subjects (title) VALUES (\"NodeJS\")"
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato insertado");
//         console.log(result)
//     }
// })

// -------------------------------------------------------------------------------------
// let sql = "INSERT INTO students (first_name, last_name, group_id) VALUES (\"Andres\",\"Cedeño\", 2)"
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato insertado");
//         console.log(result)
//     }
// })

// sql = "INSERT INTO students (first_name, last_name, group_id) VALUES (\"Pepe\",\"Perez\", 1)"
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato insertado");
//         console.log(result)
//     }
// })

// sql = "INSERT INTO students (first_name, last_name, group_id) VALUES (\"Carmen\",\"Saldaña\", 3)"
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato insertado");
//         console.log(result)
//     }
// })
// sql = "INSERT INTO students (first_name, last_name, group_id) VALUES (\"teresa\",\"Roman\", 4)"
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato insertado");
//         console.log(result)
//     }
// })
// sql = "INSERT INTO students (first_name, last_name, group_id) VALUES (\"Mari\",\"Rodriguez\", 5)"
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato insertado");
//         console.log(result)
//     }
// })

// -------------------------------------------------------------------------------------------

// let sql = `INSERT INTO marks (student_id, subject_id, date, mark) VALUES (1,1,'2022-11-5',4),(2,1,'2022-3-9',1),(3,2,'2022-4-4',8),(4,3,'2022-4-7',8),(5,8,'2022-12-1',10),(6,2,'2022-11-9',4),(7,8,'2022-1-7',9),(8,2,'2022-8-4',1),(9,3,'2022-7-4',10),(10,9,'2022-8-4',3)`;
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato insertado");
//         console.log(result)
//     }
// })


//  sql = `INSERT INTO subject_teacher ( subject_id, teacher_id, group_id) VALUES (1,1,1),(2,2,2),(3,3,3),(4,4,4),(5,5,5),(6,6,6),(7,7,7),(8,8,8),(9,9,9),(10,10,10) `;
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato insertado");
//         console.log(result)
//     }
// })


// ---------------------------------------------------------------------------------------------

// let sql = `UPDATE marks SET mark=0`
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato actualizado");
//         console.log(result)
//     }
// })

// -----------------------------------------------------------------------------------------------------

// let sql = `SELECT first_name,last_name FROM students`
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Datos seleccionados");
//         console.log(result)
//     }
// })


// -----------------------------------------------------------------------------------------------------

// let sql = `SELECT * FROM teacher`
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Datos seleccionados");
//         console.log(result)
//     }
// })

// ------------------------------ R E T O 3 ----------------------------------------------------------------

// let sql = `DELETE FROM marks WHERE date < '2012-1-1' `
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Datos borrados");
//         console.log(result)
//     }
// })

// ------------------------------------------------------------------------------------
// let sql = `UPDATE marks SET mark=5`
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato actualizado");
//         console.log(result)
//     }
// })