import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema, rules } from '@ioc:Adonis/Core/Validator';
import Usuario from 'App/Models/Usuario';
import RegistroValidator from 'App/Validators/RegistroValidator';

export default class UsuariosController {
  public async index({}: HttpContextContract) {
    return 'GET Users';
  }

  public async store({ request, response }: HttpContextContract) {
    //Validar datos
    const data = await request.validate(RegistroValidator);
    const usuario = await Usuario.create(data);

    return response.json({ usuario });
  }

  public async show({ params }: HttpContextContract) {
    return `GET User: ${params.id}`;
  }

  public async update({ params }: HttpContextContract) {
    return `PUT User: ${params.id}`;
  }

  public async destroy({ params }: HttpContextContract) {
    return `DELETE User: ${params.id}`;
  }
}
