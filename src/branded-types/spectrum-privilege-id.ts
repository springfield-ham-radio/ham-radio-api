import { type Brand, make } from "ts-brand";

export type SpectrumPrivilegeId = Brand<string, "spectrum-privilege-id">;
export const SpectrumPrivilegeId = make<SpectrumPrivilegeId>();
