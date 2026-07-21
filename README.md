# Pepinos & Mangos Locos

Proyecto estudiantil de sitio web publicitario y sistema básico de control para un emprendimiento de pepinos y mangos locos.

**Autor:** Elmer Fuentes

## Descripción

La solución fue construida con React, TypeScript y Vite. Incluye:

- Sitio publicitario responsive para teléfono, tableta y computadora.
- Página de inicio llamativa con la imagen promocional proporcionada.
- Menú de productos con carrito demostrativo.
- Galería dinámica.
- Panel de administración con carga y eliminación de imágenes.
- Inventario editable de ingredientes.
- Registro de ventas.
- Cálculo básico de ingresos, costo de ventas, ganancia bruta e inventario valorizado.
- Persistencia local con `localStorage`, ideal para demostrar el proyecto sin instalar una base de datos.

## Credenciales de demostración

- Usuario: `admin`
- Contraseña: `Elmer2026`

> Importante: el inicio de sesión es solo para fines académicos. Para producción debe reemplazarse por un backend con autenticación segura, base de datos, cifrado de contraseñas y permisos.

## Instalación

1. Instalar Node.js 20 o superior.
2. Abrir una terminal dentro de la carpeta del proyecto.
3. Ejecutar:

```bash
npm install
npm run dev
```

4. Abrir la dirección indicada por Vite, normalmente `http://localhost:5173`.

## Compilar para publicación

```bash
npm run build
npm run preview
```

La carpeta `dist` puede publicarse en Netlify, Vercel, GitHub Pages o un hosting compatible.

## Estructura

- `src/components`: componentes reutilizables.
- `src/pages`: páginas principales.
- `src/services`: acceso centralizado al almacenamiento.
- `src/types`: tipos de datos TypeScript.
- `public/assets`: imágenes públicas.

## Escalabilidad recomendada

Para una segunda fase se recomienda:

1. Backend con Node.js/Express o NestJS.
2. Base de datos PostgreSQL, MySQL o SQL Server.
3. Autenticación con JWT y contraseñas cifradas.
4. Tablas para productos, ingredientes, compras, ventas, movimientos de inventario, usuarios, roles y caja.
5. Kardex de inventario y costeo promedio.
6. Cuentas por cobrar/pagar, caja, bancos, capital, activos y pasivos para elaborar un balance general real.
7. Almacenamiento de imágenes en Cloudinary, Firebase Storage o Amazon S3.

## Nota contable

El módulo incluido muestra un **estado de resultados básico**: ventas menos costo de ventas igual a ganancia bruta. También muestra el valor actual del inventario. Un balance general completo requiere más cuentas y operaciones contables.
