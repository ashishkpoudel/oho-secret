import { Secret } from 'secret/domain/model/secret';
import { TypeormSecret } from 'secret/infrastructure/typeorm/entity/typeorm-secret';

export class SecretMapper {
  public static toDomain(raw: any): Secret {
    return new Secret({
      id: raw.id,
      body: raw.body,
      password: raw.password,
      expiresIn: raw.expiresIn,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    });
  }

  public static toPersistence(secret: Secret): TypeormSecret {
    return new TypeormSecret({
      id: secret.id,
      body: secret.body,
      password: secret.password,
      expiresIn: secret.expiresIn,
      createdAt: secret.createdAt,
      updatedAt: secret.updatedAt,
    });
  }
}
