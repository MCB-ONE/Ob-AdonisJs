import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Candidato from 'App/Models/Candidato';
import CandidatoValidator from 'App/Validators/CandidatoValidator';

export default class CandidatosController {
  public async index({ response }: HttpContextContract) {
    // Metodo simple getAllCandidatos
    const candidatos = await Candidato.query();

    return response.json({ candidatos });
  }

  public async store({ request, response }: HttpContextContract) {
    // TODO validar los nuevos datos antes de actualizar
    const data = await request.validate(CandidatoValidator);

    console.log(data);

    /*   */
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
