export class Secret {
  private secret: string;
  private password: string;
  private expiresIn: string;

  constructor(props: any) {
    this.secret = props.secret;
    this.password = props.password;
    this.expiresIn = props.expiresIn;
  }
}
