// Navegación responsive
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    nav.setAttribute('aria-expanded', String(!expanded));
  });
}

// Modo lenguaje (infantil/adulto) en actividades
const modoSelect = document.getElementById('modo-lenguaje');
const textosInfantil = document.querySelectorAll('.texto-infantil');
const textosAdulto = document.querySelectorAll('.texto-adulto');

function actualizarModo() {
  const modo = modoSelect.value;
  const mostrarInfantil = modo === 'infantil';
  textosInfantil.forEach(el => el.style.display = mostrarInfantil ? 'block' : 'none');
  textosAdulto.forEach(el => el.style.display = mostrarInfantil ? 'none' : 'block');
}
if (modoSelect) {
  actualizarModo();
  modoSelect.addEventListener('change', actualizarModo);
}

// Validación y feedback: Reservas familias
const formFamilias = document.getElementById('form-familias');
const familiasMsg = document.getElementById('familias-msg');
if (formFamilias) {
  formFamilias.addEventListener('submit', (e) => {
    e.preventDefault();
    const cantidad = parseInt(document.getElementById('cantidad-ninos').value, 10);
    if (isNaN(cantidad) || cantidad < 1 || cantidad > 12) {
      familiasMsg.textContent = 'Por favor, ingresa una cantidad válida (1–12).';
      familiasMsg.style.color = '#b00020';
      return;
    }
    familiasMsg.textContent = '¡Reserva enviada! Te contactaremos para confirmación.';
    familiasMsg.style.color = '#2d6a4f';
    formFamilias.reset();
    actualizarModo(); // Reaplicar modo por si cambia el render
  });
}

// Validación y feedback: Reservas escuelas
const formEscuelas = document.getElementById('form-escuelas');
const escuelasMsg = document.getElementById('escuelas-msg');
if (formEscuelas) {
  formEscuelas.addEventListener('submit', (e) => {
    e.preventDefault();
    const colegio = document.getElementById('colegio').value.trim();
    const curso = document.getElementById('curso').value.trim();
    const cant = parseInt(document.getElementById('cantidad-escuelas').value, 10);
    const tel = document.getElementById('telefono-escuelas').value.trim();

    if (!colegio || !curso || isNaN(cant) || cant < 1 || cant > 40 || !tel) {
      escuelasMsg.textContent = 'Revisa los campos: colegio, curso, cantidad (1–40) y teléfono.';
      escuelasMsg.style.color = '#b00020';
      return;
    }
    escuelasMsg.textContent = 'Solicitud enviada. Nos pondremos en contacto para coordinar el bloque.';
    escuelasMsg.style.color = '#2d6a4f';
    formEscuelas.reset();
  });
}

// Contacto simple
const formContacto = document.getElementById('form-contacto');
const contactoMsg = document.getElementById('contacto-msg');
if (formContacto) {
  formContacto.addEventListener('submit', (e) => {
    e.preventDefault();
    contactoMsg.textContent = 'Mensaje enviado. Te responderemos pronto.';
    contactoMsg.style.color = '#2d6a4f';
    formContacto.reset();
  });
}
