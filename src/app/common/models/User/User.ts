export class User{
  public birthdate?: string
  public blood_type?: string
  public city?: string
  public date_last_donation?: string
  public first_name?: string
  public id?: string
  public last_name?: string
  public password?: string
  public phone?: string
  public qty_donations?: string
  public sex?: boolean
  public state?: string
  public username!: string

  static froJson(jsonData: any): User {
    return Object.assign({}, new User(), jsonData);
  }
}
