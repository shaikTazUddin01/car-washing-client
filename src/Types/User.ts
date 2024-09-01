export type TUser = {
  key?:string;
  AuthId: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
};


export type TReview={
  rating:number;
  comment:string;
  user:any;
}