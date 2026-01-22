const articles = [
    // --- EMERGENCIA Y DEFENSA ---
    {
        id: 'bomb_home',
        category: 'emergencia',
        icon: 'fa-house-crack',
        title: 'Ataque Aéreo: Protocolo en Domicilio',
        summary: 'Identificación de la "Hard Room" y posturas de seguridad ante ondas expansivas.',
        content: `
            <h3>La Regla de Oro: Dentro vs Fuera</h3>
            <p>En un conflicto moderno (drones, misiles hipersónicos), las sirenas pueden sonar solo segundos antes del impacto, o no sonar. Tu tiempo de reacción es cero. Estar fuera es una sentencia de muerte por la metralla.</p>
            
            <h3>1. El Lugar Seguro (Hard Room)</h3>
            <p>Identifica YA la habitación más segura de tu casa. Debe cumplir:</p>
            <ul>
                <li><strong>Sin ventanas:</strong> La onda expansiva rompe los cristales y los convierte en metralla letal. El 80% de las heridas en bombardeos urbanos son por vidrio, no por fuego. Si no tienes habitaciones sin ventanas, usa un pasillo interior y cierra todas las puertas que den a habitaciones con ventanas.</li>
                <li><strong>Paredes maestras:</strong> Pasillos centrales o baños interiores suelen ser los más robustos. Evita tabiques finos que puedan colapsar fácilmente.</li>
                <li><strong>Piso intermedio:</strong> Si vives en un último piso, el techo es vulnerable a impactos directos. Si vives en un bajo, los escombros de todo el edificio pueden caer sobre ti. Los pisos intermedios (2º-3º en un edificio de 5) ofrecen la mejor protección estadística.</li>
            </ul>

            <h3>2. La Postura de Supervivencia</h3>
            <p>Si sientes una explosión o escuchas el silbido:</p>
            <ol>
                <li>Tírate al suelo <strong>inmediatamente</strong> (boca abajo). Esto reduce tu perfil ante la metralla.</li>
                <li>Manos cruzadas detrás de la nuca (protege cervicales y cabeza).</li>
                <li>Codos pegados al suelo (para no rebotar y estabilizar el cuerpo).</li>
                <li>Piernas cruzadas (protege arterias femorales de cortes y metralla rasante).</li>
                <li><strong>BOCA ABIERTA:</strong> Crucial. La diferencia de presión puede reventarte los tímpanos. Abrir la boca iguala la presión interna y externa, evitando daños auditivos permanentes.</li>
            </ol>
        `
    },
    {
        id: 'nbq_nuclear',
        category: 'emergencia',
        icon: 'fa-radiation',
        title: 'Amenaza Nuclear y Química (NBQ)',
        summary: 'Refugio in-situ (Shelter-in-Place) y sellado de habitaciones ante nube tóxica.',
        content: `
            <h3>Diferencia entre Nuclear y Químico</h3>
            <p>En Madrid, un ataque químico buscará zonas bajas (metro, sótanos) ya que muchos gases son más pesados que el aire. Un ataque nuclear o bomba sucia genera lluvia radiactiva (fallout) que cae desde arriba, afectando a tejados y zonas expuestas.</p>
            
            <h3>Protocolo de Sellado (Shelter-in-Place)</h3>
            <p>Si se anuncia una nube tóxica o radiactiva y no puedes evacuar:</p>
            <ol>
                <li><strong>Cierra todo:</strong> Ventanas, puertas, tiros de chimenea y rejillas de ventilación. Bloquea cualquier entrada de aire exterior.</li>
                <li><strong>Apaga la climatización:</strong> Aire acondicionado o calefacción que coja aire de fuera debe ser desactivado inmediatamente.</li>
                <li><strong>La Habitación Interior:</strong> Ve a una habitación sin ventanas, preferiblemente en un piso alto para químicos (si el gas es pesado) o intermedio para radiación. Usa cinta americana y plástico para sellar herméticamente el marco de la puerta y cualquier rendija.</li>
                <li><strong>Radio:</strong> Escucha instrucciones. La mayoría de nubes químicas se disipan en horas. La radiación más letal decae drásticamente en 48-72 horas.</li>
            </ol>

            <div class="warning-box">
                <strong>¿Vientos en Madrid?</strong> Históricamente, el viento predominante en Madrid viene del Suroeste. Si hay una detonación en el Sur (Getafe/Bases), la nube irá hacia el centro y el Corredor del Henares. Si estás en la Sierra (Noroeste), sueles estar a barlovento (más seguro), pero siempre verifica la dirección del viento local observando el humo o banderas.
            </div>
        `
    },
    {
        id: 'civil_riots',
        category: 'emergencia',
        icon: 'fa-users-slash',
        title: 'Disturbios y Zonas Rojas',
        summary: 'El concepto "Grey Man" y áreas a evitar en Madrid durante conflictos civiles.',
        content: `
            <h3>El Concepto "Grey Man" (Hombre Gris)</h3>
            <p>En una guerra civil o colapso social, no quieres parecer un soldado ni una víctima rica. Quieres ser invisible, alguien que no merece la pena mirar dos veces.</p>
            <ul>
                <li><strong>Ropa:</strong> Nada de camuflaje, nada táctico, nada de marcas caras. Ropa desgastada, colores aburridos (gris, azul oscuro, marrón). Evita colores brillantes o eslóganes políticos.</li>
                <li><strong>Mochila:</strong> No uses mochilas militares con sistema MOLLE. Usa una bolsa de supermercado reutilizable o una mochila escolar vieja y sucia. Sugiere que no llevas nada de valor dentro.</li>
                <li><strong>Actitud:</strong> Camina a ritmo medio, con propósito pero sin prisa. Mirar al suelo pero escaneando con la vista periférica. No hagas contacto visual directo (desafío) ni huyas corriendo (presa). Mézclate con el flujo de la gente.</li>
            </ul>

            <h3>Zonas Rojas en Madrid</h3>
            <p>Históricamente y estratégicamente, evita:</p>
            <ul>
                <li><strong>Centros de Poder:</strong> Congreso (Cortes), Palacio Real, Moncloa. Serán zonas de manifestación y represión.</li>
                <li><strong>Nudos de Transporte:</strong> Atocha, Chamartín, Intercambiador de Moncloa. Serán puntos de control (checkpoints) o objetivos de bloqueo.</li>
                <li><strong>Barrios "Símbolo":</strong> Zonas muy ricas (Barrio Salamanca) o muy conflictivas pueden ser foco de saqueos o enfrentamientos ideológicos. Los barrios residenciales anodinos de clase media suelen ser los más tranquilos.</li>
            </ul>
        `
    },
    {
        id: 'home_defense',
        category: 'emergencia',
        icon: 'fa-shield-halved',
        title: 'Defensa Pasiva del Hogar',
        summary: 'Cómo fortificar una puerta estándar y disuasión sin armas de fuego.',
        content: `
            <h3>El Principio de la Cebolla</h3>
            <p>La seguridad son capas. Si llegan a tu puerta, ya has fallado en las capas exteriores (apariencia, disuasión, barreras). Debes detenerlos antes de que intenten entrar.</p>

            <h3>1. Apariencia Exterior</h3>
            <p>Tu puerta no debe parecer la de un búnker lleno de comida y recursos. Debe parecer que ya ha sido saqueada o que no hay nadie. Deja basura en el felpudo. No limpies la puerta de polvo. Quita tu nombre del buzón para mantener el anonimato.</p>

            <h3>2. Fortificación Física</h3>
            <ul>
                <li><strong>La Cerradura no importa:</strong> En un asalto violento, nadie usa ganzúas. Usan arietes, palancas o patadas. Lo que falla es el marco de madera donde encaja el cerrojo.</li>
                <li><strong>Refuerzo:</strong> Atornilla una pletina de metal larga en el marco donde entra el pestillo. Usa tornillos de 10cm que lleguen al ladrillo, no solo a la madera del marco. Esto distribuye la fuerza del impacto.</li>
                <li><strong>Bloqueo:</strong> Una cuña de puerta de goma industrial por dentro es increíblemente efectiva para evitar que abran la puerta. Muebles pesados empujados contra la puerta son mejores que cualquier alarma electrónica.</li>
            </ul>

            <h3>3. Iluminación y Visibilidad</h3>
            <p>En un apagón general, una casa con luz es un objetivo inmediato. Usa cortinas opacas (blackout) o mantas pesadas en las ventanas. Si tienes luz dentro (velas, leds), que no se vea ni un rayo fuera (Disciplina de Luz). No reveles tu posición.</p>
        `
    },

    // --- LOGÍSTICA ---
    {
        id: 'water_prep',
        category: 'logistica',
        icon: 'fa-faucet-drip',
        title: 'Gestión Crítica del Agua',
        summary: 'Fuentes alternativas y potabilización cuando falla el Canal de Isabel II.',
        content: `
            <h3>La Vulnerabilidad de Madrid</h3>
            <p>El agua de Madrid viene de la Sierra Norte. Requiere electricidad para ser bombeada a los depósitos elevados y llegar a tu grifo. Sin luz, no hay agua en cuestión de horas debido a la gravedad y el consumo residual.</p>

            <h3>Fuentes Alternativas en tu Edificio</h3>
            <ul>
                <li><strong>Tu calentador/termo:</strong> Tiene 50-100L de agua potable dentro acumulada. Cierra la llave de paso general del agua de la casa y abre el grifo de desagüe del termo para aprovecharla.</li>
                <li><strong>Cisternas:</strong> La cisterna del inodoro (el tanque superior) tiene 5-10L de agua limpia si no usas pastillas químicas azules. Es agua potable de red.</li>
            </ul>

            <h3>Fuentes Exteriores y Peligros</h3>
            <ul>
                <li><strong>Fuentes Públicas:</strong> Muchas fuentes del Madrid antiguo vienen de viajes de agua subterráneos, pero no cuentes con ello, muchas están conectadas a la red general.</li>
                <li><strong>Río Manzanares:</strong> <strong style="color:red">NO BEBER</strong> sin hervir y filtrar con carbón activo. Tiene metales pesados y químicos agrícolas que el cloro no elimina. Es agua de último recurso.</li>
            </ul>

            <h3>Potabilización de Emergencia</h3>
            <p>Si el agua es clara pero sospechosa (de lluvia o fuente dudosa):</p>
            <ol>
                <li><strong>Hervir:</strong> 1 minuto en ebullición fuerte mata bacterias, virus y parásitos. Es el método más seguro.</li>
                <li><strong>Lejía (Sin detergente ni olor):</strong> 2 gotas de lejía doméstica por litro de agua. Agitar y dejar reposar 30 min. Si huele ligeramente a cloro, es segura.</li>
                <li><strong>Solar (SODIS):</strong> Botella de plástico transparente (PET) al sol directo 6 horas (solo mata patógenos biológicos por UV, no elimina químicos).</li>
            </ol>
        `
    },
    {
        id: 'food_pantry',
        category: 'logistica',
        icon: 'fa-wheat-awn',
        title: 'Despensa de Larga Duración',
        summary: 'Alimentos de alta densidad calórica para escenarios sin electricidad.',
        content: `
            <h3>Calorías vs Peso</h3>
            <p>En situaciones de estrés y supervivencia, tu cuerpo quema el doble de calorías. La lechuga o verduras frescas no sirven (son agua). Necesitas densidad energética (grasas y carbohidratos).</p>
            
            <h3>Top Alimentos (Clima Seco Madrid)</h3>
            <ul>
                <li><strong>Miel:</strong> Eterna. Nunca caduca si está cerrada. Antiséptica y energía pura instantánea.</li>
                <li><strong>Arroz blanco:</strong> Dura 10+ años almacenado en seco. Requiere mucha agua para cocinar (ratio 2:1), tenlo en cuenta.</li>
                <li><strong>Pasta:</strong> Requiere menos agua que el arroz y se cocina más rápido.</li>
                <li><strong>Mantequilla de cacahuete:</strong> Muy alta en calorías, grasas y proteína. Se puede comer sin cocinar. </li>
                <li><strong>Latas:</strong> Sardinas o atún en aceite (come el pez, y usa el aceite de la lata para cocinar otros alimentos o incluso para iluminar con una mecha de algodón).</li>
            </ul>
            
            <div class="info-box">
                <strong>Truco del Olor:</strong> Si cocinas bacon o carne en una hambruna, tus vecinos lo olerán a 50 metros y atraerás atención no deseada. Cocina solo hervidos de noche o alimentos que no desprendan olores fuertes. Guarda la grasa para ingerirla fría si es necesario (aporte calórico).
            </div>
        `
    },
    {
        id: 'sanitation_waste',
        category: 'logistica',
        icon: 'fa-toilet',
        title: 'Higiene de Combate y Residuos',
        summary: 'Gestión de heces y basura cuando no funciona el alcantarillado.',
        content: `
            <h3>El Asesino Silencioso</h3>
            <p>En asedios históricos (Sarajevo, Alepo), la disentería y el cólera mataron más que las balas. Si el váter no traga (sin agua), **DEJA DE USARLO** inmediatamente o atascarás todo el edificio y crearás un foco infeccioso en tu propia casa.</p>

            <h3>El Método del Cubo (Twin Bucket System)</h3>
            <p>Necesitas dos cubos de pintura o basura fuertes con tapa:</p>
            <ol>
                <li><strong>Cubo 1 (Orina):</strong> El pis es estéril al salir. Se puede tirar por un desagüe, rejilla o en la tierra lejos de fuentes de agua. No mezclar con heces (la mezcla genera amoniaco y huele fatal).</li>
                <li><strong>Cubo 2 (Heces):</strong> Usa una bolsa de basura resistente. Después de usar, cubre con ceniza, arena de gato, tierra seca o serrín. Esto seca las heces y reduce el olor. NUNCA uses agua. Tapa herméticamente.</li>
            </ol>

            <h3>Disposición Final</h3>
            <p>Cuando la bolsa de heces esté llena, ciérrala bien con nudo doble. Si hay servicios de recogida en puntos centrales, llévala. Si no, entiérrala a 50cm de profundidad y al menos a 100m de cualquier río o fuente de agua para evitar contaminar acuíferos.</p>
        `
    },
    {
        id: 'energy_scavenge',
        category: 'logistica',
        icon: 'fa-bolt',
        title: 'Energía: Obtención y Baterías',
        summary: 'Cómo conseguir electricidad de fuentes urbanas abandonadas.',
        content: `
            <h3>El apagón será largo</h3>
            <p>No esperes luz en meses si la red cae. Tu prioridad es cargar dispositivos de comunicación (radio, móvil offline con mapas) y linternas.</p>

            <h3>Fuentes Urbanas de Energía</h3>
            <ul>
                <li><strong>Coches abandonados:</strong> Tienen baterías de plomo de 12V. Necesitas un cargador USB de mechero de coche y dos cables para conectarlo a los bornes (+ y -). Puedes cargar móviles durante semanas con una sola batería de coche estándar.</li>
                <li><strong>Luces de jardín solares:</strong> Esas pequeñas luces que la gente tiene en terrazas contienen una pequeña célula solar y una pila AA recargable. Son pésimas, pero pueden cargar una pila AA al día para tu radio si recolectas varias.</li>
                <li><strong>Powerbanks / Baterías externas:</strong> Si tienes uno, úsalo solo para emergencias. No lo gastes jugando. Manténlo entre 20% y 80% para alargar su vida útil. Evita temperaturas extremas.</li>
            </ul>
        `
    },
    {
        id: 'barter_economy',
        category: 'logistica',
        icon: 'fa-handshake',
        title: 'Economía de Trueque',
        summary: 'Qué objetos tendrán valor infinito cuando el Euro caiga.',
        content: `
            <h3>El dinero Fiat no valdrá nada</h3>
            <p>En 2 semanas de colapso, el papel moneda solo servirá para encender fuego o higiene personal. El oro es bueno para sobornar guardias para salir del país o comprar grandes favores, pero malo para el día a día (es indivisible y atrae ladrones peligrosos).</p>

            <h3>Monedas de Cambio Real (Micro-Trueque)</h3>
            <ul>
                <li><strong>Vicios:</strong> Tabaco y Alcohol barato (vodka, whisky). La gente adicta pagará lo que sea. El alcohol de alta graduación también sirve como desinfectante.</li>
                <li><strong>Higiene femenina:</strong> Tampones y compresas. Desaparecen de las tiendas en horas. Tienen valor incalculable para higiene y como vendajes improvisados.</li>
                <li><strong>Medicinas OTC:</strong> Ibuprofeno, Paracetamol, Antidiarréicos (Fortasec), Antibióticos si tienes. Valen su peso en oro.</li>
                <li><strong>Mecheros y Pilas:</strong> Pequeños, baratos de almacenar y todo el mundo los necesita para fuego y luz.</li>
                <li><strong>Café:</strong> Soluble. La cafeína es una droga funcional necesaria para mantenerse alerta en guardias nocturnas.</li>
            </ul>
        `
    },

    // --- GEOGRAFÍA ---
    {
        id: 'metro_network',
        category: 'geografia',
        icon: 'fa-train-subway',
        title: 'Red de Metro: Refugios y Trampas',
        summary: 'Análisis de profundidad de líneas L6 y L11 vs estaciones superficiales.',
        content: `
            <h3>Profundidad es Vida</h3>
            <p>El Metro de Madrid no es uniforme. Líneas antiguas (L1, L2, L4) están a pocos metros de la superficie (método "cut and cover"), ofreciendo poca protección. Líneas modernas son profundas túneles excavados con tuneladora.</p>

            <h3>Estaciones Seguras (Búnkeres)</h3>
            <ul>
                <li><strong>Línea 6 (La Circular):</strong> Estaciones como Cuatro Caminos (45m prof.), República Argentina, Nuevos Ministerios o Sainz de Baranda son muy profundas y sirven como refugios nucleares improvisados.</li>
                <li><strong>Línea 11:</strong> La más moderna y profunda en el sur de Madrid.</li>
                <li><strong>Guzmán el Bueno:</strong> Muy profunda y con accesos complejos que facilitan la defensa de la entrada.</li>
            </ul>

            <h3>Trampas Mortales</h3>
            <ul>
                <li><strong>Intercambiadores (Sol, Atocha, Chamartín, Av. América):</strong> Evitar a toda costa. Son objetivos estratégicos de bombas y focos de pánico masivo. Una estampida humana aquí es letal debido a la densidad.</li>
                <li><strong>Línea 5 (Casa de Campo):</strong> Tramo en superficie. Cero protección ante explosiones.</li>
                <li><strong>Línea 10 (Batán):</strong> Superficie. Evitar.</li>
            </ul>
        `
    },
    {
        id: 'escape_routes',
        category: 'geografia',
        icon: 'fa-mountain',
        title: 'Rutas de Éxodo: Sierra Norte',
        summary: 'Vías de evacuación evitando la M-30 y M-40.',
        content: `
            <h3>La Ratonera M-30 / M-40</h3>
            <p>Olvídate del coche. En una evacuación masiva, Madrid será la ratonera de coches más grande de Europa. Intentar salir en coche es suicidio; te quedarás atrapado sin gasolina y serás un blanco fácil.</p>

            <h3>La Opción Norte (Sierra de Guadarrama)</h3>
            <p>Ruta natural de huida hacia el agua y orografía difícil. Caminar es tu mejor opción.</p>
            <ul>
                <li><strong>Vías del Tren:</strong> Sigue las vías de Cercanías hacia Colmenar Viejo / Soto del Real a pie. Son planas, directas y evitan carreteras principales bloqueadas. Ten cuidado en túneles y puentes.</li>
                <li><strong>Carril Bici M-607:</strong> Autopista de salida excelente para bicicletas hasta Colmenar, separada del tráfico principal.</li>
                <li><strong>Cañadas Reales:</strong> Caminos de ganado protegidos por ley que cruzan la ciudad (Cañada Real Galiana, etc.). Suelen evitar centros urbanos densos y conectan con el campo directamente.</li>
            </ul>

            <h3>Peligros Geográficos</h3>
            <p>Evita los puentes grandes sobre el Manzanares si hay alerta de bombardeo (son objetivos). Cruza por el cauce (zonas renaturalizadas de Madrid Río) si el río está bajo.</p>
        `
    },
    {
        id: 'water_points',
        category: 'geografia',
        icon: 'fa-map-location-dot',
        title: 'Mapa de Recursos Hídricos',
        summary: 'Puntos de agua naturales y artificiales en la Comunidad.',
        content: `
            <h3>Dentro de la Ciudad</h3>
            <ul>
                <li><strong>Parque del Retiro:</strong> Tiene pozos y aljibes antiguos de mantenimiento, pero estará militarizado o saturado de gente. El estanque no es potable.</li>
                <li><strong>Casa de Campo:</strong> El Lago es agua estancada (no beber). Busca los arroyos (Meaques) más arriba, cerca de la tapia o zonas boscosas, aunque requieren filtrado intenso.</li>
            </ul>

            <h3>Fuera de la Ciudad</h3>
            <ul>
                <li><strong>Rio Lozoya (Norte):</strong> La mejor agua de Madrid. Presas de El Atazar, Riosequillo. Es el principal suministro, será un objetivo estratégico defendido.</li>
                <li><strong>Manantiales Sierra:</strong> Fuenfría (Cercedilla), Fuente del Retén. Agua pura y fría que baja directamente de la montaña. Son puntos clave de reabastecimiento.</li>
            </ul>
        `
    },

    // --- SALUD ---
    {
        id: 'first_aid',
        category: 'salud',
        icon: 'fa-briefcase-medical',
        title: 'Primeros Auxilios Tácticos (IFAK)',
        summary: 'Tratamiento de hemorragias masivas y traumas de guerra.',
        content: `
            <p>En 2035, las ambulancias no vendrán. Tú eres el médico de tu grupo. Debes actuar rápido.</p>
            <h3>Protocolo MAR (Masive bleeding, Airway, Respiration)</h3>
            <ol>
                <li><strong>Hemorragia Masiva (Mata en 3 min):</strong> Si hay sangre roja brillante a chorro (arterial), pon un <strong>Torniquete CAT</strong> alto y apretado en la extremidad. No lo quites bajo ningún concepto. Duele muchísimo, es normal. Si no tienes torniquete, presiona la herida con fuerza total.</li>
                <li><strong>Vía Aérea:</strong> Si está inconsciente, ponlo de lado (posición lateral de seguridad) para que no se ahogue con su lengua o vómito. Mantén el cuello alineado.</li>
                <li><strong>Respiración:</strong> Busca heridas en el pecho (entrada y salida). Si hay un agujero que "silba" al respirar (neumotórax), tápalo con un plástico pegado con cinta por 3 lados (Parche oclusivo) o usa tu mano si no hay otra cosa. El aire debe salir pero no entrar.</li>
            </ol>
        `
    },
    {
        id: 'dental_care',
        category: 'salud',
        icon: 'fa-tooth',
        title: 'Odontología de Supervivencia',
        summary: 'Cómo tratar infecciones dentales sin dentista.',
        content: `
            <h3>Un dolor incapacitante</h3>
            <p>Un dolor de muelas te dejará fuera de combate, sin poder comer ni dormir, reduciendo tu capacidad de supervivencia y alerta a cero. Una infección dental puede pasar a la sangre y matarte.</p>

            <h3>Kit Dental de Emergencia</h3>
            <ul>
                <li><strong>Aceite de Clavo (Esencia):</strong> El anestésico dental más potente de la naturaleza. Empapa un algodón y ponlo directamente en la caries o encía. Calma el dolor casi al instante.</li>
                <li><strong>Pasta de relleno temporal:</strong> Venden kits en farmacias para tapar empastes caídos. Si no tienes, usa cera de ortodoncia o incluso cera de vela (muy temporal) para evitar que entre aire y comida en el nervio expuesto.</li>
                <li><strong>Extracción:</strong> ÚLTIMO RECURSO. El riesgo de infección y hemorragia es altísimo. Solo si el diente está muy suelto y la infección es grave. Desinfecta todo mucho.</li>
            </ul>
        `
    },
    {
        id: 'psych_isolation',
        category: 'salud',
        icon: 'fa-brain',
        title: 'Psicología del Asedio',
        summary: 'Mantener la cordura en encierros prolongados.',
        content: `
            <h3>El enemigo interior</h3>
            <p>El aburrimiento y la incertidumbre destruyen la moral más rápido que el hambre. En un refugio, la depresión lleva a la inacción y la muerte por negligencia.</p>

            <h3>Estrategias de Cordura</h3>
            <ul>
                <li><strong>Rutinas Estrictas:</strong> Levántate, lávate (aunque sea con un trapo húmedo), come y "trabaja" a horas fijas. El caos horario desorienta y deprime.</li>
                <li><strong>Roles:</strong> Asigna tareas a todos, incluso a los niños. "Tú eres el encargado del inventario", "Tú vigilas la radio", "Tú limpias". Sentirse útil es vital para la autoestima.</li>
                <li><strong>Información Controlada:</strong> No escuches la radio de noticias 24h. Solo a horas fijas (ej: 09:00 y 21:00). El flujo constante de malas noticias (doomscrolling analógico) genera ansiedad paralizante.</li>
            </ul>
        `
    },
    {
        id: 'corpse_management',
        category: 'salud',
        icon: 'fa-skull-crossbones',
        title: 'Gestión de Fallecidos',
        summary: 'Protocolos sanitarios duros pero necesarios.',
        content: `
            <div class="warning-box">
                <strong>ADVERTENCIA:</strong> Contenido sensible.
            </div>
            <p>Si alguien fallece en el refugio y no se puede salir (bombardeo continuo/NBQ) para enterrarlo:</p>
            <ol>
                <li><strong>Mover el cuerpo:</strong> Sacarlo de la zona habitable inmediatamente a una habitación fría o balcón (si es seguro) para retrasar la descomposición.</li>
                <li><strong>Envolver:</strong> Usar sábanas o plásticos. Tapar orificios (boca, nariz) para evitar salida de fluidos.</li>
                <li><strong>Identificación:</strong> Escribir nombre y fecha en el envoltorio y dejar el DNI o documento con el cuerpo.</li>
                <li><strong>No enterrar temporalmente:</strong> Si no puedes cavar profundo (1.5m), los animales lo desenterrarán. Es mejor mantenerlo aislado y frío hasta que los servicios de emergencia (si existen) o una tregua permitan el entierro digno y seguro.</li>
            </ol>
        `
    },

    // --- HERRAMIENTAS MÓVILES ---
    {
        id: 'offline_maps',
        category: 'herramientas',
        icon: 'fa-map',
        title: 'Mapas Offline: Tu salvavidas',
        summary: 'Navegación sin internet ni señal de telefonía.',
        content: `
            <h3>GPS sin Datos</h3>
            <p>El GPS de tu móvil funciona recibiendo señales de satélites, NO necesita internet. Pero necesitas los mapas descargados previamente.</p>
            
            <h3>Apps Recomendadas</h3>
            <ul>
                <li><strong>Organic Maps / OSMAnd:</strong> Basadas en OpenStreetMap. Son ligeras, detalladas e incluyen fuentes de agua, senderos y baños públicos. Descarga los mapas de España YA.</li>
                <li><strong>Google Maps Offline:</strong> Descarga tu zona local. Caducan al mes, así que requieren actualización, por lo que son menos fiables a largo plazo que OSM.</li>
            </ul>
            <p><strong>Consejo:</strong> Lleva un mapa en papel plastificado como backup. La tecnología falla, el papel no.</p>
        `
    },
    {
        id: 'radio_comms',
        category: 'herramientas',
        icon: 'fa-walkie-talkie',
        title: 'Comunicación Alternativa',
        summary: 'Cómo comunicarte cuando cayó WhatsApp y la red celular.',
        content: `
            <h3>Radio FM en el Móvil</h3>
            <p>Muchos Android tienen chip FM. Necesitas auriculares con cable (hacen de antena). Es vital para recibir noticias oficiales o de emergencia.</p>

            <h3>Redes Mesh (Sin Internet)</h3>
            <p>Apps que usan el Bluetooth y WiFi de tu móvil para crear una red con otros móviles cercanos, saltando de uno a otro.</p>
            <ul>
                <li><strong>Briar:</strong> Mensajería segura P2P/Tor. Funciona por Bluetooth/WiFi local.</li>
                <li><strong>Meshtastic:</strong> Requiere hardware extra (pequeñas radios LoRa), pero permite chat a kilómetros sin red móvil.</li>
            </ul>
        `
    },
    {
        id: 'battery_saver',
        category: 'herramientas',
        icon: 'fa-battery-quarter',
        title: 'Gestión Extrema de Batería',
        summary: 'Extiende la vida de tu móvil de 1 día a 1 semana.',
        content: `
            <h3>Modo Avión SIEMPRE</h3>
            <p>La búsqueda de señal gasta el 80% de la batería. Si no hay red, pon modo avión. Activa solo GPS o Bluetooth cuando lo necesites.</p>

            <h3>Configuración de Supervivencia</h3>
            <ul>
                <li><strong>Brillo:</strong> Al mínimo.</li>
                <li><strong>Apps en segundo plano:</strong> Cierra todo. Restringe batería a todas las apps.</li>
                <li><strong>Calor/Frío:</strong> Mantén el móvil pegado a tu cuerpo en invierno (el frío descarga la batería) y a la sombra en verano.</li>
                <li><strong>Apagar:</strong> Si no lo usas, apágalo. Enciéndelo solo 5 min cada hora para chequear.</li>
            </ul>
        `
    },
    {
        id: 'info_storage',
        category: 'herramientas',
        icon: 'fa-server',
        title: 'Biblioteca Digital (Kiwix)',
        summary: 'Tener la Wikipedia y manuales médicos offline.',
        content: `
            <h3>Kiwix: Internet en un archivo</h3>
            <p>La app <strong>Kiwix</strong> permite descargar "zim files" que contienen webs enteras.</p>
            <ul>
                <li><strong>Wikipedia (sin imágenes):</strong> Ocupa unos 40GB. Todo el conocimiento humano en tu bolsillo.</li>
                <li><strong>Wikimedicina:</strong> Guías médicas completas offline.</li>
                <li><strong>Manuales de supervivencia:</strong> Descarga PDFs de reparación, nudos, agricultura, etc.</li>
            </ul>
            <p>Convierte tu viejo móvil en una biblioteca de Alejandría indestructible.</p>
        `
    }
];
