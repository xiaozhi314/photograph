export type AccountRoleType = "CLIENT" | "CURATOR_ADMIN";

export interface ClientLoginInput {
  account: string; // username or email
  password: string;
}

export interface ClientLoginOutput {
  token: string; // data-from: AccountUser-id
  userId: string; // data-from: AccountUser-id
  username: string; // data-from: AccountUser-username
  email: string; // data-from: AccountUser-email
  fullName: string; // data-from: AccountUser-fullName
  role: AccountRoleType; // data-from: AccountUser-role
}

export interface ClientLoginFormState {
  account: string;
  password: string;
}

export interface StudioProofingFeature {
  id: string;
  title: string;
  subtitle: string;
  code: string;
}