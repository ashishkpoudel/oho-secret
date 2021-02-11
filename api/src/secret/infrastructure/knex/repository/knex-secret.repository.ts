import { db } from 'database';
import { SecretRepository } from 'secret/domain/repository/secret.repository';
import { Secret } from 'secret/domain/model/secret';
import { SecretMapper } from 'secret/infrastructure/mapper/secret-mapper';

export class KnexSecretRepository implements SecretRepository {
  async getById(id: string): Promise<Secret> {
    const secret = await db('secrets').where({ id }).first();
    return SecretMapper.toDomain(secret);
  }

  async save(secret: Secret): Promise<void> {
    const data = SecretMapper.toPersistence(secret);
    await db('secrets').insert(data);
  }
}
