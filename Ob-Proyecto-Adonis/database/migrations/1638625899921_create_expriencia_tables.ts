import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Experiencia extends BaseSchema {
  protected tableName = 'experiencia';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table
        .integer('candidato_id')
        .unsigned()
        .references('id')
        .inTable('candidatos')
        .onDelete('CASCADE');
      table.integer('skill_id').unsigned().references('id').inTable('skill').onDelete('CASCADE');
      /* - Nivel(número - 1(junior), 2(semi - senior), 3(senior)) ***ENUM***/
      table.integer('nivel').unsigned().notNullable().defaultTo(2);
      table.timestamps(true, true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
