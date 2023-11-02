import { Profile, Role } from "@prisma/client";

export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  subscription?: string | null;
  subscribed: boolean;
  role: Role;
  profile?: Profile;
}
