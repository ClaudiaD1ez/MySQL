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

// -------------------------------------------------------------------

//Obtén los nombres y apellidos de los alumnos y los nombres de las asignaturas en las que están apuntados.

// let sql = `SELECT first_name, last_name, title FROM students 
// JOIN reto2.groups ON (students.group_id = reto2.groups.group_id) 
// JOIN subject_teacher ON (reto2.groups.group_id = subject_teacher.group_id)
// JOIN subjects ON (subject_teacher.subject_id = subjects_id)`;
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Alumnos / asignaturas");
//         console.log(result)
//     }
// })

// ---------------------------------------------------------------------

//Obtén todos los nombres y apellidos de los profesores y los nombres de las asignaturas que imparten.

// let sql = `SELECT first_name, last_name, title FROM teacher JOIN subject_teacher ON (teacher.teacher_id = subject_teacher.teacher_id) JOIN subjects ON (subject_teacher.subject_id = subjects.subjects_id)`;
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Alumnos / asignaturas");
//         console.log(result)
//     }
// })

// -----------------------------------------------------------------------------
// Obtén el número total de alumnos por asignatura, el nombre de la asignatura y el nombre y apellidos del profesor que la imparte.

// let sql = `SELECT COUNT (student_id), subjects.title, teacher.first_name, teacher.last_name FROM marks JOIN subject_teacher ON (marks.subject_id = subject_teacher.subject_id) JOIN teacher ON (subject_teacher.teacher_id = teacher.teacher_id) GROUP BY subject_id`;
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Alumnos / asignaturas");
//         console.log(result)
//     }
// })

// let sql = `SELECT COUNT(student_id) subject_title, teacher.first_name, teacher.last_name FROM marks GROUP BY subject_id `
// connection.query(sql,function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Alumnos / asignaturas");
//         console.log(result)
//     }
// })

let sql = `SELECT COUNT(*) AS numero_estudiantes, subjects.title, teacher.first_name, teacher.last_name FROM students INNER 
JOIN subject_teacher ON (students.group_id = subject_teacher.group_id) 
INNER JOIN subjects ON (subject_teacher.subject_id = subjects.subjects_id) 
INNER JOIN teacher ON (subject_teacher.teacher_id = teacher.teacher_id) 
GROUP BY subjects.title`
connection.query(sql,function(err, result){
    if(err){
        console.log(err);
    }else{
        console.log("Alumnos / asignaturas");
        console.log(result)
    }
})