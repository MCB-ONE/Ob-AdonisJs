import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Database from '@ioc:Adonis/Lucid/Database';
import Skill from 'App/Models/Skill';

export default class SkillsController {
  public async index({ response }: HttpContextContract) {
    // Query getAllSkills
    const skills = await Skill.query();

    // Retornamos el objeto del propio registro que tiene la response parseada a json
    return response.json({ skills });
  }

  public async store({ request, response }: HttpContextContract) {
    const nombre = request.input('nombre');
    /*Sentencia insert usando el metodo de modelos:
      -> const skill = await Skill.create({ nombre });*/
    // sentencia insert usando el metodo de base de datos:
    const skill = await Database.insertQuery<Skill>().table('skills').insert({ nombre });

    return response.json({ skill });
  }

  public async show({ params, response }: HttpContextContract) {
    /* Query para buscar UN registro concreto
      1. Usando el query modulo de modelos
       const skill = await Skill.query().where('id', params.id).firstOrFail();
       const skill = await Skill.findOrFail(params.id);
       const skill = await Skill.findByOrFail('id', params.id);
    */

    const skill = await Database.from('skills').where('id', params.id).firstOrFail();

    return response.json({ skill });
  }

  public async update({ request, params, response }: HttpContextContract) {
    // Primero recuperamos el registo a actualizar de la BD
    const skill = await Skill.findOrFail(params.id);
    // TODO validar los nuevos datos antes de actualizar
    // Seteamos los nuevos valores a actualizar en el objeto
    skill.nombre = request.input('nombre');
    // Actualizamos el registro en la tabla
    await skill.save();

    return response.json({ skill });
  }

  public async destroy({ params, response }: HttpContextContract) {
    /* generador de consulta d emodelos
    const skill = await Skill.findOrFail(params.id);
    await skill.delete(); */
    // generador de consulta base de datos
    const skill = await Database.from('skills').where('id', params.id).delete();

    return response.json({ skill });
  }
}
