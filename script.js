let creditosTotales = 0;

// Prerrequisitos (por ID de ramo)
const prerrequisitos = {
  civil1: ["romano", "teoria"],
  const1: ["politico"],
  intl1: ["politico"],
  eco2: ["eco1"],
  canonico: ["teo"],
  civil2: ["civil1"],
  proc2: ["proc1"],
  const2: ["const1"],
  intl2: ["intl1"],
  eco3: ["eco2"],
  sem1: ["civil1", "proc1"],

  civil3: ["civil2"],
  proc3: ["proc2"],
  penal1: ["cr:54"],
  com1: ["civil2"],
  trabajo1: ["teoria"],
  admin1: ["const1"],

  civil4: ["civil3"],
  proc4: ["proc3"],
  penal2: ["penal1"],
  com2: ["com1"],
  trabajo2: ["trabajo1"],
  admin2: ["admin1"],
  sem2: ["civil3", "proc3", "sem1"],

  civil5: ["civil4"],
  proc5: ["proc4"],
  penal3: ["penal2"],
  com3: ["com2"],
  ssocial: ["trabajo1"],
  tributario1: ["eco3"],
  litigacion: ["proc4"],
  etica: ["cr:54"],

  civil6: ["civil5"],
  proc6: ["proc5"],
  penal4: ["penal3"],
  com4: ["com3"],
  tributario2: ["tributario1"],
  sem3: ["civil5", "proc5", "sem2"],

  opt1: ["cr:173"],
  opt2: ["cr:173"],
  opt3: ["cr:173"],
  opt4: ["cr:173"],

  civil7: ["civil6"],
  proc7: ["proc6"],
  filoderecho: ["filosofia"],
  anteproyecto: ["cr:235"],
  privado: ["civil4"],

  civil8: ["civil7"],
  tesina: ["anteproyecto"],
  practica: ["sem3"]
};

// Función para actualizar créditos
function actualizarCreditos() {
  const ramosAprobados = document.querySelectorAll(".ramo.aprobado");
  creditosTotales = 0;
  ramosAprobados.forEach(ramo => {
    creditosTotales += parseInt(ramo.dataset.credito);
  });
  document.getElementById("totalCreditos").textContent = creditosTotales;
}

// Función para verificar si los prerrequisitos están cumplidos
function prerrequisitosCumplidos(ramoID) {
  const requisitos = prerrequisitos[ramoID];
  if (!requisitos) return true;

  const aprobados = Array.from(document.querySelectorAll(".ramo.aprobado")).map(r => r.dataset.id);

  return requisitos.every(req => {
    if (req.startsWith("cr:")) {
      const minCreditos = parseInt(req.split(":")[1]);
      return creditosTotales >= minCreditos;
    }
    return aprobados.includes(req);
  });
}

// Función para bloquear/desbloquear ramos según los requisitos
function actualizarBloqueos() {
  document.querySelectorAll(".ramo").forEach(ramo => {
    const id = ramo.dataset.id;

    // Si ya está aprobado, no se bloquea
    if (ramo.classList.contains("aprobado")) {
      ramo.classList.remove("bloqueado");
      ramo.style.pointerEvents = "auto";
      return;
    }

    if (prerrequisitosCumplidos(id)) {
      ramo.classList.remove("bloqueado");
      ramo.style.pointerEvents = "auto";
    } else {
      ramo.classList.add("bloqueado");
      ramo.style.pointerEvents = "none";
    }
  });
}

// Inicializar eventos y estado inicial
document.querySelectorAll(".ramo").forEach(ramo => {
  ramo.addEventListener("click", () => {
    if (ramo.classList.contains("bloqueado")) return;

    ramo.classList.toggle("aprobado");

    actualizarCreditos();
    actualizarBloqueos();
  });
});

// Llamar al inicio
actualizarCreditos();
actualizarBloqueos();
