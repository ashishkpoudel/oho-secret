import { getRepository } from 'typeorm';
import { SecretRepository } from 'secret/domain/repository/secret.repository';
import { Secret } from 'secret/domain/model/secret';
import { SecretMapper } from 'secret/infrastructure/mapper/secret-mapper';
import { TypeormSecret } from 'secret/infrastructure/typeorm/entity/typeorm-secret';

export class TypeormSecretRepository implements SecretRepository {
  async getById(id: string): Promise<Secret> {
    const secret = await getRepository(TypeormSecret).findOneOrFail({ id });
    return SecretMapper.toDomain(secret);
  }

  async save(secret: Secret): Promise<void> {
    const data = SecretMapper.toPersistence(secret);
    await getRepository(TypeormSecret).save(data);
  }
}
