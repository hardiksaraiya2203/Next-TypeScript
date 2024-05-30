export interface IRegistration {
  firstName?: string;
  lastName?: string;
  isActive?: boolean;
}

export interface IRegistrationF {
  firstName?: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
  pAddress: string;
  term: boolean;
  cAddress: string;
}
