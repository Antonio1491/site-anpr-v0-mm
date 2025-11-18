# 🚀 ANPR Landing Page - Guía de Implementación Segura

## 📋 Opciones de Implementación

### OPCIÓN 1: Code Snippets (Recomendado)
**✅ Más Seguro - Sin riesgo de romper el sitio**

1. **Instalar Plugin Code Snippets**
   - Ve a: Plugins → Añadir nuevo
   - Busca: "Code Snippets"
   - Instala y activa

2. **Agregar el Código PHP**
   - Ve a: Snippets → Add New
   - Título: "ANPR Landing Page"
   - Pega el contenido de `code-snippets-functions.php`
   - Guarda y activa

3. **Usar el Shortcode**
   - En cualquier página: `[anpr_landing]`
   - Solo hero: `[anpr_landing section="hero"]`
   - Solo expertos: `[anpr_landing section="experts"]`

### OPCIÓN 2: Elementor (Recomendado para diseño)
**✅ Control total del diseño**

1. **Agregar CSS Global**
   - Ve a: Elementor → Configuración del sitio → CSS personalizado
   - Pega todo el contenido de `elementor-custom-css.css`

2. **Agregar JavaScript Global**
   - Ve a: Elementor → Configuración del sitio → JavaScript personalizado
   - Pega todo el contenido de `elementor-custom-js.js`

3. **Crear Secciones**
   - Crea nueva página con Elementor
   - Agrega widgets HTML para cada sección
   - Copia el HTML de `elementor-html-sections.html`

### OPCIÓN 3: Functions.php (Solo si tienes tema hijo)
**⚠️ Solo si sabes lo que haces**

1. **Crear Tema Hijo** (si no tienes)
2. **Editar functions.php del tema hijo**
3. **Pegar código de `code-snippets-functions.php`**

## 🎯 Implementación Paso a Paso (Elementor)

### PASO 1: Preparar Elementor
\`\`\`css
/* Pegar en Elementor → Configuración → CSS personalizado */
[Contenido completo de elementor-custom-css.css]
\`\`\`

\`\`\`javascript
/* Pegar en Elementor → Configuración → JavaScript personalizado */
[Contenido completo de elementor-custom-js.js]
\`\`\`

### PASO 2: Crear la Página
1. **Nueva Página**
   - Páginas → Añadir nueva
   - Título: "Jornada ANPR Chihuahua 2025"
   - Editar con Elementor

2. **Configurar Página**
   - Template: Elementor Canvas
   - Eliminar header/footer si es necesario

### PASO 3: Agregar Secciones

#### Sección 1: Hero
- **Agregar Sección**
- **Configurar Fondo:**
  - Tipo: Clásico
  - Imagen: https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foto%201%20copia.jpg-QOgckoacDmghIK2oKC0IAXouaj1X7h.jpeg
  - Posición: Centro centro
  - Adjunto: Fijo
  - Tamaño: Cubrir
  - Superposición: rgba(0,0,0,0.5)
- **Configurar Layout:**
  - Altura mínima: 100vh
  - Alineación vertical: Centro
- **Agregar Widget HTML:**
  - Pegar código de la sección Hero

#### Sección 2: Detalles
- **Agregar Sección**
- **Configurar Fondo:** #f9fafb
- **Agregar Widget HTML:**
  - Pegar código de la sección Detalles

#### Sección 3: Expertos
- **Agregar Sección**
- **Agregar Widget HTML:**
  - Pegar código de la sección Expertos

#### Sección 4: Timeline
- **Agregar Sección**
- **Configurar Fondo:** #f9fafb
- **Agregar Widget HTML:**
  - Pegar código de la sección Timeline

#### Sección 5: CTA Final
- **Agregar Sección**
- **Configurar Fondo:** #012787
- **Agregar Widget HTML:**
  - Pegar código de la sección CTA Final

## 🔧 Personalización

### Cambiar Colores
\`\`\`css
:root {
  --anpr-blue: #012787;    /* Azul principal */
  --anpr-accent: #d2dd0a;  /* Verde/amarillo */
  --anpr-gray: #f9fafb;    /* Gris de fondo */
}
\`\`\`

### Cambiar Textos
- Edita directamente en los widgets HTML
- Busca y reemplaza textos específicos

### Agregar Imágenes Reales
- Reemplaza los placeholders (IV, LR, MP, etc.)
- Sube imágenes a WordPress
- Cambia las URLs en el HTML

## 🚨 Solución de Problemas

### Si algo no se ve bien:
1. **Verificar CSS:** Asegúrate de que el CSS esté en Elementor
2. **Verificar HTML:** Revisa que el HTML esté completo
3. **Limpiar caché:** Limpia caché de WordPress y navegador
4. **Modo debug:** Activa modo debug de WordPress

### Si hay conflictos:
1. **Desactivar otros plugins** temporalmente
2. **Cambiar tema** temporalmente a uno por defecto
3. **Revisar consola** del navegador para errores

### Recuperación de emergencia:
\`\`\`php
// Agregar a functions.php para desactivar todo
remove_action('wp_enqueue_scripts', 'anpr_add_google_fonts');
remove_shortcode('anpr_landing');
\`\`\`

## 📞 Soporte

Si necesitas ayuda:
1. **Revisar logs de error** de WordPress
2. **Contactar desarrollador** con detalles específicos
3. **Hacer backup** antes de cualquier cambio

## ✅ Checklist Final

- [ ] CSS agregado a Elementor
- [ ] JavaScript agregado a Elementor  
- [ ] Página creada con template Canvas
- [ ] Todas las secciones agregadas
- [ ] Enlaces de registro funcionando
- [ ] Responsive verificado en móvil
- [ ] Velocidad de carga optimizada
- [ ] Backup realizado

¡Listo! Tu landing page ANPR estará funcionando sin riesgo de romper tu sitio.
