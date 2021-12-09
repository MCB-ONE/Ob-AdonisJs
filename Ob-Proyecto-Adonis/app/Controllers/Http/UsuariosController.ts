import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Usuario from 'App/Models/Usuario';
import RegistroValidator from 'App/Validators/RegistroValidator';

export default class UsuariosController {
  public async index({ response }: HttpContextContract) {
    const usuaios = await Usuario.query();

    return response.json({ usuaios });
  }

  public async store({ request, response }: HttpContextContract) {
    //Validar datos
    const data = await request.validate(RegistroValidator);
    const usuario = await Usuario.create(data);
    return response.json({ usuario });
  }

  public async show({ params, response }: HttpContextContract) {
    const usuario = await Usuario.query().where('id', params.id);
    return response.json({ usuario });
  }

  public async update({ params, request, response }: HttpContextContract) {
    const data = request.body();
    const usuario = await Usuario.query().where('id', params.id).update(data);

    return response.json({ usuario });
  }

  public async destroy({ params, response }: HttpContextContract) {
    const usuario = await Usuario.query().where('id', params.id).del();
    return response.json({ usuario });
  }
}
