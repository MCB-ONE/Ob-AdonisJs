import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Skill from 'App/Models/Skill';

export default class SkillsController {
  public async index({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const nombre = request.input('nombre');
    const skill = await Skill.create({ nombre });

    return response.json({ skill });
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
