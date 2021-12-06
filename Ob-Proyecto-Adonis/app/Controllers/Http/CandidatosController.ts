import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Database from '@ioc:Adonis/Lucid/Database';
import Candidato from 'App/Models/Candidato';

export default class CandidatosController {
  public async index({ response }: HttpContextContract) {
    // Metodo simple getAllCandidatos
    const candidatos = await Candidato.query();

    return response.json({ candidatos });
  }

  public async store({ request, response }: HttpContextContract) {
    // TODO validar los nuevos datos antes de actualizar
    const data = request.only([
      'nombre',
      'email',
      'telefono',
      'fechaNacimiento',
      'salarioActual',
      'salarioDeseado',
      'localidad',
      'pais',
      'remoto',
      'movilidadGeografica',
      'activo',
      'usuarioId',
    ]);

    const candidato = await Candidato.create(data);

    return response.json({ candidato });
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
