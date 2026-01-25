# Asociación de Displasia Fibrosa

https://www.displasiafibrosa.es

## Desarrollo web

El sitio web se ha desarrollado con Hugo, un generador de sitios web estáticos.

### Requisitos

- Hugo (https://gohugo.io/)
- Git (https://git-scm.com/)

### Desarrollo

Para desarrollar el sitio web, se debe tener instalado Hugo y Git.

```bash
# Iniciar servidor de desarrollo
hugo server

# Compilar SCSS a CSS (necesario después de cambios en estilos)
./build-css.sh

# Construir sitio para producción
hugo --minify
```

### ⚠️ Importante: Compilación de CSS

Este sitio utiliza SCSS para los estilos. Después de hacer cambios en los archivos SCSS, es necesario compilar manualmente el CSS:

1. **Instalar Dart Sass** (si no está instalado):

   ```bash
   npm install -g sass
   ```

2. **Compilar estilos**:

   ```bash
   ./build-css.sh
   ```

3. **Reiniciar servidor Hugo** para ver los cambios.

### Estructura de Archivos

```
assets/
├── css/
│   ├── main.scss          # Archivo SCSS principal
│   ├── _variables.scss    # Variables CSS
│   └── styles.scss       # Importaciones
static/
├── css/
│   └── main.css          # CSS compilado (generado automáticamente)
├── js/
│   └── main.js           # JavaScript
└── images/              # Imágenes estáticas
```

---

## CSS Helper Classes

Este sitio incluye un sistema completo de clases helper para facilitar el desarrollo y mantener consistencia visual. Las clases están inspiradas en sistemas como Tailwind CSS pero son personalizadas para este proyecto.

### 🎨 Border Radius (Redondeo)

| Clase         | Valor | Uso común             |
| ------------- | ----- | --------------------- |
| `.round-0`    | 0px   | Sin redondeo          |
| `.round-sm`   | 4px   | Redondeo ligero       |
| `.round`      | 8px   | Redondeo estándar     |
| `.round-lg`   | 12px  | Redondeo grande       |
| `.round-xl`   | 16px  | Redondeo extra grande |
| `.round-2xl`  | 20px  | Redondeo muy grande   |
| `.round-3xl`  | 24px  | Redondeo enorme       |
| `.round-full` | 50%   | Círculo perfecto      |
| `.round-25`   | 25%   | Óvalo ligero          |
| `.round-50`   | 50%   | Círculo               |
| `.round-75`   | 75%   | Óvalo pronunciado     |

**Ejemplos:**

```html
<!-- Imagen circular -->
<img src="foto.jpg" class="round-50" />

<!-- Botón con bordes redondeados -->
<button class="round-lg">Botón</button>

<!-- Tarjeta con esquinas suaves -->
<div class="round">Contenido</div>
```

### 📝 Alineación de Texto

| Clase           | Valor                 | Uso común              |
| --------------- | --------------------- | ---------------------- |
| `.text-left`    | `text-align: left`    | Alinear a la izquierda |
| `.text-center`  | `text-align: center`  | Centrar texto          |
| `.text-right`   | `text-align: right`   | Alinear a la derecha   |
| `.text-justify` | `text-align: justify` | Justificar texto       |

**Ejemplos:**

```html
<!-- Título centrado -->
<h1 class="text-center">Título Centrado</h1>

<!-- Párrafo justificado -->
<p class="text-justify">Texto justificado...</p>

<!-- Texto alineado a la derecha -->
<div class="text-right">Derecha</div>
```

### 📐 Floats y Posicionamiento

| Clase          | Valor                | Uso común                |
| -------------- | -------------------- | ------------------------ |
| `.float-left`  | `float: left`        | Flotar a la izquierda    |
| `.float-right` | `float: right`       | Flotar a la derecha      |
| `.float-none`  | `float: none`        | Sin flotación            |
| `.clearfix`    | Clear floats         | Limpiar floats           |
| `.relative`    | `position: relative` | Posicionamiento relativo |
| `.absolute`    | `position: absolute` | Posicionamiento absoluto |
| `.fixed`       | `position: fixed`    | Posicionamiento fijo     |
| `.static`      | `position: static`   | Posicionamiento estático |
| `.sticky`      | `position: sticky`   | Posicionamiento pegajoso |

**Ejemplos:**

```html
<!-- Imagen flotante -->
<img src="imagen.jpg" class="float-left mr-3" />

<!-- Contenedor con clearfix -->
<div class="clearfix">
  <div class="float-left">Izquierda</div>
  <div class="float-right">Derecha</div>
</div>

<!-- Posicionamiento relativo -->
<div class="relative">Contenido posicionado</div>
```

### 📦 Display y Flexbox

| Clase           | Valor                   | Uso común        |
| --------------- | ----------------------- | ---------------- |
| `.block`        | `display: block`        | Bloque           |
| `.inline`       | `display: inline`       | En línea         |
| `.inline-block` | `display: inline-block` | Bloque en línea  |
| `.flex`         | `display: flex`         | Flexbox          |
| `.inline-flex`  | `display: inline-flex`  | Flexbox en línea |
| `.grid`         | `display: grid`         | Grid             |
| `.hidden`       | `display: none`         | Oculto           |

**Flexbox:**
| Clase | Valor | Uso común |
|-------|-------|-----------|
| `.flex-row` | `flex-direction: row` | Fila horizontal |
| `.flex-col` | `flex-direction: column` | Columna vertical |
| `.justify-start` | `justify-content: flex-start` | Alinear al inicio |
| `.justify-center` | `justify-content: center` | Centrar horizontalmente |
| `.justify-end` | `justify-content: flex-end` | Alinear al final |
| `.justify-between` | `justify-content: space-between` | Espacio entre |
| `.items-start` | `align-items: flex-start` | Alinear arriba |
| `.items-center` | `align-items: center` | Centrar verticalmente |
| `.items-end` | `align-items: flex-end` | Alinear abajo |

**Ejemplos:**

```html
<!-- Contenedor flex centrado -->
<div class="flex justify-center items-center">
  <div>Centrado</div>
</div>

<!-- Layout de columna -->
<div class="flex flex-col">
  <div>Elemento 1</div>
  <div>Elemento 2</div>
</div>

<!-- Espacio entre elementos -->
<div class="flex justify-between">
  <div>Izquierda</div>
  <div>Derecha</div>
</div>
```

### 📏 Espaciado (Margin & Padding)

**Margin:**
| Clase | Valor | Uso común |
|-------|-------|-----------|
| `.m-0` | `margin: 0` | Sin margen |
| `.m-1` | `margin: 0.25rem` | Margen pequeño |
| `.m-2` | `margin: 0.5rem` | Margen mediano |
| `.m-3` | `margin: 1rem` | Margen estándar |
| `.m-4` | `margin: 1.5rem` | Margen grande |
| `.m-5` | `margin: 2rem` | Margen extra grande |
| `.m-6` | `margin: 3rem` | Margen enorme |

**Margin direccional:**
| Clase | Valor | Uso común |
|-------|-------|-----------|
| `.mt-3` | `margin-top: 1rem` | Margen superior |
| `.mb-3` | `margin-bottom: 1rem` | Margen inferior |
| `.ml-3` | `margin-left: 1rem` | Margen izquierdo |
| `.mr-3` | `margin-right: 1rem` | Margen derecho |

**Padding:**
| Clase | Valor | Uso común |
|-------|-------|-----------|
| `.p-0` | `padding: 0` | Sin relleno |
| `.p-1` | `padding: 0.25rem` | Relleno pequeño |
| `.p-2` | `padding: 0.5rem` | Relleno mediano |
| `.p-3` | `padding: 1rem` | Relleno estándar |
| `.p-4` | `padding: 1.5rem` | Relleno grande |
| `.p-5` | `padding: 2rem` | Relleno extra grande |
| `.p-6` | `padding: 3rem` | Relleno enorme |

**Ejemplos:**

```html
<!-- Espaciado consistente -->
<div class="m-4 p-3">Contenido con márgenes y padding</div>

<!-- Margen superior e inferior -->
<div class="my-4">Espacio vertical</div>

<!-- Padding interno -->
<button class="p-3">Botón espaciado</button>
```

### 📐 Ancho y Alto

| Clase     | Valor            | Uso común        |
| --------- | ---------------- | ---------------- |
| `.w-auto` | `width: auto`    | Ancho automático |
| `.w-full` | `width: 100%`    | Ancho completo   |
| `.w-1\/2` | `width: 50%`     | Medio ancho      |
| `.w-1\/3` | `width: 33.333%` | Un tercio        |
| `.w-2\/3` | `width: 66.666%` | Dos tercios      |
| `.w-1\/4` | `width: 25%`     | Un cuarto        |
| `.w-3\/4` | `width: 75%`     | Tres cuartos     |

**Max-width:**
| Clase | Valor | Uso común |
|-------|-------|-----------|
| `.max-w-300` | `max-width: 300px` | Máximo 300px |
| `.max-w-500` | `max-width: 500px` | Máximo 500px |
| `.max-w-800` | `max-width: 800px` | Máximo 800px |

**Height:**
| Clase | Valor | Uso común |
|-------|-------|-----------|
| `.h-auto` | `height: auto` | Alto automático |
| `.h-full` | `height: 100%` | Alto completo |
| `.h-screen` | `height: 100vh` | Alto de pantalla |

**Ejemplos:**

```html
<!-- Imagen responsiva -->
<img src="foto.jpg" class="w-full max-w-500 h-auto" />

<!-- Columna de mitad de ancho -->
<div class="w-1/2">Medio ancho</div>

<!-- Contenedor de alto completo -->
<div class="h-full">Alto completo</div>
```

### 🎨 Colores y Sombras

**Textos:**
| Clase | Valor | Uso común |
|-------|-------|-----------|
| `.text-primary` | Color primario | Texto principal |
| `.text-secondary` | Color secundario | Texto secundario |
| `.text-accent` | Color acento | Texto destacado |
| `.text-white` | Blanco | Texto blanco |
| `.text-black` | Negro | Texto negro |

**Fondos:**
| Clase | Valor | Uso común |
|-------|-------|-----------|
| `.bg-primary` | Fondo primario | Fondo principal |
| `.bg-secondary` | Fondo secundario | Fondo secundario |
| `.bg-accent` | Fondo acento | Fondo destacado |
| `.bg-white` | Blanco | Fondo blanco |
| `.bg-black` | Negro | Fondo negro |

**Sombras:**
| Clase | Valor | Uso común |
|-------|-------|-----------|
| `.shadow-none` | Sin sombra | Sin efecto |
| `.shadow-sm` | Sombra pequeña | Efecto ligero |
| `.shadow` | Sombra estándar | Efecto normal |
| `.shadow-md` | Sombra mediana | Efecto medio |
| `.shadow-lg` | Sombra grande | Efecto fuerte |
| `.shadow-xl` | Sombra extra grande | Efecto muy fuerte |

**Ejemplos:**

```html
<!-- Tarjeta con sombra -->
<div class="bg-white shadow-lg p-4">Tarjeta</div>

<!-- Botón destacado -->
<button class="bg-accent text-white shadow">Botón</button>

<!-- Texto secundario -->
<p class="text-secondary">Texto secundario</p>
```

### 📝 Tipografía

| Clase        | Valor                 | Uso común          |
| ------------ | --------------------- | ------------------ |
| `.text-xs`   | `font-size: 0.75rem`  | Texto muy pequeño  |
| `.text-sm`   | `font-size: 0.875rem` | Texto pequeño      |
| `.text-base` | `font-size: 1rem`     | Texto base         |
| `.text-lg`   | `font-size: 1.125rem` | Texto grande       |
| `.text-xl`   | `font-size: 1.25rem`  | Texto extra grande |
| `.text-2xl`  | `font-size: 1.5rem`   | Título pequeño     |
| `.text-3xl`  | `font-size: 1.875rem` | Título mediano     |
| `.text-4xl`  | `font-size: 2.25rem`  | Título grande      |

**Font-weight:**
| Clase | Valor | Uso común |
|-------|-------|-----------|
| `.font-light` | `font-weight: 300` | Peso ligero |
| `.font-normal` | `font-weight: 400` | Peso normal |
| `.font-medium` | `font-weight: 500` | Peso medio |
| `.font-semibold` | `font-weight: 600` | Peso semibold |
| `.font-bold` | `font-weight: 700` | Peso negrita |
| `.font-extrabold` | `font-weight: 800` | Peso extra negrita |

**Ejemplos:**

```html
<!-- Título grande y negrita -->
<h1 class="text-4xl font-bold">Título Principal</h1>

<!-- Texto pequeño y ligero -->
<p class="text-sm font-light">Texto ligero</p>

<!-- Subtítulo mediano -->
<h2 class="text-2xl font-semibold">Subtítulo</h2>
```

### 📱 Responsive Helpers

Las clases responsive permiten cambiar estilos según el tamaño de pantalla:

| Prefijo | Tamaño pantalla | Uso común        |
| ------- | --------------- | ---------------- |
| `sm:`   | ≤ 640px         | Móviles          |
| `md:`   | ≤ 768px         | Tablets          |
| `lg:`   | ≤ 1024px        | Desktop pequeños |

**Ejemplos:**

```html
<!-- Centrado solo en móvil -->
<div class="text-left md:text-center lg:text-left">
  Texto alineado diferente por dispositivo
</div>

<!-- Ocultar en móvil -->
<div class="hidden md:block">Visible solo en tablets y desktop</div>

<!-- Flex solo en móvil -->
<div class="block md:flex">Bloque en móvil, flex en desktop</div>
```

### 🎯 Ejemplos Prácticos

#### **Imagen de Perfil Circular**

```html
<img
  src="perfil.jpg"
  class="round-50 w-32 h-32 shadow-lg border-4 border-white"
/>
```

#### **Tarjeta de Blog**

```html
<div class="bg-white round-lg shadow-md p-6">
  <h3 class="text-xl font-bold mb-3">Título de la Tarjeta</h3>
  <p class="text-secondary mb-4">Contenido de la tarjeta...</p>
  <button class="bg-accent text-white round px-4 py-2">Leer más</button>
</div>
```

#### **Layout de Dos Columnas**

```html
<div class="flex flex-col md:flex-row gap-4">
  <div class="w-full md:w-1/2">
    <h2 class="text-2xl font-bold">Columna Izquierda</h2>
    <p>Contenido...</p>
  </div>
  <div class="w-full md:w-1/2">
    <h2 class="text-2xl font-bold">Columna Derecha</h2>
    <p>Contenido...</p>
  </div>
</div>
```

#### **Botones con Estados**

```html
<button
  class="bg-primary text-white round-lg px-6 py-3 shadow hover:shadow-lg transition"
>
  Botón Primario
</button>

<button class="bg-accent text-white round-full px-4 py-2 shadow-md">
  Botón Redondo
</button>
```

#### **Imagen con Texto Flotante**

```html
<div class="relative">
  <img src="imagen.jpg" class="w-full round-lg" />
  <div
    class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 round-b-lg"
  >
    <h3 class="text-xl font-bold">Título sobre imagen</h3>
  </div>
</div>
```

### 🔧 Buenas Prácticas

1. **Sé consistente**: Usa las mismas clases para elementos similares
2. **Combina clases**: Mezcla clases para crear efectos complejos
3. **Piensa mobile-first**: Diseña primero para móvil, luego adapta
4. **Usa semantic HTML**: Las clases son para estilo, no para estructura
5. **Mantén legibilidad**: No abuses de demasiadas clases en un elemento

### 🚀 Tips Avanzados

```html
<!-- Efecto hover con transición -->
<div class="shadow hover:shadow-xl transition-all duration-300">
  Contenido con efecto hover
</div>

<!-- Gradiente de texto -->
<h1
  class="text-primary bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
>
  Título con gradiente
</h1>

<!-- Contenedor con scroll personalizado -->
<div class="overflow-y-auto max-h-96 custom-scrollbar">
  Contenido largo con scroll
</div>
```

---

Este sistema de helpers permite desarrollar rápidamente manteniendo consistencia visual en todo el sitio. Las clases son intuitivas y fáciles de recordar, siguiendo patrones comunes de frameworks modernos.
