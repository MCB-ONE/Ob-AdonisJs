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
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route';

// Register users
Route.post('registro', 'UsuariosController.store').prefix('api');
// Session users
Route.post('login', 'SessionsController.store').prefix('api');
Route.get('logout', 'SessionsController.delete').prefix('api');
// More users routes
// TODO APPLY AYTH MIDDLEWARE
Route.group(() => {
  Route.resource('usuarios', 'UsuariosController').apiOnly();
}).prefix('api');
/*   .middleware('auth'); */

// Skills routes
Route.group(() => {
  Route.resource('skills', 'SkillsController').apiOnly();
}).prefix('api');
/* .middleware('auth'); */

// Candidatos routes
Route.group(() => {
  Route.resource('candidatos', 'CandidatosController').apiOnly();
})
  .prefix('api')
  .middleware('auth');
// Experiencias routes
Route.group(() => {
  Route.resource('experiencias', 'ExperienciasController').apiOnly();
}).prefix('api');
/*   .middleware('auth'); */
