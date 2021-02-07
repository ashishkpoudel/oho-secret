import { getRepository } from 'typeorm';
import { SecretEntity } from 'secret/infrastructure/typeorm/entities/secret.entity';

export const findSecretById = async (id: string): Promise<SecretEntity> => {
  return getRepository(SecretEntity)
    .findOneOrFail({
      where: {
        id,
      },
    });
};
