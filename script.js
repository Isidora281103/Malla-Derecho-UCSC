const malla = [
  {
    semestre: "Semestre 1",
    ramos: [
      { nombre: "Derecho Romano", creditos: 10 },
      { nombre: "Derecho Político", creditos: 10 },
      { nombre: "Teoría del Derecho", creditos: 10 },
      { nombre: "Historia del Derecho", creditos: 4 },
      { nombre: "Fundamentos Filosóficos", creditos: 4 },
      { nombre: "Técnicas para el manejo del estrés y la ansiedad frente a evaluaciones", creditos: 4 }
    ]
  },
  {
    semestre: "Semestre 2",
    ramos: [
      { nombre: "Derecho Económico I", creditos: 4 },
      { nombre: "Fundamentos Teológicos", creditos: 4 },
      { nombre: "Integración del Saber II", creditos: 4 }
    ]
  },
  {
    semestre: "Semestre 3",
    ramos: [
      { nombre: "Derecho Civil I", creditos: 5 },
      { nombre: "Derecho Procesal I", creditos: 5 },
      { nombre: "Derecho Constitucional I", creditos: 4 },
      { nombre: "Derecho Internacional Público I", creditos: 4 },
      { nombre: "Derecho Económico II", creditos: 4 },
      { nombre: "Derecho Canónico", creditos: 3 },
      { nombre: "Integración del Saber III", creditos: 4 }
    ]
  },
  {
    semestre: "Semestre 4",
    ramos: [
      { nombre: "Derecho Civil II", creditos: 5 },
      { nombre: "Derecho Procesal II", creditos: 5 },
      { nombre: "Derecho Constitucional II", creditos: 4 },
      { nombre: "Derecho Internacional Público II", creditos: 4 },
      { nombre: "Derecho Económico III", creditos: 4 },
      { nombre: "Inglés I", creditos: 4 },
      { nombre: "Seminario Jurídico I", creditos: 4 }
    ]
  },
  {
    semestre: "Semestre 5",
    ramos: [
      { nombre: "Derecho Civil III", creditos: 5 },
      { nombre: "Derecho Procesal III", creditos: 5 },
      { nombre: "Derecho Penal I", creditos: 4 },
      { nombre: "Derecho Comercial I", creditos: 4 },
      { nombre: "Derecho del Trabajo I", creditos: 4 },
      { nombre: "Derecho Administrativo I", creditos: 4 },
      { nombre: "Integración del Saber IV", creditos: 4 }
    ]
  },
  {
    semestre: "Semestre 6",
    ramos: [
      { nombre: "Derecho Civil IV", creditos: 5 },
      { nombre: "Derecho Procesal IV", creditos: 5 },
      { nombre: "Derecho Penal II", creditos: 4 },
      { nombre: "Derecho Comercial II", creditos: 4 },
      { nombre: "Derecho del Trabajo II", creditos: 4 },
      { nombre: "Derecho Administrativo II", creditos: 4 },
      { nombre: "Seminario Jurídico II", creditos: 4 }
    ]
  },
  {
    semestre: "Semestre 7",
    ramos: [
      { nombre: "Derecho Civil V", creditos: 5 },
      { nombre: "Derecho Procesal V", creditos: 5 },
      { nombre: "Derecho Penal III", creditos: 4 },
      { nombre: "Derecho Comercial III", creditos: 4 },
      { nombre: "Seguridad Social", creditos: 3 },
      { nombre: "Derecho Tributario I", creditos: 4 },
      { nombre: "Litigación", creditos: 3 },
      { nombre: "Ética Profesional", creditos: 4 }
    ]
  },
  {
    semestre: "Semestre 8",
    ramos: [
      { nombre: "Derecho Civil VI", creditos: 5 },
      { nombre: "Derecho Procesal VI", creditos: 5 },
      { nombre: "Derecho Penal IV", creditos: 4 },
      { nombre: "Derecho Comercial IV", creditos: 4 },
      { nombre: "Derecho Tributario II", creditos: 4 },
      { nombre: "Seminario Jurídico III", creditos: 4 },
      { nombre: "Optativo de Profundización", creditos: 4 }
    ]
  },
  {
    semestre: "Semestre 9",
    ramos: [
      { nombre: "Practica Profesional", creditos: 12 },
      { nombre: "Derecho Civil VII", creditos: 5 },
      { nombre: "Derecho Procesal VII", creditos: 5 },
      { nombre: "Anteproyecto de Investigación", creditos: 5 },
      { nombre: "Derecho Internacional Privado", creditos: 3 },
      { nombre: "Filosofía del Derecho", creditos: 3 },
      { nombre: "Optativo de Profundización", creditos: 4 }
    ]
  },
  {
    semestre: "Semestre 10",
    ramos: [
      { nombre: "Derecho Civil VIII", creditos: 5 },
      { nombre: "Tesina", creditos: 8 },
      { nombre: "Optativo de Profundización", creditos: 4 },
      { nombre: "Optativo de Profundización", creditos: 4 }
    ]
  }
];

const prerrequisitos = {
  "Derecho Civil I": ["Derecho Romano", "Teoría del Derecho"],
  "Derecho Constitucional I": ["Derecho Político"],
  "Derecho Internacional Público I": ["Derecho Político"],
  "Derecho Económico II": ["Derecho Económico I"],
  "Derecho Canónico": ["Fundamentos Teológicos"],
  "Derecho Civil II": ["Derecho Civil I"],
  "Derecho Procesal II": ["Derecho Procesal I"],
  "Derecho Constitucional II": ["Derecho Constitucional I"],
  "Derecho Internacional Público II": ["Derecho Internacional Público I"],
  "Derecho Económico III": ["Derecho Económico II"],
  "Seminario Jurídico I": ["Derecho Civil I", "Derecho Procesal I"],
  "Derecho Civil III": ["Derecho Civil II"],
  "Derecho Procesal III": ["Derecho Procesal II"],
  "Derecho Penal I": ["54"],
  "Derecho Comercial I": ["Derecho Civil II"],
  "Derecho del Trabajo I": ["Teoría del Derecho"],
  "Derecho Administrativo I": ["Derecho Constitucional I"],
  "Derecho Civil IV": ["Derecho Civil III"],
  "Derecho Procesal IV": ["Derecho Procesal III"],
  "Derecho Penal II": ["Derecho Penal I"],
  "Derecho Comercial II": ["Derecho Comercial I"],
  "Derecho del Trabajo II": ["Derecho del Trabajo I"],
  "Derecho Administrativo II": ["Derecho Administrativo I"],
  "Seminario Jurídico II": ["Derecho Civil III", "Derecho Procesal III", "Seminario Jurídico I"],
  "Derecho Civil V": ["Derecho Civil IV"],
  "Derecho Procesal V": ["Derecho Procesal IV"],
  "Derecho Penal III": ["Derecho Penal II"],
  "Derecho Comercial III": ["Derecho Comercial II"],
  "Seguridad Social": ["Derecho del Trabajo I"],
  "Derecho Tributario I": ["Derecho Económico III"],
  "Litigación": ["Derecho Procesal IV"],
  "Ética Profesional": ["54"],
  "Derecho Civil VI": ["Derecho Civil V"],
  "Derecho Procesal VI": ["Derecho Procesal V"],
  "Derecho Penal IV": ["Derecho Penal III"],
  "Derecho Comercial IV": ["Derecho Comercial III"],
  "Derecho Tributario II": ["Derecho Tributario I"],
  "Seminario Jurídico III": ["Derecho Civil V", "Derecho Procesal V", "Seminario Jurídico II"],
  "Derecho Civil VII": ["Derecho Civil VI"],
  "Derecho Procesal VII": ["Derecho Procesal VI"],
  "Filosofía del Derecho": ["Fundamentos Filosóficos"],
  "Anteproyecto de Investigación": ["235"],
  "Derecho Internacional Privado": ["Derecho Civil IV"],
  "Derecho Civil VIII": ["Derecho Civil VII"],
  "Tesina": ["Anteproyecto de Investigación"],
  "Optativo de Profundización": ["173"],
  "Practica Profesional": ["Seminario Jurídico III"]
};

let aprobados = JSON.parse(localStorage.getItem('aprobados')) || [];

function actualizarCreditos() {
  let total = 0;
  malla.forEach(s => {
    s.ramos.forEach(r => {
      if (aprobados.includes(r.nombre)) {
        total += r.creditos;
      }
    });
  });
  document.getElementById('creditos-aprobados').textContent = total;
}

function renderMalla() {
  const contenedor = document.getElementById("semestres");
  contenedor.innerHTML = "";

  malla.forEach(sem => {
    const box = document.createElement("div");
    box.className = "semestre";
    const title = document.createElement("h2");
    title.textContent = sem.semestre;
    box.appendChild(title);

    sem.ramos.forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.textContent = ramo.nombre;

      const requisitos = prerrequisitos[ramo.nombre] || [];
      const creditosActuales = malla
        .flatMap(s => s.ramos)
        .reduce((sum, r) => aprobados.includes(r.nombre) ? sum + r.creditos : sum, 0);

      const bloqueado = requisitos.some(req =>
        isNaN(req)
          ? !aprobados.includes(req)
          : creditosActuales < parseInt(req)
      );

      if (bloqueado) div.classList.add("bloqueado");
      if (aprobados.includes(ramo.nombre)) div.classList.add("aprobado");

      div.addEventListener("click", () => {
        if (div.classList.contains("bloqueado")) return;

        if (aprobados.includes(ramo.nombre)) {
          aprobados = aprobados.filter(n => n !== ramo.nombre);
        } else {
          aprobados.push(ramo.nombre);
        }

        localStorage.setItem('aprobados', JSON.stringify(aprobados));
        renderMalla();
        actualizarCreditos();
      });

      box.appendChild(div);
    });

    contenedor.appendChild(box);
  });
}

renderMalla();
actualizarCreditos();
