export class BaseResult{
  public data: any;
  public errors: string[]=[];
  public message?: string;
  public success?: boolean;

  static fromJson(jsonData: any): BaseResult {
      return Object.assign(new BaseResult(), jsonData);
  }
}
