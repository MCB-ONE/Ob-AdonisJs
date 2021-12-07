import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class SessionsController {
  public async store({ auth, request, response }: HttpContextContract) {
    const email = request.input('email');
    const password = request.input('password');

    console.log(email);
    try {
      const token = await auth.use('api').attempt(email, password, {
        expiresIn: '30mins',
      });
      return token;
    } catch {
      return response.badRequest('Invalid credentials');
    }
  }
}
