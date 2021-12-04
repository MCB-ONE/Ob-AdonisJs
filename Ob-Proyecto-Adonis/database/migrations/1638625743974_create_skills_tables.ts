import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Skill extends BaseSchema {
  protected tableName = 'skill';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('nombre', 50).unique().notNullable();
      table.timestamps(true, true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
