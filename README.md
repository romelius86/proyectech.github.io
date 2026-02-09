# PROYECTECH - Sitio Web Corporativo

## 📋 Descripción
Sitio web estático multipágina para la venta de **Techos de Aluzinc TR6**. Diseño moderno, industrial y totalmente Mobile First.

## 🚀 Stack Tecnológico
- **HTML5 Semántico**: Estructura optimizada para SEO
- **Tailwind CSS**: Framework CSS vía CDN para diseño ágil y responsivo
- **JavaScript Vanilla ES6**: Lógica de interacción sin dependencias
- **Google Fonts**: Tipografía Inter para diseño moderno

## 🎨 Paleta de Colores
```css
--color-primary: #2c3e50    /* Azul Acero */
--color-secondary: #e74c3c  /* Rojo Coral */
--color-accent: #f39c12     /* Amarillo/Naranja */
--color-metallic: #95a5a6   /* Gris Metálico */
--color-dark: #1a252f       /* Azul Oscuro */
```

## 📁 Estructura del Proyecto
```
webproyec/
├── index.html          # Página de inicio
├── nosotros.html       # Información de la empresa
├── productos.html      # Catálogo y ficha técnica
├── contacto.html       # Formulario de contacto
├── script.js           # Lógica JavaScript global
└── README.md           # Documentación
```

## 📄 Páginas

### 1. **index.html** - Inicio
- Hero Section con gradiente y CTA destacado
- Sección de características principales (3 bloques)
- Video de YouTube con lazy loading
- CTA final para conversión
- Footer con información de contacto

### 2. **nosotros.html** - Empresa
- Información institucional
- Sección "¿Quiénes Somos?"
- Misión y Visión con iconos SVG
- Valores corporativos (Calidad, Integridad, Innovación)

### 3. **productos.html** - Catálogo
- Ficha técnica completa del Aluzinc TR6
- Tabla estilizada con especificaciones
- Galería de proyectos (grid responsivo)
- CTA para solicitar cotización

### 4. **contacto.html** - Conversión
- Formulario interactivo con validación
- Integración con WhatsApp API
- Información de contacto completa
- Google Maps con lazy loading
- Horarios de atención

## ⚙️ Funcionalidades JavaScript

### Menu Móvil
- Hamburguesa animada
- Cierre automático al seleccionar enlace
- Transiciones suaves

### Lazy Loading
- Video de YouTube carga solo cuando es visible
- Google Maps carga bajo demanda
- Optimización de performance

### Formulario de Contacto
- Validación en tiempo real
- Campos obligatorios marcados
- Construcción dinámica de mensaje WhatsApp
- Redirección automática a WhatsApp Web

### Animaciones
- Fade-in al scroll
- Hover effects en tarjetas
- Transiciones suaves en navegación

## 📱 Características Mobile First

- Diseño responsivo con breakpoints optimizados
- Menú hamburguesa para dispositivos móviles
- Touch-friendly (botones y enlaces grandes)
- Imágenes y videos adaptables
- Formularios optimizados para móvil

## 🔧 Configuración

### Personalización del Número de WhatsApp
Edita el archivo `script.js` línea 145:
```javascript
const numeroWhatsApp = '51984225797'; // Cambiar por tu número
```

También actualiza los enlaces directos en las páginas HTML:
```html
<a href="https://wa.me/51999999999?text=...">
```

### Personalización del Mapa
Edita `contacto.html` y reemplaza el `data-src` del iframe con tu ubicación:
```html
<iframe data-src="TU_URL_DE_GOOGLE_MAPS_EMBED"></iframe>
```

### Personalización del Video
Edita `index.html` y reemplaza el `data-src` del iframe:
```html
<iframe data-src="https://www.youtube.com/embed/TU_VIDEO_ID"></iframe>
```

## 🎯 SEO y Accesibilidad

- Meta tags descriptivos en cada página
- Atributos `alt` en todas las imágenes
- Estructura semántica HTML5
- Etiquetas ARIA para accesibilidad
- Títulos únicos por página
- URLs amigables

## 🚀 Cómo Usar

1. **Desarrollo Local**: Abre cualquier archivo HTML directamente en el navegador
2. **Servidor Local**: Usa cualquier servidor HTTP estático
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx http-server
   ```
3. **Producción**: Sube todos los archivos a tu hosting web

## 📊 Performance

- **Lazy Loading**: Video y mapa cargan solo cuando son necesarios
- **CDN**: Tailwind CSS y Google Fonts desde CDN
- **Sin dependencias**: JavaScript vanilla sin librerías pesadas
- **Optimizado**: Código minificable para producción

## 🔒 Seguridad

- Validación de formularios en cliente
- Sanitización de inputs antes de enviar a WhatsApp
- Sin almacenamiento de datos sensibles
- Enlaces externos con `target="_blank"`

## 📞 Información de Contacto

- **Teléfono**: +51 999 999 999
- **Email**: info@proyectech.com
- **Dirección**: Av. Industrial 123, Lima, Perú

## 📝 Notas Importantes

1. **Logo**: El logo está referenciado desde la ruta local. Para producción, copia la imagen al directorio del proyecto.
2. **Imágenes de Galería**: Actualmente usa placeholders con gradientes. Reemplaza con imágenes reales del producto.
3. **Número de WhatsApp**: Actualiza con el número real de la empresa (formato internacional sin +).
4. **Google Maps**: Configura la ubicación real de la empresa.
5. **Video YouTube**: Reemplaza con el video corporativo real.

## 🎨 Personalización Avanzada

### Cambiar Colores
Edita las variables CSS en cada archivo HTML:
```css
:root {
    --color-primary: #TU_COLOR;
    --color-secondary: #TU_COLOR;
    --color-accent: #TU_COLOR;
}
```

### Agregar Más Productos
Edita `productos.html` y agrega más opciones en el select del formulario de contacto.

### Modificar Contenido
Todo el contenido es editable directamente en los archivos HTML.

## 📦 Próximas Mejoras Sugeridas

- [ ] Agregar más imágenes reales del producto
- [ ] Implementar galería lightbox
- [ ] Agregar testimonios de clientes
- [ ] Crear sección de preguntas frecuentes (FAQ)
- [ ] Implementar chat en vivo
- [ ] Agregar calculadora de materiales
- [ ] Integrar Google Analytics

## 👨‍💻 Desarrollo

Desarrollado siguiendo las mejores prácticas de:
- HTML5 semántico
- CSS moderno con Tailwind
- JavaScript ES6+
- Diseño Mobile First
- Accesibilidad web (WCAG)
- SEO on-page

---

**PROYECTECH** - Tu proyecto garantizado
© 2026 Todos los derechos reservados
