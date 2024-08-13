import { ReactNode } from "react";

export interface NavBarItems {
  title: string;
  icon: ReactNode;
  isFolder: boolean;
  children: NavBarItems[] | null;
}
