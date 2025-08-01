export type StepKey = "personal" | "account" | "preferences";

export interface PersonalInfo {
  fullName: string;
  email: string;
}

export interface AccountSetup {
  username: string;
  password: string;
}

export interface Preferences {
  theme: "light" | "dark";
  subscribe: boolean;
}

export interface OnboardingData {
  personal: PersonalInfo;
  account: AccountSetup;
  preferences: Preferences;
}
