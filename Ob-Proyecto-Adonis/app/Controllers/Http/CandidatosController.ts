import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Candidato from 'App/Models/Candidato';

export default class CandidatosController {
  public async index({ response }: HttpContextContract) {
    // Metodo simple getAllCandidatos
    const candidatos = await Candidato.query();

    return response.json({ candidatos });
  }

  public async store({ request, response }: HttpContextContract) {
    // TODO validar los nuevos datos antes de actualizar
    const data = request.body();
    const candidato = await Candidato.create(data);

    return response.json({ candidato });
  }

  public async show({ params, response }: HttpContextContract) {
    const candidato = await Candidato.query().where('id', params.id);
    return response.json({ candidato });
  }

  public async update({ params, request, response }: HttpContextContract) {
    const data = request.body();
    const candidato = await Candidato.query().where('id', params.id).update(data);

    return response.json({ candidato });
  }

  public async destroy({ params, response }: HttpContextContract) {
    const candidato = await Candidato.query().where('id', params.id).del();
    return response.json({ candidato });
  }
}
