//(a) calcularPromedio
const calcularPromedio = (notas) => {
    if(notas.length === 0) return 0;
    const suma = notas.reduce((acumulador,nota)=> acumulador + nota,0);
    return suma/notas.length
};
// (b) filtrarAprobados
const filtrarAprobados = (alumnos) =>{
    return alumnos.filter(alumno => alumno.nota >= 6);
};
// (c) formatearAlumnos
const formatearAlumnos = (alumnos) =>{
    return alumnos.map(alumno => `Nombre: ${alumno.nombre} - Nota: ${alumno.nota}`);
};
// (d) buscarAlumno
const buscarAlumno = (alumnos,nombre) =>{
    return alumnos.find(alumno => alumno.nombre.toLowerCase() === nombre.toLowerCase());
};
//Pruebas
console.log("\n=== PRUEBAS DE FUNCIONES ===\n");
const notasPrueba = [7, 8, 6, 9, 5];
const Promedio = calcularPromedio(notasPrueba);
console.log(`Promedio de [${notasPrueba}]:`, calcularPromedio(notasPrueba));

const alumnosPrueba = [
    {nombre: "Ana", nota: 8},
    {nombre: "Luis", nota: 5},
    {nombre: "Carlos", nota: 7},
    {nombre: "Marta", nota: 4},
    {nombre: "Pedro", nota: 9}
];
const aprobados = filtrarAprobados(alumnosPrueba);
console.log("Alumnos aprobado: ", filtrarAprobados(alumnosPrueba));
const formateados = formatearAlumnos(alumnosPrueba);
console.log("Alumnos formateados: ", formatearAlumnos(alumnosPrueba));

console.log("Alumnos aprobados: ", filtrarAprobados(alumnosPrueba));
console.log("Buscar `Carlos`: ", buscarAlumno(alumnosPrueba, "Carlos"));
console.log("Buscar `Ana`: ", buscarAlumno(alumnosPrueba, "Ana"));
console.log("Buscar `Fabian` (no existe): ", buscarAlumno(alumnosPrueba, "Fabian"));