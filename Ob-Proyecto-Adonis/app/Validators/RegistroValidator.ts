import { schema, rules } from '@ioc:Adonis/Core/Validator';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import BaseValidator from './BaseValidator';

export default class RegistroValidator extends BaseValidator {
  constructor(protected ctx: HttpContextContract) {
    super();
  }
  public schema = schema.create({
    nombre: schema.string({ trim: true }, [
      rules.maxLength(50),
      rules.minLength(5),
      rules.unique({ table: 'usuarios', column: 'nombre' }),
      rules.regex(/^[a-zA-Z0-9]+$/),
    ]),
    email: schema.string({ trim: true }, [
      rules.email(),
      rules.unique({ table: 'usuarios', column: 'email' }),
    ]),
    password: schema.string({}, [
      rules.minLength(8),
      rules.regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]$/),
    ]),
  });
}
