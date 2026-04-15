# 🚀 DashForge

![Angular](https://img.shields.io/badge/Angular-19-red)
![Electron](https://img.shields.io/badge/Electron-desktop-blue)
![License](https://img.shields.io/badge/license-MIT-green)

DashForge es un launcher de escritorio orientado a productividad que permite organizar accesos y lanzar entornos de trabajo completos en segundos.

## 🧾 ¿Qué es DashForge?

DashForge resuelve un problema común: tener accesos importantes dispersos entre navegador, carpetas, archivos y aplicaciones, sin una capa clara de organización.

La aplicación centraliza esos accesos en un dashboard moderno, permite agruparlos por proyecto, configurar aperturas masivas y mantener un flujo rápido para el trabajo diario.

## 🎯 Objetivo del proyecto

DashForge nace como una herramienta personal para optimizar flujos de trabajo, evolucionando hacia un launcher modular enfocado a productividad real en entorno desktop.

## 📸 Preview / Screenshots

> Añade aquí capturas reales del dashboard (overview, selector de proyecto, modo selección, panel de apertura de proyecto).

![Dashboard principal](docs/screenshots/dashboard-main.png)
![Gestión de proyectos](docs/screenshots/projects.png)
![Apertura por proyecto](docs/screenshots/project-launch.png)

## ✨ Características principales

* Gestión de proyectos: crear, renombrar y eliminar.
* Accesos agrupados por proyecto activo.
* Selector de proyecto con dropdown custom.
* Selección múltiple de accesos.
* Copia individual y masiva de accesos entre proyectos.
* Drag & drop para reordenar accesos.
* Configuración por acceso para apertura de proyecto (`includeInProjectLaunch`).
* Acción “Abrir proyecto” con apertura por lote.
* Apertura secuencial inteligente de proyectos con control de memoria del sistema.
* Detección automática de memoria disponible para evitar sobrecarga del equipo.
* Modo seguro de apertura cuando el sistema tiene pocos recursos.
* Feedback visual en tiempo real durante la apertura de accesos.
* Persistencia local (sin base de datos).
* Interfaz orientada a velocidad y uso continuo.

## ⚙️ Comportamiento inteligente

DashForge implementa un sistema de apertura progresiva adaptativa:

* Los accesos se abren de forma secuencial (no en paralelo).
* La aplicación evalúa la memoria libre del sistema antes y durante la ejecución.
* Si detecta poca memoria disponible, activa un modo seguro:

  * Reduce la velocidad de apertura.
  * Evita picos de consumo de CPU y RAM.
* El usuario recibe feedback visual en tiempo real del progreso.

Esto garantiza estabilidad incluso en equipos con recursos limitados.

## 🧠 Concepto del sistema

DashForge usa un modelo centrado en proyectos:

* Cada proyecto contiene su propia lista de accesos.
* El dashboard trabaja sobre un `activeProjectId`.
* Los accesos pueden marcarse para “apertura de proyecto”.
* Al ejecutar “Abrir proyecto”, solo se lanzan los marcados.
* Las copias entre proyectos conservan metadatos y generan nuevos IDs.

## 💼 Caso de uso

Ejemplo real:

Un desarrollador puede configurar un proyecto con:

* Carpeta del proyecto
* VS Code
* Documentación
* Repositorio Git
* Herramientas externas

Con un solo clic, DashForge abre todo el entorno de trabajo de forma controlada y segura.

## 🏗 Arquitectura

Arquitectura Angular standalone con enfoque feature-based:

* `core/`: modelos, servicios y persistencia.
* `features/dashboard/`: flujo principal de accesos y proyectos.
* `features/settings/`: configuración del sistema.
* `shared/`: componentes reutilizables.
* `electron/`: proceso principal y bridge seguro.

### Persistencia

* `localStorage` mediante `storage.service`
* Estado global (`app-state`)

## 🛠 Tecnologías

* Angular 19 (standalone)
* Electron
* TypeScript
* HTML / CSS
* Angular CDK (drag & drop)
* electron-builder

## 📦 Instalación

```bash
npm install
```

## ▶️ Ejecución

Desarrollo web:

```bash
npm run start:web
```

Desktop:

```bash
npm run start:desktop
```

## 🏗 Build

Build web:

```bash
npm run build:web
```

Build desktop:

```bash
npm run build:desktop
```

Salida:

* Web: `dist/...`
* Desktop: `release/`

## 📁 Estructura del proyecto

```text
DashForge/
├─ electron/
├─ src/
│  ├─ app/
│  │  ├─ core/
│  │  ├─ features/
│  │  └─ shared/
│  ├─ index.html
│  └─ main.ts
├─ angular.json
└─ package.json
```

## 🚀 Roadmap

* Import/export de proyectos
* Onboarding inicial de usuario
* Mejora de UX en drag & drop
* Tests E2E
* Extensión de funcionalidades desktop
* Refinado de branding final

## 💡 En qué se diferencia

DashForge no es un listado plano de enlaces:

* Organización por proyectos en lugar de una bandeja global
* Apertura por lote configurable
* Sistema inteligente de apertura adaptativa según recursos del sistema
* Flujo desktop-first con acceso directo a recursos locales
* UI optimizada para velocidad y uso continuo

## 🧩 Estado del proyecto

Proyecto activo en desarrollo con foco en estabilidad, rendimiento y experiencia de usuario en entorno desktop.

## 👤 Autor

**Heitor Raga Lara**

## 🌐 Repositorio

https://github.com/Heitor077/DashForge
