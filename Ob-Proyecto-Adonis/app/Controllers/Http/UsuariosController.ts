import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Usuario from 'App/Models/Usuario';

export default class UsuariosController {
  public async index({}: HttpContextContract) {
    return 'GET Users';
  }

  public async store({ response }: HttpContextContract) {
    const user1 = {
      nombre: 'Usuario1',
      email: 'prueba1@prueba.com',
      password: 'usurioPrueba1',
    };

    const user2 = {
      nombre: 'Usuario2',
      email: 'prueba2@prueba.com',
      password: 'usurioPrueba2',
    };

    const usuarios = await Usuario.createMany([user1, user2]);

    return response.json({ usuarios });
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
