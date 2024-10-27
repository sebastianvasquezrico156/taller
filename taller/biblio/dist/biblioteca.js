// Arreglo para almacenar los libros
var biblioteca = [];
// Función para agregar un libro
function agregarLibro(titulo, autor) {
    var nuevoLibro = { titulo: titulo, autor: autor };
    biblioteca.push(nuevoLibro);
    console.log("Libro agregado: \"".concat(titulo, "\" de ").concat(autor));
}
// Función para buscar libros por título
function buscarLibro(titulo) {
    return biblioteca.filter(function (libro) { return libro.titulo.toLowerCase().includes(titulo.toLowerCase()); });
}
// Función para mostrar todos los libros
function mostrarLibros() {
    if (biblioteca.length === 0) {
        console.log("No hay libros en la biblioteca.");
        return;
    }
    console.log("Libros en la biblioteca:");
    biblioteca.forEach(function (libro) {
        console.log("- \"".concat(libro.titulo, "\" de ").concat(libro.autor));
    });
}
// Ejemplo de uso
agregarLibro("El Principito", "Antoine de Saint-Exupéry");
agregarLibro("1984", "George Orwell");
agregarLibro("Cien años de soledad", "Gabriel García Márquez");
mostrarLibros();
var librosEncontrados = buscarLibro("1984");
if (librosEncontrados.length > 0) {
    console.log;
}
