import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class UsersController {
  public async index(ctx: HttpContextContract) {
    return 'GET Users';
  };

  public async store({ request, response }: HttpContextContract) {
    response.status(201);
    return {
      message: 'POST New User',
      body: request.body(),
    }

  };

  public async show({params}:HttpContextContract) {
    return `GET User: ${params.id}`
  };

  public async update({params}:HttpContextContract) {
    return `PUT User: ${params.id}`
  };

  public async destroy({params}:HttpContextContract) {
    return `DELETE User: ${params.id}`
  };
};
