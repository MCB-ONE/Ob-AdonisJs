import { DateTime } from 'luxon';
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm';
import Usuario from './Usuario';
import Experiencia from './Experiencia';

export default class Candidato extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  // Propiedad relacionada
  @column()
  public usuarioId: number;

  @column()
  public nombre: string;

  @column()
  public email: string;

  @column()
  public telefono: string;

  @column()
  public fechaDeNacimiento: Date;

  @column()
  public salarioActual: number;

  @column()
  public salarioDeseado: number;

  @column()
  public localidad: string;

  @column()
  public pais: string;

  @column()
  public remoto: boolean;

  @column()
  public movilidadGeografica: boolean;

  @column()
  public activo: boolean;

  @column()
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Usuario)
  public usuario: BelongsTo<typeof Usuario>;

  @hasMany(() => Experiencia)
  public experiencias: HasMany<typeof Experiencia>;
}
