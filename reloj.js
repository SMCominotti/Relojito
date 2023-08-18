const mostrarReloj = () => {
  let fecha = new Date();
  let hr = formatoHora(fecha.getHours());
  let min = formatoHora(fecha.getMinutes());
  let seg = formatoHora(fecha.getSeconds());
  document.getElementById("hora").innerHTML = `${hr}: ${min}: ${seg}`;

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril','Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre','Noviembre', 'Diciembre'];
const dias = ['Domingo','Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
let diaSemana= dias[fecha.getDay()]
let dia= fecha.getDate();
let mes = meses[fecha.getMonth()];
let fechaTexto=`${diaSemana},${dia} de ${mes}`;

document.getElementById('fecha').innerHTML=fechaTexto;

document.getElementById('contenedor').classList.toggle('animar');
};



const formatoHora = (hora) => {
  if (hora < 10) hora = "0" + hora;
  return hora;
};// esto lo hago para que los numeros que tienen un solo dígito, tengan el 0 antes.

setInterval(mostrarReloj, 1000);
//esto lo pongo para que se actualice a cada segundo y se vuelva a llamar
