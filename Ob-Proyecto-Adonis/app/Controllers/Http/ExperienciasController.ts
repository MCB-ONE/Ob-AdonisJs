import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Experiencia from 'App/Models/Experiencia';

export default class ExperienciasController {
  public async index({ response }: HttpContextContract) {
    const experiencias = await Experiencia.query();

    return response.json({ experiencias });
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['candidatoId', 'skillId', 'nivel']);
    const experiencia = await Experiencia.create(data);

    return response.json({ experiencia });
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
