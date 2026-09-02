(function () {
  "use strict";

  var params = new URLSearchParams(window.location.search);
  var lang = params.get("lang") === "en" ? "en" : "es";
  var data = window.RIGEL_DATA || { productos: [], articulos: [] };
  var productos = lang === "en" ? (data.productosEn || data.productos) : data.productos;
  var articulos = lang === "en" ? (data.articulosEn || data.articulos) : data.articulos;
  var contenido = document.getElementById("contenido");
  var whatsapp = "https://wa.me/593939474695";
  var correo = "ventas@rigelsa.com";
  var redes = [
    { nombre: "Facebook", enlace: "https://www.facebook.com/Rigel.ec/", icono: "facebook.svg" },
    { nombre: "Instagram", enlace: "https://www.instagram.com/rigel.ecuador", icono: "instagram.svg" },
    { nombre: "TikTok", enlace: "https://www.tiktok.com/@rigel.ecuador", icono: "tiktok.svg" },
    { nombre: "YouTube", enlace: "https://www.youtube.com/@Rigel.International", icono: "youtube.svg" },
    { nombre: "LinkedIn", enlace: "https://www.linkedin.com/company/rigelsa/", icono: "linkedin.svg" }
  ];

  document.documentElement.lang = lang;

  var texto = {
    es: {
      skip: "Ir al contenido", home: "Inicio", products: "Productos", about: "Quiénes somos", clients: "Clientes", blog: "Blog", support: "Contáctanos",
      advice: "Asesoría especializada", adviceText: "para elegir el equipo correcto.", technical: "Soporte técnico", technicalText: "antes y después de la implementación.", coverage: "Cobertura nacional", coverageText: "",
      footerText: "Empresa especializada en sistemas de marcación y codificación con sede en Ecuador, operamos en varios países de Latinoamérica.", contactUs: "Contáctanos", printers: "Codificadoras", inks: "Tintas", accessories: "Accesorios", contact: "Contacto", institutional: "Institucional", cookiesPolicy: "Política de cookies", privacyPolicy: "Política de privacidad", refundsPolicy: "Política de devoluciones y reembolsos",
      heroAlt: ["Soluciones Rigel para codificación industrial", "Codificación portátil sobre diferentes superficies", "Equipos Rigel para líneas de producción"],
      heroEyebrow: "MARCAJE Y CODIFICACIÓN", heroTitle: "Soluciones que avanzan al ritmo de tu producción", heroText: "Equipos portátiles, automáticos e industriales para imprimir fechas, lotes, códigos, textos y logotipos sobre múltiples superficies.", seeProducts: "Ver productos", quote: "Cotiza con nosotros",
      applicationsEyebrow: "UNA SOLUCIÓN PARA CADA PROCESO", applicationsTitle: "Del marcaje manual a la línea automatizada", applicationsText: "Selecciona la solución según la superficie, el ritmo de producción y el nivel de automatización de tu proceso.",
      portable: "Codificadora portátil", portableText: "Equipos ligeros para trabajar en distintos espacios y superficies.", automatic: "Automatizaciones", automaticText: "Codificadoras, sensores y bandas para producción continua.",
      knowledge: "MANTENTE INFORMADO", guides: "Guías para codificar mejor", allArticles: "Ver todos los artículos", read: "Leer artículo",
      inventory: "INVENTARIO RIGEL", inventoryTitle: "Productos para cada escala de producción", inventoryText: "Consulta equipos, consumibles y accesorios. Filtra por tipo y altura de impresión.",
      search: "Buscar por modelo o aplicación", searchPlaceholder: "Ej.: K600, industrial, tinta…", availability: "Disponibilidad", all: "Todos", available: "Disponible", onRequest: "Bajo pedido", unavailable: "No disponible", stock: "Stock", height: "Altura de impresión", allHeights: "Todas", results: "resultados", oneResult: "resultado", noResults: "No encontramos coincidencias", tryAgain: "Prueba otra búsqueda o restablece los filtros.", reset: "Restablecer filtros", viewFeatures: "Ver características",
      clientsEyebrow: "NUESTROS CLIENTES", clientsTitle: "Marcas que confían en Rigel", clientPrevious: "Cliente anterior", clientNext: "Cliente siguiente", clientPause: "Pausar carrusel", clientPlay: "Reanudar carrusel",
      aboutTitle: "Quiénes somos", aboutParagraphOne: "Somos una empresa dedicada a la venta de equipos de marcaje y codificación. Ofrecemos soluciones tecnológicas innovadoras para pequeñas, medianas y grandes empresas, con enfoque en productos de alta calidad y respeto por el medio ambiente.", aboutParagraphTwo: "Nuestra empresa fue fundada en Ecuador y tiene presencia en Brasil, Colombia, Venezuela, Chile y México. Contamos con más de siete años de experiencia en el mercado.", aboutMapAlt: "Mapa de presencia de Rigel en América Latina",
      breadcrumbHome: "Inicio", breadcrumbProducts: "Productos", information: "INFORMACIÓN TÉCNICA", features: "Características", includes: "Incluye", sheet: "Abrir ficha técnica", consultProduct: "Cotiza con nosotros", demonstration: "DEMOSTRACIÓN", watchWorking: "Mira el equipo en funcionamiento", youtube: "Ver video público en YouTube", related: "COMPATIBLES Y RELACIONADOS", completeSolution: "Completa tu solución",
      blogEyebrow: "MANTENTE INFORMADO", blogTitle: "Ideas para una codificación más eficiente", blogText: "Guías prácticas sobre equipos, tintas, trazabilidad, mantenimiento y buenas prácticas de producción.", keepReading: "SEGUIR LEYENDO", otherArticles: "Otros artículos", needAdvice: "¿NECESITAS ASESORÍA?", findPrinter: "Encuentra la solución adecuada", findPrinterText: "Revisa el inventario o cuéntanos tu proceso de impresión.",
      countries: "Países", address: "Dirección", phoneLabel: "Teléfono", emailLabel: "Correo", hoursLabel: "Horario", websiteLabel: "Sitio web", whatsappCountry: "WhatsApp",
      contactEyebrow: "CONTACTO", contactTitle: "Hablemos de tu proceso de codificación", contactText: "Recibe asesoría para elegir un modelo, confirmar compatibilidad o resolver una consulta técnica.", personalized: "ATENCIÓN PERSONALIZADA", supportTitle: "Atención Rigel", supportText: "Describe el producto, la superficie y la información que necesitas imprimir. También puedes indicar el volumen aproximado de producción.", email: "Correo", channel: "Canal", name: "Nombre completo", message: "¿Cómo podemos ayudarte?", phone: "WhatsApp", send: "Enviar mensaje", formKicker: "FORMULARIO DE CONTACTO", formTitle: "Cuéntanos cómo podemos ayudarte", formRequired: "Todos los campos son obligatorios.", namePlaceholder: "Escribe tu nombre", emailPlaceholder: "nombre@empresa.com", phonePlaceholder: "+593 99 999 9999", messagePlaceholder: "Escribe aquí tu mensaje o requerimiento…", formNote: "Al enviar este formulario aceptas que usemos tus datos únicamente para responder tu solicitud.", sending: "Enviando…", received: "MENSAJE RECIBIDO", thankYou: "Gracias por contactarnos.", sent: "Tu información fue enviada correctamente a Rigel.", sendAnother: "Enviar otro mensaje", required: "Completa los campos obligatorios.",
      notFound: "Contenido no encontrado", backProducts: "Volver a productos", backBlog: "Volver al blog"
    },
    en: {
      skip: "Skip to content", home: "Home", products: "Products", about: "About us", clients: "Clients", blog: "Blog", support: "Contact us",
      advice: "Specialized guidance", adviceText: "to choose the right equipment.", technical: "Technical support", technicalText: "before and after implementation.", coverage: "National coverage", coverageText: "",
      footerText: "Company specialized in marking and coding systems, headquartered in Ecuador and operating in several Latin American countries.", contactUs: "Contact us", printers: "Coding printers", inks: "Inks", accessories: "Accessories", contact: "Contact", institutional: "Institutional", cookiesPolicy: "Cookie policy", privacyPolicy: "Privacy policy", refundsPolicy: "Returns and refunds policy",
      heroAlt: ["Rigel industrial coding solutions", "Handheld coding on different materials", "Rigel equipment for production lines"],
      heroEyebrow: "MARKING & CODING", heroTitle: "Solutions that keep pace with your production", heroText: "Handheld, automatic and industrial equipment for dates, batches, codes, text and logos on multiple materials.", seeProducts: "View products", quote: "Request a quote",
      applicationsEyebrow: "A SOLUTION FOR EVERY PROCESS", applicationsTitle: "From handheld marking to automated lines", applicationsText: "Choose the right solution for your material, production pace and level of process automation.",
      portable: "Handheld printer", portableText: "Lightweight equipment for different spaces and materials.", automatic: "Automation", automaticText: "Printers, sensors and conveyors for continuous production.",
      knowledge: "STAY INFORMED", guides: "Guides for better coding", allArticles: "View all articles", read: "Read article",
      inventory: "RIGEL INVENTORY", inventoryTitle: "Products for every production scale", inventoryText: "Browse equipment, consumables and accessories. Filter by type and print height.",
      search: "Search by model or application", searchPlaceholder: "E.g. K600, industrial, ink…", availability: "Availability", all: "All", available: "Available", onRequest: "On request", unavailable: "Unavailable", stock: "Stock", height: "Print height", allHeights: "All", results: "results", oneResult: "result", noResults: "No matches found", tryAgain: "Try a different search or reset the filters.", reset: "Reset filters", viewFeatures: "View features",
      clientsEyebrow: "OUR CLIENTS", clientsTitle: "Brands that trust Rigel", clientPrevious: "Previous client", clientNext: "Next client", clientPause: "Pause carousel", clientPlay: "Resume carousel",
      aboutTitle: "About us", aboutParagraphOne: "We are a company dedicated to supplying marking and coding equipment. We offer innovative technology solutions for small, medium and large businesses, focused on high-quality products and respect for the environment.", aboutParagraphTwo: "Our company was founded in Ecuador and has a presence in Brazil, Colombia, Venezuela, Chile and Mexico. We have more than seven years of experience in the market.", aboutMapAlt: "Map of Rigel's presence in Latin America",
      breadcrumbHome: "Home", breadcrumbProducts: "Products", information: "TECHNICAL INFORMATION", features: "Features", includes: "Included", sheet: "Open technical data sheet", consultProduct: "Request a quote", demonstration: "DEMONSTRATION", watchWorking: "See the equipment in action", youtube: "Watch the public video on YouTube", related: "COMPATIBLE & RELATED", completeSolution: "Complete your solution",
      blogEyebrow: "STAY INFORMED", blogTitle: "Ideas for more efficient coding", blogText: "Practical guides about equipment, inks, traceability, maintenance and production best practices.", keepReading: "KEEP READING", otherArticles: "More articles", needAdvice: "NEED GUIDANCE?", findPrinter: "Find the right solution", findPrinterText: "Browse the inventory or tell us about your printing process.",
      countries: "Countries", address: "Address", phoneLabel: "Phone", emailLabel: "Email", hoursLabel: "Hours", websiteLabel: "Website", whatsappCountry: "WhatsApp",
      contactEyebrow: "CONTACT", contactTitle: "Let’s talk about your coding process", contactText: "Get guidance to choose a model, confirm compatibility or solve a technical question.", personalized: "PERSONALIZED ASSISTANCE", supportTitle: "Rigel assistance", supportText: "Describe the product, material and information you need to print. You can also include your approximate production volume.", email: "Email", channel: "Channel", name: "Full name", message: "How can we help?", phone: "WhatsApp", send: "Send message", formKicker: "CONTACT FORM", formTitle: "Tell us how we can help", formRequired: "All fields are required.", namePlaceholder: "Enter your name", emailPlaceholder: "name@company.com", phonePlaceholder: "+593 99 999 9999", messagePlaceholder: "Write your message or request here…", formNote: "By sending this form, you agree that we may use your data only to respond to your request.", sending: "Sending…", received: "MESSAGE RECEIVED", thankYou: "Thank you for contacting us.", sent: "Your information was successfully sent to Rigel.", sendAnother: "Send another message", required: "Complete the required fields.",
      notFound: "Content not found", backProducts: "Back to products", backBlog: "Back to blog"
    }
  }[lang];

  var politicas = {
    es: {
      cookies: {
        eyebrow: "INFORMACIÓN LEGAL",
        title: "Política de cookies",
        intro: "Te explicamos de forma clara qué tecnologías pueden intervenir cuando visitas el sitio web de Rigel Ecuador y cómo puedes controlarlas.",
        updated: "Versión revisada en septiembre de 2026",
        sections: [
          { title: "Qué son las cookies", paragraphs: ["Las cookies son pequeños archivos o identificadores que un sitio web o un servicio de terceros puede guardar en tu navegador para recordar información sobre una visita, mantener funciones técnicas o conocer cómo se utiliza un servicio."] },
          { title: "Tecnologías utilizadas en este sitio", paragraphs: ["El sitio web de Rigel Ecuador es principalmente informativo y no instala directamente cookies de analítica, publicidad o personalización. La preferencia de idioma se conserva en la dirección de la página y no mediante una cookie propia."], items: ["Necesarias y de seguridad: el proveedor de alojamiento puede aplicar mecanismos técnicos imprescindibles para entregar y proteger el sitio.", "Formulario de contacto: al enviar el formulario interviene Google Forms, que puede utilizar sus propias tecnologías conforme a sus condiciones y políticas.", "Servicios externos: WhatsApp, redes sociales, correo electrónico y otros sitios enlazados pueden utilizar cookies cuando decides visitarlos. Esos servicios administran sus propias cookies."] },
          { title: "Cómo administrar las cookies", paragraphs: ["Puedes bloquear, limitar o eliminar cookies desde la configuración de tu navegador. Al desactivar mecanismos estrictamente necesarios, algunas funciones externas o de seguridad podrían no operar correctamente. Tus preferencias se aplican por navegador y dispositivo, por lo que puede ser necesario configurarlas nuevamente si cambias de equipo, navegador o eliminas sus datos."] },
          { title: "Datos personales y servicios externos", paragraphs: ["Cuando una cookie o tecnología similar permite identificar directa o indirectamente a una persona, su tratamiento se sujeta a la Ley Orgánica de Protección de Datos Personales del Ecuador. Para conocer finalidades, destinatarios y derechos, consulta nuestra {privacy}."] },
          { title: "Cambios y contacto", paragraphs: ["Podemos actualizar esta política si cambian las funciones del sitio o la normativa aplicable. Publicaremos aquí la versión vigente.", "Si tienes preguntas sobre el uso de cookies, escríbenos a <a href=\"mailto:ventas@rigelsa.com\">ventas@rigelsa.com</a> o contáctanos por <a href=\"https://wa.me/593939474695\" target=\"_blank\" rel=\"noreferrer\">WhatsApp</a>."] }
        ]
      },
      privacidad: {
        eyebrow: "PROTECCIÓN DE DATOS",
        title: "Política de privacidad",
        intro: "Esta política describe cómo Rigel Ecuador recopila y utiliza datos personales cuando solicitas información, una cotización o soporte a través de nuestros canales digitales.",
        updated: "Versión revisada en septiembre de 2026",
        sections: [
          { title: "Responsable del tratamiento", paragraphs: ["El responsable del tratamiento es Rigel Ecuador. Puedes contactarnos en <a href=\"mailto:ventas@rigelsa.com\">ventas@rigelsa.com</a> o al <a href=\"https://wa.me/593939474695\" target=\"_blank\" rel=\"noreferrer\">+593 93 947 4695</a>.", "Atendemos en Guayaquil, Calle Elizalde #119 y Pichincha, Edificio Luz María, piso 8, oficina 8A; y en Quito, Edificio Empresarial Unicornio, frente al CCI, piso 14, oficina 1402."] },
          { title: "Datos que podemos recopilar", paragraphs: ["Dependiendo de tu interacción con Rigel Ecuador, podemos tratar los siguientes datos:"], items: ["Identificación y contacto: nombre, correo electrónico, teléfono y empresa.", "Consulta comercial o técnica: mensaje, producto de interés, superficie, volumen de producción y archivos que decidas compartir.", "Relación contractual: datos de facturación, entrega, garantía y soporte cuando adquieres un producto o servicio.", "Datos técnicos: dirección IP, fecha, hora, navegador y registros que el proveedor de alojamiento pueda generar para operar y proteger el sitio."] },
          { title: "Finalidades y bases de legitimación", paragraphs: ["Usamos los datos para responder consultas, preparar cotizaciones, prestar soporte, gestionar pedidos, entregas y garantías, mantener la seguridad, cumplir obligaciones legales y mejorar nuestros servicios."], items: ["Tu consentimiento, cuando envías voluntariamente un formulario o autorizas comunicaciones comerciales.", "La ejecución de medidas precontractuales o de un contrato solicitado por ti.", "El cumplimiento de obligaciones legales aplicables a Rigel Ecuador.", "El interés legítimo, previa evaluación, para seguridad, prevención de fraude y mejora del servicio."] },
          { title: "Origen de los datos", paragraphs: ["Recibimos datos directamente de ti mediante el formulario, correo electrónico, WhatsApp, redes sociales, llamadas o durante una relación comercial. Algunos datos técnicos pueden ser generados automáticamente por los servicios que alojan o protegen el sitio."] },
          { title: "Proveedores, destinatarios y transferencias", paragraphs: ["Compartimos solamente la información necesaria con proveedores que apoyan el alojamiento, formularios, correo, mensajería, facturación, transporte, soporte y seguridad. El formulario del sitio utiliza Google Forms y el sitio está alojado en GitHub Pages; al usar enlaces a WhatsApp o redes sociales también se aplican las políticas de esas plataformas.", "Algunos proveedores pueden tratar datos fuera de Ecuador. En esos casos procuramos utilizar servicios con salvaguardas adecuadas y limitar la información a la necesaria. También podremos comunicar datos a autoridades cuando exista una obligación legal u orden competente."] },
          { title: "Conservación", paragraphs: ["Conservamos los datos durante el tiempo necesario para atender la finalidad informada, mantener la relación comercial y cumplir plazos legales, contables, tributarios o de garantía. Cuando dejan de ser necesarios, los eliminamos, anonimizamos o bloqueamos según corresponda."] },
          { title: "Tus derechos", paragraphs: ["De acuerdo con la Ley Orgánica de Protección de Datos Personales, puedes solicitar acceso, rectificación y actualización, eliminación, oposición, suspensión o limitación, portabilidad cuando proceda, revocatoria del consentimiento y no ser objeto de decisiones basadas únicamente en valoraciones automatizadas."], items: ["Envía tu solicitud a ventas@rigelsa.com e identifica el derecho que deseas ejercer.", "Podremos pedir información razonable para verificar tu identidad y proteger tus datos.", "Si consideras que tu solicitud no fue atendida adecuadamente, puedes presentar un reclamo ante la Superintendencia de Protección de Datos Personales del Ecuador."] },
          { title: "Seguridad y decisiones automatizadas", paragraphs: ["Aplicamos medidas técnicas y organizativas razonables para proteger la confidencialidad, integridad y disponibilidad de la información. Ningún sistema es completamente invulnerable, por lo que revisamos nuestras medidas y actuamos ante incidentes conforme a la normativa.", "Rigel Ecuador no adopta, a través de este sitio, decisiones que produzcan efectos jurídicos basadas exclusivamente en el tratamiento automatizado de datos personales."] },
          { title: "Menores, cookies y enlaces", paragraphs: ["Este sitio se dirige a personas con capacidad para solicitar productos o servicios empresariales y no pretende recopilar deliberadamente datos de niñas, niños o adolescentes. El uso de cookies y tecnologías similares se explica en nuestra {cookies}. Los sitios externos se rigen por sus propias políticas."] },
          { title: "Actualizaciones", paragraphs: ["Podemos actualizar esta política para reflejar cambios legales, operativos o tecnológicos. La versión vigente y su fecha de revisión estarán disponibles en esta página."] }
        ]
      },
      devoluciones: {
        eyebrow: "ATENCIÓN AL CLIENTE",
        title: "Política de devoluciones y reembolsos",
        intro: "Conoce cómo solicitar una devolución, revisión por garantía o reembolso en compras realizadas a Rigel Ecuador.",
        updated: "Versión revisada en septiembre de 2026",
        sections: [
          { title: "Alcance", paragraphs: ["Esta política se aplica a productos y servicios adquiridos directamente a Rigel Ecuador. Complementa, y no limita, los derechos reconocidos por la Ley Orgánica de Defensa del Consumidor y demás normativa ecuatoriana aplicable."] },
          { title: "Cómo presentar una solicitud", paragraphs: ["Escríbenos a <a href=\"mailto:ventas@rigelsa.com\">ventas@rigelsa.com</a> o al <a href=\"https://wa.me/593939474695\" target=\"_blank\" rel=\"noreferrer\">+593 93 947 4695</a>. Indica el número de pedido o factura, nombre del comprador, producto, motivo y datos de contacto. Si existe un defecto o daño, adjunta fotografías o videos que faciliten la evaluación."] },
          { title: "Derecho de devolución en compras a distancia", paragraphs: ["Cuando la compra se haya celebrado por teléfono, catálogo, internet o a domicilio, podrás ejercer el derecho de devolución dentro de los tres días posteriores a la recepción del bien o servicio, siempre que su naturaleza lo permita y se encuentre en el mismo estado en que fue recibido, conforme al artículo 45 de la Ley Orgánica de Defensa del Consumidor."], items: ["Conserva el producto, accesorios, manuales y embalaje entregados.", "No utilices ni alteres el producto más allá de lo razonablemente necesario para verificarlo.", "Contáctanos dentro del plazo para recibir instrucciones de entrega o retiro."] },
          { title: "Productos defectuosos y garantía", paragraphs: ["Si el producto presenta una deficiencia de fabricación o no resulta apto para el uso ofrecido, revisaremos el caso y aplicaremos la garantía correspondiente. De acuerdo con la normativa ecuatoriana, procede la reparación gratuita y, cuando no sea posible, la reposición o devolución de lo pagado dentro del plazo legal aplicable, sin perjuicio de otros derechos del consumidor.", "La garantía puede no cubrir daños ocasionados por uso contrario al manual, intervención no autorizada, instalaciones eléctricas inadecuadas, golpes, humedad, consumibles incompatibles o desgaste normal, siempre que estas exclusiones hayan sido informadas y sean legalmente válidas."] },
          { title: "Daños durante el transporte", paragraphs: ["Si observas embalaje roto, piezas faltantes o daños al recibir el pedido, registra la novedad con el transportista cuando sea posible, toma fotografías y comunícate con nosotros tan pronto como puedas. La falta de registro inmediato no elimina los derechos que te reconozca la ley."] },
          { title: "Evaluación y estado del producto", paragraphs: ["Una vez recibido el producto, verificaremos su identidad, estado, accesorios y causa de la solicitud. Esta revisión busca determinar si corresponde devolución, reparación, reposición o reembolso y no suspende ni reduce los derechos legales del consumidor."] },
          { title: "Reembolsos", paragraphs: ["Cuando corresponda un reembolso, procuraremos realizarlo mediante el mismo medio utilizado para el pago. Si esto no fuera posible, coordinaremos una transferencia a una cuenta del titular del pago, previa validación. Los tiempos de acreditación también pueden depender de la entidad financiera o del proveedor del medio de pago."] },
          { title: "Logística y costos", paragraphs: ["Te enviaremos las instrucciones de entrega, retiro o envío según la ubicación y el motivo de la solicitud. Cuando la devolución se origine en un defecto cubierto, error de despacho o daño atribuible a la entrega, Rigel Ecuador coordinará los costos que legalmente le correspondan. En otros casos, informaremos previamente cualquier costo aplicable."] },
          { title: "Productos con condiciones especiales", paragraphs: ["La devolución puede no proceder cuando la naturaleza del bien no lo permita, haya sido personalizado o fabricado por encargo, presente uso o alteraciones atribuibles al cliente, o no se encuentre en el mismo estado en que fue recibido. Cada caso se analizará conforme a la ley, la garantía informada y las características del producto."] },
          { title: "Cancelación antes del despacho", paragraphs: ["Si el pedido aún no ha sido despachado, puedes solicitar su cancelación. Revisaremos el estado de preparación, especialmente en productos personalizados o importados bajo pedido, y te informaremos las opciones aplicables antes de ejecutar la cancelación."] },
          { title: "Seguimiento y contacto", paragraphs: ["Confirmaremos la recepción de tu solicitud y te mantendremos informado sobre la evaluación y el siguiente paso. Para seguimiento, utiliza <a href=\"mailto:ventas@rigelsa.com\">ventas@rigelsa.com</a> o nuestro canal de <a href=\"https://wa.me/593939474695\" target=\"_blank\" rel=\"noreferrer\">WhatsApp</a>."] }
        ]
      }
    },
    en: {
      cookies: {
        eyebrow: "LEGAL INFORMATION", title: "Cookie policy", intro: "This policy clearly explains which technologies may be involved when you visit the Rigel Ecuador website and how you can control them.", updated: "Reviewed in September 2026",
        sections: [
          { title: "What cookies are", paragraphs: ["Cookies are small files or identifiers that a website or third-party service may store in your browser to remember information about a visit, maintain technical functions or understand how a service is used."] },
          { title: "Technologies used on this website", paragraphs: ["The Rigel Ecuador website is primarily informational and does not directly install analytics, advertising or personalization cookies. The language preference is kept in the page address rather than in a first-party cookie."], items: ["Necessary and security technologies: the hosting provider may use essential technical mechanisms to deliver and protect the website.", "Contact form: when you submit the form, Google Forms is involved and may use its own technologies under its terms and policies.", "External services: WhatsApp, social networks, email and other linked websites may use cookies when you choose to visit them. Those services manage their own cookies."] },
          { title: "How to manage cookies", paragraphs: ["You can block, limit or delete cookies in your browser settings. Disabling strictly necessary mechanisms may prevent some external or security functions from operating correctly. Preferences apply per browser and device."] },
          { title: "Personal data and external services", paragraphs: ["When a cookie or similar technology can identify a person directly or indirectly, processing is subject to Ecuador's Organic Law on Personal Data Protection. See our {privacy} for purposes, recipients and rights."] },
          { title: "Changes and contact", paragraphs: ["We may update this policy if the website functions or applicable regulations change. The current version will be published here.", "Questions can be sent to <a href=\"mailto:ventas@rigelsa.com\">ventas@rigelsa.com</a> or through <a href=\"https://wa.me/593939474695\" target=\"_blank\" rel=\"noreferrer\">WhatsApp</a>."] }
        ]
      },
      privacidad: {
        eyebrow: "DATA PROTECTION", title: "Privacy policy", intro: "This policy describes how Rigel Ecuador collects and uses personal data when you request information, a quotation or support through our digital channels.", updated: "Reviewed in September 2026",
        sections: [
          { title: "Data controller", paragraphs: ["The data controller is Rigel Ecuador. Contact us at <a href=\"mailto:ventas@rigelsa.com\">ventas@rigelsa.com</a> or <a href=\"https://wa.me/593939474695\" target=\"_blank\" rel=\"noreferrer\">+593 93 947 4695</a>.", "Our offices are in Guayaquil, Calle Elizalde #119 and Pichincha, Edificio Luz María, 8th floor, office 8A; and Quito, Edificio Empresarial Unicornio, opposite CCI, 14th floor, office 1402."] },
          { title: "Data we may collect", paragraphs: ["Depending on your interaction, we may process:"], items: ["Identification and contact details, including name, email, telephone and company.", "Commercial or technical enquiry details, including your message, product of interest, surface, production volume and files you choose to share.", "Contractual information for invoicing, delivery, warranties and support when you purchase a product or service.", "Technical data such as IP address, date, time, browser and logs produced by the hosting provider to operate and protect the website."] },
          { title: "Purposes and lawful grounds", paragraphs: ["We use data to answer enquiries, prepare quotations, provide support, manage orders, deliveries and warranties, maintain security, comply with legal duties and improve our services."], items: ["Your consent when you voluntarily submit a form or authorize marketing communications.", "Steps requested before entering into a contract or performance of a contract.", "Compliance with legal obligations applicable to Rigel Ecuador.", "Legitimate interests, after assessment, for security, fraud prevention and service improvement."] },
          { title: "Sources of data", paragraphs: ["We receive data directly from you through the form, email, WhatsApp, social networks, telephone calls or a business relationship. Technical data may be generated automatically by services that host or protect the website."] },
          { title: "Providers, recipients and transfers", paragraphs: ["We share only necessary information with providers supporting hosting, forms, email, messaging, invoicing, transport, support and security. The website uses Google Forms and is hosted on GitHub Pages; linked services such as WhatsApp and social networks apply their own policies.", "Some providers may process data outside Ecuador. We seek appropriate safeguards and limit information to what is necessary. Data may also be disclosed to authorities when legally required."] },
          { title: "Retention", paragraphs: ["We retain data for as long as necessary for the stated purpose, the business relationship and applicable legal, accounting, tax or warranty periods. Data is then deleted, anonymized or restricted as appropriate."] },
          { title: "Your rights", paragraphs: ["Under Ecuador's Organic Law on Personal Data Protection, you may request access, rectification and updating, deletion, objection, suspension or restriction, portability where applicable, withdrawal of consent, and protection from decisions based solely on automated processing."], items: ["Send your request to ventas@rigelsa.com and identify the right you wish to exercise.", "We may request reasonable information to verify your identity and protect your data.", "If your request is not adequately addressed, you may complain to Ecuador's Personal Data Protection Authority."] },
          { title: "Security and automated decisions", paragraphs: ["We apply reasonable technical and organizational measures to protect confidentiality, integrity and availability. No system is completely invulnerable, so we review our safeguards and respond to incidents under applicable law.", "Rigel Ecuador does not use this website to make decisions with legal effects based solely on automated processing of personal data."] },
          { title: "Children, cookies and links", paragraphs: ["This website is intended for people able to request business products or services and is not designed to deliberately collect children's data. Cookies and similar technologies are explained in our {cookies}. External websites apply their own policies."] },
          { title: "Updates", paragraphs: ["We may update this policy to reflect legal, operational or technological changes. The current version and review date will remain available on this page."] }
        ]
      },
      devoluciones: {
        eyebrow: "CUSTOMER CARE", title: "Returns and refunds policy", intro: "Learn how to request a return, warranty review or refund for purchases made from Rigel Ecuador.", updated: "Reviewed in September 2026",
        sections: [
          { title: "Scope", paragraphs: ["This policy applies to products and services purchased directly from Rigel Ecuador. It complements and does not limit rights under Ecuador's Organic Consumer Protection Law and other applicable regulations."] },
          { title: "How to submit a request", paragraphs: ["Email <a href=\"mailto:ventas@rigelsa.com\">ventas@rigelsa.com</a> or contact <a href=\"https://wa.me/593939474695\" target=\"_blank\" rel=\"noreferrer\">+593 93 947 4695</a>. Include the order or invoice number, purchaser name, product, reason and contact details. For defects or damage, attach photos or videos that may assist the review."] },
          { title: "Return right for distance purchases", paragraphs: ["For purchases concluded by telephone, catalogue, internet or at home, you may exercise the return right within three days after receiving the good or service, provided its nature permits and it remains in the same condition, under article 45 of Ecuador's Organic Consumer Protection Law."], items: ["Keep the product, accessories, manuals and supplied packaging.", "Do not use or alter the product beyond what is reasonably necessary to inspect it.", "Contact us within the period for delivery or collection instructions."] },
          { title: "Defective products and warranty", paragraphs: ["If a product has a manufacturing deficiency or is not fit for the offered use, we will review the case and apply the relevant warranty. Ecuadorian law provides for free repair and, when repair is not possible, replacement or refund within the applicable legal period, without prejudice to other consumer rights.", "Warranty coverage may exclude damage caused by use contrary to the manual, unauthorized intervention, unsuitable electrical installations, impacts, moisture, incompatible consumables or normal wear, where those exclusions were disclosed and are legally valid."] },
          { title: "Shipping damage", paragraphs: ["If you notice broken packaging, missing parts or damage on delivery, record it with the carrier where possible, take photos and contact us promptly. Failure to record it immediately does not remove rights granted by law."] },
          { title: "Assessment and product condition", paragraphs: ["Once the product is received, we will check its identity, condition, accessories and the reason for the request to determine whether a return, repair, replacement or refund applies. This assessment does not suspend or reduce statutory rights."] },
          { title: "Refunds", paragraphs: ["When a refund applies, we will seek to use the original payment method. If that is not possible, we will coordinate a transfer to an account held by the payer after validation. Credit timing may also depend on the financial institution or payment provider."] },
          { title: "Logistics and costs", paragraphs: ["We will provide delivery, collection or shipping instructions according to location and reason. Where a return results from a covered defect, fulfilment error or attributable shipping damage, Rigel Ecuador will coordinate the costs for which it is legally responsible. Any other applicable cost will be disclosed in advance."] },
          { title: "Products with special conditions", paragraphs: ["A return may not apply where the nature of the good prevents it, the item was customized or made to order, it shows use or alterations attributable to the customer, or it is not in the condition received. Each case is assessed under the law, the disclosed warranty and product characteristics."] },
          { title: "Cancellation before dispatch", paragraphs: ["If an order has not been dispatched, you may request cancellation. We will review its preparation status, particularly for customized or specially imported goods, and explain the available options before completing the cancellation."] },
          { title: "Follow-up and contact", paragraphs: ["We will acknowledge your request and keep you informed about the assessment and next step. Use <a href=\"mailto:ventas@rigelsa.com\">ventas@rigelsa.com</a> or <a href=\"https://wa.me/593939474695\" target=\"_blank\" rel=\"noreferrer\">WhatsApp</a> for follow-up."] }
        ]
      }
    }
  }[lang];

  var inicio = {
    es: {
      slides: [
        { imagen: "todas-maquinas.jpg", alt: "Equipos de codificación Rigel", eyebrow: "SOLUCIONES PARA CADA PROCESO", titulo: "Codificación para cada necesidad", texto: "Ofrecemos soluciones portátiles, automáticas e industriales según tu producto, superficie y ritmo de producción.", boton: "Productos", enlace: "productos.html" },
        { imagen: "cafe.jpg", alt: "Frasco con fecha, caducidad y lote impresos en la tapa", eyebrow: "ENVASES DE VIDRIO", titulo: "Información clara en cada frasco", texto: "Imprime en cualquier material de forma confiable y legible con nuestras tintas de alta adherencia para que tu producto cumpla las normativas vigentes.", boton: "Ver codificadoras", enlace: "productos.html?tipo=Codificadora" },
        { imagen: "k600.jpg", alt: "Codificadora industrial K600", eyebrow: "PRODUCCIÓN INDUSTRIAL", titulo: "K600: codificación continua para líneas exigentes", texto: "Precisión y legibilidad en cada impresión.", boton: "Conoce la K600", enlace: "producto.html?slug=k600" },
        { imagen: "cosmetica.jpg", alt: "Envases cosméticos con códigos impresos", eyebrow: "COSMÉTICA Y CUIDADO PERSONAL", titulo: "Trazabilidad que acompaña a tu marca", texto: "Consigue impresiones legibles y discretas en tubos, frascos y envases de múltiples materiales.", boton: "Explorar soluciones", enlace: "productos.html?tipo=Codificadora" },
        { imagen: "banda.webp", alt: "Codificadora integrada a una banda transportadora", eyebrow: "AUTOMATIZACIÓN EN LÍNEA", titulo: "Codificación continua sobre banda transportadora", texto: "Integra impresión automática de fechas, lotes y códigos mientras el producto avanza por la línea.", boton: "Ver automatización", enlace: "productos.html?tipo=Accesorio" },
        { imagen: "automatizacion.jpg", alt: "Sistema automático de codificación para huevos", eyebrow: "AUTOMATIZACIÓN", titulo: "Más velocidad, control y consistencia", texto: "Integramos codificación automática para líneas continuas y aplicaciones especializadas.", boton: "Ver automatización", enlace: "productos.html?tipo=Accesorio" }
      ],
      applicationsEyebrow: "APLICACIONES DE CODIFICACIÓN",
      applicationsTitle: "Información clara en cada producto",
      applicationsText: "Imprime fechas, lotes y datos variables sobre vidrio, metal, alimentos, empaques flexibles y productos farmacéuticos con una solución adaptada a tu proceso.",
      applicationsAlt: "Aplicaciones de codificación Rigel",
      applicationImages: [
        { imagen: "bebidas.webp", alt: "Botellas de bebidas con fecha y lote impresos" },
        { imagen: "latas.webp", alt: "Latas metálicas con datos de trazabilidad impresos" },
        { imagen: "alimentos.webp", alt: "Alimento empacado con fecha y lote" },
        { imagen: "panaderia.webp", alt: "Pan empacado con fecha de elaboración y caducidad" },
        { imagen: "farmaceutica.webp", alt: "Empaque farmacéutico con fecha y lote impresos" }
      ],
      industrialAlt: "Codificadora industrial K600",
      industrialCaption: "Codificación industrial continua",
      supportEyebrow: "SOPORTE TÉCNICO RIGEL",
      supportTitle: "Soporte técnico especializado",
      supportImageAlt: "Técnico de Rigel realizando mantenimiento especializado a una codificadora industrial",
      supportText: "En Rigel, brindamos servicio técnico industrial especializado con más de 7 años de experiencia en sistemas de marcación y codificación. Nuestro equipo está disponible 24/7, los 365 días del año, para minimizar los tiempos de inactividad de tus operaciones. Solicita nuestro servicio técnico y obtén una respuesta de inmediato.",
      supportItems: ["Visitas técnicas en planta", "Mantenimiento preventivo y correctivo", "Capacitación y asistencia especializada"],
      supportButton: "Solicitar soporte"
    },
    en: {
      slides: [
        { imagen: "todas-maquinas.jpg", alt: "Rigel coding equipment", eyebrow: "SOLUTIONS FOR EVERY PROCESS", titulo: "Coding for every production need", texto: "We provide handheld, automatic and industrial solutions according to your product, material and production pace.", boton: "Products", enlace: "productos.html" },
        { imagen: "cafe.jpg", alt: "Jar with printed production date, expiration date and batch on the lid", eyebrow: "GLASS CONTAINERS", titulo: "Clear information on every jar", texto: "Print readable dates, batches and codes on lids and jars to maintain product traceability.", boton: "View coding printers", enlace: "productos.html?tipo=Codificadora" },
        { imagen: "k600.jpg", alt: "K600 industrial coding printer", eyebrow: "INDUSTRIAL PRODUCTION", titulo: "K600: continuous coding for demanding lines", texto: "Precision and legibility in every print.", boton: "Discover the K600", enlace: "producto.html?slug=k600" },
        { imagen: "cosmetica.jpg", alt: "Cosmetic containers with printed codes", eyebrow: "COSMETICS & PERSONAL CARE", titulo: "Traceability that supports your brand", texto: "Achieve readable and discreet prints on tubes, bottles and containers made of different materials.", boton: "Explore solutions", enlace: "productos.html?tipo=Codificadora" },
        { imagen: "banda.webp", alt: "Coding printer integrated with a conveyor", eyebrow: "IN-LINE AUTOMATION", titulo: "Continuous coding on a conveyor", texto: "Automatically print dates, batches and codes while products move through the production line.", boton: "View automation", enlace: "productos.html?tipo=Accesorio" },
        { imagen: "automatizacion.jpg", alt: "Automatic egg coding system", eyebrow: "AUTOMATION", titulo: "More speed, control and consistency", texto: "We integrate automatic coding for continuous lines and specialized applications.", boton: "View automation", enlace: "productos.html?tipo=Accesorio" }
      ],
      applicationsEyebrow: "CODING APPLICATIONS",
      applicationsTitle: "Clear information on every product",
      applicationsText: "Print dates, batches and variable data on glass, metal, food, flexible packaging and pharmaceutical products with a solution adapted to your process.",
      applicationsAlt: "Rigel coding applications",
      applicationImages: [
        { imagen: "bebidas.webp", alt: "Beverage bottles with printed date and batch" },
        { imagen: "latas.webp", alt: "Metal cans with printed traceability data" },
        { imagen: "alimentos.webp", alt: "Packaged food with printed date and batch" },
        { imagen: "panaderia.webp", alt: "Packaged bread with production and expiration dates" },
        { imagen: "farmaceutica.webp", alt: "Pharmaceutical packaging with printed date and batch" }
      ],
      industrialAlt: "K600 industrial coding printer",
      industrialCaption: "Continuous industrial coding",
      supportEyebrow: "RIGEL TECHNICAL SUPPORT",
      supportTitle: "Specialized technical support",
      supportImageAlt: "Rigel technician performing specialized maintenance on an industrial coding printer",
      supportText: "At Rigel, we provide specialized industrial technical service backed by more than 7 years of experience in marking and coding systems. Our team is available 24/7, 365 days a year, to minimize downtime in your operations. Request our technical service and receive an immediate response.",
      supportItems: ["On-site technical visits", "Preventive and corrective maintenance", "Training and specialized assistance"],
      supportButton: "Request support"
    }
  }[lang];

  var clientes = [
    { nombre: "La Casa del Encebollado", imagen: "assets/clientes/la-casa-del-encebollado.jpg" },
    { nombre: "Biopremix", imagen: "assets/clientes/biopremix.jpg" },
    { nombre: "Industrias Omega", imagen: "assets/clientes/industrias-omega.jpg" },
    { nombre: "Indunidas", imagen: "assets/clientes/indunidas.jpg" },
    { nombre: "Tutto Freddo", imagen: "assets/clientes/tutto-freddo.jpg" },
    { nombre: "Ecuatorianita Import & Export", imagen: "assets/clientes/ecuatorianita-import-export.jpg" },
    { nombre: "Ala Cena", imagen: "assets/clientes/ala-cena.jpg" },
    { nombre: "La Cuencana", imagen: "assets/clientes/la-cuencana.jpg" },
    { nombre: "Alimentos DelSurco", imagen: "assets/clientes/alimentos-del-surco.jpg" },
    { nombre: "Enchapres Decorativos S.A. · ENDESA", imagen: "assets/clientes/endesa-enchapres-decorativos.jpg" },
    { nombre: "Yupi Snacks", imagen: "assets/clientes/yupi-snacks.jpg" },
    { nombre: "Industrial Latina", imagen: "assets/clientes/industrial-latina.jpg" },
    { nombre: "Galleta Pecosa", imagen: "assets/clientes/galleta-pecosa.jpg" },
    { nombre: "Sigmaplast", imagen: "assets/clientes/sigmaplast.jpg" },
    { nombre: "Proglobal Food & Beverages", imagen: "assets/clientes/proglobal-food-beverages.jpg" },
    { nombre: "Ilianza", imagen: "assets/clientes/ilianza.jpg" },
    { nombre: "All Fields", imagen: "assets/clientes/all-fields.jpg" },
    { nombre: "Panatlantic Logistics S.A.", imagen: "assets/clientes/panatlantic-logistics.jpg" },
    { nombre: "Logistics S.A.", imagen: "assets/clientes/logistics-sa.jpg" },
    { nombre: "Lubrisa", imagen: "assets/clientes/lubrisa.jpg" },
    { nombre: "Zara Import", imagen: "assets/clientes/zara-import.jpg" },
    { nombre: "Furia ST", imagen: "assets/clientes/furia-st.jpg" },
    { nombre: "El Café de Tere", imagen: "assets/clientes/el-cafe-de-tere.jpg" },
    { nombre: "RapiDiagnostics", imagen: "assets/clientes/rapi-diagnostics.jpg" },
    { nombre: "El Sanduchón", imagen: "assets/clientes/el-sanduchon.jpg" },
    { nombre: "Configolsa", imagen: "assets/clientes/configolsa.jpg" },
    { nombre: "Agricampo S.A.", imagen: "assets/clientes/agricampo.jpg" },
    { nombre: "Fritamoro", imagen: "assets/clientes/fritamoro.jpg" },
    { nombre: "El Buco a Casa", imagen: "assets/clientes/el-buco-a-casa.jpg" },
    { nombre: "Agrimen Soluciones Agrícolas", imagen: "assets/clientes/agrimen.webp" },
    { nombre: "Biodesix", imagen: "assets/clientes/biodesix.webp" },
    { nombre: "Calmosacorp", imagen: "assets/clientes/calmosacorp.webp" },
    { nombre: "Mr. Morocho", imagen: "assets/clientes/mr-morocho.webp" },
    { nombre: "Graiman", imagen: "assets/clientes/graiman.webp" }
  ];

  var sedes = lang === "en" ? [
    { country: "Ecuador", map: "ecuador.svg", offices: [{ city: "Guayaquil", address: "Calle Elizalde #119 y Pichincha, Luz María Building, 8th floor, office 8A.", phone: "+593 93 947 4695", whatsapp: "593939474695" }, { city: "Quito", address: "Unicornio Business Building, opposite CCI, 14th floor, office 1402.", phone: "+593 98 116 3409", whatsapp: "593981163409" }], details: [[texto.emailLabel, "ventas@rigelsa.com", "email"], [texto.hoursLabel, "Monday to Friday, 08:30 AM–05:30 PM; Saturdays, 08:30 AM–01:00 PM."], [texto.websiteLabel, "https://rigelsa.com/", "url"]] },
    { country: "Chile", map: "chile.svg", whatsapp: "56951586530", details: [[texto.phoneLabel, "+56 9 5158 6530"], [texto.hoursLabel, "Monday to Friday, 08:30 AM–05:30 PM; Saturdays, 08:30 AM–01:00 PM."]] },
    { country: "Colombia", map: "colombia.svg", whatsapp: "573108123039", details: [[texto.address, "Calle 65 transversal 1G-10, Villa Linda, Barranquilla, Atlántico."], [texto.phoneLabel, "+57 310 812 3039"], [texto.hoursLabel, "Monday to Friday, 08:30 AM–05:30 PM; Saturdays, 08:30 AM–01:00 PM."]] },
    { country: "Venezuela", map: "venezuela.svg", whatsapp: "584249699579", details: [[texto.address, "Paseo Meneses, Plaza Real Shopping Center, ground floor, unit No. 11, Ciudad Bolívar, Bolívar State."], [texto.phoneLabel, "+58 424 969 9579"], [texto.hoursLabel, "Monday to Friday, 08:30 AM–05:30 PM; Saturdays, 08:30 AM–01:00 PM."]] },
    { country: "Brazil", map: "brasil.svg", whatsapp: "5562992037992", details: [[texto.address, "Av. Milão 1645, Paisiello Gallery, room 8."], [texto.phoneLabel, "+55 62 99203 7992"], [texto.emailLabel, "info@rigelsa.com.br", "email"], [texto.hoursLabel, "Monday to Friday, 08:30 AM–05:30 PM; Saturdays, 08:30 AM–01:00 PM."], [texto.websiteLabel, "https://rigelsa.com.br/", "url"]] },
    { country: "Mexico", map: "mexico.svg", whatsapp: "529996351998", details: [[texto.address, "Calle 62 diagonal, no. 256, Colonia Jacinto Canek, Mérida, Yucatán, C.P. 97227."], [texto.phoneLabel, "+52 999 635 1998 · Service: +52 999 106 1004"], [texto.emailLabel, "ventasmexico@rigelsa.com", "email"], [texto.hoursLabel, "Monday to Friday, 08:30 AM–05:30 PM; Saturdays, 08:30 AM–01:00 PM."], [texto.websiteLabel, "https://rigel-mexico.com/", "url"]] }
  ] : [
    { country: "Ecuador", map: "ecuador.svg", offices: [{ city: "Guayaquil", address: "Calle Elizalde #119 y Pichincha, Edificio Luz María, piso 8, oficina 8A.", phone: "+593 93 947 4695", whatsapp: "593939474695" }, { city: "Quito", address: "Edificio Empresarial Unicornio, frente al CCI, piso 14, oficina 1402.", phone: "+593 98 116 3409", whatsapp: "593981163409" }], details: [[texto.emailLabel, "ventas@rigelsa.com", "email"], [texto.hoursLabel, "Lunes a viernes, 08:30 AM–05:30 PM; sábados, 08:30 AM–01:00 PM."], [texto.websiteLabel, "https://rigelsa.com/", "url"]] },
    { country: "Chile", map: "chile.svg", whatsapp: "56951586530", details: [[texto.phoneLabel, "+56 9 5158 6530"], [texto.hoursLabel, "Lunes a viernes, 08:30 AM–05:30 PM; sábados, 08:30 AM–01:00 PM."]] },
    { country: "Colombia", map: "colombia.svg", whatsapp: "573108123039", details: [[texto.address, "Calle 65 transversal 1G-10, Villa Linda, Barranquilla, Atlántico."], [texto.phoneLabel, "+57 310 812 3039"], [texto.hoursLabel, "Lunes a viernes, 08:30 AM–05:30 PM; sábados, 08:30 AM–01:00 PM."]] },
    { country: "Venezuela", map: "venezuela.svg", whatsapp: "584249699579", details: [[texto.address, "Paseo Meneses, C.C. Plaza Real, planta baja, local N.º 11, Ciudad Bolívar, Estado Bolívar."], [texto.phoneLabel, "+58 424 969 9579"], [texto.hoursLabel, "Lunes a viernes, 08:30 AM–05:30 PM; sábados, 08:30 AM–01:00 PM."]] },
    { country: "Brasil", map: "brasil.svg", whatsapp: "5562992037992", details: [[texto.address, "Av. Milão 1645, Galería Paisiello, sala 8."], [texto.phoneLabel, "+55 62 99203 7992"], [texto.emailLabel, "info@rigelsa.com.br", "email"], [texto.hoursLabel, "Lunes a viernes, 08:30 AM–05:30 PM; sábados, 08:30 AM–01:00 PM."], [texto.websiteLabel, "https://rigelsa.com.br/", "url"]] },
    { country: "México", map: "mexico.svg", whatsapp: "529996351998", details: [[texto.address, "Calle 62 diagonal, número 256, colonia Jacinto Canek, Mérida, Yucatán, C.P. 97227."], [texto.phoneLabel, "+52 999 635 1998 · Atención: +52 999 106 1004"], [texto.emailLabel, "ventasmexico@rigelsa.com", "email"], [texto.hoursLabel, "Lunes a viernes, 08:30 AM–05:30 PM; sábados, 08:30 AM–01:00 PM."], [texto.websiteLabel, "https://rigel-mexico.com/", "url"]] }
  ];

  var canalesSedes = {
    ecuador: {
      facebook: "https://www.facebook.com/Rigel.ec/",
      instagram: "https://www.instagram.com/RIGEL.ECUADOR/",
      tiktok: "https://www.tiktok.com/@rigel.ecuador"
    },
    mexico: {
      facebook: "https://www.facebook.com/p/Rigel-M%C3%A9xico-61552099534264/",
      instagram: "https://www.instagram.com/rigel.mexico/?hl=en",
      tiktok: "https://www.tiktok.com/@rigel_mexico"
    },
    colombia: {
      facebook: "https://www.facebook.com/p/Rigelcolombia-61559340630949/",
      instagram: "https://www.instagram.com/rigel.colombia/?hl=en",
      tiktok: "https://www.tiktok.com/@rigel.colombia"
    },
    chile: {
      facebook: "https://www.facebook.com/p/Rigelchile-61559390699190/",
      instagram: "https://www.instagram.com/rigel.chile/?hl=en",
      tiktok: "https://www.tiktok.com/@rigel.chile"
    },
    venezuela: {
      facebook: "https://www.facebook.com/p/RIGEL-Venezuela-61557157245612/",
      instagram: "https://www.instagram.com/rigel_venezuela/",
      tiktok: "https://www.tiktok.com/@rigel.venezuela"
    },
    brasil: {
      facebook: "https://www.facebook.com/61576333168295",
      instagram: "https://www.instagram.com/rigel.brasil/",
      tiktok: "https://www.tiktok.com/@rigel.brasil"
    }
  };

  var presenciaMapa = lang === "en" ? [
    ["Mexico", "mexico"], ["Colombia", "colombia"], ["Ecuador", "ecuador"], ["Venezuela", "venezuela"], ["Brazil", "brasil"], ["Chile", "chile"]
  ] : [
    ["México", "mexico"], ["Colombia", "colombia"], ["Ecuador", "ecuador"], ["Venezuela", "venezuela"], ["Brasil", "brasil"], ["Chile", "chile"]
  ];

  function asset(ruta) { return String(ruta || "").replace(/^\//, ""); }

  function conIdioma(ruta) {
    if (/^(https?:|mailto:|tel:)/.test(ruta)) return ruta;
    var hash = "";
    var posicionHash = ruta.indexOf("#");
    if (posicionHash !== -1) { hash = ruta.slice(posicionHash); ruta = ruta.slice(0, posicionHash); }
    var separador = ruta.indexOf("?") === -1 ? "?" : "&";
    return ruta + separador + "lang=" + lang + hash;
  }

  function cambiarIdioma() {
    var nuevos = new URLSearchParams(window.location.search);
    nuevos.set("lang", lang === "es" ? "en" : "es");
    return (window.location.pathname.split("/").pop() || "index.html") + "?" + nuevos.toString() + window.location.hash;
  }

  function enlaceProducto(slug) { return conIdioma("producto.html?slug=" + encodeURIComponent(slug)); }
  function enlaceArticulo(slug) { return conIdioma("articulo.html?slug=" + encodeURIComponent(slug)); }

  function rutaActiva(archivo) {
    var actual = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    var archivosProductos = ["productos.html", "catalogo.html", "producto.html"];
    var activo = archivo === "productos.html" ? archivosProductos.indexOf(actual) !== -1 : actual === archivo;
    return activo ? ' aria-current="page"' : "";
  }

  function marca() { return '<img src="assets/brand/rigel-horizontal.png" alt="Rigel">'; }

  function enlacesSociales() {
    return '<div class="redes-sociales" aria-label="Redes sociales de Rigel">' + redes.map(function (red) {
      return '<a href="' + red.enlace + '" target="_blank" rel="noreferrer" aria-label="' + red.nombre + '"><img src="assets/social/' + red.icono + '" alt=""><span>' + red.nombre + '</span></a>';
    }).join("") + '</div>';
  }

  function mapaPresencia() {
    return '<div class="nosotros-mapa"><img src="assets/nosotros/mapa-america.webp" alt="' + texto.aboutMapAlt + '"><div class="mapa-etiquetas">' + presenciaMapa.map(function (pais) {
      return '<span class="mapa-etiqueta mapa-etiqueta-' + pais[1] + '">' + pais[0] + '</span>';
    }).join("") + '</div></div>';
  }

  function tarjetaSede(sede) {
    var clave = sede.map.replace(".svg", "");
    var canales = canalesSedes[clave] || {};
    var detalles = sede.details.map(function (detalle) {
      var valor = detalle[2] === "email" ? '<a href="mailto:' + detalle[1] + '">' + detalle[1] + '</a>' : (detalle[2] === "url" ? '<a href="' + detalle[1] + '" target="_blank" rel="noreferrer">' + detalle[1] + '</a>' : detalle[1]);
      return '<li><strong>' + detalle[0] + '</strong><span>' + valor + '</span></li>';
    }).join("");
    var oficinas = sede.offices ? '<div class="sede-oficinas">' + sede.offices.map(function (oficina) { return '<section><h4>' + oficina.city + '</h4><p><strong>' + texto.address + '</strong><span>' + oficina.address + '</span></p><p><strong>' + texto.phoneLabel + '</strong><span>' + oficina.phone + '</span></p></section>'; }).join("") + '</div>' : "";
    var contactosWhatsapp = sede.offices ? [sede.offices[0]] : [{ city: sede.country, whatsapp: sede.whatsapp }];
    var whatsapps = contactosWhatsapp.map(function (oficina) { return '<a class="sede-whatsapp" href="https://wa.me/' + oficina.whatsapp + '" target="_blank" rel="noreferrer" title="WhatsApp · ' + oficina.city + '" aria-label="WhatsApp · ' + oficina.city + '"><img src="assets/social/whatsapp.svg" alt=""></a>'; }).join("");
    var sociales = ["facebook", "instagram", "tiktok"].map(function (red) {
      return canales[red] ? '<a href="' + canales[red] + '" target="_blank" rel="noreferrer" aria-label="' + red.charAt(0).toUpperCase() + red.slice(1) + ' · ' + sede.country + '"><img src="assets/social/' + red + '.svg" alt=""></a>' : "";
    }).join("");
    return '<article class="sede-tarjeta sede-' + clave + (sede.offices ? ' sede-tarjeta-unificada' : '') + '"><img class="sede-mapa" src="assets/paises/' + sede.map + '" alt="" aria-hidden="true"><div class="sede-contenido"><h3><span>' + sede.country + '</span></h3>' + oficinas + '<ul>' + detalles + '</ul><div class="sede-acciones"><div class="sede-canales">' + whatsapps + '</div><div class="sede-redes">' + sociales + '</div></div></div></article>';
  }

  function dibujarEstructura() {
    var saltar = document.querySelector(".saltar-contenido");
    if (saltar) saltar.textContent = texto.skip;
    var header = document.getElementById("site-header");
    header.className = "cabecera";
    header.innerHTML = '<div class="contenedor cabecera-interior">' +
      '<a class="marca marca-imagen" href="' + conIdioma("index.html") + '" aria-label="Rigel, ' + texto.home + '">' + marca() + '</a>' +
      '<button class="menu-boton" type="button" aria-expanded="false" aria-controls="menu-principal"><span></span><span></span><span></span><span class="solo-lectura">Menu</span></button>' +
      '<nav id="menu-principal" class="navegacion" aria-label="Menu">' +
        '<a href="' + conIdioma("index.html") + '"' + rutaActiva("index.html") + '>' + texto.home + '</a>' +
        '<a href="' + conIdioma("productos.html") + '"' + rutaActiva("productos.html") + '>' + texto.products + '</a>' +
        '<a href="' + conIdioma("quienes-somos.html") + '"' + rutaActiva("quienes-somos.html") + '>' + texto.about + '</a>' +
        '<a href="' + conIdioma("blog.html") + '"' + rutaActiva("blog.html") + '>' + texto.blog + '</a>' +
        '<a href="' + conIdioma("contacto.html") + '"' + rutaActiva("contacto.html") + '>' + texto.support + '</a>' +
        '<a class="idioma-cambio" href="' + cambiarIdioma() + '" lang="' + (lang === "es" ? "en" : "es") + '">' + (lang === "es" ? "EN" : "ES") + '</a>' +
      '</nav></div>';

    var menuButton = document.querySelector(".menu-boton");
    var menu = document.getElementById("menu-principal");
    menuButton.addEventListener("click", function () {
      var abierto = menu.classList.toggle("navegacion-abierta");
      menuButton.setAttribute("aria-expanded", String(abierto));
    });

    var footer = document.getElementById("site-footer");
    footer.className = "pie";
    footer.innerHTML = '<div class="pie-ventajas"><div class="contenedor ventajas-rejilla">' +
      '<div><span>01</span><p><strong>' + texto.advice + '</strong> ' + texto.adviceText + '</p></div>' +
      '<div><span>02</span><p><strong>' + texto.technical + '</strong> ' + texto.technicalText + '</p></div>' +
      '<div><span>03</span><p><strong>' + texto.coverage + '</strong>' + (texto.coverageText ? ' ' + texto.coverageText : '') + '</p></div>' +
      '</div></div><div class="contenedor pie-principal"><div class="pie-marca"><a class="marca marca-imagen" href="' + conIdioma("index.html") + '">' + marca() + '</a><p>' + texto.footerText + '</p><a class="boton boton-verde" href="' + whatsapp + '" target="_blank" rel="noreferrer">' + texto.contactUs + '</a>' + enlacesSociales() + '</div>' +
      '<div class="pie-columnas"><div><h2>Rigel</h2><a href="' + conIdioma("index.html") + '">' + texto.home + '</a><a href="' + conIdioma("quienes-somos.html") + '">' + texto.about + '</a><a href="' + conIdioma("blog.html") + '">' + texto.blog + '</a><h2 class="pie-subtitulo">' + texto.institutional + '</h2><a href="' + conIdioma("politica-cookies.html") + '">' + texto.cookiesPolicy + '</a><a href="' + conIdioma("politica-privacidad.html") + '">' + texto.privacyPolicy + '</a><a href="' + conIdioma("devoluciones-reembolsos.html") + '">' + texto.refundsPolicy + '</a></div>' +
      '<div><h2>' + texto.products + '</h2><a href="' + conIdioma("productos.html?tipo=Codificadora") + '">' + texto.printers + '</a><a href="' + conIdioma("productos.html?tipo=Tinta") + '">' + texto.inks + '</a><a href="' + conIdioma("productos.html?tipo=Accesorio") + '">' + texto.accessories + '</a></div>' +
      '<div><h2>' + texto.support + '</h2><a href="' + conIdioma("contacto.html") + '">' + texto.contact + '</a><a href="mailto:' + correo + '">' + correo + '</a></div></div></div>' +
      '<div class="contenedor pie-legal"><p>© Rigel 2026.</p></div>';

    if (!document.querySelector(".whatsapp-flotante")) {
      document.body.insertAdjacentHTML("beforeend", '<a class="whatsapp-flotante" href="' + whatsapp + '" target="_blank" rel="noreferrer" aria-label="' + texto.contactUs + ' por WhatsApp"><img src="assets/social/whatsapp.svg" alt=""><span>WhatsApp</span></a>');
    }
  }

  function tarjetaProducto(producto) {
    return '<article class="tarjeta-producto"><div class="producto-cabecera"><span>' + producto.modelo + '</span></div>' +
      '<a class="producto-imagen" href="' + enlaceProducto(producto.slug) + '"><img src="' + asset(producto.imagen) + '" alt="' + producto.nombre + '" loading="lazy"></a>' +
      '<p>' + producto.tipo + ' · ' + producto.familia + '</p><h2><a href="' + enlaceProducto(producto.slug) + '">' + producto.nombre + '</a></h2>' +
      '<div class="producto-enlace"><a href="' + enlaceProducto(producto.slug) + '">' + texto.viewFeatures + ' <span aria-hidden="true">→</span></a></div></article>';
  }

  function tarjetaArticulo(articulo) {
    return '<article class="tarjeta-blog"><a class="blog-imagen" href="' + enlaceArticulo(articulo.slug) + '"><img src="' + asset(articulo.imagen) + '" alt="" loading="lazy"></a><p>' + articulo.categoria + '</p><h2><a href="' + enlaceArticulo(articulo.slug) + '">' + articulo.titulo + '</a></h2><span>' + articulo.extracto + '</span><a href="' + enlaceArticulo(articulo.slug) + '">' + texto.read + ' <b aria-hidden="true">→</b></a></article>';
  }

  function iniciarHero() {
    var slides = Array.prototype.slice.call(document.querySelectorAll(".hero-slide"));
    var puntos = Array.prototype.slice.call(document.querySelectorAll(".hero-control button"));
    if (!slides.length) return;
    var indice = 0, temporizador;
    var movimientoReducido = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    function mostrar(nuevo) {
      indice = (nuevo + slides.length) % slides.length;
      slides.forEach(function (slide, i) { var activo = i === indice; slide.classList.toggle("hero-slide-activo", activo); slide.setAttribute("aria-hidden", String(!activo)); slide.inert = !activo; });
      puntos.forEach(function (punto, i) { var activo = i === indice; punto.classList.toggle("activo", activo); punto.setAttribute("aria-pressed", String(activo)); });
    }
    function iniciar() { window.clearInterval(temporizador); if (!movimientoReducido) temporizador = window.setInterval(function () { mostrar(indice + 1); }, 5000); }
    puntos.forEach(function (punto, i) { punto.addEventListener("click", function () { mostrar(i); iniciar(); }); });
    mostrar(0); iniciar();
  }

  function iniciarAplicaciones() {
    var slides = Array.prototype.slice.call(document.querySelectorAll(".aplicaciones-slide"));
    if (slides.length < 2) return;
    var indice = 0;
    var movimientoReducido = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    function mostrar(nuevo) {
      indice = (nuevo + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        var activo = i === indice;
        slide.classList.toggle("aplicaciones-slide-activo", activo);
        slide.setAttribute("aria-hidden", String(!activo));
      });
    }
    mostrar(0);
    if (!movimientoReducido) window.setInterval(function () { mostrar(indice + 1); }, 2600);
  }

  function seccionClientes() {
    var tarjetas = clientes.concat(clientes, clientes).map(function (cliente, i) {
      var original = i < clientes.length;
      var prioritaria = i >= clientes.length && i < clientes.length + 5;
      return '<div class="cliente-tarjeta"' + (original ? '' : ' aria-hidden="true"') + '><div class="cliente-logo-marco"><img src="' + asset(cliente.imagen) + '" alt="' + (original ? cliente.nombre : '') + '" loading="' + (prioritaria ? 'eager' : 'lazy') + '"></div></div>';
    }).join("");
    return '<section id="clientes" class="seccion clientes-seccion clientes-inicio"><div class="contenedor"><div class="clientes-encabezado"><p class="eyebrow">' + texto.clientsEyebrow + '</p><h2>' + texto.clientsTitle + '</h2></div><div class="clientes-banda" aria-roledescription="carousel" aria-label="' + texto.clients + '"><div id="clientes-ventana" class="clientes-ventana"><div id="clientes-pista" class="clientes-pista">' + tarjetas + '</div></div></div></div></section>';
  }

  function seccionSoporte() {
    return '<section class="seccion soporte-inicio"><div class="contenedor soporte-rejilla"><div class="soporte-visual"><img src="assets/soporte/soporte-tecnico-rigel.webp" alt="' + inicio.supportImageAlt + '" loading="lazy"></div><div class="soporte-contenido"><p class="eyebrow">' + inicio.supportEyebrow + '</p><h2>' + inicio.supportTitle + '</h2><p>' + inicio.supportText + '</p><a class="boton boton-azul" href="' + conIdioma("contacto.html") + '">' + inicio.supportButton + '</a></div></div></section>';
  }

  function renderInicio() {
    var slides = inicio.slides;
    contenido.innerHTML = '<section class="hero" aria-roledescription="carousel" aria-label="' + texto.heroTitle + '"><div class="hero-pista">' + slides.map(function (slide, i) { return '<article class="hero-slide' + (i === 0 ? " hero-slide-activo" : "") + '" aria-hidden="' + (i !== 0) + '"' + (i === 0 ? '' : ' inert') + '><img src="assets/slides/nuevos/' + slide.imagen + '" alt="' + slide.alt + '" loading="' + (i === 0 ? 'eager' : 'lazy') + '"><div class="contenedor hero-contenido"><div class="hero-texto"><p class="eyebrow">' + slide.eyebrow + '</p><h1>' + slide.titulo + '</h1><p>' + slide.texto + '</p><a class="boton boton-azul" href="' + conIdioma(slide.enlace) + '">' + slide.boton + '</a></div></div></article>'; }).join("") + '</div><div class="hero-control" aria-label="' + (lang === "es" ? "Seleccionar diapositiva" : "Select slide") + '">' + slides.map(function (_, i) { return '<button type="button" class="' + (i === 0 ? "activo" : "") + '" aria-label="' + (lang === "es" ? "Mostrar diapositiva " : "Show slide ") + (i + 1) + '" aria-pressed="' + (i === 0) + '"></button>'; }).join("") + '</div></section>' +
      '<section class="seccion inicio-presentacion"><div class="contenedor inicio-presentacion-grid"><div class="inicio-presentacion-texto"><p class="eyebrow">' + inicio.applicationsEyebrow + '</p><h1>' + inicio.applicationsTitle + '</h1><p>' + inicio.applicationsText + '</p><div class="inicio-acciones"><a class="boton boton-azul" href="' + conIdioma("productos.html") + '">' + texto.seeProducts + '</a><a class="boton boton-verde" href="' + whatsapp + '" target="_blank" rel="noreferrer">' + texto.quote + '</a></div></div><div class="aplicaciones-visual" aria-roledescription="carousel" aria-label="' + inicio.applicationsAlt + '">' + inicio.applicationImages.map(function (imagen, i) { return '<figure class="aplicaciones-slide' + (i === 0 ? ' aplicaciones-slide-activo' : '') + '" aria-hidden="' + (i !== 0) + '"><img src="assets/aplicaciones/' + imagen.imagen + '" alt="' + imagen.alt + '" loading="' + (i === 0 ? 'eager' : 'lazy') + '"></figure>'; }).join("") + '</div></div></section>' +
      '<section class="franja-industrial"><video class="franja-video" autoplay muted loop playsinline preload="metadata" aria-hidden="true"><source src="assets/video/ukcm-bucle.mp4" type="video/mp4"></video><div class="franja-degradado" aria-hidden="true"></div><div class="contenedor franja-contenido"><div class="franja-principal"><p class="eyebrow eyebrow-claro">' + texto.applicationsEyebrow + '</p><h2>' + texto.applicationsTitle + '</h2><a class="boton boton-blanco" href="' + conIdioma("productos.html") + '">' + texto.seeProducts + '</a></div><div class="franja-opciones"><div><h3>' + texto.portable + '</h3><p>' + texto.portableText + '</p></div><div><h3>' + texto.automatic + '</h3><p>' + texto.automaticText + '</p></div></div></div></section>' +
      '<section class="seccion blog-inicio"><div class="contenedor"><div class="titulo-fila titulo-fila-compacta"><div><p class="eyebrow">' + texto.knowledge + '</p><h2>' + texto.guides + '</h2></div><a class="enlace-flecha" href="' + conIdioma("blog.html") + '">' + texto.allArticles + ' →</a></div><div class="rejilla-blog">' + articulos.slice(0, 3).map(tarjetaArticulo).join("") + '</div></div></section>' +
      '<section class="cta-final"><div class="contenedor"><div><p class="eyebrow eyebrow-claro">WHATSAPP</p><h2>' + texto.quote + '</h2></div><a class="boton boton-blanco" href="' + whatsapp + '" target="_blank" rel="noreferrer">' + texto.contactUs + '</a></div></section>' +
      seccionClientes() + seccionSoporte();
    iniciarHero();
    iniciarAplicaciones();
    iniciarVideoIndustrial();
    iniciarClientes();
  }

  function iniciarVideoIndustrial() {
    var video = document.querySelector(".franja-video");
    var movimientoReducido = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!video || movimientoReducido) return;
    video.muted = true;
    var reproduccion = video.play();
    if (reproduccion && typeof reproduccion.catch === "function") reproduccion.catch(function () {});
  }

  function renderProductos() {
    contenido.innerHTML = '<section class="cabecera-pagina"><div class="contenedor"><p class="eyebrow">' + texto.inventory + '</p><h1>' + texto.inventoryTitle + '</h1><p>' + texto.inventoryText + '</p></div></section><section class="seccion"><div class="contenedor"><div class="filtros-catalogo"><label class="busqueda-catalogo"><span>' + texto.search + '</span><input id="filtro-busqueda" type="search" placeholder="' + texto.searchPlaceholder + '"></label><label><span>' + texto.height + '</span><select id="filtro-altura"><option value="todas">' + texto.allHeights + '</option></select></label></div><div class="tipo-filtros" id="tipo-filtros"></div><div id="rejilla-productos"></div></div></section>';
    var busqueda = document.getElementById("filtro-busqueda");
    var altura = document.getElementById("filtro-altura");
    var tipos = ["Todos"].concat(Array.from(new Set(productos.map(function (p) { return p.tipo; }))));
    var alturas = Array.from(new Set(productos.map(function (p) { return p.alturaFiltro; })));
    alturas.forEach(function (opcion) { altura.insertAdjacentHTML("beforeend", '<option value="' + opcion + '">' + opcion + '</option>'); });
    var solicitado = params.get("tipo");
    if (lang === "en") solicitado = ({ Codificadora: "Coding printer", Tinta: "Ink", Accesorio: "Accessory" })[solicitado] || solicitado;
    var tipo = tipos.indexOf(solicitado) !== -1 ? solicitado : "Todos";
    function filtrar() {
      var consulta = busqueda.value.toLowerCase().trim();
      var filtrados = productos.filter(function (p) {
        var campo = (p.nombre + " " + p.modelo + " " + p.familia + " " + p.resumen).toLowerCase();
        return (!consulta || campo.indexOf(consulta) !== -1) && (tipo === "Todos" || p.tipo === tipo) && (altura.value === "todas" || p.alturaFiltro === altura.value);
      });
      document.getElementById("tipo-filtros").innerHTML = tipos.map(function (item) {
        var etiqueta = item === "Todos" ? texto.all : ((item === "Tinta" || item === "Ink") ? texto.inks : item);
        return '<button type="button" data-tipo="' + item + '" class="' + (item === tipo ? "activo" : "") + '">' + etiqueta + '</button>';
      }).join("") + '<p>' + filtrados.length + ' ' + (filtrados.length === 1 ? texto.oneResult : texto.results) + '</p>';
      document.getElementById("rejilla-productos").innerHTML = filtrados.length ? '<div class="rejilla-productos rejilla-inventario">' + filtrados.map(tarjetaProducto).join("") + '</div>' : '<div class="sin-resultados"><h2>' + texto.noResults + '</h2><p>' + texto.tryAgain + '</p><button id="restablecer" class="boton boton-azul" type="button">' + texto.reset + '</button></div>';
      Array.prototype.forEach.call(document.querySelectorAll("[data-tipo]"), function (boton) { boton.addEventListener("click", function () { tipo = boton.getAttribute("data-tipo"); filtrar(); }); });
      var reset = document.getElementById("restablecer");
      if (reset) reset.addEventListener("click", function () { busqueda.value = ""; altura.value = "todas"; tipo = "Todos"; filtrar(); });
    }
    busqueda.addEventListener("input", filtrar); altura.addEventListener("change", filtrar); filtrar();
  }

  function iniciarClientes() {
    var pista = document.getElementById("clientes-pista");
    if (!pista || !clientes.length) return;
    var desplazamiento = 0, ultimoTiempo = 0, animacion = 0;
    var movimientoReducido = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var velocidad = 80;
    function anchoColeccion() {
      var tarjetas = pista.querySelectorAll(".cliente-tarjeta");
      if (!tarjetas.length) return 0;
      var estilos = window.getComputedStyle(pista);
      var paso = tarjetas[0].getBoundingClientRect().width + (parseFloat(estilos.columnGap || estilos.gap) || 0);
      return paso * clientes.length;
    }
    function normalizar() {
      var ancho = anchoColeccion();
      if (!ancho) return;
      while (desplazamiento >= ancho * 2) desplazamiento -= ancho;
      while (desplazamiento < ancho) desplazamiento += ancho;
    }
    function dibujar() {
      pista.style.transform = "translate3d(" + (-desplazamiento) + "px,0,0)";
    }
    function cuadro(tiempo) {
      if (!ultimoTiempo) ultimoTiempo = tiempo;
      var delta = Math.min((tiempo - ultimoTiempo) / 1000, .05);
      ultimoTiempo = tiempo;
      if (!movimientoReducido && !document.hidden) {
        desplazamiento += velocidad * delta;
        normalizar();
        dibujar();
      }
      animacion = window.requestAnimationFrame(cuadro);
    }
    window.addEventListener("resize", function () { normalizar(); dibujar(); });
    document.addEventListener("visibilitychange", function () { ultimoTiempo = 0; });
    desplazamiento = anchoColeccion();
    dibujar();
    window.cancelAnimationFrame(animacion);
    animacion = window.requestAnimationFrame(cuadro);
  }

  function youtubeDirecto(url) {
    var match = String(url || "").match(/(?:embed\/|v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
    return match ? "https://www.youtube.com/watch?v=" + match[1] : url;
  }

  function renderProducto() {
    var slug = params.get("slug") || "m1";
    var producto = productos.find(function (item) { return item.slug === slug; });
    if (!producto) { noEncontrado(texto.backProducts, conIdioma("productos.html")); return; }
    document.title = producto.nombre + " | Rigel";
    var galeria = [producto.imagen].concat(producto.galeria || []).filter(function (ruta, i, lista) { return lista.indexOf(ruta) === i; });
    var relacionados = (producto.compatibles || []).map(function (modelo) { return productos.find(function (item) { return item.modelo.toLowerCase() === modelo.toLowerCase(); }); }).filter(Boolean);
    if (!relacionados.length) relacionados = productos.filter(function (item) { return item.tipo === producto.tipo && item.slug !== producto.slug; }).slice(0, 3);
    contenido.innerHTML = '<div class="contenedor migas"><a href="' + conIdioma("index.html") + '">' + texto.breadcrumbHome + '</a><span>›</span><a href="' + conIdioma("productos.html") + '">' + texto.breadcrumbProducts + '</a><span>›</span><strong>' + producto.modelo + '</strong></div><section class="contenedor producto-hero"><div><div class="galeria-principal"><img id="imagen-producto" src="' + asset(galeria[0]) + '" alt="' + producto.nombre + '"></div>' + (galeria.length > 1 ? '<div class="galeria-miniaturas">' + galeria.map(function (imagen, i) { return '<button type="button" data-imagen="' + asset(imagen) + '" class="' + (i === 0 ? "activo" : "") + '"><img src="' + asset(imagen) + '" alt=""></button>'; }).join("") + '</div>' : "") + '</div><div class="producto-resumen"><p class="eyebrow">' + producto.tipo.toUpperCase() + ' · ' + producto.familia.toUpperCase() + '</p><h1>' + producto.nombre + '</h1><p class="producto-intro">' + producto.descripcion + '</p><ul class="lista-destacados">' + producto.destacados.map(function (item) { return '<li>' + item + '</li>'; }).join("") + '</ul><div class="producto-acciones"><a class="boton boton-verde" href="' + whatsapp + '" target="_blank" rel="noreferrer">' + texto.consultProduct + '</a>' + (producto.ficha ? '<a class="boton boton-contorno" href="' + asset(producto.ficha) + '" target="_blank">' + texto.sheet + '</a>' : "") + '</div></div></section>' +
      '<section class="seccion producto-detalles"><div class="contenedor detalles-rejilla"><div><p class="eyebrow">' + texto.information + '</p><h2>' + texto.features + '</h2><p>' + producto.resumen + '</p>' + (producto.incluye && producto.incluye.length ? '<div class="incluye"><h3>' + texto.includes + '</h3><ul>' + producto.incluye.map(function (item) { return '<li>' + item + '</li>'; }).join("") + '</ul></div>' : "") + '</div><dl class="tabla-especificaciones">' + producto.especificaciones.map(function (fila) { return '<div><dt>' + fila[0] + '</dt><dd>' + fila[1] + '</dd></div>'; }).join("") + '</dl></div></section>' +
      (producto.video ? '<section class="seccion producto-video"><div class="contenedor"><p class="eyebrow">' + texto.demonstration + '</p><h2>' + texto.watchWorking + '</h2><a class="video-enlace" href="' + youtubeDirecto(producto.video) + '" target="_blank" rel="noreferrer"><div><img src="' + asset(producto.imagen) + '" alt=""><span aria-hidden="true">▶</span></div><strong>' + texto.youtube + '</strong></a></div></section>' : "") +
      (relacionados.length ? '<section class="seccion relacionados"><div class="contenedor"><p class="eyebrow">' + texto.related + '</p><h2>' + texto.completeSolution + '</h2><div class="rejilla-productos">' + relacionados.slice(0, 3).map(tarjetaProducto).join("") + '</div></div></section>' : "");
    var principal = document.getElementById("imagen-producto");
    Array.prototype.forEach.call(document.querySelectorAll("[data-imagen]"), function (boton) { boton.addEventListener("click", function () { principal.src = boton.getAttribute("data-imagen"); Array.prototype.forEach.call(document.querySelectorAll("[data-imagen]"), function (b) { b.classList.remove("activo"); }); boton.classList.add("activo"); }); });
  }

  function renderBlog() {
    contenido.innerHTML = '<section class="cabecera-pagina"><div class="contenedor"><p class="eyebrow">' + texto.blogEyebrow + '</p><h1>' + texto.blogTitle + '</h1><p>' + texto.blogText + '</p></div></section><section class="seccion"><div class="contenedor"><div class="rejilla-blog rejilla-blog-completa">' + articulos.map(tarjetaArticulo).join("") + '</div></div></section>';
  }

  function renderArticulo() {
    var slug = params.get("slug") || (articulos[0] && articulos[0].slug);
    var articulo = articulos.find(function (item) { return item.slug === slug; });
    if (!articulo) { noEncontrado(texto.backBlog, conIdioma("blog.html")); return; }
    document.title = articulo.titulo + " | Rigel";
    var imagenes = articulo.imagenes || [];
    var secciones = articulo.secciones.map(function (seccion, indice) { return '<section>' + (seccion.titulo ? '<h2>' + seccion.titulo + '</h2>' : "") + (seccion.parrafos || []).map(function (p) { return '<p>' + p + '</p>'; }).join("") + (seccion.puntos ? '<div class="puntos-articulo">' + seccion.puntos.map(function (p) { return '<div><h3>' + p.titulo + '</h3><p>' + p.texto + '</p></div>'; }).join("") + '</div>' : "") + (imagenes[indice] ? '<img src="' + asset(imagenes[indice]) + '" alt="">' : "") + '</section>'; }).join("");
    var otros = articulos.filter(function (item) { return item.slug !== articulo.slug; }).slice(0, 3);
    contenido.innerHTML = '<article><header class="contenedor articulo-cabecera"><p class="eyebrow">' + articulo.categoria.toUpperCase() + '</p><h1>' + articulo.titulo + '</h1><p>' + articulo.extracto + '</p></header><div class="contenedor articulo-portada"><img src="' + asset(articulo.imagen) + '" alt="' + articulo.titulo + '"></div><div class="contenedor articulo-cuerpo">' + secciones + (articulo.video ? '<section><h2>Video</h2><a class="boton boton-azul" href="' + youtubeDirecto(articulo.video) + '" target="_blank" rel="noreferrer">' + texto.youtube + '</a></section>' : "") + '<aside class="articulo-cta"><p class="eyebrow">' + texto.needAdvice + '</p><h2>' + texto.findPrinter + '</h2><p>' + texto.findPrinterText + '</p><div><a class="boton boton-azul" href="' + conIdioma("productos.html") + '">' + texto.seeProducts + '</a><a class="boton boton-verde" href="' + whatsapp + '" target="_blank" rel="noreferrer">' + texto.contactUs + '</a></div></aside></div></article><section class="seccion otros-articulos"><div class="contenedor"><p class="eyebrow">' + texto.keepReading + '</p><h2>' + texto.otherArticles + '</h2><div class="rejilla-blog">' + otros.map(tarjetaArticulo).join("") + '</div></div></section>';
  }

  function renderNosotros() {
    contenido.innerHTML = '<section class="seccion nosotros-presentacion"><div class="contenedor nosotros-rejilla">' + mapaPresencia() + '<div class="nosotros-contenido"><h1>' + texto.aboutTitle + '</h1><p>' + texto.aboutParagraphOne + '</p><p>' + texto.aboutParagraphTwo + '</p></div></div></section>' +
      '<section class="seccion sedes-seccion"><div class="contenedor"><h2 class="sedes-titulo">' + texto.countries + '</h2><div class="sedes-rejilla">' + sedes.map(tarjetaSede).join("") + '</div></div></section>';
  }

  function renderContacto() {
    contenido.innerHTML = '<section class="cabecera-pagina"><div class="contenedor"><p class="eyebrow">' + texto.contactEyebrow + '</p><h1>' + texto.contactTitle + '</h1><p>' + texto.contactText + '</p></div></section><section class="seccion"><div class="contenedor contacto-rejilla"><div class="contacto-info"><p class="eyebrow">' + texto.personalized + '</p><h2>' + texto.supportTitle + '</h2><p>' + texto.supportText + '</p><dl><div><dt>' + texto.email + '</dt><dd><a href="mailto:' + correo + '">' + correo + '</a></dd></div><div><dt>WhatsApp</dt><dd><a href="' + whatsapp + '" target="_blank" rel="noreferrer">+593 93 947 4695</a></dd></div><div><dt>' + texto.channel + '</dt><dd><a href="https://www.youtube.com/@Rigel.International" target="_blank" rel="noreferrer">YouTube Rigel International</a></dd></div></dl>' + enlacesSociales() + '</div><div class="formulario-google"><div id="formulario-contenido"><div class="formulario-google-encabezado"><p class="eyebrow">' + texto.formKicker + '</p><h2>' + texto.formTitle + '</h2><p>' + texto.formRequired + '</p></div><form id="formulario-contacto" class="formulario formulario-google-campos" action="https://docs.google.com/forms/d/e/1FAIpQLSeXjmDEZUJFnGkpv1cUe9XHqZEpWWQDhXKMZEEW3Z7PogQjpQ/formResponse" method="POST" target="respuesta-google"><input type="hidden" name="fvv" value="1"><input type="hidden" name="pageHistory" value="0"><label><span>' + texto.name + '</span><input type="text" name="entry.1511391054" placeholder="' + texto.namePlaceholder + '" autocomplete="name" maxlength="160" required></label><div class="formulario-doble"><label><span>' + texto.email + '</span><input type="email" name="entry.1127554998" placeholder="' + texto.emailPlaceholder + '" autocomplete="email" maxlength="180" required></label><label><span>' + texto.phone + '</span><input type="tel" name="entry.271073587" placeholder="' + texto.phonePlaceholder + '" autocomplete="tel" inputmode="tel" maxlength="40" required></label></div><label><span>' + texto.message + '</span><textarea name="entry.874449950" placeholder="' + texto.messagePlaceholder + '" rows="6" maxlength="4000" required></textarea></label><div class="formulario-acciones"><button class="boton boton-azul" type="submit"><span class="texto-enviar">' + texto.send + '</span></button></div><p class="formulario-estado">' + texto.formNote + '</p></form></div><div id="formulario-exito" class="formulario-google-exito oculto" role="status" aria-live="polite"><span class="formulario-google-check" aria-hidden="true">✓</span><p class="eyebrow">' + texto.received + '</p><h2>' + texto.thankYou + '</h2><p>' + texto.sent + '</p><div class="formulario-acciones"><button class="boton boton-azul formulario-otro" type="button">' + texto.sendAnother + '</button></div></div><iframe class="formulario-destino" name="respuesta-google" title="Respuesta de Google Forms"></iframe></div></div></section>';
    activarFormularioGoogle();
  }

  function renderPolitica(clave) {
    var politica = politicas[clave];
    if (!politica) { noEncontrado(texto.home, conIdioma("index.html")); return; }
    var reemplazarEnlaces = function (valor) {
      return valor
        .replace("{privacy}", '<a href="' + conIdioma("politica-privacidad.html") + '">' + texto.privacyPolicy + '</a>')
        .replace("{cookies}", '<a href="' + conIdioma("politica-cookies.html") + '">' + texto.cookiesPolicy + '</a>');
    };
    var secciones = politica.sections.map(function (seccion, indice) {
      var parrafos = (seccion.paragraphs || []).map(function (parrafo) { return '<p>' + reemplazarEnlaces(parrafo) + '</p>'; }).join("");
      var lista = seccion.items ? '<ul>' + seccion.items.map(function (item) { return '<li>' + reemplazarEnlaces(item) + '</li>'; }).join("") + '</ul>' : "";
      return '<section class="politica-seccion"><div class="politica-numero" aria-hidden="true">' + String(indice + 1).padStart(2, "0") + '</div><div><h2>' + seccion.title + '</h2>' + parrafos + lista + '</div></section>';
    }).join("");
    contenido.innerHTML = '<section class="cabecera-pagina cabecera-politica"><div class="contenedor"><p class="eyebrow">' + politica.eyebrow + '</p><h1>' + politica.title + '</h1><p>' + politica.intro + '</p></div></section>' +
      '<section class="seccion politica-contenido"><div class="contenedor politica-rejilla"><aside class="politica-resumen"><p class="eyebrow">RIGEL ECUADOR</p><p>' + politica.updated + '</p><a href="mailto:' + correo + '">' + correo + '</a><a href="https://wa.me/593939474695" target="_blank" rel="noreferrer">+593 93 947 4695</a></aside><article class="politica-articulo">' + secciones + '</article></div></section>';
  }

  function activarFormularioGoogle() {
    var formulario = document.getElementById("formulario-contacto");
    var iframe = document.querySelector('iframe[name="respuesta-google"]');
    var contenidoFormulario = document.getElementById("formulario-contenido");
    var exito = document.getElementById("formulario-exito");
    var boton = formulario.querySelector('button[type="submit"]');
    var textoBoton = boton.querySelector(".texto-enviar");
    var enviado = false;

    formulario.addEventListener("submit", function () {
      enviado = true;
      boton.disabled = true;
      textoBoton.textContent = texto.sending;
    });

    iframe.addEventListener("load", function () {
      if (!enviado) return;
      enviado = false;
      formulario.reset();
      contenidoFormulario.classList.add("oculto");
      exito.classList.remove("oculto");
      boton.disabled = false;
      textoBoton.textContent = texto.send;
    });

    exito.querySelector(".formulario-otro").addEventListener("click", function () {
      exito.classList.add("oculto");
      contenidoFormulario.classList.remove("oculto");
    });
  }

  function noEncontrado(etiqueta, enlace) {
    contenido.innerHTML = '<section class="pagina-404"><div><img class="logo-404" src="assets/brand/rigel-horizontal.png" alt="Rigel"><h1>' + texto.notFound + '</h1><a class="boton boton-azul" href="' + enlace + '">' + etiqueta + '</a></div></section>';
  }

  dibujarEstructura();
  var pagina = document.body.getAttribute("data-page");
  var titulos = lang === "en" ? {
    inicio: "Rigel | Marking & coding", productos: "Products | Rigel", nosotros: "About us | Rigel",
    blog: "Blog | Rigel", contacto: "Contact us | Rigel", cookies: "Cookie policy | Rigel", privacidad: "Privacy policy | Rigel", devoluciones: "Returns and refunds | Rigel"
  } : {
    inicio: "Rigel | Marcaje y codificación", productos: "Productos | Rigel", nosotros: "Quiénes somos | Rigel",
    blog: "Blog | Rigel", contacto: "Contáctanos | Rigel", cookies: "Política de cookies | Rigel", privacidad: "Política de privacidad | Rigel", devoluciones: "Devoluciones y reembolsos | Rigel"
  };
  if (titulos[pagina]) document.title = titulos[pagina];
  if (pagina === "inicio") renderInicio();
  else if (pagina === "productos") renderProductos();
  else if (pagina === "nosotros") renderNosotros();
  else if (pagina === "producto") renderProducto();
  else if (pagina === "blog") renderBlog();
  else if (pagina === "articulo") renderArticulo();
  else if (pagina === "contacto") renderContacto();
  else if (pagina === "cookies") renderPolitica("cookies");
  else if (pagina === "privacidad") renderPolitica("privacidad");
  else if (pagina === "devoluciones") renderPolitica("devoluciones");
  else noEncontrado(texto.home, conIdioma("index.html"));
}());
