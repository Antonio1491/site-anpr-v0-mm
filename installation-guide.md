# 📋 Guía Completa de Instalación - Landing Page ANPR

## 🎯 Archivos Incluidos

### **Archivo Principal:**
- `wordpress-landing-complete.html` - Código HTML completo con CSS y JavaScript integrados

### **Carpeta de Recursos:**
\`\`\`
assets/
├── images/
│   ├── anpr-logo.png
│   ├── hero-background.jpg
│   ├── experts/
│   │   ├── isabel-velazquez.jpg
│   │   ├── luis-romahn.jpg
│   │   ├── manuel-plascencia.jpg
│   │   ├── vitoria-martin.jpg
│   │   └── tania-jaime.jpg
│   └── sponsors/
│       ├── anpr-logo.png
│       └── bugy-logo.png
\`\`\`

## 🚀 Instalación en WordPress

### **Método 1: Bloque HTML Personalizado (Recomendado)**
1. **Crear nueva página:**
   - Ve a WordPress Admin → Páginas → Agregar nueva
   - Título: "Jornada ANPR Chihuahua 2025"

2. **Agregar el código:**
   - Clic en "+" para agregar bloque
   - Buscar "HTML personalizado"
   - Pegar todo el contenido de `wordpress-landing-complete.html`
   - Publicar página

3. **Subir imágenes:**
   - Ve a Medios → Agregar nuevo
   - Sube todas las imágenes de la carpeta `assets/`
   - Mantén la estructura de carpetas

### **Método 2: Editor de Texto**
1. **Cambiar a editor clásico:**
   - Instalar plugin "Classic Editor" si es necesario
   - Crear nueva página
   - Cambiar a pestaña "Texto"

2. **Pegar código:**
   - Copiar todo el contenido del archivo HTML
   - Pegar en el editor de texto
   - Publicar

### **Método 3: Archivo de Tema (Avanzado)**
1. **Crear template personalizado:**
   \`\`\`php
   <?php
   /*
   Template Name: ANPR Landing Page
   */
   get_header(); ?>
   
   <!-- Pegar aquí el contenido del body del HTML -->
   
   <?php get_footer(); ?>
   \`\`\`

2. **Subir via FTP:**
   - Subir archivo a `/wp-content/themes/tu-tema/`
   - Crear página y seleccionar template "ANPR Landing Page"

## ⚙️ Configuración de Imágenes

### **Rutas de Imágenes:**
Actualizar las rutas en el HTML según tu instalación:

\`\`\`html
<!-- Cambiar de: -->
<img src="./assets/images/anpr-logo.png" alt="ANPR México">

<!-- A: -->
<img src="/wp-content/uploads/anpr-landing/anpr-logo.png" alt="ANPR México">
\`\`\`

### **Estructura Recomendada en WordPress:**
\`\`\`
/wp-content/uploads/anpr-landing/
├── anpr-logo.png
├── hero-background.jpg
├── experts/
│   ├── isabel-velazquez.jpg
│   ├── luis-romahn.jpg
│   ├── manuel-plascencia.jpg
│   ├── vitoria-martin.jpg
│   └── tania-jaime.jpg
└── sponsors/
    ├── anpr-logo.png
    └── bugy-logo.png
\`\`\`

## 🎨 Características Mejoradas

### **CSS Ultra-Específico:**
- Todos los estilos usan `!important` para evitar conflictos
- Clases prefijadas con `.anpr-` para encapsulación
- Estilos inline donde es necesario para máxima compatibilidad

### **Iconos Integrados:**
- **Lucide Icons** cargados desde CDN
- Iconos vectoriales escalables
- Inicialización automática con JavaScript

### **Fuentes Web:**
- **Montserrat** para títulos (cargada desde Google Fonts)
- **Inter** para texto general
- Fallbacks a fuentes del sistema

### **Responsive Design:**
- Breakpoints específicos para móviles y tablets
- Grid layouts que se adaptan automáticamente
- Imágenes optimizadas para diferentes tamaños

## 🔧 Personalización

### **Cambiar Colores:**
Buscar y reemplazar en el CSS:
\`\`\`css
/* Azul principal */
#012787 → tu-color-azul

/* Verde/amarillo de acento */
#d2dd0a → tu-color-acento

/* Gris de fondo */
#f9fafb → tu-color-fondo
\`\`\`

### **Modificar Textos:**
Todos los textos están claramente identificados en el HTML y son fáciles de localizar.

### **Agregar Tracking:**
\`\`\`javascript
// En la sección de JavaScript, agregar:
gtag('event', 'click', {
  event_category: 'registration',
  event_label: 'hero_button'
});
\`\`\`

## 📱 Compatibilidad

### **Navegadores Soportados:**
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile Safari
- ✅ Chrome Mobile

### **Temas de WordPress:**
- ✅ Astra
- ✅ GeneratePress
- ✅ OceanWP
- ✅ Divi
- ✅ Elementor Hello
- ✅ Twenty Twenty-Four

## 🚨 Solución de Problemas

### **Imágenes no se muestran:**
1. Verificar rutas de imágenes
2. Comprobar permisos de archivos
3. Subir imágenes a biblioteca de medios de WordPress

### **Estilos no se aplican:**
1. Verificar que no hay plugins de cache activos
2. Limpiar cache del navegador
3. Comprobar conflictos con otros plugins

### **Iconos no aparecen:**
1. Verificar conexión a internet (CDN de Lucide)
2. Comprobar que JavaScript está habilitado
3. Revisar consola del navegador por errores

### **Responsive no funciona:**
1. Verificar meta viewport en el head
2. Comprobar que el tema no sobrescribe estilos
3. Testear en diferentes dispositivos

## 📞 Soporte Técnico

### **Checklist Pre-Instalación:**
- [ ] WordPress actualizado a última versión
- [ ] Tema compatible con HTML personalizado
- [ ] Plugins de cache desactivados temporalmente
- [ ] Permisos de escritura en carpeta uploads
- [ ] JavaScript habilitado en el sitio

### **Optimización Post-Instalación:**
- [ ] Comprimir imágenes para web
- [ ] Configurar cache del navegador
- [ ] Testear en múltiples dispositivos
- [ ] Verificar velocidad de carga
- [ ] Configurar Google Analytics (opcional)

¡La landing page está lista para funcionar perfectamente en WordPress! 🎉
