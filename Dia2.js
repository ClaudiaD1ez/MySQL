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


// let sql = `SELECT COUNT(*) FROM students`
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato");
//         console.log(result)
//     }
// })

// sql = `SELECT * FROM reto2.groups`
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato");
//         console.log(result)
//     }
// })

// let sql= `DELETE FROM reto2.marks WHERE mark > 5 AND YEAR(date) = YEAR(NOW())-1`
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato");
//         console.log(result)
//     }
// })

// let sql = `SELECT students_id FROM reto2.students WHERE año_ingreso = 2022`
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dato");
//         console.log(result)
//     }
// })

// let sql = `SELECT teacher_id, COUNT(*) FROM reto2.subject_teacher GROUP BY subject_id`
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("profesores de asignatura 1");
//         console.log(result)
//     }
// })

// ------------------- RETO2 -----------------------------------

//Obtén el id y la nota de los alumnos que tengan un id entre 1 y 20, o que tenga una nota
//mayor de 8 y la nota tenga fecha del año pasado.

// let sql= `SELECT student_id, mark FROM marks WHERE student_id BETWEEN 1 AND 20 OR mark>8 AND date = YEAR(NOW())-1`;
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("seleccion hecha");
//         console.log(result)
//     }
// })

// -------------------------------------------------------------------------------------------

//Obtén la media de las notas que se han dado en el último año por asignatura.

// let sql= `SELECT AVG (mark), subject_id FROM marks GROUP BY subject_id`;
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("seleccion hecha");
//         console.log(result)
//     }
// })

// ---------------------------------------------------------------------------------------------------
// Obtén la media aritmética de las notas que se han dado en el último año por alumno.

// let sql= `SELECT AVG (mark),student_id FROM marks WHERE YEAR(date) = YEAR(NOW())-1 GROUP BY student_id`;
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("seleccion hecha");
//         console.log(result)
//     }
// })
