# Fitness Cubano

Aplicación web de fitness construida con Next.js. Plataforma para gestionar rutinas, ejercicios y seguimiento de progreso físico.

## Tech Stack

- **Next.js 14** — Framework React con App Router
- **React 18** — Biblioteca UI
- **TypeScript** — Tipado estático
- **Tailwind CSS v3** — Estilos utilitarios
- **MongoDB + Mongoose** — Base de datos NoSQL
- **ESLint** — Linting de código

## Scripts

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar en producción
npm start

# Linting
npm run lint
```

## Variables de entorno

Creá un archivo `.env.local` con las siguientes variables:

```env
MONGODB_URI=tu_uri_de_mongodb
```

## Estructura

- `app/` — Rutas y páginas de Next.js App Router
- `public/` — Assets estáticos
- `tailwind.config.ts` — Configuración de Tailwind CSS
- `next.config.js` — Configuración de Next.js

## Requisitos

- Node.js 20+
- MongoDB (local o Atlas)
- npm o yarn

---

*En desarrollo activo.*
