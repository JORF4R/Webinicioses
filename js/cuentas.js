let activos = 0;
let pasivos = 0;
let patrimonios = 0;
let ingresos = 0;
let egresos = 0;
let costosVentas = 0;

function actualizarResultados() {
    // Calcular Balance General
    const balance = activos - pasivos;
    document.getElementById("resultadoBalance").innerHTML = `<h5>Balance General: ${balance}</h5>`;

    // Calcular Estado de Resultados (Ingresos - Egresos - Costo de Ventas)
    const estadoResultados = ingresos - egresos - costosVentas;
    document.getElementById("resultadoEstado").innerHTML = `<h5>Estado de Resultados: ${estadoResultados}</h5>`;
}

// Función para agregar cuentas
document.getElementById("formCuentas").addEventListener("submit", function(event) {
    event.preventDefault();
    const grupo = document.getElementById("grupoContable").value;
    const valor = parseFloat(document.getElementById("valorCuenta").value);

    switch(grupo) {
        case "activos":
            activos += valor;
            break;
        case "pasivos":
            pasivos += valor;
            break;
        case "patrimonios":
            patrimonios += valor;
            break;
        case "ingresos":
            ingresos += valor;
            break;
        case "egresos":
            egresos += valor;
            break;
        case "costosVentas":
            costosVentas += valor;
            break;
    }

    alert(`Cuenta agregada al grupo ${grupo} por valor de ${valor}`);
    actualizarResultados();
});
