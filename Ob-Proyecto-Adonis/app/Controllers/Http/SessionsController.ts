import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Usuario from 'App/Models/Usuario';
import RegistroValidator from 'App/Validators/RegistroValidator';

export default class SessionsController {
  public async register({ request, response }: HttpContextContract) {
    //Validar datos
    const data = await request.validate(RegistroValidator);
    const usuario = await Usuario.create(data);
    return response.json({ usuario });
  }

  public async login({ auth, request, response }: HttpContextContract) {
    const email = request.input('email');
    const password = request.input('password');
    try {
      const token = await auth.use('api').attempt(email, password, {
        expiresIn: '30mins',
      });
      return token;
    } catch {
      return response.badRequest('Invalid credentials');
    }
  }

  public async logout({ auth, response }) {
    await auth.use('api').logout();
    return response;
  }
}
