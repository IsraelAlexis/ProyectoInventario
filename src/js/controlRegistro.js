document.addEventListener('DOMContentLoaded', function() {
  const registroForm = document.getElementById('registroForm');

  registroForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const nombre = document.getElementById('nombre').value;
      const apellido = document.getElementById('apellido').value;
      const ciudad = document.getElementById('ciudad').value;
      const password = document.getElementById('password').value;

      guardarDatosLocales(nombre, apellido, ciudad, password);
      window.location.href = "/src/views/iniciosesion.html";
  });
});

function guardarDatosLocales(nombre, apellido, ciudad, password) {
  const usuario = {
      nombre: nombre,
      apellido: apellido,
      ciudad: ciudad,
      password: password
  };

  localStorage.setItem('usuario', JSON.stringify(usuario));
}

document.addEventListener('DOMContentLoaded', function() {
  const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));

  if (usuarioGuardado) {
      const usuarioInput = document.querySelector('input[name="Usuario"]');
      const passwordInput = document.querySelector('input[name="password"]');
      
      usuarioInput.value = usuarioGuardado.nombre;
      passwordInput.value = usuarioGuardado.password; 
      
    
      const loginForm = document.querySelector('form');
      loginForm.submit();
  }
});

