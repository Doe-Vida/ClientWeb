export class Questions{
  Id!: string;
  Key!: string;
  Question!: string;
  Value?: boolean | null;

  static fromJson(data: any): Questions{
    return Object.assign({}, new Questions(), data);
  }
}
