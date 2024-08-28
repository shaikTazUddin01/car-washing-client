export type TUser = {
  key?:string;
  AuthId: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
};
