import { ReactNode } from "react";

export type TPath = {
  name: string;
  path?: string;
  index?: boolean;
  element?: ReactNode;
  children?: TPath[];
};

export type TRoute = {
  path: string;
  index?:boolean;
  // index?: boolean;
  element?: ReactNode;
};
export type TsideBar = {
  key: string;
  label: ReactNode;
  children?: TsideBar[];
};