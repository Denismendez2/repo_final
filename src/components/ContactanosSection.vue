<template>

  <section id="contacto">
  <section class="contact-section">
    <div class="contact-card">
      <h2 class="section-title">Contáctanos</h2>
      <form @submit.prevent="enviarFormulario" ref="formularioRef" novalidate>
        <div class="row">
          <input
          name="nombre"
          type="text"
          placeholder="Nombre"
          v-model="formData.nombre"
          :class="{ 'input-error': showErrors && !isValidName(formData.nombre) }"
          required
            />
          <input
          name="apellido"
          type="text"
          placeholder="Apellido"
          v-model="formData.apellido"
          :class="{ 'input-error': showErrors && !isValidName(formData.apellido) }"
          required
        />
        </div>

        <input
          type="email"
          name="reply_to"
          v-model="formData.email"
          placeholder="Correo electrónico"
          required
          :class="{ 'input-error': showErrors && !isValidEmail(formData.email) }"
        />

        <input
        name="telefono"
        type="tel"
        v-model="formData.telefono"
        placeholder="Número de teléfono"
        required
        :class="{ 'input-error': showErrors && !isValidPhone(formData.telefono) }"
        
        />

        <textarea
          name="mensaje"
          v-model="formData.mensaje"
          placeholder="Escribe tu mensaje aquí..."
          required
          :class="{ 'input-error': showErrors && !formData.mensaje }"
        ></textarea>

        <button type="submit" style="color: black ;">Enviar</button>
        <p v-if="mensajeEnviado" class="success-msg">¡Mensaje enviado exitosamente!</p>
      </form>
    </div>
  </section>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue';
import emailjs from '@emailjs/browser';

const formData = reactive({
  nombre: '',
  apellido: '',
  email: '',
  telefono: '',
  mensaje: ''
});

const formularioRef = ref(null);
const mensajeEnviado = ref(false);
const showErrors = ref(false);
const isValidPhone = (telefono) => /^[0-9\s\-\+()]{7,20}$/.test(telefono);

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidName = (text) => /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(text); // Letras y espacios

const enviarFormulario = () => {
  showErrors.value = true;

  if (
  !isValidName(formData.nombre) ||
  !isValidName(formData.apellido) ||
  !isValidEmail(formData.email) ||
  !isValidPhone(formData.telefono) ||
  !formData.mensaje
) {
  return;
}


  emailjs
    .sendForm(
      'service_ztozl4k',
      'template_jbib4q9',
      formularioRef.value,
      '1TQoejp1Y6B_oRAr2'
    )
    .then(() => {
      mensajeEnviado.value = true;
      showErrors.value = false;
      Object.keys(formData).forEach((key) => (formData[key] = ''));
    })
    .catch((error) => {
      console.error('Error al enviar:', error);
    });
};
</script>


<style scoped>
.contact-section {
  background: #0e0e0e;
  padding: 100px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  padding: 40px;
  border-radius: 16px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 0 40px rgba(255, 126, 95, 0.15);
}

.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
  color: #ffffff;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.row {
  display: flex;
  gap: 20px;
}

input,
textarea {
  background-color: rgba(255, 255, 255, 0.08);
  border: 1px solid transparent;
  border-radius: 8px;
  color: #ffffff;
  padding: 12px;
  font-size: 1em;
  width: 100%;
  transition: border 0.3s ease;
}

input::placeholder,
textarea::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

input:focus,
textarea:focus {
  outline: none;
  border: 1px solid #eedcd8;
  background-color: rgba(255, 255, 255, 0.12);
}

textarea {
  resize: vertical;
  min-height: 100px;
}

.input-error {
  border: 1px solid #ff6b6b !important;
}

button {
  background: linear-gradient(to right, #efe7e5, #cdb7a7);
  color: white;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-size: 1em;
  cursor: pointer;
  transition: transform 0.2s ease;
}

button:hover {
  transform: scale(1.03);
}

.success-msg {
  text-align: center;
  color: #8eff8e;
  margin-top: 15px;
}
</style>
