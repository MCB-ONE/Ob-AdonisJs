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
Route.post('registro', 'UsuariosController.store');
// Login users
Route.post('login', 'SessionsController.store');
// More users routes
Route.get('usuarios', 'UsuariosController.index');

// Skills routes
Route.resource('skills', 'SkillsController').apiOnly();
Route.resource('candidatos', 'CandidatosController').apiOnly();
Route.resource('experiencias', 'ExperienciasController').apiOnly();
