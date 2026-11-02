const cancha = document.getElementById("cancha");
const objetivo = document.getElementById("objetivo");
const comenzar = document.getElementById("comenzar");

const tiempoTexto = document.getElementById("tiempo");
const aciertosTexto = document.getElementById("aciertos");
const promedioTexto = document.getElementById("promedio");
const vidasTexto = document.getElementById("vidas");
const mensaje = document.getElementById("mensaje");
const resultado = document.getElementById("resultado");

const modalDerrota = document.getElementById("modalDerrota");
const modalStats = document.getElementById("modalStats");
const cerrarModal = document.getElementById("cerrarModal");

const META_ACIERTOS = 35;

let jugando = false;
let tiempo = 30;
let aciertos = 0;
let vidas = 3;
let tiemposReaccion = [];
let momentoObjetivo = 0;
let intervalo;

function moverObjetivo() {
    objetivo.style.display = "block";
    const tam = objetivo.offsetWidth || 52;
    const margen = Math.ceil(tam / 2) + 4;
    const ancho = Math.max(0, cancha.clientWidth - margen * 2);
    const alto = Math.max(0, cancha.clientHeight - margen * 2);
    const x = margen + Math.random() * ancho;
    const y = margen + Math.random() * alto;

    objetivo.style.left = x + "px";
    objetivo.style.top = y + "px";

    momentoObjetivo = performance.now();
}

window.addEventListener("resize", () => {
    if (jugando) moverObjetivo();
});

function comenzarJuego() {
    jugando = true;
    if (window.rookieMarcar) rookieMarcar(true);
    tiempo = 30;
    aciertos = 0;
    vidas = 3;
    tiemposReaccion = [];

    tiempoTexto.textContent = tiempo;
    aciertosTexto.textContent = aciertos;
    promedioTexto.textContent = "-";
    vidasTexto.textContent = vidas;
    resultado.textContent = "";
    mensaje.textContent = "¡Rápido! Hacé clic en la pelota. La meta es " + META_ACIERTOS + " aciertos.";

    comenzar.disabled = true;
    comenzar.textContent = "Jugando...";

    moverObjetivo();

    intervalo = setInterval(() => {
        tiempo--;
        tiempoTexto.textContent = tiempo;

        if (tiempo <= 0) {
            terminarJuego(aciertos < META_ACIERTOS);
        }
    }, 1000);
}

function acertar(e) {
    e.stopPropagation();
    if (!jugando) return;

    const reaccion = performance.now() - momentoObjetivo;
    tiemposReaccion.push(reaccion);
    aciertos++;

    aciertosTexto.textContent = aciertos;

    const promedio = tiemposReaccion.reduce((a, b) => a + b, 0)
        / tiemposReaccion.length;

    promedioTexto.textContent = Math.round(promedio) + " ms";

    if (aciertos >= META_ACIERTOS) {
        terminarJuego(false);
        return;
    }

    moverObjetivo();
}

function fallar() {
    if (!jugando) return;

    vidas--;
    vidasTexto.textContent = vidas;
    mensaje.textContent = "¡Fallaste! Te quedan " + vidas + " vidas.";

    if (vidas <= 0) {
        terminarJuego(true);
    }
}

function terminarJuego(perdiste) {
    if (!jugando) return;

    const gano = !perdiste && aciertos >= META_ACIERTOS;
    if (window.rookieSumar) rookieSumar("reflejos", gano, { aciertos: aciertos });
    if (window.rookieMarcar) rookieMarcar(false);
    jugando = false;
    clearInterval(intervalo);
    objetivo.style.display = "none";

    comenzar.disabled = false;
    comenzar.textContent = "Jugar de nuevo";

    if (vidas <= 0) {
        mensaje.textContent = "💀 ¡Perdiste! Te quedaste sin vidas.";
    } else if (gano) {
        mensaje.textContent = "¡Ganaste! Llegaste a " + META_ACIERTOS + " aciertos.";
    } else {
        mensaje.textContent = "¡Se acabó el tiempo! Hacían falta " + META_ACIERTOS + " aciertos.";
    }

    if (tiemposReaccion.length > 0) {
        const promedio = tiemposReaccion.reduce((a, b) => a + b, 0)
            / tiemposReaccion.length;

        resultado.textContent =
            `🏁 ${aciertos} aciertos · ${Math.round(promedio)} ms de reacción promedio`;
    } else {
        resultado.textContent = "No conseguiste ningún acierto.";
    }
}

objetivo.addEventListener("click", acertar);
cancha.addEventListener("click", fallar);
comenzar.addEventListener("click", comenzarJuego);