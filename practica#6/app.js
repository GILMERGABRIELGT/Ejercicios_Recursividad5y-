function torresDeHanoi(discos, origen, destino, auxiliar) {
    if (discos === 1) {
        console.log(`Mover disco 1 de ${origen} a ${destino}`);
        return;
    }
    torresDeHanoi(discos - 1, origen, auxiliar, destino);
    console.log(`Mover disco ${discos} de ${origen} a ${destino}`);
    torresDeHanoi(discos - 1, auxiliar, destino, origen);
}

function resolverTorresDeHanoi() {
    const discos = parseInt(document.getElementById("discos").value);
    if (isNaN(discos) || discos < 1) {
        document.getElementById("resultado").textContent = "Por favor, ingresa un número válido de discos.";
        return;
    }
    document.getElementById("resultado").textContent = ''; 
    torresDeHanoi(discos, 'A', 'C', 'B');
}

(function () {
    const log = console.log;
    console.log = function (message) {
        document.getElementById("resultado").textContent += message + '\n';
        log.apply(console, arguments);
    };
})();
