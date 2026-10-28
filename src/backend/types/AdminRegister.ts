export type CuratorRole = "CURATOR_ADMIN" | "CLIENT";

export interface RegisterCuratorInput {
  fullName: string;
  username: string;
  email: string;
  password: string;
}

export interface RegisterCuratorOutput {
  id: string; // data-from: AccountUser-id
  username: string; // data-from: AccountUser-username
  email: string; // data-from: AccountUser-email
  fullName: string; // data-from: AccountUser-fullName
  role: CuratorRole; // data-from: AccountUser-role
  token: string;
}

export interface RegisterFormData {
  fullName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreedToTerms: boolean;
}

export interface SecurityNoticeItem {
  id: string;
  title: string;
  description: string;
  badge: string;
}