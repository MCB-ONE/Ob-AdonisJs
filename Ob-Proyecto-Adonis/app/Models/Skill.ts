import { DateTime } from 'luxon';
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm';
import Experiencia from './Experiencia';

export default class Skill extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public nombre: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => Experiencia, {
    foreignKey: 'skillId',
  })
  public experiencia: HasMany<typeof Experiencia>;
}
