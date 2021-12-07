import { schema, rules } from '@ioc:Adonis/Core/Validator';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import BaseValidator from './BaseValidator';

export default class CandidatoValidator extends BaseValidator {
  constructor(protected ctx: HttpContextContract) {
    super();
  }

  public schema = schema.create({
    nombre: schema.string({ trim: true }, [
      rules.maxLength(50),
      rules.minLength(5),
      rules.regex(/^[a-zA-Z]+$/),
    ]),
    email: schema.string({ trim: true }, [
      rules.email(),
      rules.unique({ table: 'candidatos', column: 'email' }),
    ]),
    telefono: schema.string({}, [
      rules.minLength(9),
      rules.unique({ table: 'candidatos', column: 'telefono' }),
      /* RegEx número nacional
      rules.regex(/^[9|6]{1}([\d]{2}[-]*){3}[\d]{2}$/), */
    ]),
    fecha_nacimiento: schema.date({
      format: 'yyyy-MM-dd',
    }),
    salario_actual: schema.number([rules.unsigned(), rules.range(0, 500000)]),
    salario_deseado: schema.number([rules.unsigned(), rules.range(0, 500000)]),
    localidad: schema.string(),
    pais: schema.string(),
    remoto: schema.boolean(),
    movilidad_geografica: schema.boolean(),
    activo: schema.boolean(),
    usuario_id: schema.number([rules.exists({ table: 'usuarios', column: 'id' })]),
  });

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
}
