import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Usuarios extends BaseSchema {
  protected tableName = 'usuarios';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('nombre', 50).unique().notNullable();
      table.string('email', 320).unique().notNullable();
      table.string('password', 180).notNullable();
      table.string('remember_me_token').nullable();
      table.timestamps(true, true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
