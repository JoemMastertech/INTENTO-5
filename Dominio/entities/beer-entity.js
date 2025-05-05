/* @tweakable validation rules for beer data */
class BeerEntity {
  constructor(id, nombre, imagen, precio) {
    this.id = id;
    this.nombre = nombre;
    this.imagen = imagen;
    this.precio = precio;
    
    this.validate();
  }
  
  validate() {
    if (!this.id || !this.nombre || !this.precio) {
      throw new ValidationError('Datos incompletos para cerveza');
    }
  }
}

export default BeerEntity;

