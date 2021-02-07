export class CreateSecret {
  public readonly id: string;
  public readonly body: string;
  public readonly password: string | null;
  public readonly expiresIn: string;

  constructor(data: CreateSecret) {
    Object.assign(this, data);
  }
}
