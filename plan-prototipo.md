# Plan — Prototipo "Justicia Cercana"

> Caso del examen parcial real (Pregunta 1, 20 puntos): app para tableta de 10" que ayude a juezas/jueces de paz rurales a registrar casos judiciales, actuaciones notariales y agendar actividades, funcionando sin conexión a Internet.

## 1. Lectura del caso — restricciones que gobiernan todo el diseño

- **Usuario:** jueza/juez de paz, baja afinidad con apps digitales complejas. No puedo asumir vocabulario técnico ni patrones de UI "modernos" que un usuario digital-nativo reconocería sin pensar (swipe para borrar, iconos sin texto, gestos ocultos).
- **Dispositivo:** tableta de 10", uso táctil. Debe funcionar también desde computadora con Internet (mismo diseño, responsive, no una app separada).
- **Conectividad:** intermitente de verdad, no un edge case — "pueden pasar varias horas sin acceso a Internet". El modo offline **es el modo normal**, no una excepción a manejar con un mensaje de error.
- **Contexto físico:** zona rural, probablemente exteriores con luz solar directa (glare), sesiones de uso interrumpidas por atender personas en persona.
- **3 módulos obligatorios:** Casos judiciales, Actuaciones notariales, Agenda/calendario — deben integrarse en una sola experiencia coherente, no sentirse como 3 apps pegadas.

## 2. Qué puede fallar si no se piensa con cuidado (autocrítica antes de diseñar)

Cosas que un prototipo mediocre para este caso haría mal, y que quiero evitar activamente:

1. **Tratar el modo offline como un banner de error.** El caso pide lo contrario: comunicar con calma que "está guardado en este dispositivo", no alarmar al usuario cada vez que no hay señal. Un ícono de wifi tachado en rojo parpadeante generaría ansiedad en alguien que ya desconfía de la tecnología.
2. **Formularios largos de una sola pantalla.** Con 4-5 grupos de campos por módulo (caso + partes + seguimiento), meter todo en un formulario largo satura a un usuario con poca práctica. Mejor: pasos/secciones claras, se puede guardar el caso con lo mínimo y completar partes después.
3. **Confundir "obligatorio" con "obligatorio en la vida real".** El caso es explícito: "si corresponde", "si se dispone" — documento de identidad, teléfono, evidencia adjunta pueden no existir en una zona rural. Si el formulario bloquea el guardado por falta de un DNI que la persona no tiene, el diseño falla contra el propio enunciado.
4. **Iconografía sin texto.** Fácil de hacer, mal para este usuario. Todo ícono de acción lleva su palabra al lado, siempre.
5. **No decirle al usuario qué pasó después de guardar.** El enunciado pide explícitamente: confirmar que los cambios quedaron guardados, y confirmar si la sincronización se completó correctamente. Esto no es opcional, es literal del enunciado — hay que hacerlo visible y verificable en el prototipo, no solo mencionarlo en el texto.
6. **Prototipo estático (mockup no interactivo).** El enunciado permite Figma, pero pedirme un prototipo React es pedir que efectivamente *funcione*: crear un caso de verdad, verlo aparecer en la lista, editarlo, ver el estado de sincronización cambiar. Eso es lo que voy a construir — no pantallas sueltas sin conectar.
7. **Simular "sin conexión" sin poder demostrarlo.** Sin backend real no hay red que cortar de verdad. Voy a poner un interruptor explícito y visible de "Simular sin conexión" para que la persona que evalúe el prototipo pueda *ver* el flujo completo: crear/editar en offline → queda marcado como pendiente → reconectar → sincronizar → confirmación.

## 3. Arquitectura de información

```
Inicio (dashboard)
├── Casos judiciales
│   ├── Lista de casos (buscar, filtrar por estado)
│   ├── Detalle de caso (datos, partes, seguimiento/línea de tiempo)
│   └── Nuevo caso / Editar caso (formulario por secciones)
├── Actuaciones notariales
│   ├── Lista de actuaciones (buscar, filtrar por estado)
│   ├── Detalle de actuación
│   └── Nueva actuación / Editar actuación
├── Agenda
│   ├── Vista mensual (calendario)
│   ├── Vista de un día (detalle de actividades)
│   └── Nueva actividad / Editar actividad
└── Justificación de diseño (documentación embebida del prototipo:
    qué decisión, qué heurística/principio/factor humano, qué necesidad atiende)
```

Navegación: barra lateral fija (apta para tableta en horizontal), ícono + texto en cada ítem, siempre visible. Barra superior persistente con: nombre de la jueza, estado de conexión, contador de pendientes de sincronizar, botón "Sincronizar ahora".

## 4. Modelo de datos por módulo (obligatorio vs. opcional, con validaciones)

### 4.1 Registro de casos judiciales

**Caso**
| Campo | Oblig. | Regla |
|---|---|---|
| Código de caso | — | Autogenerado (`CASO-2026-0001`), solo lectura |
| Fecha de registro | — | Autogenerada (hoy), solo lectura |
| Tipo de conflicto/materia | Sí | Select con opciones predefinidas + "Otro" |
| Descripción breve del motivo | Sí | Texto libre, mínimo 10 caracteres |
| Estado | Sí | Select: En trámite / Concluido / Suspendido. Default "En trámite" |
| Observaciones | No | Texto libre |

**Partes involucradas** (al menos 1 requerida para guardar el caso)
| Campo | Oblig. | Regla |
|---|---|---|
| Nombres y apellidos | Sí | Texto libre |
| Tipo y número de documento | No | "si corresponde" — el caso lo dice explícito |
| Teléfono / medio de contacto | No | "si se dispone" |
| Dirección, comunidad o localidad | Sí | Acepta solo el nombre de la comunidad (no exige dirección formal) |
| Rol en el caso | Sí | Select: Solicitante / Invitado / Testigo / Otro |

**Seguimiento** (0 o más entradas; se puede guardar el caso sin ninguna)
| Campo | Oblig. | Regla |
|---|---|---|
| Fecha de la actuación | Sí (al agregar una entrada) | No puede ser futura |
| Descripción del avance | Sí (al agregar una entrada) | Texto libre |
| Próxima fecha de atención | No | No puede ser anterior a hoy |
| Resultado o acuerdo | **Condicional** | Obligatorio solo si el estado del caso pasa a "Concluido" |
| Documento/evidencia asociada | No | Adjunto simulado (nombre de archivo) |

### 4.2 Registro de actuaciones notariales

**Actuación**
| Campo | Oblig. | Regla |
|---|---|---|
| Código de registro | — | Autogenerado (`NOT-2026-0001`) |
| Fecha de solicitud | — | Autogenerada, editable |
| Fecha de atención | No | Puede definirse después |
| Tipo de actuación notarial | Sí | Select con lenguaje simple (evitar jerga) |
| Descripción o asunto | Sí | Texto libre con placeholder de ejemplo |
| Estado | Sí | Pendiente / Atendida / Concluida. Default "Pendiente" |
| Observaciones | No | Texto libre |

**Personas participantes** (al menos 1 requerida)
| Campo | Oblig. | Regla | 
|---|---|---|
| Nombres y apellidos | Sí | — |
| Tipo y número de documento | No | "si corresponde" |
| Teléfono | No | "si se dispone" |
| Dirección/comunidad | Sí | Igual criterio que en Casos |
| Participación | Sí | Select: Solicitante / Declarante / Testigo |

**Resultado y documentación**
| Campo | Oblig. | Regla |
|---|---|---|
| Resultado de la actuación | **Condicional** | Obligatorio solo si estado = "Concluida" |
| Fecha de entrega/conclusión | No | — |
| Documento adjunto o referencia física | No | Texto libre ("Archivo físico N.º ___") o adjunto simulado |

### 4.3 Agenda / calendario

| Campo | Oblig. | Regla |
|---|---|---|
| Título de la actividad | Sí | Texto libre |
| Fecha | Sí | — |
| Hora de inicio / término | No | Permite actividades sin horario fijo (frecuente en zonas rurales) |
| Lugar o comunidad | Sí | Necesario para planificar desplazamiento |
| Descripción/motivo | No | Texto libre |
| Estado | Sí | Programada / Realizada / Cancelada. Default "Programada" |
| Categoría | Sí | Audiencia / Reunión / Visita / Otro — define color **y** ícono (nunca solo color) |

## 5. Principios, heurísticas y factores humanos aplicados (decisión → justificación)

| # | Decisión de diseño | Principio / heurística / factor humano | Necesidad que atiende |
|---|---|---|---|
| 1 | Barra de estado de conexión y sincronización siempre visible arriba | Heurística 1 (Visibilidad del estado del sistema) | Saber en todo momento si su trabajo está seguro |
| 2 | Código de caso/actuación autogenerado, solo lectura | Prevención de error humano (Norman) | Evita duplicados y errores de tipeo en identificadores |
| 3 | Lenguaje simple en formularios, sin jerga jurídica innecesaria | Heurística 2 (Coincidencia sistema-mundo real) | Usuario sin experiencia en apps ni necesariamente formación jurídica formal |
| 4 | Asterisco + etiqueta "(opcional)" explícita en cada campo | Heurística 5 (Prevención de errores) + Visibilidad (Norman) | Evita bloqueos por datos que no existen en campo rural |
| 5 | Botón "Guardar" con validación inline antes de enviar, mensaje específico de qué falta | Heurística 9 (Ayudar a reconocer y recuperarse de errores) | Reduce frustración, evita intentos repetidos a ciegas |
| 6 | Confirmación visible tras guardar ("Caso NOT-... guardado") con toast | Feedback (Norman) | Cumple literalmente lo pedido por el caso |
| 7 | Estado con color + ícono + texto (nunca solo color) | Accesibilidad (daltonismo) + reconocimiento vs. recuerdo | Reconocer el estado de un caso de un vistazo, sin leer todo |
| 8 | Ícono siempre acompañado de texto en toda acción | Heurística 6 (Reconocimiento en vez de recuerdo) | Usuario de baja afinidad digital no memoriza símbolos abstractos |
| 9 | Botón flotante grande "+ Nuevo" fijo por módulo | Affordance clara + Mapping directo | La acción más frecuente siempre alcanzable con el pulgar |
| 10 | Confirmación con opción de cancelar antes de eliminar/marcar concluido | Heurística 3 (Control y libertad del usuario) | Previene pérdida irreversible de información |
| 11 | Estructura idéntica de navegación y formularios entre los 3 módulos | Heurística 4 (Consistencia y estándares) | El modelo mental aprendido en un módulo sirve para los otros dos |
| 12 | Estados vacíos con instrucción ("Aún no hay casos. Toca + para crear el primero") | Guía activa en vez de pantalla en blanco | Reduce ansiedad de primer uso |
| 13 | Tipografía grande (≥16px base), alto contraste, objetivos táctiles ≥44px | Factor humano: uso táctil, exteriores con sol, posible usuario de mayor edad | Legibilidad y precisión de toque en campo |
| 14 | Layout de dos columnas (nav lateral fija + contenido) pensado para 10" horizontal | Factor humano: tamaño/orientación real del dispositivo | Aprovecha el espacio sin saturarlo (sencillez) |
| 15 | "Sincronizar ahora" solo aparece activo si hay conexión y pendientes; resultado explícito de éxito | Visibilidad del estado + lo pedido literalmente por el caso | Confirma si el proceso se completó correctamente |
| 16 | Badge ámbar "Guardado en este dispositivo" vs. verde "Sincronizado" en cada registro | Visibilidad + reduce carga de memoria | El usuario nunca tiene que "adivinar" si algo ya se sincronizó |

## 6. Estrategia técnica

- **Stack:** React + Vite + Tailwind CSS v4 (plugin `@tailwindcss/vite`, sin `tailwind.config.js` clásico), `react-router-dom` para navegación entre pantallas, `lucide-react` para iconografía (siempre con texto al lado).
- **Datos:** store en memoria (Context + `useReducer`) persistido en `localStorage`, simulando el "almacenamiento local en la tableta" que pide el caso. No hay backend real.
- **Simulación de red:** un `NetworkContext` con un interruptor manual visible en la barra superior ("En línea" / "Sin conexión"). Al crear/editar cualquier registro:
  - si `offline` → se guarda localmente con `syncStatus: "pendiente"`.
  - si `online` → se guarda con `syncStatus: "sincronizado"` (simulando sincronización inmediata).
  - botón "Sincronizar ahora" (activo solo si `online` y hay pendientes) recorre los pendientes, los marca `sincronizado` con un pequeño delay simulado, y muestra confirmación con el conteo ("3 registros sincronizados correctamente").
- **Estructura de carpetas:** `src/{context, components, modules/{casos,notarial,agenda}, pages, data}`.
- **Alcance del mock:** datos de ejemplo precargados (2-3 casos, 2 actuaciones, algunas actividades) para que el prototipo no arranque vacío al evaluarlo, más la posibilidad de crear todo desde cero.

## 7. Qué NO alcanza este prototipo (limitaciones honestas)

- No hay autenticación real ni backend — la sincronización es simulada, no hay servidor.
- No se implementa carga de archivos real (evidencias/documentos quedan como referencia de nombre, no upload binario).
- No se cubre la vista de "acceso desde computadora" como layout separado; el diseño es responsive pero no se optimizó a fondo para escritorio, solo se garantiza que no se rompe.
- No hay pruebas de usabilidad con usuarios reales (fuera del alcance de un examen de 110 minutos).

## 8. Checklist contra la rúbrica

- [ ] **Cobertura y funcionamiento de los módulos:** los 3 módulos permiten crear, listar, ver detalle y editar.
- [ ] **Principios de diseño y heurísticas:** tabla de la sección 5 reflejada en el código y visible en pantalla "Justificación de diseño".
- [ ] **Factores humanos y dispositivo:** tipografía grande, objetivos táctiles amplios, layout para 10" horizontal, lenguaje simple.
- [ ] **Funcionamiento sin conexión:** interruptor simulador + badges de estado + sincronización con confirmación explícita.
- [ ] **Justificación de las decisiones:** cada decisión de la sección 5 debe verse reflejada y explicada en la app, no solo en este documento.
