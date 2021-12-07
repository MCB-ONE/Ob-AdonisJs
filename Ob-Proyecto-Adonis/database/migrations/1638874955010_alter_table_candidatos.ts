import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Candidatos extends BaseSchema {
  protected tableName = 'candidatos';

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('salario_actual').nullable().unsigned();
      table.integer('salario_deseado').nullable().unsigned();
    });
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumns('salario_actual', 'salario_deseado');
    });
  }
}
