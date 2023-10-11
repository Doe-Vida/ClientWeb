export class User{
  public birthdate?: string
  public blood_type?: string
  public city?: string
  public date_last_donation?: string
  public first_name?: string
  public id?: string
  public last_nam?: string
  public passwor?: string
  public phon?: string
  public qty_donation?: string
  public se?: boolean
  public stat?: string
  public usernam?: string

  static froJson(jsonData: any): User {
    return Object.assign({}, new User(), jsonData);
  }
}
