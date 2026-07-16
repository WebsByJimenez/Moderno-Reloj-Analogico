//. Selección de los elementos de las manecillas en el DOM
const horaEl = document.querySelector(".horas");
const minutosEl = document.querySelector(".minutos");
const segundosEl = document.querySelector(".segundos");

function updateClock() {
  const currentDate = new Date();

  const horas = currentDate.getHours();
  const minutos = currentDate.getMinutes();
  const segundos = currentDate.getSeconds();

  // Calculo de grados
  const segundosDeg = segundos * 6;

  // Minutos
  const minutosDeg = minutos * 6 + segundos * 0.1;

  // Horas
  const horasDeg = (horas % 12) * 30 + minutos * 0.5;

  // Estilos
  segundosEl.style.transform = `translateX(-50%) rotate(${segundosDeg}deg)`;
  minutosEl.style.transform = `translateX(-50%) rotate(${minutosDeg}deg)`;
  horaEl.style.transform = `translateX(-50%) rotate(${horasDeg}deg)`;
}

// Ejecutar inmediatamente al cargar la página para evitar el salto inicial
updateClock();

// Actualizar el reloj de forma limpia exactamente cada segundo (1000ms)
setInterval(updateClock, 1000);
