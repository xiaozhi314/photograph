export type AccountRoleType = 'CLIENT' | 'CURATOR_ADMIN';

export interface ClientPrivilege {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface RegisterFormData {
  fullName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterFormErrors {
  fullName?: string;
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  general?: string;
}

export interface RegisterClientInput {
  fullName: string;
  username: string;
  email: string;
  password: string;
}

export interface RegisterClientOutput {
  id: string; // data-from: AccountUser-id
  username: string; // data-from: AccountUser-username
  email: string; // data-from: AccountUser-email
  fullName: string; // data-from: AccountUser-fullName
  role: AccountRoleType; // data-from: AccountUser-role
  message: string;
}