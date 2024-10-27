// Array para almacenar los empleados
const empleados: { nombre: string; puesto: string; salario: number }[] = [];

// Función para agregar un empleado
function agregarEmpleado(nombre: string, puesto: string, salario: number): void {
    const empleado = { nombre, puesto, salario };
    empleados.push(empleado);
    console.log(`Empleado "${nombre}" agregado a la empresa.`);
}

// Función para buscar empleados por nombre
function buscarEmpleadoPorNombre(nombre: string): { nombre: string; puesto: string; salario: number } | null {
    const empleadoEncontrado = empleados.find(empleado => empleado.nombre.toLowerCase() === nombre.toLowerCase());
    if (empleadoEncontrado) {
        console.log(`Empleado encontrado: ${empleadoEncontrado.nombre}, Puesto: ${empleadoEncontrado.puesto}, Salario: ${empleadoEncontrado.salario}`);
        return empleadoEncontrado;
    } else {
        console.log(`No se encontró un empleado con el nombre "${nombre}".`);
        return null;
    }
}

// Función para calcular el salario promedio de los empleados
function calcularSalarioPromedio(): number {
    if (empleados.length === 0) {
        console.log("No hay empleados en la empresa para calcular el salario promedio.");
        return 0;
    }
    const salarioTotal = empleados.reduce((acumulado, empleado) => acumulado + empleado.salario, 0);
    const salarioPromedio = salarioTotal / empleados.length;
    console.log(`El salario promedio es: ${salarioPromedio.toFixed(2)}`);
    return salarioPromedio;
}

// Ejemplos de uso
agregarEmpleado("Juan Pérez", "Desarrollador", 5000);
agregarEmpleado("Ana García", "Diseñadora", 4500);
agregarEmpleado("Luis Rodríguez", "Gerente", 7000);

buscarEmpleadoPorNombre("Ana García");
calcularSalarioPromedio();