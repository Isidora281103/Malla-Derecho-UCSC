// script.js

const ramosData = [
  {
    semestre: "Semestre 1",
    ramos: [
      { nombre: "Derecho Romano", creditos: 10 },
      { nombre: "Derecho Político", creditos: 10 },
      { nombre: "Teoría del Derecho", creditos: 10 },
      { nombre: "Historia del Derecho", creditos: 4 },
      { nombre: "Fundamentos Filosóficos", creditos: 4 },
      { nombre: "Técnicas para el manejo del estrés", creditos: 4 }
    ]
  },
  {
    semestre: "Semestre 2",
    ramos: [
      { nombre: "Derecho Económico I", creditos: 4 },
      { nombre: "Fundamentos Teológicos", creditos: 4 },
      { nombre: "Integración del Saber I", creditos: 4 }
    ]
  },
  {
    semestre: "Semestre 3",
    ramos: [
      { nombre: "Derecho Civil I", creditos: 5, prerequisitos: ["Derecho Romano", "Teoría del Derecho"] },
      { nombre: "Derecho Procesal I", creditos: 5 },
      { nombre: "Derecho Constitucional I", creditos: 4, prerequisitos: ["Derecho Político"] },
      { nombre: "Derecho Internacional Público I", creditos: 4, prerequisitos: ["Derecho Político"] },
      { nombre: "Derecho Económico II", creditos: 4, prerequisitos: ["Derecho Económico I"] },
      { nombre: "Derecho Canónico", creditos: 3, prerequisitos: ["Fundamentos Teológicos"] },
      { nombre: "Integración del Saber II", creditos: 4 }
    ]
  },
  {
     semestre: "Semestre 4",
    ramos: [
      { nombre: "Derecho Civil II", creditos: 5, prerequisitos: ["Derecho Civil I"] },
      { nombre: "Derecho Procesal II", creditos: 5, prerequisitos: ["Derecho Procesal I"] },
      { nombre: "Derecho Constitucional II", creditos: 4, prerequisitos: ["Derecho Constitucional I"] },
      { nombre: "Derecho Internacional Público II", creditos: 4, prerequisitos: ["Derecho Internacional Público I"] },
      { nombre: "Derecho Económico III", creditos: 4, prerequisitos: ["Derecho Económico II"] },
      { nombre: "Inglés I", creditos: 4 },
      { nombre: "Seminario Jurídico I", creditos: 4, prerequisitos: ["Derecho Civil I", "Derecho Procesal I"] }
    ]
  },
  {
    semestre: "Semestre 5",
    ramos: [
      { nombre: "Derecho Civil III", creditos: 5, prerequisitos: ["Derecho Civil II"] },
      { nombre: "Derecho Procesal III", creditos: 5, prerequisitos: ["Derecho Procesal II"] },
      { nombre: "Derecho Penal I", creditos: 4, prerequisitos: ["54 créditos"] },
      { nombre: "Derecho Comercial I", creditos: 4, prerequisitos: ["Derecho Civil II"] },
      { nombre: "Derecho del Trabajo I", creditos: 4, prerequisitos: ["Teoría del Derecho"] },
      { nombre: "Derecho Administrativo I", creditos: 4, prerequisitos: ["Derecho Constitucional I"] },
      { nombre: "Integración del Saber IV", creditos: 4 }
    ]
  },
  {
    semestre: "Semestre 6",
    ramos: [
      { nombre: "Derecho Civil IV", creditos: 5, prerequisitos: ["Derecho Civil III"] },
      { nombre: "Derecho Procesal IV", creditos: 5, prerequisitos: ["Derecho Procesal III"] },
      { nombre: "Derecho Penal II", creditos: 4, prerequisitos: ["Derecho Penal I"] },
      { nombre: "Derecho Comercial II", creditos: 4, prerequisitos: ["Derecho Comercial I"] },
      { nombre: "Derecho del Trabajo II", creditos: 4, prerequisitos: ["Derecho del Trabajo I"] },
      { nombre: "Derecho Administrativo II", creditos: 4, prerequisitos: ["Derecho Administrativo I"] },
      { nombre: "Seminario Jurídico II", creditos: 4, prerequisitos: ["Derecho Civil III", "Derecho Procesal III", "Seminario Jurídico I"] }
    ]
  },
  {
    semestre: "Semestre 7",
    ramos: [
      { nombre: "Derecho Civil V", creditos: 5, prerequisitos: ["Derecho Civil IV"] },
      { nombre: "Derecho Procesal V", creditos: 5, prerequisitos: ["Derecho Procesal IV"] },
      { nombre: "Derecho Penal III", creditos: 4, prerequisitos: ["Derecho Penal II"] },
      { nombre: "Derecho Comercial III", creditos: 4, prerequisitos: ["Derecho Comercial II"] },
      { nombre: "Seguridad Social", creditos: 3, prerequisitos: ["Derecho del Trabajo I"] },
      { nombre: "Derecho Tributario I", creditos: 4, prerequisitos: ["Derecho Económico III"] },
      { nombre: "Litigación", creditos: 3, prerequisitos: ["Derecho Procesal IV"] },
      { nombre: "Ética Profesional", creditos: 4, prerequisitos: ["54 créditos"] }
    ]
  },
  {
    semestre: "Semestre 8",
    ramos: [
      { nombre: "Derecho Civil VI", creditos: 5, prerequisitos: ["Derecho Civil V"] },
      { nombre: "Derecho Procesal VI", creditos: 5, prerequisitos: ["Derecho Procesal V"] },
      { nombre: "Derecho Penal IV", creditos: 4, prerequisitos: ["Derecho Penal III"] },
      { nombre: "Derecho Comercial IV", creditos: 4, prerequisitos: ["Derecho Comercial III"] },
      { nombre: "Derecho Tributario II", creditos: 4, prerequisitos: ["Derecho Tributario I"] },
      { nombre: "Seminario Jurídico III", creditos: 4, prerequisitos: ["Derecho Civil V", "Derecho Procesal V", "Seminario Jurídico II"] },
      { nombre: "Optativo de Profundización I", creditos: 4, prerequisitos: ["173 créditos"] }
    ]
  },
  {
    semestre: "Semestre 9",
    ramos: [
      { nombre: "Práctica Profesional", creditos: 12, prerequisitos: ["Seminario Jurídico III"] },
      { nombre: "Derecho Civil VII", creditos: 5, prerequisitos: ["Derecho Civil VI"] },
      { nombre: "Derecho Procesal VII", creditos: 5, prerequisitos: ["Derecho Procesal VI"] },
      { nombre: "Anteproyecto de Investigación", creditos: 5, prerequisitos: ["235 créditos"] },
      { nombre: "Derecho Internacional Privado", creditos: 3, prerequisitos: ["Derecho Civil IV"] },
      { nombre: "Filosofía del Derecho", creditos: 3, prerequisitos: ["Fundamentos Filosóficos"] },
      { nombre: "Optativo de Profundización II", creditos: 4, prerequisitos: ["173 créditos"] }
    ]
  },
  {
    semestre: "Semestre 10",
    ramos: [
      { nombre: "Derecho Civil VIII", creditos: 5, prerequisitos: ["Derecho Civil VII"] },
      { nombre: "Tesina", creditos: 8, prerequisitos: ["Anteproyecto de Investigación"] },
      { nombre: "Optativo de Profundización III", creditos: 4, prerequisitos: ["173 créditos"] },
      { nombre: "Optativo de Profundización IV", creditos: 4, prerequisitos: ["173 créditos"] }
    ]
  }
];

let creditosAprobados = 0;
const creditosSpan = document.getElementById("creditos-aprobados");
const malla = document.getElementById("malla");
const aprobados = new Set();

function totalCreditosAprobados() {
  return Array.from(aprobados).reduce((acc, nombre) => {
    for (const semestre of ramosData) {
      for (const ramo of semestre.ramos) {
        if (ramo.nombre === nombre) return acc + ramo.creditos;
      }
    }
    return acc;
  }, 0);
}

function crearMalla() {
  malla.innerHTML = "";
  ramosData.forEach((sem) => {
    const divSemestre = document.createElement("div");
    divSemestre.className = "semestre";
    const titulo = document.createElement("h2");
    titulo.textContent = sem.semestre;
    divSemestre.appendChild(titulo);

    sem.ramos.forEach((ramo) => {
      const divRamo = document.createElement("div");
      divRamo.className = "ramo";
      divRamo.textContent = `${ramo.nombre} (${ramo.creditos} cr)`;

      const requisitos = ramo.prerequisitos || [];
      const requisitosCumplidos = requisitos.every(req => aprobados.has(req));

      if (!requisitosCumplidos && requisitos.length > 0) {
        divRamo.classList.add("bloqueado");
      }

      if (aprobados.has(ramo.nombre)) {
        divRamo.classList.add("aprobado");
      }

      divRamo.addEventListener("click", () => {
        if (divRamo.classList.contains("bloqueado") || aprobados.has(ramo.nombre)) return;
        aprobados.add(ramo.nombre);
        divRamo.classList.add("aprobado");
        creditosAprobados = totalCreditosAprobados();
        creditosSpan.textContent = creditosAprobados;
        crearMalla();
      });

      divSemestre.appendChild(divRamo);
    });

    malla.appendChild(divSemestre);
  });
}

crearMalla();
