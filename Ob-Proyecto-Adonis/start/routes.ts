import Route from '@ioc:Adonis/Core/Route';
// TODO APPLY AYTH MIDDLEWARE
// Session routes
Route.post('registro', 'SessionsController.register').prefix('api');
Route.post('login', 'SessionsController.login').prefix('api');
Route.get('logout', 'SessionsController.logout').prefix('api'); /*   .middleware('auth'); */

// More users routes
// TODO APPLY AYTH MIDDLEWARE
Route.group(() => {
  Route.resource('usuarios', 'UsuariosController').apiOnly();
}).prefix('api');
/*   .middleware('auth'); */

// Skills routes
// TODO APPLY AYTH MIDDLEWARE
Route.group(() => {
  Route.resource('skills', 'SkillsController').apiOnly();
}).prefix('api');
/* .middleware('auth'); */

// Experiencias routes
// TODO APPLY AYTH MIDDLEWARE
Route.group(() => {
  Route.resource('experiencias', 'ExperienciasController').apiOnly();
}).prefix('api');
/*   .middleware('auth'); */

// Candidatos routes
// TODO APPLY AYTH MIDDLEWARE
Route.group(() => {
  Route.group(() => {
    Route.get('/', 'CandidatosController.index');
    Route.get('/experiencias', 'CandidatosController.candidatosExperiencias');
    Route.get('/filtered/', 'CandidatosController.filtered');
    Route.post('/', 'CandidatosController.store');
    Route.get('/:id', 'CandidatosController.show').where('id', {
      match: /^[0-9]+$/,
      cast: (id) => Number(id),
    });
    Route.patch('/:id', 'CandidatosController.update');
    Route.delete('/:id', 'CandidatosController.destroy');
  }).prefix('/candidatos');
}).prefix('/api');
/* .middleware('auth'); */
