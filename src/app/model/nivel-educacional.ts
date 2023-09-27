export class NivelEducacional {

  public id: number;
  public nombre: string;

  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }

  public toString(): string {
    return `${this.id} - ${this.nombre}`;
  }

  public static findNivelEducacionalById(id: number): NivelEducacional | undefined {
    return this.getNivelesEducacionales().find(n => n.id === id);
  }

  public static getNivelesEducacionales(): NivelEducacional[] {
    const nived = [];
    nived.push(new NivelEducacional(1, 'Sin nivel educacional'));
    nived.push(new NivelEducacional(2, 'Básica incompleta'));
    nived.push(new NivelEducacional(3, 'Básica completa'))
    nived.push(new NivelEducacional(4, 'Media incompleta'));
    nived.push(new NivelEducacional(5, 'Media completa'));
    nived.push(new NivelEducacional(6, 'Superior incompleta'));
    nived.push(new NivelEducacional(7, 'Superior completa'));
    return nived;
  }

  

  public setNivelEducacional(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }


  public static findNombreBy(id: number): string {
    if (id < 1 || id > 6) {
      return 'Sin nivel educacional';
    }
    return NivelEducacional.getNivelesEducacionales().find((n: NivelEducacional) => n.id === id)?.nombre || '';
  }
  
  public getTextoId(): string {
    if (this.id < 1 || this.id > 6) {
      return 'Sin nivel educacional';
    }
    return this.id.toString();
  }

  public getTextoNombre(): string {
    return this.nombre? this.nombre : 'No asignado';
  }


  public getTextoNivelEducacional(): string {
    if (this.id < 1 || this.id > 6) {
      return 'No asignado';
    } else {
      return this.id.toString() + ' - ' + NivelEducacional.findNombreBy(this.id);
    }
  }
}
