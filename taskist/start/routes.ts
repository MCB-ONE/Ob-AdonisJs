/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

/* //Acceso a los parametros de la petcición http y devolviendo un retorno condicional del manejador de ruta segun los params
Route.get('/users/:username?', async ({ params }) => {
  if (params.username) {
    return `Hola, ` + params.username
  } else {
    return `Por favor, mencione un pefil a buscar.`
  }
}) */

/* Route.get('api/users/', async (ctx: HttpContextContract) => {
  return ctx.view.render('users')
}) */

/* //Pasando el objeto context completo al manejador de la petición
Route.get('api/users/:username', async (ctx: HttpContextContract) => {
  return ctx.response.json({ username: ctx.params.username })
}) */

/* //Pasando por referencia propiedades de contextHttp
Route.get('/users/:username', async ({ response, params }: HttpContextContract) => {
  return response.json({ username: params.username })
})*/

//Agrupamiento de rutas
/* Route.group(() => {
  Route.get('/', 'UsersController.index').as('index')
  Route.get('/:id', 'UsersController.show').as('show')
  Route.get('/:id?', 'UsersController.create').as('create')
  Route.post('/new', 'UsersController.store').as('store')
  Route.put('/:id/edit', 'UsersController.edit').as('edit')
  Route.put('/', 'UsersController.update').as('update')
  Route.delete('/', 'UsersController.destroy').as('delete')
})
  .prefix('/users')
  .as('users.') */
Route.resource('users', 'UsersController')
