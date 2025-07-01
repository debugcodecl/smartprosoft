# Configuración de EmailJS para SmartProSoft

## 📧 Instrucciones para conectar el formulario con tu email

Para que el formulario envíe emails a **debugcodecl@gmail.com**, necesitas configurar EmailJS:

### 1. Crear cuenta en EmailJS
1. Ve a https://www.emailjs.com/
2. Regístrate con tu email
3. Confirma tu email

### 2. Configurar servicio de email
1. En el dashboard, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona "Gmail"
4. Conecta tu cuenta **debugcodecl@gmail.com**
5. Copia el **Service ID** (ejemplo: `service_smartpro`)

### 3. Crear template de email
1. Ve a "Email Templates"
2. Haz clic en "Create New Template"
3. Copia y pega este template:

```
Asunto: Nuevo contacto desde SmartProSoft - {{from_name}}

Contenido:
Nuevo mensaje desde el sitio web de SmartProSoft:

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{phone}}
Servicio de interés: {{service}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde el formulario de contacto de SmartProSoft.
```

4. Guarda el template y copia el **Template ID** (ejemplo: `template_contact`)

### 4. Obtener Public Key
1. Ve a "Account" -> "General"
2. Copia la **Public Key** (ejemplo: `9wJkKQMZFwh3A7mCe`)

### 5. Actualizar el código
Reemplaza en `/app/frontend/src/App.js` línea 12-15:

```javascript
// Reemplaza con tus valores reales de EmailJS
emailjs.init("TU_PUBLIC_KEY_AQUI");

// En línea 44-47, reemplaza:
await emailjs.send(
  'TU_SERVICE_ID_AQUI',     // Service ID
  'TU_TEMPLATE_ID_AQUI',    // Template ID
  templateParams
);
```

### 6. Test del formulario
Una vez configurado, cuando alguien complete el formulario:
- Recibirás un email en **debugcodecl@gmail.com**
- El usuario verá un mensaje de éxito
- Los datos se enviarán automáticamente

### 🔧 Plan B: FormSubmit (más simple)
Si prefieres una solución más simple sin registro:

1. Reemplaza la función `handleSubmit` con:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  const formData = new FormData(e.target);
  formData.append('_to', 'debugcodecl@gmail.com');
  formData.append('_subject', 'Nuevo contacto desde SmartProSoft');
  
  try {
    await fetch('https://formsubmit.co/debugcodecl@gmail.com', {
      method: 'POST',
      body: formData
    });
    alert('¡Mensaje enviado exitosamente! Te contactaremos pronto.');
    e.target.reset();
  } catch (error) {
    alert('Error al enviar mensaje. Intenta nuevamente.');
  }
  setIsSubmitting(false);
};
```

## ✅ Funcionalidades ya implementadas:
- ✅ Botón WhatsApp flotante con tu número +56995984952
- ✅ Actualizado email a debugcodecl@gmail.com
- ✅ Actualizado teléfono a +56 9 9598 4952
- ✅ Imágenes optimizadas JPG/PNG con parámetros de compresión
- ✅ Formulario con validación y estado de carga
- ✅ Ubicación actualizada a "Chile"

El sitio está listo, solo necesitas configurar EmailJS para que funcione el envío de emails.