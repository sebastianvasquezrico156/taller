
const inventario: { nombre: string; precio: number; cantidad: number }[] = [];

function agregarProducto(nombre: string, precio: number, cantidad: number): void {
    const producto = { nombre, precio, cantidad };
    inventario.push(producto);
    console.log(`Producto "${nombre}" agregado al inventario.`);
}


function buscarProductoPorNombre(nombre: string): { nombre: string; precio: number; cantidad: number } | null {
    const productoEncontrado = inventario.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
    if (productoEncontrado) {
        console.log(`Producto encontrado: ${productoEncontrado.nombre}, Precio: ${productoEncontrado.precio}, Cantidad: ${productoEncontrado.cantidad}`);
        return productoEncontrado;
    } else {
        console.log(`No se encontró un producto con el nombre "${nombre}".`);
        return null;
    }
}


function calcularValorTotalInventario(): number {
    if (inventario.length === 0) {
        console.log("El inventario está vacío.");
        return 0;
    }
    const valorTotal = inventario.reduce((acumulado, producto) => acumulado + (producto.precio * producto.cantidad), 0);
    console.log(`El valor total del inventario es: ${valorTotal.toFixed(2)}`);
    return valorTotal;
}


agregarProducto("Laptop", 1500, 10);
agregarProducto("Teléfono", 800, 20);
agregarProducto("Tablet", 500, 15);

buscarProductoPorNombre("Laptop");
calcularValorTotalInventario();