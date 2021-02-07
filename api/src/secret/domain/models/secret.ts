import { URL } from 'url';

export class Secret {
  public readonly id: string;
  public readonly body: string;
  public readonly password: string | null;
  public readonly expiresIn: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  getSharingLink(baseUrl: string): string {
    return new URL(`/secrets/${this.id}`, baseUrl).toString();
  }
}
