import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Candidatos extends BaseSchema {
  protected tableName = 'candidatos';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('nombre', 50).notNullable();
      table.string('email', 320).notNullable().unique;
      table.string('telefono').notNullable().unique;
      table.date('fecha_nacimiento').notNullable();
      table.integer('salario_actual').notNullable();
      table.integer('salario_deseado').notNullable();
      table.string('localidad').notNullable();
      table.string('pais').notNullable();
      table.boolean('remoto').notNullable().defaultTo(true);
      table.boolean('movilidad_geografica').notNullable().defaultTo(true);
      table.boolean('activo').notNullable().defaultTo(true);
      /*  - UserId(relación) */
      table
        .integer('usuario_id')
        .notNullable()
        .unsigned()
        .references('usuarios.id')
        .onDelete('CASCADE'); /**BORRADO EN CASCADA!! */
      table.timestamps(true, true);
    });
  }
  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
