/* ===========================================================================
   GB Ingeniería Electrónica — Catálogo de ejemplo (DEMO)
   Productos, precios y presentaciones GENÉRICOS para mostrar el sistema.
   El ícono se toma del rubro (config.js) salvo que se cargue foto en el panel.
   Campos: id, n (nombre), d (descripción), p (precio ARS), cat, unit, active
   =========================================================================== */
window.DV_DATA_VERSION = "2026-09-01-1";
window.DV_DEFAULT_PRODUCTS = [
  // ——— Componentes ———
  { id:"resistencias-14w", n:"Resistencias 1/4W (surtido)", d:"Set variado de valores más usados.", p:3500, cat:"componentes", unit:"Caja x 100", active:true },
  { id:"capacitores-elec",  n:"Capacitores electrolíticos", d:"Blister variado 10–1000 µF.",        p:4200, cat:"componentes", unit:"Pack x 50", active:true },
  { id:"diodos-1n4007",     n:"Diodos 1N4007",              d:"Rectificadores de uso general.",       p:2800, cat:"componentes", unit:"Pack x 50", active:true },
  { id:"transistores-bc548",n:"Transistores BC548",         d:"NPN, propósito general.",              p:3100, cat:"componentes", unit:"Pack x 50", active:true },
  { id:"rele-12v",          n:"Relé 12V 10A",               d:"Para automatismos y placas.",          p:1500, cat:"componentes", unit:"Por unidad", active:true },
  { id:"led-5mm",           n:"LED 5mm (surtido)",          d:"Rojo, verde, amarillo y azul.",        p:2600, cat:"componentes", unit:"Pack x 100", active:true },

  // ——— Audio ———
  { id:"parlante-6",        n:"Parlante 6″ 60W",            d:"Woofer de reposición.",                p:12900, cat:"audio", unit:"Por unidad", active:true },
  { id:"tweeter-piezo",     n:"Tweeter piezoeléctrico",     d:"Agudos, alta sensibilidad.",           p:3400,  cat:"audio", unit:"Por unidad", active:true },
  { id:"microfono-din",     n:"Micrófono dinámico",         d:"Con cable, uso general.",              p:8600,  cat:"audio", unit:"Por unidad", active:true },
  { id:"amp-2x15",          n:"Amplificador 2×15W",         d:"Módulo clase D.",                      p:6900,  cat:"audio", unit:"Por unidad", active:true },
  { id:"bafle-8",           n:"Bafle amplificado 8″",       d:"Portátil con batería.",                p:42900, cat:"audio", unit:"Por unidad", active:true },

  // ——— Iluminación LED ———
  { id:"lampara-9w",        n:"Lámpara LED 9W E27",         d:"Luz fría o cálida.",                   p:1600,  cat:"iluminacion", unit:"Caja x 10", active:true },
  { id:"tira-rgb",          n:"Tira LED 5050 RGB 5m",       d:"Rollo con control remoto.",            p:9800,  cat:"iluminacion", unit:"Rollo x 5 m", active:true },
  { id:"dicroica-7w",       n:"Dicroica LED 7W GU10",       d:"Bajo consumo.",                        p:2100,  cat:"iluminacion", unit:"Por unidad", active:true },
  { id:"tubo-18w",          n:"Tubo LED 18W 120cm",         d:"Reemplazo directo.",                   p:3900,  cat:"iluminacion", unit:"Por unidad", active:true },
  { id:"reflector-50w",     n:"Reflector LED 50W",          d:"Exterior IP65.",                       p:11500, cat:"iluminacion", unit:"Por unidad", active:true },

  // ——— Cables ———
  { id:"utp-cat6",          n:"Cable UTP Cat 6",            d:"Interior, se corta a medida.",         p:650,   cat:"cables", unit:"Por metro", active:true },
  { id:"unipolar-15",       n:"Cable unipolar 1,5mm",       d:"Normalizado, rollo 100m.",             p:38900, cat:"cables", unit:"Rollo x 100 m", active:true },
  { id:"cable-audio",       n:"Cable de audio 2×0,50",      d:"Mallado, por metro.",                  p:480,   cat:"cables", unit:"Por metro", active:true },
  { id:"precintos-200",     n:"Precintos 200mm",            d:"Nylon negro.",                         p:2400,  cat:"cables", unit:"Pack x 100", active:true },
  { id:"cinta-helicoidal",  n:"Cinta helicoidal 12mm",      d:"Organizadora de cables, x2m.",         p:1900,  cat:"cables", unit:"Por unidad", active:true },

  // ——— Soldadura ———
  { id:"soldador-40w",      n:"Soldador lápiz 40W",         d:"Con punta cerámica.",                  p:7900,  cat:"soldadura", unit:"Por unidad", active:true },
  { id:"estacion-soldado",  n:"Estación de soldado 60W",    d:"Temperatura regulable.",               p:38500, cat:"soldadura", unit:"Por unidad", active:true },
  { id:"estano-6040",       n:"Estaño 60/40 1mm",           d:"Rollo 100g con flux.",                 p:6800,  cat:"soldadura", unit:"Rollo x 100 g", active:true },
  { id:"pistola-calor",     n:"Pistola de aire caliente",   d:"Para SMD y termocontraíbles.",         p:45900, cat:"soldadura", unit:"Por unidad", active:true },
  { id:"malla-desoldar",    n:"Malla desoldadora 2mm",      d:"Retira estaño con facilidad.",         p:1800,  cat:"soldadura", unit:"Por unidad", active:true },

  // ——— Herramientas ———
  { id:"alicate-corte",     n:"Alicate de corte",           d:"Diagonal, mango aislado.",             p:5400,  cat:"herramientas", unit:"Por unidad", active:true },
  { id:"destor-precision",  n:"Set destornilladores 32en1", d:"Precisión, para electrónica.",         p:8900,  cat:"herramientas", unit:"Juego / Set", active:true },
  { id:"pelacables",        n:"Pelacables automático",      d:"Ajuste de calibre.",                   p:6200,  cat:"herramientas", unit:"Por unidad", active:true },
  { id:"crimpeadora-rj45",  n:"Crimpeadora RJ45",           d:"Para fichas de red.",                  p:9700,  cat:"herramientas", unit:"Por unidad", active:true },
  { id:"pinza-punta",       n:"Pinza punta fina",           d:"Antiestática.",                        p:3600,  cat:"herramientas", unit:"Por unidad", active:true },

  // ——— Fuentes y Transformadores ———
  { id:"fuente-12v5a",      n:"Fuente switching 12V 5A",    d:"Metálica, para tiras LED/CCTV.",       p:9800,  cat:"fuentes", unit:"Por unidad", active:true },
  { id:"cargador-usb-3a",   n:"Cargador USB 3A",            d:"Carga rápida, 2 puertos.",             p:4200,  cat:"fuentes", unit:"Por unidad", active:true },
  { id:"trafo-1212",        n:"Transformador 12+12V 2A",    d:"Bobinado, uso general.",               p:7600,  cat:"fuentes", unit:"Por unidad", active:true },
  { id:"inversor-300w",     n:"Inversor 12V a 220V 300W",   d:"Onda modificada.",                     p:28900, cat:"fuentes", unit:"Por unidad", active:true },
  { id:"fuente-banco",      n:"Fuente regulable 0–30V 5A",  d:"De banco, con display.",               p:89900, cat:"fuentes", unit:"Por unidad", active:true },

  // ——— Medición ———
  { id:"multimetro",        n:"Multímetro digital",         d:"Con capacímetro y buzzer.",            p:14900, cat:"medicion", unit:"Por unidad", active:true },
  { id:"pinza-ampero",      n:"Pinza amperométrica",        d:"AC/DC hasta 600A.",                    p:34900, cat:"medicion", unit:"Por unidad", active:true },
  { id:"termometro-ir",     n:"Termómetro infrarrojo",      d:"-50 a 380 °C.",                        p:18500, cat:"medicion", unit:"Por unidad", active:true },
  { id:"punta-logica",      n:"Punta lógica",               d:"Diagnóstico digital.",                 p:5900,  cat:"medicion", unit:"Por unidad", active:true },
  { id:"tester-red",        n:"Tester de cables de red",    d:"RJ45 / RJ11.",                         p:8700,  cat:"medicion", unit:"Por unidad", active:true },

  // ——— Seguridad Electrónica ———
  { id:"sensor-pir",        n:"Sensor de movimiento PIR",   d:"Interior, 12V.",                       p:5200,  cat:"seguridad", unit:"Por unidad", active:true },
  { id:"sirena-30w",        n:"Sirena exterior 30W",        d:"Autoalimentada.",                      p:12800, cat:"seguridad", unit:"Por unidad", active:true },
  { id:"kit-alarma",        n:"Kit de alarma domiciliaria", d:"Central + control + sensor.",          p:68900, cat:"seguridad", unit:"Juego / Set", active:true },
  { id:"portero-electrico", n:"Portero eléctrico",          d:"Audio, 1 vivienda.",                   p:24900, cat:"seguridad", unit:"Por unidad", active:true },
  { id:"sensor-magnetico",  n:"Sensor magnético de abertura",d:"Puertas y ventanas.",                 p:1600,  cat:"seguridad", unit:"Blister x 2", active:true },

  // ——— Pilas y Baterías ———
  { id:"pila-aa",           n:"Pila alcalina AA",           d:"Larga duración.",                      p:2600,  cat:"pilas", unit:"Pack x 5", active:true },
  { id:"bat-18650",         n:"Batería recargable 18650",   d:"Litio 3,7V.",                          p:4800,  cat:"pilas", unit:"Por unidad", active:true },
  { id:"bat-gel-12v",       n:"Batería de gel 12V 7Ah",     d:"Para UPS y alarmas.",                  p:21900, cat:"pilas", unit:"Por unidad", active:true },
  { id:"pila-cr2032",       n:"Pila botón CR2032",          d:"Litio 3V.",                            p:2200,  cat:"pilas", unit:"Pack x 5", active:true },
  { id:"cargador-pilas",    n:"Cargador de pilas AA/AAA",   d:"Con corte automático.",                p:12900, cat:"pilas", unit:"Por unidad", active:true },

  // ——— Conectores y Fichas ———
  { id:"ficha-usb-a",       n:"Ficha USB tipo A",           d:"Para reparación.",                     p:2900,  cat:"conectores", unit:"Pack x 10", active:true },
  { id:"borne-2vias",       n:"Conector borne 2 vías",      d:"Regleta atornillable.",                p:3400,  cat:"conectores", unit:"Pack x 20", active:true },
  { id:"plug-21mm",         n:"Plug alimentación 2,1mm",    d:"Macho y hembra.",                      p:2600,  cat:"conectores", unit:"Pack x 10", active:true },
  { id:"adaptador-hdmi",    n:"Adaptador HDMI H-H",         d:"Chapado en oro.",                      p:3200,  cat:"conectores", unit:"Por unidad", active:true },
  { id:"bornera-ceramica",  n:"Bornera cerámica",           d:"Para alta temperatura.",               p:1900,  cat:"conectores", unit:"Pack x 5", active:true },

  // ——— Arduino y Módulos ———
  { id:"uno-r3",            n:"Placa compatible UNO R3",    d:"Con cable USB incluido.",              p:18900, cat:"arduino", unit:"Por unidad", active:true },
  { id:"dht11",             n:"Módulo sensor DHT11",        d:"Temperatura y humedad.",               p:3200,  cat:"arduino", unit:"Por unidad", active:true },
  { id:"kit-37en1",         n:"Kit de sensores 37 en 1",    d:"Para prototipos.",                     p:42900, cat:"arduino", unit:"Juego / Set", active:true },
  { id:"rele-4ch",          n:"Módulo relé 4 canales",      d:"Optoacoplado 5V.",                     p:6800,  cat:"arduino", unit:"Por unidad", active:true },
  { id:"oled-096",          n:"Display OLED 0,96″",         d:"I2C, 128×64.",                         p:7400,  cat:"arduino", unit:"Por unidad", active:true },
  { id:"protoboard-830",    n:"Protoboard 830 puntos",      d:"Con jumpers.",                         p:5600,  cat:"arduino", unit:"Juego / Set", active:true }
];
