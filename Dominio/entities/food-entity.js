/* @tweakable validation rules for food data */
class FoodEntity {
  constructor(id, nombre, ingredientes, video, precio) {
    this.id = id;
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.video = video;
    this.precio = precio;
    
    this.validate();
  }
  
  validate() {
    if (!this.id || !this.nombre || !this.precio) {
      throw new ValidationError('Datos incompletos para alimento');
    }
  }
}

export default FoodEntity;

