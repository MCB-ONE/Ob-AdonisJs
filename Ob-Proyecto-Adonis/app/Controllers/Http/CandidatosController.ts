import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Candidato from 'App/Models/Candidato';
/* import CandidatoValidator from 'App/Validators/CandidatoValidator'; */

export default class CandidatosController {
  public async index({ response, request }: HttpContextContract) {
    const query = Object.keys(request.qs())[0];
    const value = Object.values(request.qs())[0];
    if (query === 'localidad') {
      const candidatos = await Candidato.query()
        .where('activo', true)
        .andWhere({
          [query]: value,
          movilidad_geografica: true,
        });
      return response.json({ candidatos });
    } else if (query === 'pais') {
      const candidatos = await Candidato.query()
        .where('activo', true)
        .andWhere({
          [query]: value,
        });
      return response.json({ candidatos });
    } else if (query === 'remoto') {
      const candidatos = await Candidato.query()
        .where('activo', true)
        .andWhere({
          [query]: value,
        });
      return response.json({ candidatos });
    } else if (query === 'salario_deseado') {
      const candidatos = await Candidato.query().where('activo', true).andWhere(query, '<=', value);
      return response.json({ candidatos });
    } else if (query === 'activo') {
      const candidatos = await Candidato.query().where('activo', 0);
      console.log(query);
      console.log(value);
      return response.json({ candidatos });
    } else {
      const candidatos = await Candidato.query().where('activo', true);
      return response.json({ candidatos });
    }
  }
  public async filtered({ request, response /* , params */ }: HttpContextContract) {
    // TODO validar los nuevos datos antes de actualizar
    const filtersString = request.qs();
    // Recuperar valores para cada tipo de filtro
    const candidatos = await Candidato.query()
      .where('activo', true)
      .whereHas('experiencias', (expQuery) => {
        expQuery
          .whereIn('skill_id', filtersString.skill_id)
          .andWhereIn('nivel', filtersString.nivel);
      })
      .whereHas('experiencias', (expQuery) => {
        expQuery.whereIn(['nivel'], filtersString.nivel);
      })
      .preload('experiencias', (expQuery) => {
        expQuery.preload('skill');
      });

    /* candidatos.map((candidato) => {
      console.log(`Candidato id: ${candidato.id}_______-`);
      console.log(`Experiencias`);
      candidato.experiencias.map((experiencia) => {
        console.log(`Experiencia: ${experiencia.skill.nombre} - Nivel: ${experiencia.nivel}`);
      });
    }); */

    return response.json(candidatos);
  }

  public async candidatosExperiencias({ response }: HttpContextContract) {
    const candidatos = await Candidato.query()
      .where('activo', true)
      .preload('experiencias', (query) => {
        query.preload('skill');
      });
    return response.json({ candidatos });
  }

  public async store({ request, response }: HttpContextContract) {
    // TODO validar los nuevos datos antes de actualizar
    /*   const data = await request.validate(CandidatoValidator);
    console.log(JSON.stringify(data)); */
    const data = request.all();
    const candidato = await Candidato.create(data);
    return response.json({ candidato });
  }

  public async show({ params, response }: HttpContextContract) {
    const candidato = await Candidato.query().where('id', params.id);
    return response.json({ candidato });
  }

  public async update({ params, request, response }: HttpContextContract) {
    const data = request.body();
    const candidato = await Candidato.query().where('id', params.id).update(data);

    return response.json({ candidato });
  }

  public async destroy({ params, response }: HttpContextContract) {
    const candidato = await Candidato.query().where('id', params.id).del();
    return response.json({ candidato });
  }
}
