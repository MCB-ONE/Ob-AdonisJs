import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UsersService from 'App/Services/UsersService'

export default class UsersController {
  public async index({ view }: HttpContextContract) {
    return view.render('users')
  }
  public async show({ response }: HttpContextContract) {
    const test = UsersService.test()
    return response.json({ id: test })
  }
  public async create() {}
  public async store() {}
  public async edit() {}
  public async update() {}
  public async destroy() {}
}
