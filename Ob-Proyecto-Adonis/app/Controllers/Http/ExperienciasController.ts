import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Experiencia from 'App/Models/Experiencia';

export default class ExperienciasController {
  public async index({ response }: HttpContextContract) {
    const experiencias = await Experiencia.query();

    return response.json({ experiencias });
  }

  public async store({ request, response }: HttpContextContract) {
    // TODO VALIDATE DATA
    const data = request.only(['candidatoId', 'skillId', 'nivel']);
    const experiencia = await Experiencia.firstOrCreate(data);

    return response.json({ experiencia });
  }

  public async show({ params, response }: HttpContextContract) {
    const experiencia = await Experiencia.query().where('id', params.id);
    return response.json({ experiencia });
  }

  public async update({ params, request, response }: HttpContextContract) {
    // TODO VALIDATE DATA
    const data = request.body();
    const experiencia = await Experiencia.query().where('id', params.id).update(data);

    return response.json({ experiencia });
  }

  public async destroy({ params, response }: HttpContextContract) {
    const experiencia = await Experiencia.query().where('id', params.id).del();
    return response.json({ experiencia });
  }
}
