/* @tweakable data refresh interval in minutes */
const ProductData = {
  // COCTELERÍA
  cocteles: [
    {
      id: '1',
      nombre: 'ABC',
      ingredientes: 'Amaretto, baileys y cognac',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/bebidas/cocteleria/abc.mp4',
      precio: '$165.00',
      imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/cocteleria/abc.webp'
    },
    {
      id: '2',
      nombre: 'Alfonso 13',
      ingredientes: 'Brandy, licor de café, crema',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/bebidas/cocteleria/alfonso-13.mp4',
      precio: '$180.00',
      imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/cocteleria/alfonso-13.webp'
    },
    {
      id: '3',
      nombre: 'Bufanda Negra',
      ingredientes: 'Ron, licor de naranja, jugo de limón',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/bebidas/cocteleria/bufanda-negra.mp4',
      precio: '$190.00',
      imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/cocteleria/bufanda-negra.webp'
    },
    {
      id: '4',
      nombre: 'Cantarito Fresa',
      ingredientes: 'Tequila, jugo de limón, toronja y fresa',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/bebidas/cocteleria/cantarito-fresa.mp4',
      precio: '$170.00',
      imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/cocteleria/cantarito-fresa.webp'
    },
    {
      id: '5',
      nombre: 'Cantarito',
      ingredientes: 'Tequila, jugo de limón, toronja y refresco de toronja',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/bebidas/cocteleria/cantarito.mp4',
      precio: '$160.00',
      imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/cocteleria/cantarito.webp'
    },
    {
      id: '6',
      nombre: 'Carajillo',
      ingredientes: 'Licor de café, espresso',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/bebidas/cocteleria/carajillo.mp4',
      precio: '$150.00',
      imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/cocteleria/carajillo.webp'
    },
    {
      id: '7',
      nombre: 'Cosmopolitan',
      ingredientes: 'Vodka, licor de naranja, jugo de limón y arándano',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/bebidas/cocteleria/cosmopolitan.mp4',
      precio: '$180.00',
      imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/cocteleria/cosmopolitan.webp'
    },
    {
      id: '8',
      nombre: 'Duvalin',
      ingredientes: 'Licor de avellana, vodka de vainilla y crema de cacao',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/bebidas/cocteleria/duvalin.mp4',
      precio: '$190.00',
      imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/cocteleria/duvalin.webp'
    },
    {
      id: '9',
      nombre: 'Margarita',
      ingredientes: 'Tequila, licor de naranja, jugo de limón',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/bebidas/cocteleria/margarita.mp4',
      precio: '$175.00',
      imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/cocteleria/margarita.webp'
    },
    {
      id: '10',
      nombre: 'Martini Baileys',
      ingredientes: 'Baileys, vodka, crema',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/bebidas/cocteleria/martini-bealys.mp4',
      precio: '$185.00',
      imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/cocteleria/martini-baileys.webp'
    },
    {
      id: '11',
      nombre: 'Martini Chocolate',
      ingredientes: 'Licor de cacao, vodka, crema de leche',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/bebidas/cocteleria/martini-chocolate.mp4',
      precio: '$195.00',
      imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/cocteleria/martini-chocolate.webp'
    },
    {
      id: '12',
      nombre: 'Martini Lichi',
      ingredientes: 'Vodka, licor de lichi, jugo de limón',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/bebidas/cocteleria/martini-lichi.mp4',
      precio: '$200.00',
      imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/cocteleria/martini-lichi.webp'
    },
    {
      id: '13',
      nombre: 'Mojito Fresa',
      ingredientes: 'Ron, hierbabuena, jugo de limón y fresa',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/bebidas/cocteleria/mojito-fresa.mp4',
      precio: '$170.00',
      imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/cocteleria/mojito-fresa.webp'
    },
    {
      id: '14',
      nombre: 'Mojito Frutos Rojos',
      ingredientes: 'Ron, hierbabuena, jugo de limón y frutos rojos',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/bebidas/cocteleria/mojito-frutos-rojos.mp4',
      precio: '$175.00',
      imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/cocteleria/mojito-frutos-rojos.webp'
    },
    {
      id: '15',
      nombre: 'Mojito Mango',
      ingredientes: 'Ron, hierbabuena, jugo de limón y mango',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/bebidas/cocteleria/mojito-mango.mp4',
      precio: '$180.00',
      imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/cocteleria/mojito-mango.webp'
    },
    {
      id: '16',
      nombre: 'Mojito',
      ingredientes: 'Ron, hierbabuena, jugo de limón y azúcar',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/bebidas/cocteleria/mojito.mp4',
      precio: '$165.00',
      imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/cocteleria/mojito.webp'
    },
    {
      id: '17',
      nombre: 'Piña Colada',
      ingredientes: 'Ron, crema de coco, jugo de piña',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/bebidas/cocteleria/pina-colada.mp4',
      precio: '$190.00',
      imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/cocteleria/pina-colada.webp'
    }
  ],
  
 // REFRESCOS
refrescos: [
  {
    id: '22',
    nombre: 'COCA COLA 355ML',
    categoria: 'refresco',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/refrescos/coca-cola.webp',
    precio: '$55.00'
  },
  {
    id: '23',
    nombre: 'FANTA 355ML',
    categoria: 'refresco',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/refrescos/fanta.webp',
    precio: '$55.00'
  },
  {
    id: '24',
    nombre: 'MANZANA 355ML',
    categoria: 'refresco',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/refrescos/manzana.webp',
    precio: '$55.00'
  },
  {
    id: '25',
    nombre: 'SPRITE 355ML',
    categoria: 'refresco',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/refrescos/sprite.webp',
    precio: '$55.00'
  },
  {
    id: '26',
    nombre: 'MINERAL 355ML',
    categoria: 'refresco',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/refrescos/mineral.webp',
    precio: '$55.00'
  },
  {
    id: '27',
    nombre: 'SQUIRT 355ML',
    categoria: 'refresco',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/refrescos/squirt.webp',
    precio: '$55.00'
  },
  {
    id: '28',
    nombre: 'QUINA 355ML',
    categoria: 'refresco',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/refrescos/quina.webp',
    precio: '$55.00'
  },
  {
    id: '29',
    nombre: 'AGUA 355ML',
    categoria: 'refresco',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/refrescos/agua.webp',
    precio: '$55.00'
  },
  {
    id: '30',
    nombre: 'RED BULL 250ML',
    categoria: 'refresco',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/refrescos/redbull.webp',
    precio: '$95.00'
  },
  {
    id: '31',
    nombre: 'BOOST 235ML',
    categoria: 'refresco',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/refrescos/boost.webp',
    precio: '$75.00'
  },
  {
    id: '32',
    nombre: 'JARRA DE JUGO PIÑA LT',
    categoria: 'jugo',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/refrescos/Jarra%20Pina.webp',
    precio: '$165.00'
  },
  {
    id: '33',
    nombre: 'JARRA DE JUGO UVA LT',
    categoria: 'jugo',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/refrescos/Jarra%20de%20Uva.webp',
    precio: '$165.00'
  },
  {
    id: '34',
    nombre: 'JARRA DE JUGO NARANJA',
    categoria: 'jugo',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/refrescos/Jarra%20de%20Naranja.webp',
    precio: '$165.00'
  },
  {
    id: '35',
    nombre: 'JARRA DE JUGO ARÁNDANO',
    categoria: 'jugo',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/refrescos/Jarra%20de%20Arandano.webp',
    precio: '$165.00'
  },
  {
    id: '36',
    nombre: 'JARRA DE JUGO DURAZNO',
    categoria: 'jugo',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/refrescos/Jarra%20Durazno.webp',
    precio: '$165.00'
  },
  {
    id: '37',
    nombre: 'JARRA DE JUGO MANGO',
    categoria: 'jugo',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/refrescos/Jarra%20Mango.webp',
    precio: '$165.00'
  },
  {
    id: '38',
    nombre: 'VASO DE JUGO PIÑA 355ML',
    categoria: 'jugo',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/refrescos/vaso-pina.webp',
    precio: '$55.00'
  },
  {
    id: '39',
    nombre: 'VASO DE JUGO UVA 355ML',
    categoria: 'jugo',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/refrescos/vaso-uva.webp',
    precio: '$55.00'
  },
  {
    id: '40',
    nombre: 'VASO DE JUGO NARANJA 355ML',
    categoria: 'jugo',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/refrescos/vaso-naranja.webp',
    precio: '$55.00'
  },
  {
    id: '41',
    nombre: 'VASO DE JUGO ARÁNDANO 355ML',
    categoria: 'jugo',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/refrescos/vaso-arandano.webp',
    precio: '$55.00'
  },
  {
    id: '42',
    nombre: 'VASO DE JUGO DURAZNO 355ML',
    categoria: 'jugo',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/refrescos/vaso-durazno.webp',
    precio: '$55.00'
  },
  {
    id: '43',
    nombre: 'VASO DE JUGO MANGO 355ML',
    categoria: 'jugo',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/refrescos/vaso-mango.webp',
    precio: '$55.00'
  }
],
  
 // CERVEZAS
cervezas: [
  {
    id: '1',
    nombre: 'INDIO',
    categoria: 'cerveza',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/cervezas/indio.webp',
    precio: '$75.00'
  },
  {
    id: '2',
    nombre: 'TECATE ROJA',
    categoria: 'cerveza',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/cervezas/tecate-roja.webp',
    precio: '$75.00'
  },
  {
    id: '3',
    nombre: 'TECATE LIGHT',
    categoria: 'cerveza',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/cervezas/tecate-ligth.webp',
    precio: '$75.00'
  },
  {
    id: '4',
    nombre: 'TECATE ÁMBAR',
    categoria: 'cerveza',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/cervezas/tecate-ambar.webp',
    precio: '$75.00'
  },
  {
    id: '5',
    nombre: 'XX ÁMBAR',
    categoria: 'cerveza',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/cervezas/xx-ambar.webp',
    precio: '$75.00'
  },
  {
    id: '6',
    nombre: 'XX LAGER',
    categoria: 'cerveza',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/cervezas/laguer.webp',
    precio: '$75.00'
  },
  {
    id: '7',
    nombre: 'BOHEMIA CLARA',
    categoria: 'cerveza',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/cervezas/bohemia-clara.webp',
    precio: '$75.00'
  },
  {
    id: '8',
    nombre: 'BOHEMIA OSCURA',
    categoria: 'cerveza',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/cervezas/bohemia-oscura.webp',
    precio: '$75.00'
  },
  {
    id: '9',
    nombre: 'ULTRA',
    categoria: 'cerveza',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/cervezas/ultra.webp',
    precio: '$75.00'
  },
  {
    id: '10',
    nombre: 'XX ULTRA',
    categoria: 'cerveza',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/cervezas/xxultra.webp',
    precio: '$75.00'
  },
  {
    id: '11',
    nombre: 'HEINEKEN',
    categoria: 'cerveza',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/cervezas/heineken.webp',
    precio: '$75.00'
  },
  {
    id: '12',
    nombre: 'HEINEKEN 00',
    categoria: 'cerveza',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/cervezas/heineken00.webp',
    precio: '$75.00'
  },
  {
    id: '13',
    nombre: 'TARRO DE CERVEZA CLARO LT',
    categoria: 'cerveza',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/cervezas/tarro-claro.webp',
    precio: '$110.00'
  },
  {
    id: '14',
    nombre: 'TARRO DE CERVEZA OSCURO LT',
    categoria: 'cerveza',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/cervezas/tarro-oscuro.webp',
    precio: '$110.00'
  },
  {
    id: '15',
    nombre: 'TARRO CUBANO CLARO LT',
    categoria: 'cerveza',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/cervezas/tarro-cubano-claro.webp',
    precio: '$140.00'
  },
  {
    id: '16',
    nombre: 'TARRO CUBANO OSCURO LT',
    categoria: 'cerveza',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/cervezas/tarro-cubano-oscuro.webp',
    precio: '$140.00'
  },
  {
    id: '17',
    nombre: 'TARRO MICHELADO CLARO LT',
    categoria: 'cerveza',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/cervezas/michelada-clara.webp',
    precio: '$125.00'
  },
  {
    id: '18',
    nombre: 'TARRO MICHELADO OSCURO LT',
    categoria: 'cerveza',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/cervezas/michelada-obscura.webp',
    precio: '$125.00'
  },
  {
    id: '19',
    nombre: 'VASO MICHELADO',
    categoria: 'cerveza',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/cervezas/vaso-michelado.webp',
    precio: '$15.00'
  },
  {
    id: '20',
    nombre: 'VASO CUBANO',
    categoria: 'cerveza',
    tipo_contenido: 'imagen',
    ruta_archivo: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/cervezas/vaso-cubano.webp',
    precio: '$20.00'
  }
],
  
  // LICORES CATEGORÍAS
  licoresCategories: [
    { id: '1', nombre: 'WHISKY', icono: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/recursos/iconos-licores/WhikysX3.webp' },
    { id: '2', nombre: 'TEQUILA', icono: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/recursos/iconos-licores/TequilaX3.webp' },
    { id: '3', nombre: 'VODKA', icono: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/recursos/iconos-licores/VodkaX3.webp' },
    { id: '4', nombre: 'RON', icono: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/recursos/iconos-licores/RonX2.webp' },
    { id: '5', nombre: 'BRANDY', icono: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/recursos/iconos-licores/Brandyx3.webp' },
    { id: '6', nombre: 'GINEBRA', icono: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/recursos/iconos-licores/GinebraX3.webp' },
    { id: '7', nombre: 'MEZCAL', icono: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/recursos/iconos-licores/400conejosX3.webp' },
    { id: '8', nombre: 'COGNAC', icono: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/recursos/iconos-licores/Cognac.webp' },
    { id: '9', nombre: 'DIGESTIVOS', icono: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/recursos/iconos-licores/Digestivo.webp' },
    { id: '10', nombre: 'ESPUMOSOS', icono: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/recursos/iconos-licores/Espumoso.webp' }
  ],

  // SUBACATEGORÍAS DE LICORES
// BRANDY
brandies: [
  {
    id: '1',
    nombre: 'TORRES 15 700 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/brandy/torres-15.webp',
    precioBotella: '$1450.00',
    precioLitro: '$365.00',
    precioCopa: '$140.00'
  },
  {
    id: '2',
    nombre: 'TERRY CENTENARIO 700 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/brandy/terry-centenario.webp',
    precioBotella: '$1145.00',
    precioLitro: '$280.00',
    precioCopa: '$110.00'
  },
  {
    id: '3',
    nombre: 'TORRES 10 700 ML',
    imagen:
  'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/brandy/torres-10.webp',

    precioBotella: '$1110.00',
    precioLitro: '$275.00',
    precioCopa: '$110.00'
  },
  {
    id: '4',
    nombre: 'CARLOS I 700 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/brandy/calos-I.webp',
    precioBotella: '$1495.00',
    precioLitro: '$375.00',
    precioCopa: '$135.00'
  },
  {
    id: '5',
    nombre: 'FUNDADOR 700 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/brandy/fundador.webp',
    precioBotella: '$1185.00',
    precioLitro: '$285.00',
    precioCopa: '$105.00'
  }
],

 // COGNAC
cognacs: [
  {
    id: '1',
    nombre: 'Remy Martin V.S.O.P. 700 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/cognac/remy-martin.webp',
    precioBotella: '$2240.00',
    precioLitro: '$600.00',
    precioCopa: '$215.00'
  },
  {
    id: '2',
    nombre: 'Hennessy V.S.O.P. 700 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/cognac/henesyy.webp',
    precioBotella: '$2000.00',
    precioLitro: '$580.00',
    precioCopa: '$200.00'
  },
  {
    id: '3',
    nombre: 'Martell V.S.O.P. 700 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/cognac/martell.webp',
    precioBotella: '$2050.00',
    precioLitro: '$580.00',
    precioCopa: '$200.00'
  },
  {
    id: '4',
    nombre: 'COURVOISIER VSOP',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/cognac/courvoisier.webp',
    precioBotella: '$2150.00',
    precioLitro: '$590.00',
    precioCopa: '$210.00'
  }
],

 // DIGESTIVOS
digestivos: [
  {
    id: '1',
    nombre: 'HIPNOTIQ 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/digestivos/hipnotyc.webp',
    precioBotella: '$1470.00',
    precioCopa: '--'
  },
  {
    id: '2',
    nombre: 'LICOR DEL 43 700 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/digestivos/licor-43.webp',
    precioBotella: '$1390.00',
    precioCopa: '$120.00'
  },
  {
    id: '3',
    nombre: 'JAGERMASTIER 700 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/digestivos/jaguer.webp',
    precioBotella: '$1115.00',
    precioCopa: '$115.00'
  },
  {
    id: '4',
    nombre: 'BAILEYS 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/digestivos/bealys.webp',
    precioBotella: '$1040.00',
    precioCopa: '$100.00'
  },
  {
    id: '5',
    nombre: 'CADENAS DULCE 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/digestivos/cadenas.webp',
    precioBotella: '$920.00',
    precioCopa: '$90.00'
  },
  {
    id: '6',
    nombre: 'ZAMBUCA NEGRO 700 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/digestivos/zambuca-negro.webp',
    precioBotella: '$1350.00',
    precioCopa: '$125.00'
  }
],

 // ESPUMOSOS
espumosos: [
  {
    id: '1',
    nombre: 'MOET ICE',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/espumosos/moet-ice-imperial.webp',
    precioBotella: '$3000.00'
  },
  {
    id: '2',
    nombre: 'MOET ICE ROSÉ',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/espumosos/moet-ice-rose.webp',
    precioBotella: '$3290.00'
  },
  {
    id: '3',
    nombre: 'MOET NECTAR IMPERIAL',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/espumosos/moet-nectar-imperial.webp',
    precioBotella: '$2670.00'
  },
  {
    id: '4',
    nombre: 'CHANDON DELICE',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/espumosos/chandon.webp',
    precioBotella: '$850.00'
  },
  {
    id: '5',
    nombre: 'VEUVE CLICQUOT BRUT 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/espumosos/veuve-clicquot.webp',
    precioBotella: '$3600.00'
  },
  {
    id: '6',
    nombre: 'TAITTINGER BRUT 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/espumosos/taittinger.webp',
    precioBotella: '$3100.00'
  }
],

 // GINEBRA
ginebras: [
  {
    id: '1',
    nombre: 'BOMBAY SAPPHIRE 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/ginebra/bombay.webp',
    precioBotella: '$1295.00',
    precioLitro: '$315.00',
    precioCopa: '$140.00'
  },
  {
    id: '2',
    nombre: 'HENDRICK\'S 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/ginebra/hendrix.webp',
    precioBotella: '$2270.00',
    precioLitro: '$540.00',
    precioCopa: '$195.00'
  },
  {
    id: '3',
    nombre: 'TANQUERAY 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/ginebra/tanqueray.webp',
    precioBotella: '$1135.00',
    precioLitro: '$275.00',
    precioCopa: '$115.00'
  },
  {
    id: '4',
    nombre: 'BEEFEATER 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/ginebra/beefeater.webp',
    precioBotella: '$1100.00',
    precioLitro: '$275.00',
    precioCopa: '$110.00'
  },
  {
    id: '5',
    nombre: 'MONKEY 47 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/ginebra/monkey-47.webp',
    precioBotella: '$2500.00',
    precioLitro: '$625.00',
    precioCopa: '$215.00'
  },
  {
    id: '6',
    nombre: 'THE BOTANIST 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/ginebra/the-botanist.webp',
    precioBotella: '$2200.00',
    precioLitro: '$550.00',
    precioCopa: '$200.00'
  }
],

 // MEZCAL
mezcales: [
  {
    id: '1',
    nombre: '400 CONEJOS 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/mezcal/400-conejos.webp',
    precioBotella: '$1435.00',
    precioLitro: '$360.00',
    precioCopa: '$125.00'
  },
  {
    id: '2',
    nombre: '400 CONEJOS REPOSADO 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/mezcal/400-conejos-reposado.webp',
    precioBotella: '$1595.00',
    precioLitro: '$400.00',
    precioCopa: '$145.00'
  },
  {
    id: '3',
    nombre: 'AMARÁS ESPADIN 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/mezcal/amaras-espadin.webp',
    precioBotella: '$1200.00',
    precioLitro: '$300.00',
    precioCopa: '$120.00'
  },
  {
    id: '4',
    nombre: 'TRIPAS DE MAGUEY 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/mezcal/tripas-de-maguey.webp',
    precioBotella: '$1350.00',
    precioLitro: '$340.00',
    precioCopa: '$130.00'
  },
  {
    id: '5',
    nombre: 'MONTELOBOS 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/mezcal/montelobos.webp',
    precioBotella: '$1550.00',
    precioLitro: '$385.00',
    precioCopa: '$140.00'
  },
  {
    id: '6',
    nombre: 'UNION 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/mezcal/union.webp',
    precioBotella: '$1285.00',
    precioLitro: '$325.00',
    precioCopa: '$120.00'
  }
],

 // RON
rones: [
  {
    id: '1',
    nombre: 'APPLETON ESTATE 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/ron/apleton-state.webp',
    precioBotella: '$1365.00',
    precioLitro: '$345.00',
    precioCopa: '$130.00'
  },
  {
    id: '2',
    nombre: 'BACARDÍ BLANCO 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/ron/bacardi-blanco.webp',
    precioBotella: '$915.00',
    precioLitro: '$220.00',
    precioCopa: '$105.00'
  },
  {
    id: '3',
    nombre: 'BACARDÍ LIMÓN 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/ron/bacardi-limon.webp',
    precioBotella: '$895.00',
    precioLitro: '$215.00',
    precioCopa: '$100.00'
  },
  {
    id: '4',
    nombre: 'BACARDÍ MANGO 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/ron/bacardi-mango.webp',
    precioBotella: '$900.00',
    precioLitro: '$215.00',
    precioCopa: '$105.00'
  },
  {
    id: '5',
    nombre: 'BACARDÍ RASPBERRY 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licories/ron/bacardi-raspberri.webp',
    precioBotella: '$900.00',
    precioLitro: '$215.00',
    precioCopa: '$105.00'
  },
  {
    id: '6',
    nombre: 'CAPITÁN MORGAN 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/ron/capitan-morgan.webp',
    precioBotella: '$1200.00',
    precioLitro: '$295.00',
    precioCopa: '$125.00'
  },
  {
    id: '7',
    nombre: 'HAVANA CLUB 7 700 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/ron/havana-7.webp',
    precioBotella: '$1240.00',
    precioLitro: '$310.00',
    precioCopa: '$125.00'
  },
  {
    id: '8',
    nombre: 'MALIBU 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/ron/malibu.webp',
    precioBotella: '$995.00',
    precioLitro: '$255.00',
    precioCopa: '$110.00'
  },
  {
    id: '9',
    nombre: 'MATUSALEM 15 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/ron/matusalen-15.webp',
    precioBotella: '$1245.00',
    precioLitro: '$310.00',
    precioCopa: '$125.00'
  },
  {
    id: '10',
    nombre: 'MATUSALEM CLÁSICO 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/ron/matusalem-clasico.webp',
    precioBotella: '$960.00',
    precioLitro: '$230.00',
    precioCopa: '$110.00'
  },
  {
    id: '11',
    nombre: 'MATUSALEM PLATINO 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/ron/matusalem-plata.webp',
    precioBotella: '$990.00',
    precioLitro: '--',
    precioCopa: '$110.00'
  },
  {
    id: '12',
    nombre: 'ZACAPA 23 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/ron/zacapa-23.webp',
    precioBotella: '$2100.00',
    precioLitro: '$550.00',
    precioCopa: '$195.00'
  }
],

 // TEQUILA
tequilas: [
  {
    id: '1',
    nombre: 'CUERVO 1800 CRISTALINO 700ML',
    imagen:
      'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/tequila/1800-cristalino.webp',
    precioBotella: '$1790.00',
    precioLitro: '$435.00',
    precioCopa: '$170.00'
  },
  {
    id: '2',
    nombre: 'CUERVO 1800 REPOSADO 700 ML',
    imagen:
      'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/tequila/1800-reposado.webp',
    precioBotella: '$1265.00',
    precioLitro: '$305.00',
    precioCopa: '$135.00'
  },
  {
    id: '3',
    nombre: 'CUERVO ESPECIAL 695 ML',
    imagen:
      'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/tequila/cuervo-especial.webp',
    precioBotella: '$885.00',
    precioLitro: '$265.00', 
    precioCopa: '$125.00'
  },
  {
    id: '4',
    nombre: 'DON JULIO 70 750 ML',
    imagen:
      'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/tequila/don-julio-70.webp',
    precioBotella: '$1865.00',
    precioLitro: '$465.00',
    precioCopa: '$170.00'
  },
  {
    id: '5',
    nombre: 'DON JULIO BLANCO 750 ML',
    imagen:
      'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/tequila/don-julio-blanco.webp',
    precioBotella: '$1325.00',
    precioLitro: '$320.00',
    precioCopa: '$130.00'
  },
  {
    id: '6',
    nombre: 'DON JULIO REPOSADO 750 ML',
    imagen:
      'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/tequila/don-julio-reposado.webp',
    precioBotella: '$1395.00',
    precioLitro: '$380.00',
    precioCopa: '$150.00'
  },
  {
    id: '7',
    nombre: 'HERRADURA REPOSADO 700 ML',
    imagen:
      'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/tequila/herradura-reposado.webp',
    precioBotella: '$1435.00',
    precioLitro: '$360.00',
    precioCopa: '$165.00'
  },
  {
    id: '8',
    nombre: 'MAESTRO DOBEL DIAMANTE',
    imagen:
      'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/tequila/maestro-dobel-diamante.webp',
    precioBotella: '$1780.00',
    precioLitro: '$340.00',
    precioCopa: '$140.00'
  },
  {
    id: '9',
    nombre: 'TRADICIONAL CRISTALINO 750 ML',
    imagen:
      'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/tequila/tradicional-cristalino.webp',
    precioBotella: '$1200.00',
    precioLitro: '$285.00',
    precioCopa: '$115.00'
  },
  {
    id: '10',
    nombre: 'TRADICIONAL PLATA 750 ML',
    imagen:
      'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/tequila/tradicional-plata.webp',
    precioBotella: '$1000.00',
    precioLitro: '$255.00',
    precioCopa: '$115.00'
  },
  {
    id: '11',
    nombre: 'TRADICIONAL REPOSADO 750 ML',
    imagen:
      'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/tequila/tradicional.webp',
    precioBotella: '$1100.00',
    precioLitro: '$285.00',
    precioCopa: '$105.00'
  }
],

  // VODKA
vodkas: [
  {
    id: '1',
    nombre: 'ABSOLUT AZUL 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/vodka/absolut-azul.webp',
    precioBotella: '$1085.00',
    precioLitro: '$275.00',
    precioCopa: '$110.00'
  },
  {
    id: '2',
    nombre: 'ABSOLUT CITRON 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/vodka/absolut-citron.webp',
    precioBotella: '$1090.00',
    precioLitro: '$275.00',
    precioCopa: '$110.00'
  },
  {
    id: '3',
    nombre: 'ABSOLUT MANDRIN 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/vodka/absolut-mandrin.webp',
    precioBotella: '$1090.00',
    precioLitro: '$275.00',
    precioCopa: '$110.00'
  },
  {
    id: '4',
    nombre: 'ABSOLUT RASPBERRI 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/vodka/absolut-raspberri.webp',
    precioBotella: '$1090.00',
    precioLitro: '$275.00',
    precioCopa: '$110.00'
  },
  {
    id: '5',
    nombre: 'GREY GOOSE 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/vodka/grey-goose.webp',
    precioBotella: '$1580.00',
    precioLitro: '$395.00',
    precioCopa: '$135.00'
  },
  {
    id: '6',
    nombre: 'SMIRNOFF 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/vodka/Smirnoff.webp',
    precioBotella: '$875.00',
    precioLitro: '$220.00',
    precioCopa: '$100.00'
  },
  {
    id: '7',
    nombre: 'SMIRNOFF TAMARINDO 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/vodka/smirnoff-tamarindo.webp',
    precioBotella: '$855.00',
    precioLitro: '$225.00',
    precioCopa: '$100.00'
  },
  {
    id: '8',
    nombre: 'STOLICHNAYA 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/vodka/stolichnaya.webp',
    precioBotella: '$1110.00',
    precioLitro: '$275.00',
    precioCopa: '$110.00'
  }
],

// WHISKY
whiskies: [
  {
    id: '1',
    nombre: 'BLACK & WHITE 700 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/whisky/black-and-white.webp',
    precioBotella: '$940.00',
    precioLitro: '$255.00',
    precioCopa: '$105.00'
  },
  {
    id: '2',
    nombre: 'BUCHANANS 18 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/whisky/buchanans-18.webp',
    precioBotella: '$3200.00',
    precioLitro: '--',
    precioCopa: '--'
  },
  {
    id: '3',
    nombre: 'BUCHANANS 12 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/whisky/buchanans-12.webp',
    precioBotella: '$1800.00',
    precioLitro: '$455.00',
    precioCopa: '$165.00'
  },
  {
    id: '4',
    nombre: 'BUCHANANS MASTER 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/whisky/buchanans-masters.webp',
    precioBotella: '$2100.00',
    precioLitro: '$530.00',
    precioCopa: '$190.00'
  },
  {
    id: '5',
    nombre: 'BUCHANANS TWO SOULS 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/whisky/buchanans-two-souls.webp',
    precioBotella: '$1685.00',
    precioLitro: '$410.00',
    precioCopa: '$155.00'
  },
  {
    id: '6',
    nombre: 'CHIVAS REGAL 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/whisky/chivas.webp',
    precioBotella: '$1685.00',
    precioLitro: '$410.00',
    precioCopa: '$155.00'
  },
  {
    id: '7',
    nombre: 'J.W. BLACK LABEL 750 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/whisky/etiqueta-negra.webp',
    precioBotella: '$1815.00',
    precioLitro: '$460.00',
    precioCopa: '$170.00'
  },
  {
    id: '8',
    nombre: 'J.W. GREEN LABEL 700 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/whisky/etiqueta-verde.webp',
    precioBotella: '$2990.00',
    precioLitro: '--',
    precioCopa: '--'
  },
  {
    id: '9',
    nombre: 'J.W. RED LABEL 700 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/whisky/etiqueta-roja.webp',
    precioBotella: '$1090.00',
    precioLitro: '$275.00',
    precioCopa: '$110.00'
  },
  {
    id: '10',
    nombre: 'JACK DANIELS 700 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/whisky/jack-daniels.webp',
    precioBotella: '$1240.00',
    precioLitro: '$255.00',
    precioCopa: '$125.00'
  },
  {
    id: '11',
    nombre: 'JACK DANIELS HONEY 700 ML',
    imagen: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/imagenes/bebidas/licores/whisky/jack-honey.webp',
    precioBotella: '$1190.00',
    precioLitro: '--',
    precioCopa: '--'
  }
],

  // ALITAS
  alitas: [
    {
      id: '1',
      nombre: 'Alitas BBQ (10 pzs)',
      ingredientes: 'Las mejores alitas adobadas, con la famosa salsa BBQ, pero con nuestro toque.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/alitas/alitas-bbq.mp4',
      precio: '$190.00'
    },
    {
      id: '2',
      nombre: 'Alitas BBQ (25 pzs)',
      ingredientes: 'Las mejores alitas adobadas, con la famosa salsa BBQ, pero con nuestro toque.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/alitas/alitas-bbq.mp4',
      precio: '$365.00'
    },
    {
      id: '3',
      nombre: 'Alitas HOT (10 pzs)',
      ingredientes: 'La salsa picante para acompañar una buena chela.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/alitas/alitas-fuego-picante.mp4',
      precio: '$190.00'
    },
    {
      id: '4',
      nombre: 'Alitas HOT (25 pzs)',
      ingredientes: 'La salsa picante para acompañar una buena chela.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/alitas/alitas-fuego-picante.mp4',
      precio: '$365.00'
    },
    {
      id: '5',
      nombre: 'Alitas Mango Habanero (10 pzs)',
      ingredientes: 'Si te gusta el picante, no dejes de probar la mejor combinación de dulce y picosa, salsa de mango agridulce con chile habanero toreado.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/alitas/alitas-%20habanero.mp4',
      precio: '$190.00'
    },
    {
      id: '6',
      nombre: 'Alitas Mango Habanero (25 pzs)',
      ingredientes: 'Si te gusta el picante, no dejes de probar la mejor combinación de dulce y picosa, salsa de mango agridulce con chile habanero toreado.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/alitas/alitas-%20habanero.mp4',
      precio: '$365.00'
    },
    {
      id: '7',
      nombre: 'Alitas Salsa de Jamaica (10 pzs)',
      ingredientes: 'Deliciosas alitas en salsa de flor de jamaica con chile de árbol tostado. Te van a encantar.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/alitas/alitas-jamaica.mp4',
      precio: '$190.00'
    },
    {
      id: '8',
      nombre: 'Alitas Salsa de Jamaica (25 pzs)',
      ingredientes: 'Deliciosas alitas en salsa de flor de jamaica con chile de árbol tostado. Te van a encantar.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/alitas/alitas-jamaica.mp4',
      precio: '$365.00'
    },
    {
      id: '9',
      nombre: 'Extra de Queso',
      ingredientes: 'Extra de queso.',
      video: '',
      precio: '$30.00'
    },
    {
      id: '10',
      nombre: 'Extra de Tocino',
      ingredientes: 'Extra de tocino.',
      video: '',
      precio: '$30.00'
    }
  ],

  // ENSALADAS
  ensaladas: [
    {
      id: '1',
      nombre: 'Ensalada César',
      ingredientes: 'Lechuga romana, crutones, queso parmesano y aderezo César.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/ensaladas/ensalada-cesar.mp4',
      precio: '$120.00'
    },
    {
      id: '2',
      nombre: 'Ensalada de Quinoa',
      ingredientes: 'Quinoa, espinacas, jitomate cherry, aguacate, pepino y aderezo de limón.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/ensaladas/ensalada-de-quinoa.mp4',
      precio: '$140.00'
    },
    {
      id: '3',
      nombre: 'Ensalada Mediterránea',
      ingredientes: 'Lechuga mixta, aceitunas negras, queso feta, jitomate, pepino y aderezo de vinagreta.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/ensaladas/ensalada-mediterranea.mp4',
      precio: '$130.00'
    },
    {
      id: '4',
      nombre: 'Ensalada de Pollo a la Parrilla',
      ingredientes: 'Lechuga, pollo a la parrilla, zanahoria rallada, jitomate, aguacate y aderezo ranch.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/ensaladas/ensalada-mixta-con-pollo-parrilla.mp4',
      precio: '$150.00'
    }
  ],

  // CARNES
  carnes: [
    {
      id: '1',
      nombre: 'Picaña',
      ingredientes: 'Un corte jugoso y tierno con una capa de grasa que resalta su sabor único.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/carnes/picana.mp4',
      precio: '$249.00'
    },
    {
      id: '2',
      nombre: 'Sirloin',
      ingredientes: 'Un corte magro, versátil y delicioso, ideal para asar o cocinar a la plancha.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/carnes/sirloin.mp4',
      precio: '$244.00'
    },
    {
      id: '3',
      nombre: 'Rib Eye',
      ingredientes: 'Un corte suave, jugoso y marmoleado, perfecto para parrilla o plancha.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/carnes/rye-bye.mp4',
      precio: '$369.00'
    },
    {
      id: '4',
      nombre: 'Arrachera',
      ingredientes: 'Un corte marinado con sabor intenso, ideal para asados y tacos.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/carnes/arrachera.mp4',
      precio: '$199.00'
    }
  ],

  // CAFE
  cafes: [
    {
      id: '1',
      nombre: 'Americano',
      ingredientes: 'Café filtrado, con sabor suave y aromático, hecho con granos de alta calidad.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/cafe/cafe-americano.mp4',
      precio: '$55.00'
    },
    {
      id: '2',
      nombre: 'Café express',
      ingredientes: 'Café negro concentrado y fuerte, preparado con máquinas especializadas de alta presión.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/cafe/cafe-express.mp4',
      precio: '$45.00'
    },
    {
      id: '3',
      nombre: 'Capuchino',
      ingredientes: 'Café espresso combinado con leche vaporizada y una capa espumosa decorada con cacao.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/cafe/cafe-capuchino.mp4',
      precio: '$60.00'
    },
    {
      id: '4',
      nombre: 'Mokachino',
      ingredientes: 'Café espresso mezclado con chocolate caliente, leche vaporizada y crema batida.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/cafe/mokachino.mp4',
      precio: '$65.00'
    }
  ],

  // POSTRES
  postres: [
    {
      id: '1',
      nombre: 'Pastel de Tres Leches',
      ingredientes: 'Bizcocho bañado en tres tipos de leche, decorado con crema batida y frutas frescas.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/postres/pastel-de-3-leches.mp4',
      precio: '$95.00'
    },
    {
      id: '2',
      nombre: 'Flan Napolitano',
      ingredientes: 'Flan cremoso con caramelo líquido.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/postres/flan-napolitano.mp4',
      precio: '$85.00'
    },
    {
      id: '3',
      nombre: 'Tarta de Limón',
      ingredientes: 'Base de galleta, crema de limón y merengue dorado.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/postres/tarta-de-limon.mp4',
      precio: '$90.00'
    },
    {
      id: '4',
      nombre: 'Brownie con Helado',
      ingredientes: 'Brownie de chocolate con nueces, helado de vainilla y salsa de chocolate.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/postres/brownie-helado.mp4',
      precio: '$110.00'
    }
  ],
  
  // PIZZAS
  pizzas: [
    {
      id: '1',
      nombre: 'PIZZA DE PASTOR',
      ingredientes: 'Masa crujiente y dorada con una deliciosa salsa de tomate y queso mozzarella, con la carne al pastor, cebolla y cilantro picado, trocitos de piña.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/pizzas/pizza-pastor.mp4',
      precio: '$240.00'
    },
    {
      id: '2',
      nombre: 'PIZZA DE CHILAQUILES ARRACHERA',
      ingredientes: 'Base de salsa verde asada, totopos horneados, arrachera a la parrilla, cebolla, cilantro y gratinado de mozzarella.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/pizzas/pizza-chilaquiles.mp4',
      precio: '$225.00'
    },
    {
      id: '3',
      nombre: 'PIZZA DE PEPPERONI',
      ingredientes: 'Masa clásica con pepperoni, queso gratinado y salsa italiana.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/pizzas/pizza-peperoni.mp4',
      precio: '$110.00'
    },
    {
      id: '4',
      nombre: 'PIZZA HAWAIANA',
      ingredientes: 'Jamón, queso, piña, salsa italiana y queso mozzarella.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/pizzas/pizza-hawaiana.mp4',
      precio: '$115.00'
    },
    {
      id: '5',
      nombre: 'PIZZA DE 3 QUESOS',
      ingredientes: 'Mezcla de queso mozzarella, queso manchego y queso azul gratinados al horno.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/pizzas/pizza-3-quesos.mp4',
      precio: '$100.00'
    }
  ],
  
  // SOPAS
  sopas: [
    {
      id: '1',
      nombre: 'Caldo Tlalpeño',
      ingredientes: 'Pollo, garbanzo, zanahoria, chipotle, aguacate y caldo de pollo.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/sopas/caldo-tlalpeno.mp4',
      precio: '$100.00'
    },
    {
      id: '2',
      nombre: 'Consomé de Pollo',
      ingredientes: 'Pollo, zanahoria, apio, arroz, cilantro y limón.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/sopas/consome-de-pollo.mp4',
      precio: '$90.00'
    },
    {
      id: '3',
      nombre: 'Jugo de Carne',
      ingredientes: 'Carne de res, zanahoria, papa, apio y caldo de hueso.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/sopas/jugo-de-carne.mp4',
      precio: '$110.00'
    },
    {
      id: '4',
      nombre: 'Sopa de Tortilla',
      ingredientes: 'Tortilla frita, jitomate, chile pasilla, aguacate, crema y queso.',
      video: 'https://udtlqjmrtbcpdqknwuro.supabase.co/storage/v1/object/public/productos/videos/comida/sopas/sopa-de-tortilla.mp4',
      precio: '$95.00'
    }
  ]
};

export default ProductData;