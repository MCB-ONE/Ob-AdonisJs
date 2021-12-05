import { DateTime } from 'luxon';
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm';
import Nivel from 'Contracts/Enums/nivel';
import Candidato from './Candidato';
import Skill from './Skill';

export default class Experiencia extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public candidatoId: number;

  @column()
  public skillId: number;

  @column()
  public nivel: Nivel;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Candidato, {
    localKey: 'candidatoId',
  })
  public candidato: BelongsTo<typeof Candidato>;

  @belongsTo(() => Skill, {
    localKey: 'skillId',
  })
  public skill: BelongsTo<typeof Skill>;
}
