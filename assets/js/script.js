document.write("<p>Estadisticas centro medico ñuñoa</p>");

const radiologia = [
  {
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];

const traumatologia = [
  {
    hora: "8:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut: "15444147-9",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut: "16554741-K",
    prevision: "FONASA",
  },
  {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE",
  },
  {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE",
  },
];

const dental = [
  {
    hora: "8:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9878789-2",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA",
  },
  {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA",
  },
  {
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA",
  },
  {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE",
  },
];

//Agregar código para el desafio 2 aquí

//PREGUNTA 1: Agregar las siguientes horas al arreglo de Traumatología
const [...copia_traumatologia] = traumatologia; //Se crea copia de arreglo para modificacion con push (agregar)
//Listado antes de modificaciones
console.log("Listado traumatologia antes");
copia_traumatologia.forEach((x) =>
  console.log(
    `${x.hora} - ${x.especialista} - ${x.paciente} - ${x.rut} - ${x.prevision}`
  )
);
copia_traumatologia.push(
  {
    hora: "09:00",
    especialista: "RENÉ POBLETE ",
    paciente: "ANA GELLONA",
    rut: "13123329-7 ",
    prevision: "ISAPRE",
  },
  {
    hora: "09:30",
    especialista: "MARIA SOLAR ",
    paciente: "RAMIRO ANDRADE ",
    rut: "12221451-K",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL LOYOLA",
    paciente: "CARMEN ISLA ",
    rut: "10112348-3 ",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "ANTONIO LARENAS",
    paciente: "PABLO LOAYZA",
    rut: "13453234-1",
    prevision: "ISAPRE",
  },
  {
    hora: "12:00",
    especialista: "MATIAS ARAVENA ",
    paciente: "SUSANA POBLETE",
    rut: "14345656-6",
    prevision: "FONASA",
  }
);
//Listado despues de modificaciones
console.log("Listado traumatologia despues");
copia_traumatologia.forEach((x) =>
  console.log(
    `${x.hora} - ${x.especialista} - ${x.paciente} - ${x.rut} - ${x.prevision}`
  )
);
//PREGUNTA 2: Eliminar el primer y último elemento del arreglo de Radiología
const [...copia_radiologia] = radiologia; //Se crea copia de arreglo para modificacion
//Listado antes de modificaciones
console.log("Listado radiologia antes");
copia_radiologia.forEach((x) =>
  console.log(
    `${x.hora} - ${x.especialista} - ${x.paciente} - ${x.rut} - ${x.prevision}`
  )
);
copia_radiologia.shift(); //Eliminar el primer elemento del arreglo de Radiología
copia_radiologia.pop(); //Eliminar el último elemento del arreglo de Radiología
//Listado despues de modificaciones
console.log("Listado radiologia despues");
copia_radiologia.forEach((x) =>
  console.log(
    `${x.hora} - ${x.especialista} - ${x.paciente} - ${x.rut} - ${x.prevision}`
  )
);
//PREGUNTA 3: Imprimir en la página HTML, mediante document.write y/o las funciones que estime conveniente,
//la lista de consultas médicas de Dental.
document.write(`<p>Listado de atenciones médicas de Dental</p>`);
dental.forEach((x) =>
  document.write(
    `<p>${x.hora} - ${x.especialista} - ${x.paciente} - ${x.rut} - ${x.prevision}</p>`
  )
);

//PREGUNTA 3: Imprimir un listado total de todos los pacientes que se atendieron en el centro médico.
//Para esto, deberá unir todos los nombres de pacientes e imprimir uno por cada párrafo
document.write(
  `<p>Listado de pacientes que se atendieron en el centro médico</p>`
);
//concatenacion de los 3 arreglos, copia_traumatologia, copia_radiologia y dental
let listado_pacientes = copia_traumatologia
  .concat(copia_radiologia)
  .concat(dental);
listado_pacientes.forEach((x) =>
  document.write(`<p>${x.paciente} - ${x.prevision}</p>`)
); /* con arrow functions */

//PREGUNTA 4: Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas de Dental
document.write(
  `<p>Listado de pacientes atenciones médicas de Dental de ISAPRE</p>`
);
let isapre_dental = dental.filter(function (x) {
  return x.prevision == "ISAPRE";
});
isapre_dental.forEach((x) =>
  document.write(`<p>${x.paciente} - ${x.prevision}</p>`)
); /* con arrow functions */

//PREGUNTA 5: Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas médicas de Traumatología
document.write(
  `<p>Listado de pacientes atenciones médicas de Traumatología de FONASA</p>`
);
let fonasa_traumatologia = copia_traumatologia.filter(function (x) {
  return x.prevision == "FONASA";
});
fonasa_traumatologia.forEach((x) =>
  document.write(`<p>${x.paciente} - ${x.prevision}</p>`)
);

//Agregar código para el desafio 2 aquí

document.write(
  `<p>Cantidad de atenciones para Radiología: ${copia_radiologia.length}</p>`
);
document.write(
  `<p>Cantidad de atenciones para Traumatología: ${copia_traumatologia.length}</p>`
);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);

document.write(
  `<p>Radiologia Primera atencion: ${copia_radiologia[0].paciente} - ${
    copia_radiologia[0].prevision
  } | Última atención: ${
    copia_radiologia[copia_radiologia.length - 1].paciente
  } - ${copia_radiologia[copia_radiologia.length - 1].prevision}.</p>`
);
document.write(
  `<p>Traumatologia Primera atencion: ${copia_traumatologia[0].paciente} - ${
    copia_traumatologia[0].prevision
  } | Última atención: ${
    copia_traumatologia[copia_traumatologia.length - 1].paciente
  } - ${copia_traumatologia[copia_traumatologia.length - 1].prevision}.</p>`
);
document.write(
  `<p>Dental Primera atencion: ${dental[0].paciente} - ${
    dental[0].prevision
  } | Última atención: ${dental[dental.length - 1].paciente} - ${
    dental[dental.length - 1].prevision
  }.</p>`
);
