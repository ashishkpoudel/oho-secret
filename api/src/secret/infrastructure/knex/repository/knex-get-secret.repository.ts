import { db } from 'database';
import { GetSecretRepository } from 'secret/application/get-secret/get-secret.repository';
import { Secret } from 'secret/application/get-secret/secret';

export class KnexGetSecretRepository implements GetSecretRepository {
  async byId(id: string): Promise<Secret> {
    const secret = await db('secrets').where({ id }).first();
    return new Secret({
      id: secret.id,
      body: secret.body,
      password: secret.password,
      expiresIn: secret.expiresIn,
    });
  }
}
