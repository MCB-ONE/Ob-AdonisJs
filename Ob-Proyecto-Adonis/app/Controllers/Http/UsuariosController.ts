import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Usuario from 'App/Models/Usuario';

export default class UsuariosController {
  public async index({}: HttpContextContract) {
    return 'GET Users';
  }

  public async store({}: /*  request, response */ HttpContextContract) {
    /* const data = request.only(['nombre', 'email', 'password', ])
    const usuario = new Usuario();
    usuario.nombre; */
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
