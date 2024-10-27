
const reservas: { huesped: string; numeroHabitacion: number; noches: number; precioPorNoche: number }[] = [];


function agregarReserva(huesped: string, numeroHabitacion: number, noches: number, precioPorNoche: number): void {
    const reserva = { huesped, numeroHabitacion, noches, precioPorNoche };
    reservas.push(reserva);
    console.log(`Reserva agregada para el huésped "${huesped}".`);
}


function buscarReservaPorHuesped(huesped: string): { huesped: string; numeroHabitacion: number; noches: number; precioPorNoche: number } | null {
    const reservaEncontrada = reservas.find(reserva => reserva.huesped.toLowerCase() === huesped.toLowerCase());
    if (reservaEncontrada) {
        console.log(`Reserva encontrada: Huésped: ${reservaEncontrada.huesped}, Habitación: ${reservaEncontrada.numeroHabitacion}, Noches: ${reservaEncontrada.noches}, Precio por noche: ${reservaEncontrada.precioPorNoche}`);
        return reservaEncontrada;
    } else {
        console.log(`No se encontró una reserva para el huésped "${huesped}".`);
        return null;
    }
}

// Función para calcular el ingreso total del hotel
function calcularIngresoTotal(): number {
    if (reservas.length === 0) {
        console.log("No hay reservas en el hotel.");
        return 0;
    }
    const ingresoTotal = reservas.reduce((acumulado, reserva) => acumulado + (reserva.noches * reserva.precioPorNoche), 0);
    console.log(`El ingreso total del hotel es: ${ingresoTotal.toFixed(2)}`);
    return ingresoTotal;
}

// Ejemplos de uso
agregarReserva("Juan Pérez", 101, 3, 100);
agregarReserva("Ana García", 102, 2, 120);
agregarReserva("Luis Rodríguez", 103, 5, 80);

buscarReservaPorHuesped("Ana García");
calcularIngresoTotal();