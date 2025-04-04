# Generador de Cartas de Lotería

Este proyecto es una aplicación web que genera cartas de lotería personalizadas. Permite generar múltiples cartas, imprimirlas y guardarlas como imágenes individuales.

## Características

- Generar cartas de lotería con imágenes, nombres y números.
- Personalizar la cantidad de cartas a generar.
- Opciones para mostrar/ocultar nombres y números en las cartas.
- Modos de repetición para las cartas (sin repetición, esquinas, centro).
- Imprimir las cartas generadas en formato tamaño carta.
- Guardar cada carta generada como una imagen individual en formato PNG.

## Tecnologías utilizadas

- **HTML5**: Estructura de la página.
- **CSS3**: Estilos y diseño responsivo.
- **JavaScript**: Lógica de generación de cartas y funcionalidades interactivas.
- **html2canvas**: Biblioteca para capturar cartas como imágenes.

## Instalación

1. Clona este repositorio o descarga los archivos.
   ```bash
   git clone https://github.com/UlisesMendozaOlvera/Generador-Loteria

## Uso

1. **Generar cartas**:
   - Ingresa la cantidad de cartas que deseas generar en el campo correspondiente.
   - Haz clic en el botón **"Generar Cartas"**.

2. **Opciones de personalización**:
   - Marca o desmarca las opciones **"Mostrar nombres"** y **"Mostrar números"** para personalizar las cartas.
   - Selecciona un modo de repetición: **Sin repetición**, **Repetir en esquinas** o **Repetir en centro**.

3. **Imprimir cartas**:
   - Haz clic en el botón **"Imprimir Cartas"** para imprimir las cartas generadas en formato tamaño carta.

4. **Guardar cartas como imágenes**:
   - Haz clic en el botón **"Guardar Cartas"** para descargar cada carta generada como una imagen PNG.

## Estructura del proyecto

```
loteria/
├── index.html          # Página principal
├── style.css           # Estilos de la aplicación
├── script.js           # Lógica de la aplicación
├── imagenes/           # Carpeta con las imágenes de las cartas
│   ├── 1-el-gallo.jpg
│   ├── 2-el-diablito.jpg
│   ├── ...
└── README.md           # Documentación del proyecto
```

## Requisitos

- Navegador moderno (Google Chrome, Firefox, Edge, etc.).
- Servidor local para evitar problemas de CORS (opcional).

## Ejecución en un servidor local

Si tienes problemas para cargar las imágenes, ejecuta el proyecto en un servidor local. Por ejemplo:

### Usando Live Server en Visual Studio Code:
1. Instala la extensión **Live Server**.
2. Haz clic derecho en `index.html` y selecciona **"Open with Live Server"**.

### Usando Python:
1. Abre una terminal en la carpeta del proyecto.
2. Ejecuta el siguiente comando:
   ```bash
   python -m http.server
   ```
3. Abre `http://localhost:8000` en tu navegador.

