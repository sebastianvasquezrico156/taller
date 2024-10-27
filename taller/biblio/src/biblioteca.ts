
const biblioteca: { titulo: string; autor: string; anio: number }[] = [];


function agregarLibro(titulo: string, autor: string, anio: number): void {
    const libro = { titulo, autor, anio };
    biblioteca.push(libro);
    console.log(Libro "${titulo}" agregado a la biblioteca.);
}


function buscarLibroPorTitulo(titulo: string): { titulo: string; autor: string; anio: number } | null {
    const libroEncontrado = biblioteca.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());
    if (libroEncontrado) {
        console.log(Libro encontrado: ${libroEncontrado.titulo} de ${libroEncontrado.autor} (${libroEncontrado.anio}));
        return libroEncontrado;
    } else {
        console.log(No se encontró un libro con el título "${titulo}".);
        return null;
    }
}

function mostrarLibros(): void {
    if (biblioteca.length > 0) {
        console.log("Libros en la biblioteca:");
        biblioteca.forEach(libro => {
            console.log(- ${libro.titulo} de ${libro.autor} (${libro.anio}));
        });
    } else {
        console.log("La biblioteca está vacía.");
    }
}


agregarLibro("Cien años de soledad", "Gabriel García Márquez", 1967);
agregarLibro("Don Quijote de la Mancha", "Miguel de Cervantes", 1605);
agregarLibro("1984", "George Orwell", 1949);

buscarLibroPorTitulo("1984");
mostrarLibros();