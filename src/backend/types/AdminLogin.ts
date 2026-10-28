export type AccountRoleType = "CLIENT" | "CURATOR_ADMIN";

export interface CuratorLoginInput {
  account: string; // username or email
  password: string; // raw password credential
}

export interface CuratorLoginOutput {
  token: string;
  userId: string; // data-from: AccountUser-id
  username: string; // data-from: AccountUser-username
  email: string; // data-from: AccountUser-email
  fullName: string; // data-from: AccountUser-fullName
  role: AccountRoleType; // data-from: AccountUser-role
}

export interface CuratorLoginState {
  account: string;
  passwordHash: string;
  rememberSession?: boolean;
}

export interface CuratorAuthFeedback {
  type: "idle" | "error" | "validating";
  message?: string;
}