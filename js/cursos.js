let curso1 = {
    curso: 'Desarrollo Web',
    nombre: 'Juan',
    nota: 10,
    nombre1: 'Maria',
    nota1: 30,
    nombre2: 'Carlos',
    nota2: 20,
    nombre3: 'Karla',
    nota3: 40,
}
let curso2 = {
    curso: 'Programacion 2',
    nombre: 'Lili',
    nota: 30,
    nombre1: 'Cleo',
    nota1: 40,
    nombre2: 'Pedro',
    nota2: 33,
    nombre3: 'Marco',
    nota3: 21
}


function Datos() {
    let contendor = document.querySelector('#principal');
    let html = `<ul>
    <li>Curso: ${curso1.curso}</li>
    <li>Nombre: ${curso1.nombre}</li>
    <li>Nota: ${curso1.nota}</li>
    <li>Nombre: ${curso1.nombre1}</li>
    <li>Nota: ${curso1.nota1}</li>
    <li>Nombre: ${curso1.nombre2}</li>
    <li>Nota: ${curso1.nota2}</li>
    <li>Nombre: ${curso1.nombre3}</li>
    <li>Nota: ${curso1.nota3}</li>

    <li>Curso: ${curso2.curso}</li>
    <li>Nombre: ${curso2.nombre}</li>
    <li>Nota: ${curso2.nota}</li>
    <li>Nombre: ${curso2.nombre1}</li>
    <li>Nota: ${curso2.nota1}</li>
    <li>Nombre: ${curso2.nombre2}</li>
    <li>Nota: ${curso2.nota2}</li>
    <li>Nombre: ${curso2.nombre3}</li>
    <li>Nota: ${curso2.nota3}</li>
    </ul>`;
    console.log(html);
    contendor.innerHTML = html;
    console.log(curso1);
    console.log(curso2);
}

Datos();






























































// const alumno1 = {
//     nombre: 'Juan',
//     nota: 10
// }
// const alumno2 = {
//     nombre: 'Maria',
//     nota: 30
// }
// const alumno3 = {
//     nombre: 'Carlos',
//     nota: 20
// }
// const alumno4 = {
//     nombre: 'Karla',
//     nota: 40
// }
// const alumnos1 = {
//     nombre: 'Lili',
//     nota: 30
// }
// const alumnos2 = {
//     nombre: 'Cleo',
//     nota: 40
// }
// const alumnos3 = {
//     nombre: 'Pedro',
//     nota: 33
// }
// const alumnos4 = {
//     nombre: 'Marco',
//     nota: 40
// }

// const cursos = {
//     curso1: 'Desarrollo Web',
//     curso2: 'Programacion 2'
// }

// const {nombre,nota } = alumno1;
// const {nombre,nota } = alumno2;
// const {nombre,nota } = alumno3;
// const {nombre,nota } = alumno4;
// const {nombre,nota } = alumnos1;
// const {nombre,nota } = alumnos2;
// const {nombre,nota } = alumnos3;
// const {nombre,nota } = alumnos4;
// const {curso1,curso2 } = curso;

// function Datos() {
//     let contendor = document.querySelector('#principal');
//     let html = `<ul>
//     <li>Curso: ${cursos1}</li>
//     <li>Nombre: ${alumno1.nombre}</li>
//     <li>Nota: ${alumno1.nota}</li>
//     <li>Nombre: ${alumno2.nombre}</li>
//     <li>Nota: ${alumno2.nota}</li>
//     <li>Nombre: ${alumno3.nombre}</li>
//     <li>Nota: ${alumno3.nota}</li>
//     <li>Nombre: ${alumno4.nombre}</li>
//     <li>Nota: ${alumno4.nota}</li>
// <br>
//     <li>Curso: ${cursos.curso2}</li>
//     <li>Nombre: ${alumnos1.nombre}</li>
//     <li>Nota: ${alumnos1.nota}</li>
//     <li>Nombre: ${alumnos2.nombre}</li>
//     <li>Nota: ${alumnos2.nota}</li>
//     <li>Nombre: ${alumnos3.nombre}</li>
//     <li>Nota: ${alumnos3.nota}</li>
//     <li>Nombre: ${alumnos4.nombre}</li>
//     <li>Nota: ${alumnos4.nota}</li>
//     </ul>`;

//     console.log(html);
//     contendor.innerHTML = html;
// }

// Datos();