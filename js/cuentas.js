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

// Variables para almacenar los totales
let totalActivos = 0;
let totalPatrimonios = 0;
let totalIngresos = 0;
let totalEgresos = 0;
let totalCostoVentas = 0;

// Referencias a los elementos del DOM donde se mostrarán los resultados
const activosDisplay = document.getElementById('activos');
const pasivosDisplay = document.getElementById('pasivos');
const ingresosDisplay = document.getElementById('ingresos');
const egresosDisplay = document.getElementById('egresos');
const costoVentasDisplay = document.getElementById('costo-ventas');

// Evento del formulario
document.getElementById('formCuentas').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener valores del formulario
    const grupoContable = document.getElementById('grupoContable').value;
    const cuentaNombre = document.getElementById('cuentaNombre').value;
    const valorCuenta = parseFloat(document.getElementById('valorCuenta').value);

    // Verificar a qué grupo contable pertenece la cuenta y actualizar los totales
    switch (grupoContable) {
        case 'activos':
            totalActivos += valorCuenta;
            break;
        case 'patrimonios':
            totalPatrimonios += valorCuenta;
            break;
        case 'ingresos':
            totalIngresos += valorCuenta;
            break;
        case 'egresos':
            totalEgresos += valorCuenta;
            break;
        case 'costosVentas':
            totalCostoVentas += valorCuenta;
            break;
        default:
            break;
    }

    // Actualizar los valores mostrados en la interfaz
    actualizarResultados();
});

// Función para actualizar los resultados en el DOM
function actualizarResultados() {
    // Cálculo de activos y pasivos
    const activosTotales = totalPasivos + totalPatrimonios;
    const pasivosTotales = totalActivos - totalPatrimonios;

    // Actualizar los elementos en la interfaz
    activosDisplay.textContent = `$${activosTotales.toFixed(2)}`;
    pasivosDisplay.textContent = `$${pasivosTotales.toFixed(2)}`;
    ingresosDisplay.textContent = `$${totalIngresos.toFixed(2)}`;
    egresosDisplay.textContent = `$${totalEgresos.toFixed(2)}`;
    costoVentasDisplay.textContent = `$${totalCostoVentas.toFixed(2)}`;
}

