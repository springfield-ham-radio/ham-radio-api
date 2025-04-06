import { Brand, make } from 'ts-brand';

export type LicenseClassId = Brand<string, 'license-class-id'>;
export const LicenseClassId = make<LicenseClassId>();
