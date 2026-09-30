# Resumen de Estudio - IHC (Interacción Humano-Computador)

> Resumen consolidado de los apuntes de clase para preparar el parcial. Generado a partir de 8 PDFs del curso (se excluyó el examen parcial).

## Índice

1. [Clase 1 - Principios de Diseño](#clase-1---principios-de-diseño)
2. [Principios Generales del Diseño de IHC](#principios-generales-del-diseño-de-ihc)
3. [Factores Humanos](#factores-humanos)
4. [DCU y Usabilidad](#dcu-y-usabilidad)
5. [Planificación de UX](#planificación-de-ux)
6. [Clase 2 - Realidad Virtual](#clase-2---realidad-virtual)
7. [Entornos Virtuales Colaborativos](#entornos-virtuales-colaborativos)
8. [Interfaces 3D](#interfaces-3d)

---

# Clase 1 - Principios de Diseño

## ¿Qué es IHC (Interacción Humano-Computador)?

**Definición (ACM SIGCHI, 1996):** "Es una disciplina que se ocupa del diseño, evaluación e implementación de sistemas informáticos interactivos para uso humano, así como del estudio de los principales fenómenos que los rodean".

### Modelo Human-Interface-Computer (Kantowitz & Sorkin, 1983)
Flujo circular entre **Human** (Brain) ↔ **Interface** ↔ **Computer** (Machine State):
- **Sensors** (Interfaz→Humano, vía Displays): órganos sensoriales que reciben información del sistema.
- **Responders** (Humano→Interfaz, vía Controls): mecanismos con los que el humano actúa sobre el sistema.

### Factores Humanos (Sensores y Responders)
- **Sensores humanos:** visión, auditivo, tacto (touch — ej. interfaces hápticas para simular peso), olfato y gusto (ej. displays gustativos con marcadores comestibles y realidad aumentada de sabores).
- **Responders avanzados (ejemplos de investigación):** muñeca (wrist), rostro (face), lengua (tongue), ojos (eyes), voz (speech), cuerpo (body), pies (feet) — es decir, canales de entrada más allá del mouse/teclado.

### ¿Qué son las Interfaces Usuarias?
Dispositivos, medios de comunicación e interacción: pantallas gráficas, dispositivos de apuntamiento, GUIs/WUIs/MUIs, reconocimiento de voz/gesto, mecanismos y protocolos.

**Análisis de cualquier interfaz (ejemplos: lámpara, engrapadora, Word) se hace en 5 componentes:**
1. **Función/Objetivo:** para qué sirve.
2. **Interfaz:** elementos con los que el usuario interactúa.
3. **Parte funcional:** mecanismo interno que ejecuta la acción.
4. **Interacción:** secuencia de pasos que realiza el usuario.
5. **Tareas del usuario:** acciones/objetivos que el usuario busca cumplir.

### Áreas que implican a la IHC
Computación, Psicología, Ciencias Cognitivas, Diseño, Biología, y otros (Sociología, Antropología) convergen en la Interacción Humano-Computador.

**Disciplinas que contribuyen a HCI** (diagrama de capas): Inteligencia Artificial y Ergonómicas alimentan a **Ciencias de la Computación** (sistemas de información, lenguajes, ingeniería de software, hardware de interacción) y **Psicología** (cognitivo, social, organizativo), alimentadas a su vez por Ciencia Cognitiva y Sociología. En el centro: **HCI**.

### Terminología equivalente a IHC
- **CHI** (computer-human interaction)
- **HCI** (human-computer interaction)
- **UCD** (user-centered design)
- **MMI** (man-machine interface)
- **HMI** (human-machine interface)
- **OMI** (operator-machine interface)
- **UID** (user interface design)
- **HF** (human factors)

### Conferencias importantes de IHC
- **CHI** (ACM CHI Conference on Human Factors in Computing Systems) — la conferencia académica más importante de HCI.
- Otras: **HCI International**, **UIST** (User Interface Software and Technology), **INTERACT**, **ASSETS** (Computers and Accessibility).

### ¿Por qué es importante la IHC?
- Antes las computadoras eran caras y usadas solo por profesionales; hoy son baratas y usadas por personas no técnicas (distintos orígenes, necesidades, habilidades).
- Se busca que las interfaces sean **fáciles de aprender, fáciles de usar y que ahorren tiempo**, además de generar una **buena experiencia de usuario (UX)**.
- Malos diseños pueden tener consecuencias graves (ej. alerta real de misil balístico enviada por error en Hawái por mala interfaz).
- Dato curioso: ~90% de las personas no sabe usar Ctrl+F.
- Evolución histórica: de consolas técnicas complejas a laptops, smartphones, tablets, VR y smartwatches de uso cotidiano.

### Alcance del IHC (4 partes principales)
1. **Usos y contexto** de las computadoras en la sociedad.
2. **Características humanas**: cómo trabajan las personas y cómo se espera que interactúen con las máquinas.
3. **Arquitecturas de interfaces y sistemas**: admiten y limitan los tipos de interfaces que se construyen.
4. **Proceso de desarrollo**: cómo se diseña, implementa y evalúa (prototipos, evaluación, implementación).

### Objetivos de IHC
- Comprender los factores que determinan cómo las personas usan la tecnología.
- Seleccionar dispositivos de entrada/salida apropiados para una interfaz o tarea.
- Determinar el mejor tipo de interacción (manipulación directa, lenguaje natural, iconos, menús).
- Desarrollar/mejorar: **Seguridad, Utilidad, Efectividad, Eficiencia, Usabilidad, Apelación (atractivo)**.

### Ejemplos de buenos y malos diseños (discusión típica de examen)
Casos clásicos analizados en clase: botones de ascensor mal diferenciados, interruptores con 3 modos ambiguos (I/O/II), copa de vino de diseño incómodo, botones peatonales poco intuitivos, etiquetadoras (comparación de usabilidad), secadores de manos (Dyson vs Dayton), diálogos de confirmación mal diseñados ("Delete All Records"), muebles ambiguos (¿silla o mesa?), inodoros de diseño poco intuitivo (estilo japonés). La pregunta clave siempre es: **¿es un buen diseño? ¿por qué?**

### IHC en la Industria - Roles
- **Diseñadores interactivos/de interacción:** diseñan todos los aspectos interactivos de un producto.
- **Ingenieros de usabilidad:** evalúan productos con métodos y principios de usabilidad.
- **Diseñadores web:** desarrollan el diseño visual de sitios web.
- **Arquitectos de la información:** planifican y estructuran productos interactivos.
- **Diseñadores de experiencia de usuario (UX):** combinan todo lo anterior + estudios de campo.

**UX vs UI:** UX (experiencia de usuario) abarca arquitectura de información, definición de características, necesidades del usuario, analítica, wireframes/prototipos, diseño interactivo (usabilidad), accesibilidad — pensamiento analítico/convergente. UI (interfaz de usuario) es la traducción visual/audio: identidad y estilo, diseño visual, color, bocetos, tipografía — pensamiento emocional/divergente.

---

## Principios Generales de Usabilidad

Objetivo: hacer que los sistemas sean **fáciles de usar y de aprender**. La usabilidad se aplica a todos los aspectos de un sistema. Principios que la respaldan:

### 1. Compatibilidad
- **Usuario:** el diseño debe ser apropiado y compatible con las necesidades del usuario. Error común: asumir que todos los usuarios son iguales o piensan como el desarrollador.
- **Producto:** reducir el tiempo de aprendizaje y los errores considerando que el usuario suele venir de versiones anteriores del sistema (hábitos y expectativas ya formados).
- **Tareas:** la organización del sistema debe coincidir con las tareas reales que la persona debe realizar.
- **Flujo de trabajo:** la estructura debe permitir transición fácil entre tareas; el usuario nunca debe verse obligado a navegar entre muchas aplicaciones/pantallas para completar tareas rutinarias.

### 2. Facilidad de aprendizaje (Ease of Learning)
El sistema debe ser fácil de aprender para que el usuario (especialmente novato) pueda comenzar a trabajar rápidamente.

### 3. Memorabilidad
Interfaces con alta memorización son más fáciles de aprender y usar. Se logra mediante:
- **Ubicación:** colocar objetos en ubicaciones consistentes (ej. cuadro de búsqueda siempre en la esquina superior derecha).
- **Agrupación lógica:** agrupar elementos relacionados (ej. opciones relacionadas juntas en un menú).
- **Convenciones:** usar símbolos convencionales (ej. ícono de carrito de compras).

### 4. Sencillez
Si las cosas son simples, son fáciles de entender, aprender y recordar. Incluye **divulgación progresiva** (progressive disclosure): mostrar al usuario solo lo necesario, ocultando opciones avanzadas hasta que se soliciten.

### 5. Flexibilidad
Permite mayor control del usuario y se adapta a variaciones en habilidades/preferencias, ofreciendo opciones en: hardware, tipos de interacción, formato de datos.
- **Responsividad (Responsiveness):** el sistema debe responder rápido a las solicitudes y dar reconocimiento inmediato de las acciones (visual, textual y/o auditivo).
- **Protección:** proteger a los usuarios contra resultados desastrosos de errores humanos comunes (ej. confirmaciones, función "deshacer"/Undo).

### Diseños deficientes — características
- Difíciles de utilizar, frustrantes.
- No proveen pistas, o proveen **pistas falsas**.
- Inducen a error.
- Incapaces de relacionar nuevas funciones con lo que el usuario ya sabe.
- Incapaces de proveer visibilidad del estado/operatividad del sistema.
- Incapaces de otorgar un resultado visible de la operación.

---

## Principios de Diseño (Norman)

### Visibilidad
Las partes correctas de un sistema deben:
- **Ser visibles** (qué partes existen, cómo operan, cómo interactúan).
- Transportar el **mensaje correcto**.
- Proveer **señales naturales**, interpretadas sin necesidad de estar consciente de ellas.
- Proveer una **estructura visible**.
- El diseño natural es el más visible (ejemplo clásico: puertas — la bisagra visible indica de qué lado se abre).

### Affordances (Asequibilidad/Prestancia)
- Son las **propiedades reales y percibidas** de un elemento/objeto/herramienta/tecnología.
- Determinan **cómo puede ser usado** algo — responden al **¿para qué?**.
- Implican proveer pistas para operar las cosas.
- Su correcto uso **evita la falsa causalidad** (que el usuario intente usar algo de forma incorrecta).
- Ejemplos: la forma de una silla afuerda "sentarse"; el diseño de una llave/grifo debe indicar cómo girarla.

### Modelo Mental
- Es el modelo conceptual que las personas forman de un objeto, sistema o de otras personas, y con el que simulan mentalmente su funcionamiento (ej. ver una "bicicleta imposible" y saber que no funcionaría porque simulamos mentalmente su mecánica).
- **¿Cómo se forman?** A partir de: experiencia, formación, capacitación, interpretación de acciones percibidas de la estructura visible del objeto, e interacción con el mundo.
- Ejemplos usados en clase: tetera (teapot), reloj analógico — cada persona interpreta su funcionamiento según su modelo mental previo.

### Mapping (Correspondencia)
- **Modelo de diseño** (del diseñador) vs **Modelo del usuario** (mental, construido al interactuar) — ambos deben coincidir a través del **sistema/software** (que incluye documentación, instrucciones, etiquetas e "imagen del software").
- Mapping es la **relación entre dos cosas**: ej. controles, sus movimientos y los resultados que producen.
- Es la relación entre **lo que se desea** y **lo que es posible hacer**; entre las **acciones que se intentan** y las **operaciones reales**.
- Aprovecha analogías físicas y estándares: culturales, biológicos, psicológicos.
- Debe ser la **relación natural** entre el control y su función — fácil de aprender y recordar, usando principios de percepción.
- **Ejemplo clásico: controles de una cocina/estufa.** El mejor mapping es cuando la disposición espacial de las perillas corresponde exactamente a la disposición espacial de las hornillas (mapping natural), evitando confusión sobre qué perilla controla qué hornilla.

### Feedback (Retroalimentación)
- Informar al usuario sobre qué acciones se han realizado (o se están realizando) y qué resultados se han logrado.
- Dar a cada acción un **efecto inmediato y obvio**.
- Proveer pistas apropiadas (visibilidad) y retroalimentación constante a las acciones.

### Ejercicios de análisis (aplicando los principios anteriores)
Objetos analizados en clase bajo estos principios: tijeras (tienen buen mapping por la asimetría de los mangos), relojes (analógico vs digital — diferencias de affordance y visibilidad).

### Error Humano
- Grandes accidentes (choques de aviones, accidentes nucleares, choques de barcos) suelen atribuirse a "error humano", pero en realidad **se cometen cuando las cosas están mal concebidas/diseñadas**.
- Muchos errores se producen por **fallas de equipos y errores de diseño**, no por torpeza humana.
- **Si un error es posible, alguien lo cometerá** — el diseñador debe asumir que todos los errores posibles ocurrirán.
- El diseño debe:
  - Minimizar la posibilidad de error o sus efectos cuando ocurre.
  - Hacer los errores **fáciles de detectar**.
  - Asegurar que los errores tengan **consecuencias mínimas**.
  - Procurar que los efectos de los errores sean **reversibles**.

---

## Lecturas base del curso
- Norman, D. (2013). Cap. 1: *The Psychopathology of Everyday Things*. En *The Design of Everyday Things: Revised and Expanded Edition*.
- MacKenzie, I.S. (2013). Cap. 2: *The Human Factor*. En *Human-Computer Interaction: An Empirical Research Perspective*.


---

# Principios Generales del Diseño de IHC

## 1. Breve Historia de IHC

- **1945 – Vannevar Bush**, "As We May Think" (*Cómo podríamos pensar*): consejero científico del presidente Roosevelt; propuso el **Memex**, un escritorio mecánico para organizar y recuperar información (precursor conceptual del hipertexto).
- **1962 – Ivan Sutherland**, **Sketchpad**: primer sistema con manipulación de objetos gráficos mediante lápiz óptico (mover, redimensionar con restricciones). Desarrollado en Lincoln Labs (fuerzas aéreas y NSF).
- **1963 – Douglas Engelbart**: inventa el **mouse** (ratón), segundo dispositivo de entrada más usado; su nombre viene de su forma similar a un ratón.
- **1968 – Douglas Engelbart**: "The Mother of All Demos".
- **1981 – Xerox Star**: primer sistema comercial que populariza la **manipulación directa** (documentos, carpetas, papelera, iconos). Le siguen Apple Lisa (1982) y Macintosh (1984).
- **1982**: se forma **ACM SIGCHI**.
- **1983 – Card, Moran y Newell**: publican *The Psychology of Human-Computer Interaction* (trabajo surgido de Xerox PARC), origen académico formal del HCI.
- **1984 – Apple Macintosh**: junto con Xerox Star y Apple Lisa, ayudó a popularizar el uso de **ventanas** (traslapadas).
- **2007**: 25.º aniversario de la conferencia anual SIGCHI (CHI).

## 2. Principios Generales del Diseño

Objetivo central: hacer los sistemas **fáciles de usar y aprender**. La **usabilidad** se aplica a todos los aspectos de un sistema y se apoya en principios como: Compatibilidad, Consistencia, Facilidad de aprendizaje, Memorabilidad, Sencillez, Flexibilidad, Retroalimentación (Feedback), Prevención de errores, Control, Protección, Accesibilidad, Previsibilidad, WYSIWYG.

### Compatibilidad
Debe darse en 4 dimensiones:
- **Usuario**: conocer al usuario; el diseño debe ser apropiado a sus necesidades. Errores comunes del diseñador: asumir que todos los usuarios son iguales, o que piensan/sienten/actúan exactamente como el desarrollador.
- **Producto**: reducir tiempo de aprendizaje y errores. El usuario nuevo suele venir de versiones anteriores del sistema (hábitos, expectativas, conocimiento previo que se incorporan al aprender el nuevo sistema).
- **Tarea**: la organización del sistema debe coincidir con las tareas que la persona necesita realizar para hacer su trabajo.
- **Flujo de trabajo (Workflow)**: la estructura y el flujo de funciones deben permitir una transición fácil entre tareas; el usuario **nunca** debe verse obligado a navegar entre muchas aplicaciones o pantallas para completar tareas rutinarias.

### Facilidad de aprendizaje (Ease of Learning)
El sistema debe ser fácil de aprender para que el usuario empiece a trabajar rápidamente.

### Memorabilidad
Interfaces con alta memorabilidad son más fáciles de aprender y usar. Se logra con:
- **Ubicación**: colocar objetos en una ubicación consistente (ej.: buscador siempre en la esquina superior derecha).
- **Agrupación lógica**: agrupar elementos relacionados (ej.: opciones relacionadas juntas en un menú).
- **Convenciones**: usar símbolos convencionales (ej.: ícono de carrito de compras).

### Sencillez
Si las cosas son simples, son fáciles de entender, aprender y recordar. Incluye la **divulgación progresiva** (progressive disclosure): mostrar al usuario solo lo necesario en cada momento, ocultando opciones avanzadas hasta que se requieran.

### Flexibilidad
Permite mayor control del usuario y se adapta a variaciones en habilidades y preferencias, ofreciendo opciones en:
- Hardware (mouse, joystick, trackball, lightpen, teclas de cursor, etc.)
- Tipos de interacción
- Formato de datos

También incluye:
- **Respuesta rápida (Responsiveness)**: el sistema debe responder rápidamente a las solicitudes y dar reconocimiento inmediato de las acciones (visual, textual y/o auditivo).
- **Protección**: proteger a los usuarios de resultados desastrosos por errores humanos comunes (ej.: confirmaciones "¿Está seguro?", función Deshacer/UNDO).

### Diseños deficientes (características)
- Difíciles de utilizar y frustrantes.
- No proveen pistas, o proveen **pistas falsas**.
- Inducen al error.
- Incapaces de relacionar nuevas funciones con lo ya conocido.
- Incapaces de dar visibilidad de la operatividad del sistema.
- Incapaces de otorgar un resultado visible de la operación.

## 3. Visibilidad y Abordabilidad

### Visibilidad
Las partes correctas de un sistema deben:
- Ser **visibles** (qué partes existen, cómo operan, cómo interactúan entre sí).
- Transmitir el **mensaje correcto**.
- Proveer **señales naturales**, interpretables sin necesidad de estar consciente de ellas.
- Hacer visibles las partes importantes del sistema.
- Proveer una **estructura visible**.
- El diseño **natural** es el más visible (ejemplo clásico: puertas — bisagras visibles indican hacia dónde abren).

### Affordances (asequibilidad / abordabilidad)
- Son las **propiedades reales y percibidas** de un elemento/objeto/herramienta/tecnología.
- Determinan **cómo puede ser usado** algo.
- Responden a la pregunta **¿para qué?**
- Implican proveer **pistas para operar las cosas**.
- Su correcto uso **evita la falsa causalidad** (que el usuario crea erróneamente cómo funciona algo).
- Ejemplos: una silla afforda "sentarse"; grifos/llaves de agua afforda "girar".

### Modelo Mental
- Modelos que las personas se forman de ellas mismas, de otros, del entorno y de los objetos con los que interactúan.
- Permiten simular mentalmente el funcionamiento de un artefacto (ejemplo: al ver una "bicicleta imposible" mal ensamblada, sabemos que no funcionará porque simulamos su operación mentalmente).
- **¿Cómo se forman?** A partir de:
  - Experiencia
  - Formación
  - Capacitación
  - Interpretación de las acciones percibidas de su estructura visible
  - Interacción con el mundo

### Mapping (correspondencia)
- **Modelo de diseño**: modelo conceptual del diseñador.
- **Modelo del usuario**: modelo mental que el usuario elabora al interactuar con el sistema.
- El **sistema** (imagen del software) es el resultado de la estructura física establecida (documentación, instrucciones, etiquetas), que debe comunicar el modelo de diseño al usuario para que su modelo mental coincida con él.
- El *mapping* es:
  - La relación entre dos cosas (ej.: controles, sus movimientos y los resultados que producen).
  - La relación entre lo que se desea y lo que es posible hacer.
  - La relación entre las acciones que se intentan y las operaciones reales.
  - Aprovecha analogías físicas y estándares **culturales, biológicos y psicológicos**.
  - Es la relación **natural** entre un control y su función.
  - Debe ser fácilmente aprendido y recordado, y utiliza principios de percepción.
- **Ejemplo clásico**: los controles de una cocina con 4 hornillas — el mejor mapping es cuando la disposición espacial de las perillas refleja la disposición espacial de las hornillas (evita ambigüedad y errores).

### Feedback (Retroalimentación)
- Informar al usuario sobre qué acciones se han realizado (o se están realizando) y qué resultados se han logrado.
- Cada acción debe tener un efecto **inmediato y obvio**.
- Debe proveer pistas apropiadas (visibilidad) y retroalimentación constante a las acciones.

### Error Humano
- Grandes accidentes (caídas de aviones, accidentes nucleares, choques de barcos) suelen atribuirse a "error humano", pero muchas veces se deben a **fallas de diseño**.
- Las personas **no siempre** cometen errores; tienden a cometerlos cuando las cosas están **mal concebidas o diseñadas**.
- **Si un error es posible, alguien lo cometerá** — el diseñador debe asumir que todos los errores posibles ocurrirán.
- El diseño debe **minimizar la posibilidad de error** y sus efectos cuando ocurre.
- Los errores deben ser: fáciles de detectar, de consecuencias mínimas, y sus efectos deben poder revertirse (reversibilidad).


---

# Factores Humanos

## ¿Por qué estudiar a los humanos?
Somos los usuarios. Al comprender algo nuevo usamos una combinación de:
- **Sentidos** (vista, oído, tacto, olfato, gusto)
- **Experiencia pasada**
- **Expectativas**

Ejemplo: al navegar una web nueva, esperamos que los enlaces lleven a otro contenido; al usar un producto con botones, esperamos que se opere presionándolos.

## Modelo Humano (procesamiento de información)
Modelado como sistema de procesamiento de información en 4 etapas:
1. **Codificación**: codifica información del entorno (vista, oído, tacto, olor, gusto) a representación interna.
2. **Comparación**: la representación interna se compara con representaciones memorizadas en el cerebro.
3. **Selección de respuesta**: decide la respuesta al estímulo codificado.
4. **Ejecución de respuesta**: organiza la respuesta y acción.

Ampliación del modelo: las 4 etapas están conectadas también con **Atención** (arriba) y **Memoria** (abajo), que interactúan con cada etapa.

### Atención
- **Atención selectiva**: capacidad de atender a determinados eventos de una serie de estímulos en competencia.
- **Atención dividida**: capacidad de realizar más de una tarea simultáneamente (ej. conducir y hablar por teléfono).

### Memoria
Comprende 3 sistemas interactivos:
- **Sistema de percepción**: sensores + búfer asociado (tienda de imágenes visuales, almacén de imágenes auditivas).
- **Sistema cognitivo**: memoria a corto y largo plazo.
- **Sistema motor**: ejecuta la respuesta formulada por el sistema cognitivo.

### Subjetividad
La percepción es subjetiva: distintas personas interpretan el mismo estímulo de forma distinta (ambigüedad, experiencias previas).

## 1. La Vista
- Mecanismo para recibir luz y transformarla en energía eléctrica.
- La luz se refleja en los objetos; sus imágenes se enfocan (al revés) en la **retina**.
- La retina contiene:
  - **Fóvea**: visión del color, detección de patrones.
  - **Parte exterior**: sensible a la luz, detección de movimiento.
- **Conos**: células sensibles al color en la retina. Hay 3 tipos (rojo, verde, azul), cada uno sensible a un rango de longitud de onda. El ojo es más sensible al verde y menos al azul.

**Implicación de diseño**: no se puede esperar que un usuario concentrado en el centro de la pantalla lea texto en la parte inferior, porque la periferia no es buena para detección de patrones.

### Constructivismo (teoría de la visión)
- El cerebro no crea imágenes píxel a píxel; la mente **construye modelos** que resumen lo percibido por los sentidos.
- Esos modelos son lo que percibimos; no recordamos todos los detalles, solo los que tienen significado.
- **Implicación de diseño**: no esperar que la gente "vea" todos los detalles de una interfaz, ya que filtra información irrelevante.
- El **contexto** juega un papel importante en lo que vemos (ambigüedad se resuelve con contexto: ej. "tcp"/"ace" en fuentes ambiguas se leen distinto según contexto de palabra).
- **Figura y fondo**: las imágenes se dividen en figura (primer plano) y terreno (fondo); a veces son ambiguos (ej. ilusión de jarrón/dos caras).

## Psicología Gestalt
**Idea principal**: no vemos las cosas de forma aislada, sino como partes de un todo. Organizamos en unidades significativas usando:
- **Proximidad**: agrupamos por distancia/ubicación.
- **Similitud**: agrupamos por tipo (tamaño, forma, color).
- **Simetría**: agrupamos por significado.
- **Continuidad**: agrupamos por flujo de líneas (tendemos a ver representaciones suaves y continuas, no cambios abruptos).
- **Cierre**: percibimos formas que no están completamente ahí (mentalmente "rellenamos espacios en blanco").

**Implicaciones de diseño**: usar proximidad para agrupar elementos relacionados en una interfaz (ej. menús); usar similitud (mismo tamaño/forma/color) para opciones de menú relacionadas.

## Velocidad / precisión de lectura
- La forma de la palabra es importante para el reconocimiento (algunas tipografías/formatos dificultan la lectura rápida).
- Relevante para diseño: legibilidad de textos, formularios, documentos legales, etc.

## 2. La Audición
- **Audición**: percepción de ondas sonoras que pasan por la oreja, llegan al conducto auditivo externo y chocan con el tímpano.
- Fisiología: oído externo → oído medio (martillo, yunque, estribo) → oído interno (cóclea, canales semicirculares, nervio auditivo/vestibular).
- **Sonido**: fluctuaciones cíclicas de presión en un medio (aire), creado cuando objetos físicos se mueven o vibran (ej. portazo, cuerda de guitarra, voz).

### Propiedades del sonido
- **Frecuencia (tono)**
- **Sonoridad**
- **Timbre**: resultado de la estructura armónica del sonido; permite distinguir instrumentos/voces que suenan a la misma frecuencia (ej. trompeta vs. oboe a 200 Hz).
- **Intensidad (volumen)**: medida en decibeles (dB).

### Usos del sonido en interfaces
- Notificación
- Inmersión
- Realimentación (feedback)
- Conciencia espacial

## 3. El Tacto
- Receptores en piel, músculos, articulaciones, huesos.
- Sentidos: tacto, dolor, temperatura, posición, forma, textura, resistencia.
- Ejemplos de comentarios táctiles: relieve en teclas (ej. marca en tecla "F"), forma ergonómica del mouse, vibración de celular.

### Touch y Tactile Feedback (retroalimentación háptica)
Usos: direcciones de guía, notificaciones, realimentación. Ejemplos: Apple Watch (Taptic Engine), trajes hápticos VR (bHaptics TactSuit: casco, chaleco, mangas, botas), trackpad de Apple (feedback táctil simulado).

## 4. Olfato y Gusto
- **Olfato**: capacidad de percibir olores, ocurre mediante células sensoriales en la cavidad nasal.
- **Gusto (sabor)**: recepción química de sensaciones dulces, saladas, amargas y ácidas.
- **Sabor** (como percepción combinada): proceso que combina olfato y gusto.

## Modelo de factores humanos (Human-Interface-Computer)
Esquema general:
- **Human**: Sensors ← Brain → Responders
- **Interface**
- **Computer**: Displays → Machine State ← Controls

Los **sensores** humanos reciben desde los *displays* de la computadora; los **respondedores** (responders) humanos actúan sobre los *controls* de la computadora.

### Área motora del cerebro (homúnculo)
Mapa de la corteza cerebral donde cada órgano/sentido del cuerpo tiene su representación; un estímulo en cierta zona de la corteza activa la parte del cuerpo correspondiente.

### Manejo (Handedness)
- Algunos usuarios son zurdos, otros diestros → considerar en diseño de dispositivos/interfaces (ej. disposición de mouse/teclado).
- **Inventario de Handedness de Edimburgo**: cuestionario que mide dominancia manual (escribir, dibujar, lanzar, cortar, etc.) con puntaje de 10 (muy zurdo) a 50 (muy diestro).

## 5. La Voz
- Las cuerdas vocales responden; sonidos creados por combinación de movimiento en la laringe + presión pulmonar.
- Dos tipos de sonidos vocalizados: **discurso** (habla) y **no habla**.
- Ambos con potencial de control por computadora:
  - Habla + reconocimiento de voz.
  - Detección de señales sin voz (frecuencia, volumen, duración, cambio de dirección, etc.).
- Ejemplo histórico: "Put-that-there" (Richard Bolt, 1980) — control por voz y gestos en interfaz gráfica.
- Ejemplo moderno: Apple Voice Control (accesibilidad, MacOS).

## 6. El Cerebro
- La estructura biológica más compleja conocida.
- Conecta los sensores (entradas humanas) con los respondedores (salidas humanas).
- **Tres funciones principales**: Percepción, Cognición, Memoria.

### Percepción
- Primera etapa de procesamiento de información sensorial: interpretación de señales sensoriales.
  - Estímulo auditivo → armonioso/discordante
  - Estímulo visual → familiar/extraño
  - Estímulo táctil → cálido/caliente
  - Estímulo olfativo → placentero/aborrecible
  - Estímulo gustativo → dulce/agrio

### Ilusiones
La interpretación puede ser difícil y ambigua, llevando a ilusiones (ej. cubo de Necker, líneas de Ponzo). Las ilusiones también existen en otros sentidos:
- **Ilusión táctil**: saltación sensorial (ilusión cutánea del conejo).
- **Ilusión auditiva**: Sheppard-Risset glissando (sonido que parece subir infinitamente).

### Cognición
- Proceso humano de actividad intelectual consciente: pensar, razonar, decidir.
- Secuencia: Estímulo sensorial → Operación cognitiva → Respuesta motora.
- Tiempos típicos de operación (ms):
  - Recepción sensorial: 1–38
  - Transmisión neural al cerebro: 2–100
  - **Procesamiento cognitivo: 70–300**
  - Transmisión neural al músculo: 10–20
  - Latencia y activación muscular: 30–70
  - **Total: 113–528 ms** (gran variación)

### "Tomando una decisión"
No es posible medir directamente el tiempo que tarda un humano en decidir: no está claro cuándo empieza/termina la medición, dónde se mide, de qué entrada decide, ni por qué salida se transmite la decisión. Hay un estímulo sensorial y una respuesta motora que "ponen entre paréntesis" la decisión.

Ejemplos de decisiones simples (tareas de tiempo de reacción):
- Conducir: pisar el freno ante cambio de semáforo.
- Celular: presionar "rechazar llamada" ante llamada entrante.
- Leer noticias: hacer clic en "cerrar" en un anuncio emergente.

### Memoria
- Comprende memoria a corto y largo plazo (ver también sección "Modelo Humano").


---

# DCU y Usabilidad

## 1. Diseño Centrado en el Usuario (DCU)

**Definición:** Proceso de diseño **iterativo** en el que los diseñadores y *stakeholders* se centran en los usuarios y sus necesidades en cada fase del proceso de diseño. (Fuente: Interaction Design Foundation)

- El equipo de diseño debe incluir profesionales de **múltiples disciplinas** (etnógrafos, psicólogos, ingenieros de software y hardware, etc.), además de expertos en el dominio, partes interesadas y los propios usuarios.
- Cita clave (David Benyon): centrarse en las personas implica un costo adicional para el proyecto, pero vale la pena — la respuesta es un "sí" fundamental.

### Cuatro actividades básicas del diseño de interacción
1. **Identificación** de necesidades y establecimiento de requisitos.
2. **Desarrollo** de diseños alternativos.
3. **Creación** de versiones interactivas de los diseños (prototipos).
4. **Evaluación** de diseños.

### Proceso DCU (ciclo iterativo clásico)
Planificación del proceso de DCU → Comprensión y especificación del contexto de uso → Especificación de requerimientos del usuario → Producción de soluciones de diseño → Evaluación del diseño contra los requerimientos → ¿Satisface el sistema los requerimientos? (si no, se repite el ciclo).

- Se apoya en: análisis de usuarios, análisis de tareas, especificaciones de usabilidad, evaluación de la usabilidad.

### Ciclo DCU (variante moderna)
Investigación (entender a los usuarios) → Casos de uso (definir interacción) → Prototipado/Evaluación (design UI) → Validación (develop) → Innovación → (vuelve a empezar).

### Iteraciones a lo largo del tiempo
El diseño avanza en tres etapas de iteraciones:
- **Iteraciones iniciales** (hasta que se establece el concepto de sistema).
- **Iteraciones centrales** (hasta tener parte del sistema en funcionamiento).
- **Iteraciones de evolución** (una vez el sistema está funcionando, se sigue iterando/mejorando).

---

## 2. Usabilidad

**Definición:** Medida de **qué tan bien** un usuario específico, en un contexto específico, puede **usar un producto/diseño para lograr un objetivo** de manera **efectiva, eficiente y satisfactoria**.

- Cita (David McQuillen): la usabilidad tiene que ver con el **comportamiento humano** — las personas son "perezosas", se emocionan y prefieren lo fácil sobre lo difícil.
- Es un **atributo de calidad** que evalúa la facilidad de uso de las interfaces. También se refiere a los **métodos** para mejorar la facilidad de uso durante el diseño.
- Aspectos relacionados: navegación, familiaridad, consistencia, prevención de errores, feedback, claridad visual, flexibilidad y eficiencia.

### Componentes de la Usabilidad (5 dimensiones clave)
1. **Capacidad de aprendizaje:** ¿qué tan fácil es realizar tareas básicas la primera vez?
2. **Eficiencia:** una vez aprendido el diseño, ¿con qué rapidez se realizan las tareas?
3. **Memorabilidad:** al volver tras un tiempo sin usarlo, ¿con qué facilidad se recupera la competencia?
4. **Errores:** ¿cuántos errores comete el usuario, qué tan graves son y con qué facilidad se recupera de ellos?
5. **Satisfacción:** ¿qué tan agradable es usar el diseño?

### Usabilidad vs. Experiencia de Usuario (UX) — ¿Sinónimos?
Todo producto interactivo debe tener **utilidad** y **usabilidad**; además genera una **experiencia** en el usuario (UX).

- **Utilidad:** ¿qué tareas se pueden lograr con el producto? (ej. PowerPoint → hacer diapositivas)
- **Usabilidad:** ¿qué tan fácil es lograr los objetivos de la tarea? (ej. recortar imagen mostrando la parte recortada como ayuda)
- **UX:** ¿es el uso atractivo, placentero, satisfactorio, divertido? (varía según diferencias individuales del usuario)

| Usabilidad | Experiencia de Usuario |
|---|---|
| Fácil de usar | Sentimientos |
| Fácil de entender | Identidad |
| Fácil de aprender | Confianza |
| Fácil de recordar | Facilidad de uso |
| Previene errores | Emoción |
| No requiere esfuerzo mental | Involucra los sentidos |

**Conclusión:** No son sinónimos. La usabilidad es un objetivo (enfocado en eficacia/facilidad), mientras que la UX es más amplia y subjetiva (emocional, sensorial).

---

## 3. Las 10 Heurísticas de Usabilidad (Jakob Nielsen)

Los 10 principios generales de Jakob Nielsen para el diseño de interacciones. Se llaman "heurísticas" porque son **reglas generales**, no pautas de usabilidad específicas. (Fuente: NN/g – Nielsen Norman Group)

1. **Visibilidad del estado del sistema:** el usuario siempre debe estar al tanto del estado del sistema mediante retroalimentación (feedback) eficiente y oportuna. *Ej: barra de progreso al subir archivos.*

2. **Coincidencia entre el sistema y el mundo real:** el lenguaje y comunicación del sistema deben ser familiares al usuario, relacionados con equivalentes del mundo real. *Ej: imagen de una tarjeta de crédito al ingresar sus datos.*

3. **Control y libertad del usuario:** el usuario debe poder revertir acciones ("deshacer") y salir del sistema libremente en cualquier momento. *Ej: opción "Undo" tras publicar un perfil.*

4. **Coherencia y estándares:** el sistema debe seguir convenciones de interfaz estándar, con terminología familiar y consistente en todo el sistema. *Ej: evitar etiquetas inconsistentes en botones con el mismo significado.*

5. **Prevención de errores:** los humanos cometen errores; el sistema debe ayudar a eliminarlos antes de que ocurran (mejor que buenos mensajes de error). *Ej: sugerencias de requisitos de contraseña mientras se escribe.*

6. **Reconocimiento en lugar de recuerdo (Recognition rather than recall):** el sistema debe reducir la carga de memoria del usuario, haciendo visibles opciones y acciones en vez de obligar a recordarlas. *Ej: categorías de "más usados" o "recientes".*

7. **Flexibilidad y eficiencia de uso:** el sistema debe ser eficaz tanto para usuarios novatos como expertos. Ofrecer **aceleradores/atajos** para expertos y alternativas obvias (botones) para novatos.

8. **Diseño estético y minimalista:** mostrar solo los datos/elementos relevantes; cuanta más información irrelevante, más difícil es para el usuario enfocarse en lo importante.

9. **Ayudar a los usuarios a reconocer, diagnosticar y recuperarse de errores:** los mensajes de error deben ser claros, en lenguaje simple, indicar el problema con precisión y sugerir una solución (construidos con empatía, no con códigos técnicos).

10. **Ayuda y documentación:** aunque lo ideal es que el sistema se use sin documentación, se debe proporcionar ayuda accesible (en línea y fuera de línea) con pasos concretos para lograr los objetivos del usuario.


---

# Planificación de UX

> Título real de la presentación: "¿Cómo diseñar experiencias inmersivas que realmente funcionen?" — Diseño de UX para VR/MR/AR.

## 1. Framework de diseño de experiencia inmersiva

4 pilares a definir antes de diseñar:

1. **Propósito**: objetivo de la experiencia (usuario vs. negocio), valor que genera, qué problema resuelve.
2. **Usuario**: quién lo usa (personas), contexto físico (**sentado, de pie, en movimiento**), entorno (VR/MR/AR).
3. **Interacción**: qué puede hacer el usuario y cómo (mirada, gesto, voz).
4. **Experiencia**: emoción (qué siente), narrativa (qué vive), nivel de presencia (qué tan inmersivo es).

## 2. Medición de UX: Framework HEART (Google)

Métrica clave para medir experiencias inmersivas (más importante el **Engagement** en VR que en apps tradicionales, porque el valor está en explorar y vivir la experiencia):

| Métrica | Significado en VR |
|---|---|
| **Happiness** (Felicidad) | ¿Se sintió inmerso? Presencia y conexión con el entorno |
| **Engagement** (Compromiso) | ¿Exploró el entorno? Interacción activa |
| **Adoption** (Adopción) | ¿Probó la experiencia por primera vez? |
| **Retention** (Retención) | ¿Volvería a usarla? |
| **Task Success** (Éxito de tarea) | ¿Logró la tarea sin frustración? |

Objetivo final: crear experiencias que las personas **amen, usen y recomienden**.

## 3. Cómo piensa el usuario en VR (cognición 3D)

Diferencia clave vs. diseño 2D tradicional: en VR **el usuario es la cámara**, hay atención espacial, interfaz integrada en el entorno y alto contexto espacial.

4 principios cognitivos:

1. **Atención visual**: el cerebro dirige la atención según **movimiento, contraste y profundidad**. Regla: "guía la atención, no la impongas".
2. **Percepción espacial**: el cerebro interpreta distancias, tamaño y posición en 3D. "El espacio es parte de la interfaz."
3. **Carga cognitiva**: demasiados estímulos → confusión; interfaces complejas → fatiga. Regla: "menos elementos = mejor experiencia."
4. **Control y agencia**: el usuario espera controlar su movimiento, decidir dónde mirar e interactuar libremente. "El control genera confianza e inmersión."

## 4. Interacciones multimodales (inputs)

Por qué usar varios canales de interacción:
- El cerebro humano es multimodal (procesa mejor con varios sentidos).
- Mejora el rendimiento (más rápido y preciso al combinar canales).
- Reduce errores y carga mental (comparte la carga entre sentidos).
- Aumenta accesibilidad (se adapta a distintos usuarios/contextos).

### Tipos de input

**Mirada (Gaze)**
- Ideal para: navegación rápida, selección simple, guiar la atención.
- Fortalezas: natural, siempre disponible, reduce carga física.
- Limitaciones: baja precisión, requiere confirmación (dwell time o gesto), no ideal para tareas exactas.

**Gesto (Manos)**
- Ideal para: manipular objetos 3D, interacciones naturales, presencia/inmersión, explorar el entorno.
- Fortalezas: natural, manos libres, alta inmersión.
- Limitaciones: menor precisión que un controlador, fatiga en brazos (**"gorilla arm"**), dificultad en tareas finas, depende de buena iluminación/tracking.

**Voz (Audio)**
- Ideal para: comandos rápidos, búsqueda de información, acciones complejas, accesibilidad.
- Fortalezas: manos libres, rápido, ideal para multitarea, accesible.
- Limitaciones: sensible a ruido, ambigüedad del lenguaje, no ideal para precisión, privacidad de datos de audio.

**Controladores (dispositivos)**
- Ideal para: alta precisión, juegos/simulaciones, navegación compleja, objetos pequeños o lejanos.
- Fortalezas: alta precisión, feedback háptico, interacciones complejas, estándar en la mayoría de experiencias.
- Limitaciones: menos natural, requiere aprendizaje, puede romper la inmersión visual, no siempre accesible.

**Movimiento (Cuerpo / 6DoF)**
- Posición (x,y,z), rotación (pitch, yaw, roll), movimiento 6DoF.
- Ideal para: exploración del entorno, inmersión total, experiencias físicas, sensación de presencia.
- Fortalezas: inmersión, libertad, interacciones naturales, mayor compromiso.
- Limitaciones: **mareo y fatiga (motion sickness)**, requiere espacio físico, curva de adaptación, puede romper el flujo.

### Tabla comparativa de inputs (para memorizar)

| Input | Precisión | Naturalidad | Curva aprendizaje | Cuidado principal |
|---|---|---|---|---|
| Mirada | Baja (★★) | Alta (★★★★) | Muy baja | Baja precisión, requiere confirmación |
| Gesto | Media (★★★) | Muy alta (★★★★★) | Baja-Media | Fatiga en brazos |
| Voz | Baja (★★) | Alta (★★★★) | Baja | Ruido, ambigüedad, contexto social |
| Controladores | Muy alta (★★★★★) | Baja (★★) | Media-Alta | Menos natural, curva de aprendizaje |
| Movimiento | Media (★★★) | Muy alta (★★★★★) | Media-Alta | Mareo (motion sickness), espacio limitado |

## 5. Punto de vista del usuario — Factores clave

1. **Postura**: sentado, de pie, en movimiento.
2. **Alcance**: zona cómoda de interacción, evitar estiramientos prolongados.
3. **Campo visual**: lo importante debe estar frente al usuario, evitar elementos fuera de vista.
4. **Confort**: evitar fatiga, minimizar movimientos innecesarios.

## 6. Colocando Assets (reglas de posicionamiento espacial)

Reglas de colocación:
- **A la altura de los ojos**: elementos importantes entre 0° y 30° por debajo de la línea de visión.
- **Frente al usuario**: evitar contenido detrás o en extremos del campo visual.
- **Dentro del alcance cómodo**: elementos principales entre 0.5 m y 2.0 m.
- **Profundidad organizada**: usar la profundidad para jerarquizar, no para esconder información.
- **No sobrecargar el espacio**: dejar espacio alrededor de los elementos (evita fatiga visual/cognitiva).

### Zonas de referencia (distancia del usuario)

| Zona | Distancia | Uso |
|---|---|---|
| **Zona óptima** | 0.5 m – 2.0 m | Fácil de ver y alcanzar. Interacción frecuente. |
| **Zona cómoda** | 2.0 m – 4.0 m | Visible pero requiere mover ojos/cuerpo. Información complementaria. |
| **Zona límite** | > 4.0 m | Difícil de ver/alcanzar. Evitar colocar contenido aquí. |

Ángulo vertical de colocación: entre **+30° y -30°** respecto a la horizontal (vista lateral).

## 7. Mirada (detalle técnico)

- Estudio de Microsoft Research: a 2 metros de distancia, un objeto enfocado por la mirada puede medir **5-10 cm** (ángulo de mirada de 1.5-3°).
- **Pauta de la mirada**: el punto de mirada óptimo está **10-20 grados debajo del horizonte** (para movimiento vertical de cabeza).
- Zonas del campo de visión (FOV) vertical:
  - Encima del plano del suelo: zona incómoda (limitada por morfología del ojo/cuello).
  - +10° a 0°: encima del plano del suelo.
  - **0° a -35°: área óptima del FOV.**
  - -35° a -60°: debajo del FOV óptimo (flexión máxima del cuello).

## 8. Pautas para gestos

- Si el usuario debe levantar la mano, la interacción debe ser **rápida** (no forzar esfuerzo prolongado).
- Levantar el brazo lo suficientemente alto como para que el codo pierda contacto con el cuerpo puede ser agotador.
- Interactuar con una interfaz en movimiento es un desafío para el usuario.
- Gestos simples y reconocibles (ej. "Regular Bloom" como gesto estándar en algunos sistemas).

## 9. Fatiga del brazo ("Gorilla Arm")

- Si se hace que el usuario mantenga el brazo extendido mucho tiempo, es un problema de diseño.
- Solución: dar descansos, **mezclar gesto y habla** (multimodalidad) para no agotar al usuario.
- Concepto clave a recordar para el examen: **"Gorilla arm"** = fatiga muscular por mantener brazos elevados interactuando con interfaces verticales/en el aire.

## 10. Caso práctico: App MR/AR para zoológico

Preguntas de diseño aplicadas al framework:
- **Objetivo**: ampliar la experiencia en vivo, acercar animales virtuales, permitir "llevar animales a casa" vía AR.
- **Contenido**: mostrar animales no visibles, plantas/entorno natural del hábitat, información educativa/conservación.
- Aplicación de métricas HEART al caso (objetivos, señales y métricas concretas por cada dimensión: Happiness, Engagement, Adoption, Retention, Task Success).


---

# Clase 2 - Realidad Virtual

## Interfaces 3D: definición
- **Interfaz de usuario 3D** (Bowman et al., 2005): "una interfaz de usuario que implica interacción 3D".
- **Interacción 3D**: "interacción humano-computadora en la que las tareas del usuario se realizan directamente en un contexto **espacial 3D**".
- En AR/MR/VR la interfaz de usuario ya no se limita a una pantalla o superficie plana rectangular → es esencial comprender el **diseño espacial** y la **interfaz de usuario espacial**.

## Comportamiento de elementos de UI espacial (AR/MR/VR)
- **Seguimiento (tracking)**: los elementos de la UI siguen al usuario mientras se mueve por el entorno; no son fijos. Ejemplo real: el tablero del automóvil.
- **Bloqueado por el mundo (world-locked)**: los elementos tienen un espacio fijo asignado dentro del entorno y no se mueven. Ejemplos reales: semáforos, señales de tráfico, indicadores de cruce peatonal.

## La imaginación como eje del diseño 3D
- Frases clave para recordar:
  - Alex Kipman (inventor de Hololens): en software puedes "torcer" cualquier cosa, no hay leyes físicas que lo impidan → "nada es imposible".
  - Brenda Laurel (pionera VR/AR): "la realidad siempre ha sido demasiado pequeña para la imaginación humana".
  - Einstein: "la imaginación te llevará a todas partes" (vs. la lógica que solo te lleva de A a Z).
- **AR/VR/MR no es un diseño lógico**: son más imaginativos; implica pasar del pensamiento lógico (hemisferio izquierdo: análisis, lenguaje, matemáticas) al pensamiento espacial/analógico (hemisferio derecho: intuición, creatividad, arte).
- **Tecnologías que han ampliado el alcance de la imaginación**:
  - PCs → ampliaron el alcance de la **información** (trabajo, comercio electrónico).
  - Móviles → ampliaron el alcance de las **tareas** (enfoque, contextuales).
  - AR → amplía el alcance de la **visualización**.
  - VR → amplía el alcance de la **experiencia** (narrativas en primera persona).

## Importancia de la experiencia en primera persona
- El gran cambio con los medios inmersivos es la **exploración/narrativa en primera persona**.
- **Co-autoría**: el usuario participa activamente en la construcción de la experiencia.
- **Diseño de interacción en tiempo real**.
- El usuario puede ser trascendido por vistas/perspectivas en tercera persona o tercera dimensión.

## Espectro de inmersión: AR, MR, VR
Ordenados de **menos inmersivo** a **más inmersivo**:

| | AR | MR | VR |
|---|---|---|---|
| Nivel | Menos inmersiva | Imaginación (intermedia) | Más inmersiva |
| Ejemplo del curso | Objetos 3D vistos en vivo (ej. Pokémon Go) | Hololens - caso anatomía (Western University) | IKEA cocina imaginada - "una realidad que no existe" |
| Acción principal | Imaginar algo que no está ahí / Extender lo que hay / Mejorar lo que está ahí | Imaginar algo que no está ahí y **manipularlo** / Extender o mejorar lo físico | Imaginar y coautorar la interacción mediante narrativa / Imaginar y extender o mejorar lo que no existe |

## Presencia
- **Presencia**: experiencia subjetiva de estar en un lugar o entorno, incluso estando físicamente en otro. "La sensación de que estás allí".
- **VR/RA debe generar**:
  - **Ilusión de lugar**.
  - **Ilusión de plausibilidad** (que sea "digno de admiración"/creíble).
- Se mide con un **cuestionario de medición de presencia** (índice de presencia).

### Factores que contribuyen a la sensación de presencia
| De control | Sensoriales | De distracción | De realismo |
|---|---|---|---|
| Grado de control | Modalidad sensorial | Aislamiento | Realismo de escena |
| Control inmediato | Riqueza ambiental | Atención selectiva | Información coherente con el mundo objetivo |
| Anticipación de eventos | Presentación multimodal | Conocimiento de la interfaz | Significado de la experiencia |
| Modo de control | Coherencia de la información multimodal | | Ansiedad/desorientación por separación |
| Modificabilidad del entorno físico | Grado de percepción del movimiento | | |
| | Búsqueda activa | | |

### Presencia en AR y MR
- RA tiene una relación **entrelazada** con lo virtual y lo real:
  - Mantener el contacto con el espacio real.
  - Utilizar el espacio real como lienzo.
  - Trabajar en torno a la física de los espacios físicos.
  - Los objetos/experiencias del usuario se sienten entrelazados o "completamente aumentados".

## Insumos y desafíos del diseño de interacción 3D
- El gran reto: interactuar con una interfaz **sin interacción táctil** (no más mouse, touchpad o pantalla táctil). El usuario interactúa mediante entradas desconocidas → es clave comprender cómo esto afecta el diseño de la UI.
- Cada plataforma/dispositivo tiene su **propio conjunto único de métodos de entrada**; es esencial conocer la plataforma para la que se diseña.
- **Métodos de entrada en experiencias 3D**:
  - Gesto.
  - Mirada (eye tracking / seguimiento de ojos).
  - Voz.
  - Entradas de hardware: plataforma específica, controladores táctiles y de clic, controladores de juegos, háptico.

## Historia de la Realidad Aumentada (AR)
- **1962 – Sensorama** (Morton Heilig): primer prototipo; junto con cortometrajes, aumentaba la experiencia del espectador a través de los sentidos (vista, olfato, tacto, oído).
- **1992 – Tom Caudell**: introduce el concepto de "realidad aumentada" (acuña el término).
- Línea de tiempo AR: 1968 primer display HMD; 1994 AR en teatro/entretenimiento; 1998 NFL 1st & Ten Line con AR; 2000 ARToolkit (librería open source); 2003 AR en medios impresos; 2009 AR en cámaras aéreas deportivas; 2013 industria automotriz adopta AR; 2014 Google Glass (técnica AR wearable); 2016 Microsoft Hololens (AR headset); 2017 aplicaciones AR en retail.

## Historia de la Realidad Virtual (VR)
- Aunque 2016 podría considerarse el "año de nacimiento" de RV/RA masiva, en realidad tiene **medio siglo de gestación**; los primeros productos con el concepto de VR aparecen en la **década de 1980**.
- Línea de tiempo VR (hitos clave): 1935 primer libro de ficción sobre VR; 1957 primer dispositivo multimedia VR; 1961 primer HMD VR; 1966 primer simulador de vuelo básico; 1968 primer display VR/AR montado en cabeza (Sutherland); 1978 VCASS (simulación de vuelo avanzada); 1986 se crea el término "realidad virtual"; 1987 primer juego de arcade VR; 1991 Nintendo Virtual Boy (dispositivo portátil); 1995 VR usada para terapia de PTSD; 1997; 2007 Google Street View; 2010 prototipo Oculus Rift; 2013 Valve + HTC lanzan HTC Vive; 2014 Facebook revela Oculus Half Dome / Google crea Cardboard DIY; 2015; 2018 Sony lanza PlayStation VR.

*(Nota: se omite el detalle de los "Hype Cycle de Gartner" 2016-2021 presentados en la clase por ser irrelevante para el examen, salvo el dato general de que muestran la evolución de expectativas de AR/VR/MR como tecnologías emergentes de forma cíclica: Innovation Trigger → Peak of Inflated Expectations → Trough of Disillusionment → Slope of Enlightenment → Plateau of Productivity).*

## Hardware de Realidad Virtual (dispositivos comerciales)

### Headsets/visores principales
| Dispositivo | Tipo | Pros | Contras | Precio desde |
|---|---|---|---|---|
| **Oculus Quest 2** | Standalone/PC VR | Gran rendimiento independiente, buen precio, puede usarse para PC VR | Requiere cuenta de Facebook, seguimiento de manos irregular, sin Bluetooth | $299 |
| **HTC Vive Cosmos** | PC VR modular | Diseño modular, seguimiento preciso, ajuste cómodo | Costoso, necesita PC de gama alta, no la resolución más alta | $699 |
| **HP Reverb G2** | PC VR | Pantalla 4K, gran sonido, seguimiento de adentro hacia afuera | Punto dulce visual pequeño, problemas con PCs AMD, errores de rendimiento | $599 |
| **PlayStation VR** | Consola | VR con consola, biblioteca exclusiva de juegos, barato | Seguimiento básico, controladores de movimiento mal diseñados, baja resolución | $399.99 |
| **Valve Index** | PC VR | Mejor hardware de su clase, cómodo, prácticamente sin SDE (screen door effect) | Configuración incómoda, soporte limitado de seguimiento de dedos | $1449.00 |

### Mochilas VR (VR Backpack PC) — máxima inmersión sin cable
- Solución para eliminar el cable de conexión a PC potente: adaptador inalámbrico o **computadora tipo mochila** (renderizado directamente en la persona).
- **MSI VR One Backpack PC**: CPU Intel Core i7 + tarjeta gráfica GTX serie 10 (ej. GTX 1070).
- **Zotac VR Go Backpack PC**: mini PC con batería enorme, compatible con HTC Vive.
- Otros: **XMG Walker VR Backpack PC**, **HP Omen VR Backpack PC**.

### Otros dispositivos de inmersión
- **KAT VR**: cintas de correr omnidireccionales para VR, orientadas al mercado profesional/empresarial (ej. Kat Walk Mini, 2018).
- **Mobile VR**: cascos que usan el smartphone como pantalla (ej. Samsung Gear VR, Google Cardboard — hecho de cartón, económico y armable uno mismo).
- Ejemplos de VR económicos para smartphone (marca/país/FOV/precio): BNEXT (Israel, $50), DESTEK (EEUU, FOV 103, $60), Samsung Gear VR (Corea del Sur, FOV 101, $130), Merge (EEUU, FOV 96, $29), Homido (Francia, FOV 100, $29), Mattel View-Master (EEUU, FOV 98, $29), iDudu (China, FOV 120, $54), Google Daydream View 2 (EEUU, FOV 100, $99).
- **PC VR profesional**: requiere PC y espacio especialmente equipado (ej. HTC Vive, Oculus Rift). Alta capacidad de hardware, pero con **deficiencias**: pequeño segmento de usuarios, dificultad de uso, variedad limitada de contenido de calidad.

### Grados de libertad (DoF)
- **3DoF**: solo rotación de la cabeza (mirar alrededor) — típico de dispositivos móviles/básicos.
- **6DoF**: rotación + traslación en el espacio (moverse físicamente) — la mayoría de los headsets profesionales y sus controladores tienen 6 grados de libertad.

### Proceso de desarrollo de un entorno inmersivo (7 pasos)
1. VR Strategy
2. Requirements Analysis & Storyboarding
3. 3D Asset Creation
4. Virtual Reality Development
5. Testing
6. End-User Demonstration & Training
7. Support & Enhancements

- Herramientas/motores mencionados: Oculus, HTC Vive, Samsung Gear VR, Unity, Unreal Engine, Autodesk Maya, Blender.

## Ejemplos aplicados

### AR
- Flash electoral 2021 (gráficos superpuestos en TV con resultados en vivo).
- Cámara de reversa de auto (Toyota) con líneas guía superpuestas.
- SnapChat: reconocimiento facial para filtros con imágenes/animaciones generadas por computadora.
- Gráficos deportivos en vivo (marcador de fútbol con estadísticas superpuestas).
- FIFA World Cup Qatar 2022 con app FIFA+ (mapas de calor, estadísticas en AR).
- Manual de reparación automotriz vía AR (glasses/Hololens para técnicos, reduce el costo de interacción para realizar una tarea y minimiza la atención dividida al combinar múltiples fuentes de información).
- Reconstrucción histórica en AR (torres gemelas del WTC).

### MR (con Hololens)
- Aplicar diagramas y gráficos médicos sobre el cuerpo humano percibido (caso anatomía).
- Entrenamiento físico asistido (bicicleta con hologramas de instrucción - Hologística).
- Videollamada con anotaciones AR superpuestas en el entorno físico (ej. ayuda remota para reparaciones en el hogar).

### VR
- Microsoft Mesh: colaboración inmersiva multiusuario en VR/MR.

## Tendencias / Futuro de la Realidad Virtual
- **Uso actual (2021)** — sectores con mayor disrupción por tecnologías inmersivas (fuera de juegos/entretenimiento): Healthcare devices (38%), Education (28%), Workforce development and training (24%), Manufacturing (21%), Automotive (19%), Marketing/advertising (16%), Logistics/transporte (16%), Retail/ecommerce (15%), Military/defensa (13%), Real estate (13%).
- **Proyección de mercado VR a 2025** (Capgemini Research Institute): Gaming $11.8B, Healthcare $5.1B, Engineering $4.7B, Live Events $4.1B, Video $3.2B, Real Estate $2.6B, Retail $1.6B, Military $1.4B, Education $700M.

### 5 tendencias clave
1. **VR potenciada con IA**: fusión inevitable; ya mejora productividad y optimiza flujos de trabajo empresariales.
2. **VR en conferencias online y eventos deportivos**: impulsada por la pandemia COVID-19; empresas invierten en AR/VR para promover deportes y eventos (ej. pilotos 5G en Barcelona para realidad inmersiva en deportes).
3. **Adopción creciente en educación y capacitación remota**: uso de retroalimentación háptica (ej. Teslasuit, traje de cuerpo completo) para mejorar la inmersión mediante el sentido del tacto.
4. **VR en marketing y publicidad**: mayor integración de VR en la vida cotidiana abre nuevas oportunidades publicitarias.
5. **VR en la socialización**: plataformas sociales basadas en VR para reunirse, charlar o jugar en entornos virtuales (ej. VRChat, AltspaceVR, Rec Room).
- Aplicación cultural: **VR en el teatro** — ejemplo de Blanca Li fusionando danza y música con VR para experiencias artísticas inmersivas.

## Desarrollo XR (introducción técnica)
- **Recursos de desarrollo**: XR Interaction Toolkit, AR Foundation, C# con Unity.
- **Hardware - iOS**: ARKit, soporte LiDAR.
- **Hardware - Android**: ARCore.
- **Hardware - VR**: Meta Quest 2, Meta Quest Pro, OpenXR, Windows Mixed Reality.
- **Package multi-plataforma (Unity AR Foundation)**: integra Google ARCore XR Plugin (Android), Apple ARKit Plugin (iOS) y OpenXR Plugin (Hololens 2) — permite desarrollar features (tracking, detección de planos, image/object tracking, face/body tracking, point clouds, raycasts, anchors, meshing, oclusión, participantes) de forma compatible entre plataformas, aunque no todas las features están disponibles en todos los providers.


---

# Entornos Virtuales Colaborativos

## 1. Objetivos de aprendizaje
- Analizar el diseño de entornos virtuales colaborativos.
- Diseñar entornos virtuales colaborativos.
- Diseñar de manera **inclusiva** considerando accesibilidad, género y localización.

## 2. Interfaz social: 5 características clave

### Social Signifiers
Señales visuales, auditivas o espaciales que comunican información sobre las acciones o intenciones de otros usuarios en el entorno virtual.
- Ejemplos: avatares mirando hacia un objeto (indican interés), íconos de estado (hablando, escribiendo, presente), marcadores/punteros compartidos en espacios 3D.

### Enfoque social
Cómo la interfaz guía la atención del usuario hacia personas, interacciones o zonas de relevancia social dentro del entorno.
- Ayuda a mantener coherencia y fluidez en la comunicación grupal, evitando la desorientación espacial.

### Comportamientos sociales
Acciones visibles o implícitas que los usuarios realizan para interactuar: gestos, miradas, posturas, proximidad física.
- Ejemplos: interés de perfil, seguir/dejar de seguir, chat en cualquier lugar/momento, indicar estado de ánimo (ej. resplandor naranja), negociación y comunicación (gesto de avatar, mirada, ceja, asentimiento de cabeza).

### Tareas sociales
Actividades colaborativas que requieren **coordinación, comunicación y consenso** entre varios usuarios.
- Ejemplos: "¡hagan algo juntos!", obtener ayuda de un punto de información, ayudar a otros.

### Presencia social
Sensación de "estar con otros" en el entorno virtual; combina percepción, emoción e interacción para generar cercanía y conexión.
- Ejemplos: avatares con expresiones faciales y voz real, reacciones en tiempo real (movimiento, gestos, mirada), sensación de co-presencia en espacios compartidos.

## 3. Fórmula central: Realidad Virtual Social

**Comunicación + Coordinación + Colaboración = Realidad Virtual Social**

Preguntas guía asociadas a cada componente:
- ¿Qué efectos grupales o comportamientos sociales acompañan a una actividad? ¿Cuáles son los comportamientos sociales naturales?
- ¿Qué artefactos de tarea se comparten? ¿Qué se debe hacer, quién lo debe hacer y cuándo?
- ¿Qué hace que una tarea sea atractiva? ¿Cómo puede el grupo resolver un problema, lograr una meta y una sensación de logro?

### Comunicación
Intercambio de información entre usuarios: chat (verbal/no verbal), gestos, miradas, estado anímico.

### Coordinación
Organización de acciones para alcanzar un objetivo común. Requiere sincronización, roles claros y control compartido del entorno.
- Elementos: metas/tareas/problemas compartidos, turnos de palabra, gestión de objetos virtuales, asignación de tareas.

### Colaboración
Construcción conjunta de conocimiento o productos dentro del entorno.
- Requiere: límites claros, definir qué aportación se espera y de quién, cuándo entregar resultados y tiempos.
- **Dato clave**: usar habla + gestos combinados (en vez de solo habla) reduce los tiempos de tarea.

### Ejemplo aplicado
Grupo de estudiantes/docentes en laboratorio de mecánica en VR (visores Meta Quest) ensamblando una turbina virtual de forma colaborativa.

## 4. Diseño Inclusivo

### Definición
Enfoque que busca crear experiencias accesibles para la mayor diversidad de usuarios posible, considerando diferencias físicas, cognitivas, culturales y tecnológicas.
- Principio clave: **diseñar CON las personas, no PARA las personas**.
- Deriva del **Diseño Universal** (Norman, 2013).

### Principios del Diseño Universal aplicados a VR
1. Uso equitativo
2. Flexibilidad
3. Uso simple e intuitivo
4. Información perceptible (señales visuales, auditivas o hápticas)
5. Tolerancia al error
6. Bajo esfuerzo físico
7. Tamaño y espacio adecuado

### Tipos de discapacidad e impacto a considerar
- Movilidad
- Discapacidad visual (ceguera)
- Visión baja
- Problemas de audición (sordera)
- Discapacidad cognitiva

### Género inclusivo

**Mujeres** — suelen valorar:
- Experiencias donde las emociones tienen un rol central.
- Narrativas empáticas con desarrollo emocional de personajes.
- Experiencias inmersivas con carga afectiva (cuidado, empatía, pertenencia).

**Hombres** — tienden a:
- Concentrarse en una tarea a la vez (mientras las mujeres pueden realizar tareas en paralelo).
- Valorar el tiempo/velocidad.
- Disfrutar retos directos, competitivos y de confrontación.
- Jugar de forma proactiva y ofensiva, tomando la iniciativa.

### Localización: límites culturales
- Aclarar bien a los personajes.
- Diseñar considerando la sensibilidad cultural.
- Considerar necesidad de traducción.
- Considerar referencias literarias/culturales.
- Probar el habla a través de distintos acentos.

## 5. Idea resumen (síntesis del tema)
- **Comunicación + Coordinación + Colaboración = Realidad Virtual Social**
- No todos los usuarios tienen las mismas capacidades (accesibilidad).
- Es importante identificar y diseñar para las diferencias de comportamiento entre hombres y mujeres.

## 6. Nota técnica (arquitectura multiplayer, contexto complementario)
Se mencionan herramientas de networking para implementar entornos VR colaborativos (nivel de desarrollo, no conceptual de IHC):
- **Photon / Photon Fusion**: arquitectura cliente-host-servidor donde el host crea una "room", los clientes se unen, se intenta una conexión directa ("punch") mediada por la room, con fallback garantizado si falla.
- **Unity Netcode for GameObjects – Client RPCs**: llamadas remotas (RPC) desde el servidor que se ejecutan en la versión del objeto en cada cliente, sujetas a latencia entre servidor y cliente.


---

# Interfaces 3D

## 1. Diseñar para la presencia

### ¿Qué es la presencia en Realidad Virtual?
**Presencia** es la experiencia psicológica en la que el usuario percibe que está dentro del entorno virtual y actúa como si fuera real ("No basta con ver un mundo virtual… debo creer en él y comportarme dentro de él").

**La presencia ocurre en 3 niveles:**
- **Sensorial:** Percibo el entorno como real.
- **Cognitivo:** El entorno tiene sentido.
- **Conductual:** Actúo como si fuera real.

### Importancia de la presencia en VR/AR
La presencia determina si una experiencia VR/AR es realmente inmersiva o simplemente visual ("Sin presencia, VR es solo un video en 360°").
- **Impacto positivo:** mejora el engagement, incrementa el aprendizaje, simulaciones realistas, impacto emocional.
- **Sin presencia:** el usuario se desconecta, pierde interés, experiencia superficial.
- **Cómo se mide:** cuestionarios, tiempo de uso, nivel de interacción, reacciones del usuario.

### Factores de presencia (cómo diseñar experiencias inmersivas)
La presencia no ocurre por accidente, se diseña ("Si no puedes interactuar naturalmente, no hay presencia"):
1. **Sensorial:** audio espacial, iluminación, escala correcta, FPS estable.
2. **Interacción:** hand tracking, feedback, física realista, baja latencia.
3. **Cognitivo:** consistencia, predicción, navegación.
4. **Atención:** guías visuales, señalización direccional, jerarquía.

**Checklist:** ¿Sabe qué hacer en 5 seg? ¿Responde al instante? ¿El entorno tiene sentido?

### Presencia en AR y MR
En VR se crea un mundo completo; **en AR/MR se diseña dentro del mundo real**.
- **RA** tiene una relación entrelazada con lo virtual y lo real: mantiene contacto con el espacio real, usa el espacio real como lienzo, trabaja en torno a la física de los espacios físicos; los objetos/experiencias se sienten "completamente aumentados".
- ¿Qué cambia?: el usuario no abandona la realidad, lo virtual se integra al entorno físico, el espacio real es parte del diseño.

**4 principios clave en AR/MR:**
1. **Anclaje:** objetos fijos al mundo real.
2. **Oclusión:** lo virtual respeta lo físico.
3. **Persistencia:** el entorno recuerda.
4. **Coherencia:** escala, gravedad y colisiones.

**Errores comunes:** objetos flotando sin contexto, mala escala, ignorar la iluminación real.

## 2. Primera experiencia de 30 segundos (onboarding en VR)

Si el usuario no entiende qué hacer en los primeros 30 segundos, la experiencia falla.

**Objetivo:** orientar y enseñar la interacción, generar curiosidad, definir un propósito.

**Checklist:** objeto interactivo desde el inicio, feedback inmediato, UI mínima, sin tutoriales largos.

**Métricas:** tiempo hasta la primera interacción, nivel de interacción, tasa de abandono.

**Framework de tiempo (onboarding):**
- **0-5s — Orientación:** ¿Dónde estoy?
- **5-10s — Descubrimiento:** ¿Qué puedo hacer?
- **10-20s — Interacción:** aprender haciendo.
- **20-30s — Propósito:** objetivo claro.

("En VR no hay manual… el usuario aprende haciendo")

### Enfoque de la escena: Curiosidad + Affordances
En VR no se le dice al usuario qué hacer, se lo invita a hacerlo ("Si tienes que explicarlo… está mal diseñado").
- **Curiosidad:** motiva la exploración, se activa con estímulos visuales y contexto.
- **Affordances:** señales que indican cómo interactuar (ej. un botón indica presionar, un objeto indica agarrar).

## 3. Explorando interfaces espaciales

### Patrones de menús en VR
En VR no se diseñan pantallas, se diseñan objetos en el espacio.

**4 tipos de menú:**
1. **Anclado en el mundo:** fijo en el entorno, permite que el usuario se aleje o acerque.
2. **Cabeza bloqueada (head-locked):** sigue la mirada del usuario; útil para alertas críticas pero puede cansar.
3. **Adjunto a mano (hand-attached):** aparece directamente en la mano o controlador para acceso rápido.
4. **Contextuales:** aparecen solo cuando el objeto o la situación lo requiere.

**Buenas prácticas:** minimizar la UI visible para mantener la inmersión; priorizar la interacción natural mediante gestos o física; evitar la saturación del campo de visión (FOV). ("El mejor menú es el que aparece cuando lo necesitas")

### Campo de visión (FOV)
Se puede diseñar en 360° completos, pero hay que pensarlo desde la perspectiva del usuario.

**Factores de diseño:**
- **Campo de visión:** 90° frontal óptimo.
- **Distancia:** 1-2 metros para comodidad.
- **Escala:** legible y coherente con el mundo.
- **Interacción:** mano, mirada o control.

### Foveated rendering (optimización clave en VR)
"No todo lo que ves necesita máxima calidad… solo lo que estás mirando."

**¿Qué es?** Alta calidad en el centro (donde mira el usuario), baja calidad en la periferia. Se basa en el eye-tracking (seguimiento ocular), que se alinea con el enfoque del propio ojo.

**Impacto:** reduce uso de GPU, aumenta FPS, disminuye latencia, mejora el confort.

**Campo de visión relevante:** 96° = lo que ve en el visor (FOV del headset), no todo el entorno de 360°.

**Modelo:** ~20° = máxima nitidez (fóvea); la periferia tiene menor detalle.

**Tipos:**
1. **Fixed (zona fija):** usado en Meta Quest.
2. **Eye-tracked (sigue la mirada):** usado en Vision Pro.

**Impacto medido:** +30% a 60% de mejora de rendimiento, mayor FPS, menor latencia.

**Reglas:** la UI debe estar dentro del FOV (96°), elementos clave en el centro. ("No diseñamos para 360°… diseñamos para lo que el usuario realmente ve")

### Referencia adicional
"10 Usability Heuristics Applied to Virtual Reality" (Nielsen Norman Group) — aplicación de las heurísticas clásicas de usabilidad al contexto VR.

## 4. Conceptos básicos de la narración (storytelling en 3D)

### Requisitos para 3D UX
Tres habilidades clave para diseñar interacciones 3D: **contar historias, improvisar e imaginar**. Se deben asumir estos roles durante el diseño 3D.

### Storytelling: el arte de utilizar el poder de las historias
- Mediante la narrativa se despliega el diseño de la escena.
- La narrativa funciona como un sistema de guía de **flujo de tareas / flujo de historias**.
- Se usa la mecánica narrativa para dar forma a la experiencia.

**Elementos que profundizan la presencia:**
- **Señales** → guían la atención.
- **Emoción** → genera conexión.
- **Interacción** → el usuario participa.
- **Descubrimiento** → entiende el mundo.

### Arco narrativo en VR: flujo de experiencia
La narrativa en VR **no es lineal, es interactiva y depende del usuario** ("En VR, el usuario no sigue una historia… la construye").

**5 etapas del arco:**
1. **Inicio:** captar atención, curiosidad, se genera interés.
2. **Exploración:** el usuario se mueve, descubre affordances.
3. **Interacción:** realiza una acción clave, el sistema responde.
4. **Cambio:** feedback del entorno, el entorno evoluciona.
5. **Progreso:** se logra el objetivo, nueva etapa.

**Errores comunes:** historia rígida, no responder al usuario, falta de dirección.

### La improvisación
Regla "**Sí, y…**": un actor acepta todo lo que le da su compañero, sin cambiarlo, negarlo ni estar en desacuerdo, y luego le agrega algo de valor (Heather Wydeven). Así se crea una acción estimulante.
- Complementario + comunicación abierta.
- Escuchar fluidamente y crear.
- Fluido (en cualquier dirección) vs. Flexible.

### Bodystorming: diseñar con el cuerpo en VR
"En VR no se diseña sentado… se diseña experimentando."
- **¿Qué es?** Simular la experiencia del usuario, diseñar antes de programar.
- **¿Para qué sirve?** Validar interacciones, evaluar espacio y movimiento, detectar problemas de UX.
- **Aplicación:** simular acciones físicas, probar posiciones de UI, evaluar comodidad.
- **Errores que detecta:** UI fuera de vista, interacciones incómodas, fatiga del usuario.

### Imagineering
Imaginación + ingeniería = técnica de visualización creativa (Walt Disney Imagineering).
- Enfoque intencional para el compromiso y el deleite.
- Uso de sonido y movimiento.
- Interactuar de nuevo con el usuario.
- "No puede accionar un interruptor y hacer que otra persona sea creativa, pero puede configurar un entorno en el que el interruptor esté activado con más frecuencia."
