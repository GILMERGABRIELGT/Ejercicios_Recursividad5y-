function calcularCambioRecursivo(cambio, monedas, index = 0) {
    if (index >= monedas.length) {
        return '';
    }

    let cantidad = Math.floor(cambio / monedas[index].valor);
    cambio = (cambio - cantidad * monedas[index].valor).toFixed(2);

    return `${cantidad} monedas de ${monedas[index].nombre}\n` + calcularCambioRecursivo(cambio, monedas, index + 1);
}

function calcularCambio() {
    let pago = parseFloat(document.getElementById("pago").value);
    let costo = parseFloat(document.getElementById("costo").value);

    if (isNaN(pago) || isNaN(costo) || pago < costo) {
        document.getElementById("resultado").textContent = "Por favor, ingresa valores válidos.";
        return;
    }

    let cambio = (pago - costo).toFixed(2);
    let monedas = [
        { valor: 100, nombre: '100 pesos' },
        { valor: 50, nombre: '50 pesos' },
        { valor: 20, nombre: '20 pesos' },
        { valor: 10, nombre: '10 pesos' },
        { valor: 5, nombre: '5 pesos' },
        { valor: 1, nombre: '1 peso' },
        { valor: 0.50, nombre: '50 centavos' },
        { valor: 0.20, nombre: '20 centavos' },
        { valor: 0.01, nombre: '1 centavo' }
    ];

    let resultado = `Cambio a devolver: ${cambio} pesos\n` + calcularCambioRecursivo(cambio, monedas);
    document.getElementById("resultado").textContent = resultado;
}
