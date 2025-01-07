export class UserModel {
  public gender!: string;
  public email!: string;
  public name!: {
    title: string;
    first: string;
    last: string;
  };
}
