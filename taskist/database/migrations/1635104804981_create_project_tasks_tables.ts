import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProjectTasks extends BaseSchema {
  protected tableName = 'project_tasks'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('role_id').unsigned().notNullable().defaultTo(1)
      table.integer('proyect_id').unsigned().references('id').inTable('projects')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
