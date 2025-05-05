import CocktailRepositoryPort from '../../Dominio/ports/CocktailRepositoryPort.js';

class CocktailsAdapter extends CocktailRepositoryPort {
  constructor() {
    super();
    // Data loaded from Supabase's cocteleria table
    this.cocktails = [
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
    ];
  }
  
  async getAllCocktails() {
    return this.cocktails;
  }
  
  async getCocktailById(id) {
    return this.cocktails.find(cocktail => cocktail.id === id);
  }
}

export default CocktailsAdapter;