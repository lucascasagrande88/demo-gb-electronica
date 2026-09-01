/* ===========================================================================
   GB Ingeniería Electrónica — Catálogo de ejemplo (DEMO)
   Nombres reales de componentes según lista oficial de GB.
   Campos: id, n (nombre), d (descripción), p (precio ARS), cat, unit, active
   =========================================================================== */
window.DV_DATA_VERSION = "2026-09-01-2";
window.DV_DEFAULT_PRODUCTS = [

  // ——— Componentes ———
  { id:"transistor-2n2222a", n:"Transistor 2N 2222A",         d:"NPN silicio, uso general, propósito amplificación y switching.",  p:350,   cat:"componentes", unit:"Por unidad", active:true },
  { id:"transistor-bc547",   n:"Transistor BC 547",           d:"NPN pequeña señal, TO-92. Uso general en amplificadores.",         p:280,   cat:"componentes", unit:"Por unidad", active:true },
  { id:"transistor-bc548",   n:"Transistor BC 548",           d:"NPN pequeña señal, bajo ruido. Complemento del BC 558.",          p:280,   cat:"componentes", unit:"Por unidad", active:true },
  { id:"transistor-2n3055",  n:"Transistor 2N 3055",          d:"NPN alta potencia, 15A 60V 115W. Clásico de fuentes y amplif.",   p:1200,  cat:"componentes", unit:"Por unidad", active:true },
  { id:"transistor-tip41c",  n:"Transistor TIP 41C",          d:"NPN potencia media, complementario del TIP 42C.",                 p:850,   cat:"componentes", unit:"Por unidad", active:true },
  { id:"transistor-bd139",   n:"Transistor BD 139",           d:"NPN, 80V 1.5A. Muy usado en etapas de potencia de audio.",       p:550,   cat:"componentes", unit:"Por unidad", active:true },
  { id:"mosfet-irf540",      n:"MOSFET IRF 540",              d:"N-channel, 100V 28A. Switching y control de motores.",            p:1500,  cat:"componentes", unit:"Por unidad", active:true },
  { id:"mosfet-irf3205",     n:"MOSFET IRF 3205",             d:"N-channel, 55V 110A. Excelente para PWM y cargas pesadas.",       p:1800,  cat:"componentes", unit:"Por unidad", active:true },
  { id:"diodo-1n4007",       n:"Diodo 1N 4007",               d:"Rectificador 1A 1000V. El más versátil para fuentes de poder.",  p:180,   cat:"componentes", unit:"Por unidad", active:true },
  { id:"diodo-1n4148",       n:"Diodo 1N 4148",               d:"Señal, alta velocidad, 75V 200mA. Switching y lógica.",          p:150,   cat:"componentes", unit:"Por unidad", active:true },
  { id:"triac-bt136",        n:"TRIAC BT 136/600",            d:"4A 600V, TO-220. Control de cargas AC, dimmers, motores.",       p:900,   cat:"componentes", unit:"Por unidad", active:true },
  { id:"triac-bta12",        n:"TRIAC BTA 12/600",            d:"12A 600V, TO-220. Para cargas medianas en 220V.",                p:1400,  cat:"componentes", unit:"Por unidad", active:true },
  { id:"optocop-pc817",      n:"Optoacoplador PC 817",        d:"1 canal, CTR 80–160%. Aislación galvánica entre etapas.",        p:350,   cat:"componentes", unit:"Por unidad", active:true },
  { id:"optocop-moc3021",    n:"Optoacoplador MOC 3021",      d:"Para disparo de TRIACs/SCRs. Con cero cruce.",                  p:600,   cat:"componentes", unit:"Por unidad", active:true },
  { id:"ci-ne555",           n:"CI NE 555",                   d:"Temporizador clásico. Astable, monoestable, PWM.",               p:400,   cat:"componentes", unit:"Por unidad", active:true },
  { id:"ci-lm741",           n:"CI LM 741",                   d:"Amplificador operacional clásico, DIP-8.",                       p:400,   cat:"componentes", unit:"Por unidad", active:true },
  { id:"ci-lm358",           n:"CI LM 358",                   d:"Doble op-amp, funciona desde 3V. Muy popular en proyectos.",    p:450,   cat:"componentes", unit:"Por unidad", active:true },
  { id:"ci-lm324",           n:"CI LM 324",                   d:"Cuádruple op-amp, DIP-14. Comparadores y filtros.",             p:500,   cat:"componentes", unit:"Por unidad", active:true },
  { id:"ci-tl071",           n:"CI TL 071",                   d:"Op-amp JFET bajo ruido. Ideal para audio de calidad.",          p:500,   cat:"componentes", unit:"Por unidad", active:true },
  { id:"ci-tl072",           n:"CI TL 072",                   d:"Doble op-amp JFET bajo ruido. Muy usado en preamplificadores.", p:600,   cat:"componentes", unit:"Por unidad", active:true },
  { id:"reg-7805",           n:"Regulador 78L05 / 7805",      d:"5V fijo positivo. Alimentación de lógica TTL y microcontroladores.", p:450, cat:"componentes", unit:"Por unidad", active:true },
  { id:"reg-7812",           n:"Regulador 7812",              d:"12V fijo positivo. Para fuentes lineales y circuitos auxiliares.", p:500, cat:"componentes", unit:"Por unidad", active:true },
  { id:"reg-lm317",          n:"Regulador LM 317T",           d:"Ajustable 1.25–37V 1.5A. El regulador variable más versátil.",  p:700,   cat:"componentes", unit:"Por unidad", active:true },
  { id:"resist-pack",        n:"Resistores 1/4W surtidos",    d:"Pack con los valores más utilizados (1Ω a 1MΩ).",              p:3500,  cat:"componentes", unit:"Pack x 100", active:true },
  { id:"capac-elec-pack",    n:"Capacitores electrolíticos",  d:"Blister variado de 10µF a 1000µF, 25V a 50V.",                p:4200,  cat:"componentes", unit:"Pack x 50",  active:true },

  // ——— Audio ———
  { id:"ci-tda2030",         n:"CI TDA 2030A",                d:"Amplificador de audio 18W RMS. Clásico de amplificadores caseros.", p:1200, cat:"audio", unit:"Por unidad", active:true },
  { id:"ci-tda2050",         n:"CI TDA 2050",                 d:"Amplificador 32W RMS, THD muy bajo. Alta fidelidad.",             p:1500,  cat:"audio", unit:"Por unidad", active:true },
  { id:"ci-la4440",          n:"CI LA 4440",                  d:"Doble amplificador 6W o mono puente 19W. Con protección thermal.", p:1300, cat:"audio", unit:"Por unidad", active:true },
  { id:"ci-ne5532",          n:"CI NE 5532",                  d:"Doble op-amp de bajo ruido para audio. Estándar de la industria.", p:700,  cat:"audio", unit:"Por unidad", active:true },
  { id:"parlante-4-8ohm",    n:"Parlante 4\" 8Ω 30W",        d:"Woofer de reposición para equipos medianos.",                    p:8900,  cat:"audio", unit:"Por unidad", active:true },
  { id:"tweeter-piezo",      n:"Tweeter piezoeléctrico",      d:"Alta sensibilidad, sin crossover requerido.",                    p:2800,  cat:"audio", unit:"Por unidad", active:true },
  { id:"potenciometro-100k", n:"Potenciómetro logarítmico 100K", d:"Para control de volumen. Con spline.",                      p:900,   cat:"audio", unit:"Por unidad", active:true },
  { id:"jack-35-estereo",    n:"Jack 3.5mm estéreo hembra",   d:"Para montaje en panel o placa.",                                p:450,   cat:"audio", unit:"Por unidad", active:true },

  // ——— Iluminación LED ———
  { id:"led-5mm-rojo",       n:"LED 5mm rojo (x100)",         d:"Alto brillo, 2.0V 20mA. Para proyectos e indicadores.",         p:2200,  cat:"iluminacion", unit:"Pack x 100", active:true },
  { id:"led-5mm-verde",      n:"LED 5mm verde (x100)",        d:"Alto brillo, 2.2V 20mA.",                                       p:2200,  cat:"iluminacion", unit:"Pack x 100", active:true },
  { id:"led-5mm-azul",       n:"LED 5mm azul (x100)",         d:"Alto brillo, 3.2V 20mA.",                                       p:2800,  cat:"iluminacion", unit:"Pack x 100", active:true },
  { id:"tira-led-blanca",    n:"Tira LED 5050 blanco cálido", d:"12V, 60 LEDs/m, IP20. Rollo de 5 metros.",                     p:9800,  cat:"iluminacion", unit:"Rollo x 5 m", active:true },
  { id:"tira-led-rgb",       n:"Tira LED 5050 RGB",           d:"12V, 60 LEDs/m con control remoto IR incluido.",               p:11500, cat:"iluminacion", unit:"Rollo x 5 m", active:true },
  { id:"driver-led-12w",     n:"Driver LED 12W",              d:"Fuente constante para paneles LED, 300mA.",                    p:3200,  cat:"iluminacion", unit:"Por unidad", active:true },
  { id:"lampara-led-9w",     n:"Lámpara LED 9W E27",          d:"Reemplazo directo de incandescente, luz fría o cálida.",       p:1600,  cat:"iluminacion", unit:"Por unidad", active:true },
  { id:"reflector-50w",      n:"Reflector LED 50W",           d:"Para exterior, IP65, temperatura de color 6500K.",             p:11500, cat:"iluminacion", unit:"Por unidad", active:true },

  // ——— Cables ———
  { id:"cable-unipolar-15",  n:"Cable unipolar 1.5mm",        d:"Normalizado colores, se vende por metro o en rollo de 100m.",  p:850,   cat:"cables", unit:"Por metro", active:true },
  { id:"cable-unipolar-25",  n:"Cable unipolar 2.5mm",        d:"Para circuitos de mayor corriente. Norma IRAM.",               p:1200,  cat:"cables", unit:"Por metro", active:true },
  { id:"utp-cat5e",          n:"Cable UTP Cat 5e",            d:"Redes y datos, interior. Se corta a medida.",                  p:480,   cat:"cables", unit:"Por metro", active:true },
  { id:"utp-cat6",           n:"Cable UTP Cat 6",             d:"Redes gigabit, interior. Se corta a medida.",                 p:650,   cat:"cables", unit:"Por metro", active:true },
  { id:"cable-audio-par",    n:"Cable audio 2×0.5mm mallado", d:"Par trenzado con malla, para señal de audio y video.",        p:480,   cat:"cables", unit:"Por metro", active:true },
  { id:"termocontr-variado", n:"Termocontraíble surtido",     d:"Varios diámetros, negro. Para protección de empalmes.",       p:2800,  cat:"cables", unit:"Pack surtido", active:true },
  { id:"precintos-200",      n:"Precintos 200mm nylon",       d:"Organizadores de cables, color negro.",                       p:2400,  cat:"cables", unit:"Pack x 100", active:true },

  // ——— Soldadura ———
  { id:"soldador-40w",       n:"Soldador lápiz 40W",          d:"Punta cerámica reemplazable. Ideal para electrónica de TH.",  p:7900,  cat:"soldadura", unit:"Por unidad", active:true },
  { id:"estacion-60w",       n:"Estación de soldado 60W",     d:"Temperatura regulable 200–450°C, display digital.",           p:38500, cat:"soldadura", unit:"Por unidad", active:true },
  { id:"estano-60-40",       n:"Estaño 60/40 ø1mm",          d:"Rollo 100g con flux. El más usado en electrónica.",           p:6800,  cat:"soldadura", unit:"Rollo x 100 g", active:true },
  { id:"malla-desoldar",     n:"Malla desoldadora 2mm",       d:"Tira de cobre trenzado para retirar estaño.",                p:1800,  cat:"soldadura", unit:"Por unidad", active:true },
  { id:"flux-pasta",         n:"Pasta de flux",               d:"Para mejorar la soldabilidad en SMD y TH.",                  p:3200,  cat:"soldadura", unit:"Por unidad", active:true },
  { id:"pistola-calor",      n:"Pistola de aire caliente",    d:"Para SMD, termocontraíbles y BGA. Con boquillas.",           p:45900, cat:"soldadura", unit:"Por unidad", active:true },

  // ——— Herramientas ———
  { id:"alicate-corte",      n:"Alicate de corte diagonal",   d:"Mango aislado 1000V. Para cortar pines de componentes.",      p:5400,  cat:"herramientas", unit:"Por unidad", active:true },
  { id:"pinza-punta",        n:"Pinza punta fina antiestática",d:"Para SMD y trabajo de precisión.",                          p:3600,  cat:"herramientas", unit:"Por unidad", active:true },
  { id:"destorni-set",       n:"Set destornilladores 32 en 1",d:"Puntas de precisión para electrónica, plástico y Phillips.", p:8900,  cat:"herramientas", unit:"Juego", active:true },
  { id:"pelacables-auto",    n:"Pelacables automático",       d:"Ajuste de calibre 0.5–6mm. Para cables de redes y electricidad.", p:6200, cat:"herramientas", unit:"Por unidad", active:true },
  { id:"crimpeadora-rj45",   n:"Crimpeadora RJ45 / RJ11",     d:"Para armar fichas de red y telefónicas.",                    p:9700,  cat:"herramientas", unit:"Por unidad", active:true },
  { id:"pulsera-antiestatica",n:"Pulsera antiestática",       d:"Con cable espiralado y toma a tierra. Para SMD.",            p:2200,  cat:"herramientas", unit:"Por unidad", active:true },

  // ——— Fuentes y Transformadores ———
  { id:"fuente-12v5a",       n:"Fuente switching 12V 5A",     d:"Carcasa metálica. Para tiras LED, routers y CCTV.",          p:9800,  cat:"fuentes", unit:"Por unidad", active:true },
  { id:"fuente-12v10a",      n:"Fuente switching 12V 10A",    d:"120W. Para sistemas de alarmas e iluminación LED.",          p:16500, cat:"fuentes", unit:"Por unidad", active:true },
  { id:"fuente-24v5a",       n:"Fuente switching 24V 5A",     d:"Para automatismos y equipos industriales.",                  p:12900, cat:"fuentes", unit:"Por unidad", active:true },
  { id:"trafo-12-12v",       n:"Transformador 12+12V 3A",     d:"Bobinado de baja frecuencia, uso general.",                 p:9800,  cat:"fuentes", unit:"Por unidad", active:true },
  { id:"fuente-banco",       n:"Fuente regulable 0–30V 5A",   d:"De banco con display digital. Para laboratorio.",           p:89900, cat:"fuentes", unit:"Por unidad", active:true },
  { id:"inversor-300w",      n:"Inversor 12V → 220V 300W",    d:"Onda modificada. Para uso en vehículos.",                   p:28900, cat:"fuentes", unit:"Por unidad", active:true },

  // ——— Medición ———
  { id:"multimetro-dt830",   n:"Multímetro digital DT-830",   d:"DC/AC, resistencia, transistores, diodos y buzzer.",         p:8900,  cat:"medicion", unit:"Por unidad", active:true },
  { id:"multimetro-fluke",   n:"Multímetro profesional",      d:"True RMS, capacitancia, temperatura. Categoría CAT III.",  p:68900, cat:"medicion", unit:"Por unidad", active:true },
  { id:"pinza-amperometrica",n:"Pinza amperométrica AC/DC",   d:"Hasta 600A. Con gancho y sonda de temperatura.",           p:34900, cat:"medicion", unit:"Por unidad", active:true },
  { id:"termometro-ir",      n:"Termómetro infrarrojo",       d:"−50 a +380°C. Sin contacto, con puntero láser.",           p:18500, cat:"medicion", unit:"Por unidad", active:true },
  { id:"tester-red-rj45",    n:"Tester de cables RJ45 / RJ11",d:"Verificación de continuidad y mapa de pines.",             p:8700,  cat:"medicion", unit:"Por unidad", active:true },

  // ——— Seguridad Electrónica ———
  { id:"sensor-pir",         n:"Sensor PIR de movimiento",    d:"Ángulo 120°, alcance 12m, 12V. Para interiores.",           p:5200,  cat:"seguridad", unit:"Por unidad", active:true },
  { id:"sensor-magnetico",   n:"Sensor magnético de apertura",d:"Para puertas y ventanas. Blister x 2 unidades.",           p:1600,  cat:"seguridad", unit:"Blister x 2", active:true },
  { id:"sirena-exterior-30w",n:"Sirena exterior autoalimentada",d:"30W, IP55. Con batería de respaldo interna.",            p:12800, cat:"seguridad", unit:"Por unidad", active:true },
  { id:"kit-alarma",         n:"Kit de alarma domiciliaria",  d:"Central + control remoto + sensor PIR + sensor de apertura.", p:68900, cat:"seguridad", unit:"Juego", active:true },
  { id:"portero-electrico",  n:"Portero eléctrico con audio", d:"Para una vivienda. Con fuente incluida.",                  p:24900, cat:"seguridad", unit:"Por unidad", active:true },

  // ——— Pilas y Baterías ———
  { id:"pila-aa-alcalina",   n:"Pila alcalina AA",            d:"Larga duración, sin mercurio.",                             p:2600,  cat:"pilas", unit:"Pack x 5",  active:true },
  { id:"pila-9v",            n:"Pila 9V alcalina",            d:"Para circuitos de prueba y multímetros.",                   p:1900,  cat:"pilas", unit:"Por unidad", active:true },
  { id:"bat-18650",          n:"Batería 18650 Li-Ion 3.7V",   d:"2600mAh recargable. Para linternas y proyectos.",          p:4800,  cat:"pilas", unit:"Por unidad", active:true },
  { id:"bat-gel-12v7ah",     n:"Batería gel 12V 7Ah",         d:"Para UPS, alarmas y sistemas solares.",                    p:21900, cat:"pilas", unit:"Por unidad", active:true },
  { id:"cargador-aa-aaa",    n:"Cargador pilas AA / AAA",     d:"Con corte automático, 4 ranuras.",                         p:12900, cat:"pilas", unit:"Por unidad", active:true },
  { id:"pila-cr2032",        n:"Pila botón CR2032 3V",        d:"Litio, para memorias y relojes de PC.",                   p:2200,  cat:"pilas", unit:"Pack x 5",  active:true },

  // ——— Conectores y Fichas ———
  { id:"borne-2v-10u",       n:"Borne atornillable 2 vías",   d:"Regleta para PCB o riel. Paso 5.08mm.",                    p:3400,  cat:"conectores", unit:"Pack x 10", active:true },
  { id:"plug-21mm",          n:"Plug de alimentación 2.1mm",  d:"Macho + hembra para DC 5.5/2.1mm.",                       p:2600,  cat:"conectores", unit:"Pack x 10", active:true },
  { id:"ficha-usb-a",        n:"Ficha USB tipo A hembra",     d:"Para montaje en panel, 4 pines.",                          p:2900,  cat:"conectores", unit:"Pack x 10", active:true },
  { id:"ficha-usb-b",        n:"Ficha USB tipo B hembra",     d:"Para PCB. Tipo impresora.",                                p:2600,  cat:"conectores", unit:"Pack x 10", active:true },
  { id:"jack-dc-panel",      n:"Jack DC 5.5mm para panel",    d:"Conector de alimentación hembra, con tuerca.",            p:1800,  cat:"conectores", unit:"Pack x 10", active:true },
  { id:"dupont-set",         n:"Cables Dupont hembra-hembra", d:"20cm, 40 colores. Para protoboard y Arduino.",            p:2800,  cat:"conectores", unit:"Pack x 40", active:true },

  // ——— Arduino y Módulos ———
  { id:"arduino-uno-r3",     n:"Placa compatible UNO R3",     d:"ATmega328P, USB incluido. Totalmente compatible con IDE.", p:18900, cat:"arduino", unit:"Por unidad", active:true },
  { id:"arduino-nano",       n:"Placa compatible Nano",       d:"ATmega328P, compacto. Con o sin pines soldados.",         p:14900, cat:"arduino", unit:"Por unidad", active:true },
  { id:"esp8266-nodemcu",    n:"Módulo ESP8266 NodeMCU",      d:"WiFi integrado, programable por Arduino IDE.",            p:12900, cat:"arduino", unit:"Por unidad", active:true },
  { id:"esp32-devkit",       n:"Módulo ESP32 DevKit",         d:"WiFi + Bluetooth, 38 pines. Para IoT.",                  p:18900, cat:"arduino", unit:"Por unidad", active:true },
  { id:"sensor-dht22",       n:"Sensor DHT22 temperatura",    d:"Temperatura y humedad de alta precisión.",                p:4800,  cat:"arduino", unit:"Por unidad", active:true },
  { id:"oled-096",           n:"Display OLED 0.96\" I2C",     d:"128×64 px, SSD1306. Para Arduino/ESP.",                  p:7400,  cat:"arduino", unit:"Por unidad", active:true },
  { id:"rele-4ch-5v",        n:"Módulo relé 4 canales 5V",    d:"Optoacoplado, activo bajo. Para automatismos.",          p:6800,  cat:"arduino", unit:"Por unidad", active:true },
  { id:"protoboard-830",     n:"Protoboard 830 puntos",        d:"Con adhesivo, compatible con jumpers Dupont.",           p:5600,  cat:"arduino", unit:"Por unidad", active:true }

];
