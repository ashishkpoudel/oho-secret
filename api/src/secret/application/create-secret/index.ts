import { secretRepository } from 'secret/domain';
import { CreateSecret } from 'secret/application/create-secret/create-secret';

const createSecretService = new CreateSecret(secretRepository);

export { createSecretService };
