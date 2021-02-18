import { Express } from 'express';
import * as Knex from 'knex';
import * as KnexDbManager from 'knex-db-manager';
import app from 'app';
import { db } from 'database';

export class AppFactory {
  private constructor(
    public instance: Express,
    private knex: Knex,
    private dbManager: KnexDbManager,
  ) { }

  static async new(): Promise<AppFactory> {
    return new AppFactory(
      app,
      db,
      dbManager.database,
    );
  }

  async refreshDatabase(): Promise<void> {
    await this.knex.migrate.rollback(); // TODO: Implement more efficient way
    await this.knex.migrate.up();
  }

  close(): Promise<void> {
    return this.knex.destroy();
  }
}
