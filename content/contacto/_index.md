---
title: "Contacto"
description: "Contacta con la Asociación de Displasia Fibrosa para obtener información, apoyo o colaborar"
show_colabora: false
---

¿Necesitas información, apoyo o quieres colaborar con nosotros? Estamos aquí para ayudarte. Puedes contactarnos a través de diferentes vías según tus necesidades.

## 📧 Formularios de Contacto

### 🤝 Hazte Socio

Si deseas formar parte de nuestra asociación y apoyar regularmente nuestra labor:

```html
<form id="form-socio" class="contact-form">
  <div class="form-group">
    <label for="nombre-socio">Nombre completo *</label>
    <input type="text" id="nombre-socio" name="nombre" required />
  </div>

  <div class="form-group">
    <label for="email-socio">Email *</label>
    <input type="email" id="email-socio" name="email" required />
  </div>

  <div class="form-group">
    <label for="telefono-socio">Teléfono</label>
    <input type="tel" id="telefono-socio" name="telefono" />
  </div>

  <div class="form-group">
    <label for="direccion-socio">Dirección</label>
    <input type="text" id="direccion-socio" name="direccion" />
  </div>

  <div class="form-group">
    <label for="motivo-socio">¿Por qué quieres hacerte socio?</label>
    <textarea id="motivo-socio" name="motivo" rows="4"></textarea>
  </div>

  <div class="form-group">
    <label for="cuota-socio">Tipo de cuota mensual</label>
    <select id="cuota-socio" name="cuota">
      <option value="">Selecciona una opción</option>
      <option value="5">5€ - Cuota básica</option>
      <option value="10">10€ - Cuota estándar</option>
      <option value="20">20€ - Cuota colaboradora</option>
      <option value="50">50€ - Cuota benefactora</option>
      <option value="otro">Otro amount</option>
    </select>
  </div>

  <button type="submit" class="btn btn-primary">Enviar solicitud</button>
</form>
```

### 🤲 Hazte Voluntario

Si quieres ofrecerte como voluntario para nuestras actividades:

```html
<form id="form-voluntario" class="contact-form">
  <div class="form-group">
    <label for="nombre-voluntario">Nombre completo *</label>
    <input type="text" id="nombre-voluntario" name="nombre" required />
  </div>

  <div class="form-group">
    <label for="email-voluntario">Email *</label>
    <input type="email" id="email-voluntario" name="email" required />
  </div>

  <div class="form-group">
    <label for="telefono-voluntario">Teléfono *</label>
    <input type="tel" id="telefono-voluntario" name="telefono" required />
  </div>

  <div class="form-group">
    <label for="edad-voluntario">Edad</label>
    <input type="number" id="edad-voluntario" name="edad" min="18" />
  </div>

  <div class="form-group">
    <label for="disponibilidad-voluntario">Disponibilidad</label>
    <select id="disponibilidad-voluntario" name="disponibilidad">
      <option value="">Selecciona</option>
      <option value="fin-semana">Fines de semana</option>
      <option value="semana">Entre semana</option>
      <option value="flexible">Horario flexible</option>
      <option value="remoto">Trabajo remoto</option>
    </select>
  </div>

  <div class="form-group">
    <label for="habilidades-voluntario">Habilidades o experiencia</label>
    <textarea
      id="habilidades-voluntario"
      name="habilidades"
      rows="4"
      placeholder="Ej: atención al cliente, organización de eventos, redes sociales, diseño..."
    ></textarea>
  </div>

  <div class="form-group">
    <label for="motivacion-voluntario">¿Por qué quieres ser voluntario?</label>
    <textarea
      id="motivacion-voluntario"
      name="motivacion"
      rows="4"
      required
    ></textarea>
  </div>

  <button type="submit" class="btn btn-primary">Enviar solicitud</button>
</form>
```

### 💰 Haz un Donativo

Si deseas hacer una donación puntual:

```html
<form id="form-donativo" class="contact-form">
  <div class="form-group">
    <label for="nombre-donativo">Nombre completo *</label>
    <input type="text" id="nombre-donativo" name="nombre" required />
  </div>

  <div class="form-group">
    <label for="email-donativo">Email *</label>
    <input type="email" id="email-donativo" name="email" required />
  </div>

  <div class="form-group">
    <label for="telefono-donativo">Teléfono</label>
    <input type="tel" id="telefono-donativo" name="telefono" />
  </div>

  <div class="form-group">
    <label for="cantidad-donativo">Cantidad a donar (€) *</label>
    <input
      type="number"
      id="cantidad-donativo"
      name="cantidad"
      min="1"
      required
    />
  </div>

  <div class="form-group">
    <label for="metodo-donativo">Método de pago</label>
    <select id="metodo-donativo" name="metodo">
      <option value="">Selecciona</option>
      <option value="transferencia">Transferencia bancaria</option>
      <option value="tarjeta">Tarjeta de crédito/débito</option>
      <option value="paypal">PayPal</option>
      <option value="bizum">Bizum</option>
    </select>
  </div>

  <div class="form-group">
    <label for="motivo-donativo">¿Quieres que tu donativo sea anónimo?</label>
    <select id="motivo-donativo" name="anonimo">
      <option value="no">No, quiero que aparezca mi nombre</option>
      <option value="si">Sí, donación anónima</option>
    </select>
  </div>

  <div class="form-group">
    <label for="mensaje-donativo">Mensaje (opcional)</label>
    <textarea id="mensaje-donativo" name="mensaje" rows="3"></textarea>
  </div>

  <button type="submit" class="btn btn-primary">Realizar donativo</button>
</form>
```

### 📝 Contacto General

Para información general, dudas o sugerencias:

```html
<form id="form-general" class="contact-form">
  <div class="form-group">
    <label for="nombre-general">Nombre completo *</label>
    <input type="text" id="nombre-general" name="nombre" required />
  </div>

  <div class="form-group">
    <label for="email-general">Email *</label>
    <input type="email" id="email-general" name="email" required />
  </div>

  <div class="form-group">
    <label for="telefono-general">Teléfono</label>
    <input type="tel" id="telefono-general" name="telefono" />
  </div>

  <div class="form-group">
    <label for="asunto-general">Asunto *</label>
    <select id="asunto-general" name="asunto" required>
      <option value="">Selecciona un asunto</option>
      <option value="informacion">Solicitar información</option>
      <option value="apoyo">Buscar apoyo</option>
      <option value="medico">Consulta médica</option>
      <option value="voluntario">Interés en voluntariado</option>
      <option value="colaboracion">Propuesta de colaboración</option>
      <option value="prensa">Petición de prensa</option>
      <option value="otro">Otro</option>
    </select>
  </div>

  <div class="form-group">
    <label for="mensaje-general">Mensaje *</label>
    <textarea id="mensaje-general" name="mensaje" rows="6" required></textarea>
  </div>

  <button type="submit" class="btn btn-primary">Enviar mensaje</button>
</form>
```

## 📞 Contacto Directo

### **Información General**

- **Email**: info@displasiafibrosa.es
- **Teléfono**: +34 900 123 456
- **Horario**: Lunes a viernes de 10:00 a 18:00

### **Atención a Socios**

- **Email**: socios@displasiafibrosa.es
- **Teléfono**: +34 600 123 456
- **Horario**: Lunes a viernes de 9:00 a 20:00

### **Asuntos Médicos**

- **Email**: medico@displasiafibrosa.es
- **Teléfono**: +34 600 234 567
- **Horario**: Lunes y miércoles de 10:00 a 14:00

### **Voluntariado**

- **Email**: voluntarios@displasiafibrosa.es
- **Teléfono**: +34 600 345 678
- **Horario**: Martes y jueves de 15:00 a 18:00

## 📍 Dirección Postal

**Asociación de Displasia Fibrosa**
Calle Principal, Nº 123
28001 Madrid
España

## 🌐 Redes Sociales

Síguenos en nuestras redes sociales para estar al día de todas nuestras actividades:

- **Facebook**: [@asociaciondisplasiafibrosa](https://www.facebook.com/asociaciondisplasiafibrosa)
- **Twitter**: [@adfdisplasia](https://twitter.com/adfdisplasia)
- **Instagram**: [@asociaciondisplasiafibrosa](https://www.instagram.com/asociaciondisplasiafibrosa)
- **YouTube**: [Canal ADF](https://www.youtube.com/channel/UCLjAZe4J1iTkvN72vWFPvBA)

## ⏰ Horario de Atención

- **Lunes a Viernes**: 10:00 - 18:00
- **Urgencias**: Email a urgencias@displasiafibrosa.es
- **Respuesta**: Nos comprometemos a responder en un máximo de 48 horas laborables

## 🔒 Protección de Datos

Tus datos personales son importantes para nosotros. Toda la información que nos proporciones será tratada según nuestra **Política de Privacidad** y la normativa vigente de protección de datos (RGPD).

No compartiremos tu información con terceros sin tu consentimiento explícito, salvo obligación legal.

---

_Estamos aquí para ayudarte. No dudes en contactarnos con cualquier pregunta o necesidad. Juntos podemos hacer la diferencia._
