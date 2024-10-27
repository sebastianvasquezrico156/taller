// Array para almacenar los estudiantes
const estudiantes: { nombre: string; edad: number; notas: number[] }[] = [];

// Función para agregar un estudiante
function agregarEstudiante(nombre: string, edad: number, notas: number[]): void {
    const estudiante = { nombre, edad, notas };
    estudiantes.push(estudiante);
    console.log(`Estudiante "${nombre}" agregado a la escuela.`);
}

// Función para buscar estudiantes por nombre
function buscarEstudiantePorNombre(nombre: string): { nombre: string; edad: number; notas: number[] } | null {
    const estudianteEncontrado = estudiantes.find(estudiante => estudiante.nombre.toLowerCase() === nombre.toLowerCase());
    if (estudianteEncontrado) {
        console.log(`Estudiante encontrado: ${estudianteEncontrado.nombre}, Edad: ${estudianteEncontrado.edad}, Notas: ${estudianteEncontrado.notas.join(", ")}`);
        return estudianteEncontrado;
    } else {
        console.log(`No se encontró un estudiante con el nombre "${nombre}".`);
        return null;
    }
}

// Función para calcular el promedio de notas de todos los estudiantes
function calcularPromedioNotas(): number {
    if (estudiantes.length === 0) {
        console.log("No hay estudiantes en la escuela para calcular el promedio de notas.");
        return 0;
    }
    const totalNotas = estudiantes.reduce((acumulado, estudiante) => {
        const sumaNotas = estudiante.notas.reduce((suma, nota) => suma + nota, 0);
        return acumulado + sumaNotas / estudiante.notas.length;
    }, 0);
    const promedioGeneral = totalNotas / estudiantes.length;
    console.log(`El promedio de notas de todos los estudiantes es: ${promedioGeneral.toFixed(2)}`);
    return promedioGeneral;
}

// Ejemplos de uso
agregarEstudiante("Juan Pérez", 16, [85, 90, 78]);
agregarEstudiante("Ana García", 15, [92, 88, 79]);
agregarEstudiante("Luis Rodríguez", 17, [75, 80, 85]);

buscarEstudiantePorNombre("Ana García");
calcularPromedioNotas();